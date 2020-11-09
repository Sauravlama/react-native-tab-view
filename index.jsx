import React, { useState ,useContext} from 'react';
import {View, Text,  Dimensions} from 'react-native';
import Details from './details';
import Propic from './image';
import Topedit from './Topedit';
import Userstyle from './userstyle';
import user from './data'
import Choose from './choose';
import HairandScalpe from './hairnscale';
import Hairthick from './hairthick';
import HairDen from './hairden';
import HairGoal from './Hairgoal';
import {ProductContext} from '../products/productcontext';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import colors from '../config/colors';
import { color } from 'react-native-reanimated';


const initialLayout = { width: Dimensions.get('window').width };

export default function EditProfile()
{
        
    const {name,Bio,loc}= useContext(ProductContext);
    const [tempname,settemp]=useState(name);
    const [tempbio,settempbio]=useState(Bio);
    const [tloc,tsetloc]=useState(loc);
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        {key :'third', title:'Third'}
      ]);
    
    ///The error is in this first component.
    const FirstRoute = () => (
        <View style={{paddingTop:10}}>
                <Propic/>
                <Details tempbio={tempbio} tempname={tempname} tloc={tloc} settemp={settemp} settempbio={settempbio} tsetloc={tsetloc}/>
                </View>
                
      );
    
    const SecondRoute = () => (
        <View style={{paddingTop:10}}>
        <HairandScalpe/>
        <Hairthick/>
        <HairDen/>
    
    
    
    </View>
      );

         
    const ThirdRoute = () => (
        <View style={{paddingTop:10}}>
              <HairGoal/>
        </View>
      );

      const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute
      });

      const renderTabBar = props => (
        <TabBar
            {...props}
            style={{backgroundColor:"white"}}
            labelStyle={{fontFamily:"Open-Sans-Bold"}}
            indicatorStyle={{backgroundColor:colors.blue}}
            activeColor={colors.blue}
            inactiveColor={colors.coolblack}
        />
    );
    
    return (
        <>
        <View style={Userstyle.editcon}>
            <Topedit tempbio={tempbio} tempname={tempname} tloc={tloc}/>
            <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}

    />
          </View>
        </>
    )
}
