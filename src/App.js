import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icon  from 'react-native-vector-icons/MaterialIcons'


import Register from './Register'
import OTP from './OTP'
import Student from './Student'
import School from './School'
import Apptour from './Apptour'
import Learn from './Learn'
import Kids from './Kids'
import Full from './Full'
import Another from './Another'
import Classes from './Classes'
import Chapter from './Top/Chapter'


import DrawerContent from './Drawer/DrawerContent'
import Exam from './Drawer/Exam'
import Subscription from './Drawer/Subscription'
import Analytics from './Drawer/Analytics'
import Download from './Drawer/Download'
import Notification from './Drawer/Notification'
import Referrals from './Drawer/Referrals'
import Share  from './Drawer/Share'
import Logout from './Drawer/Logout'

import House from './Tab/House'
import Recent from './Tab/Recent'
import Exams from './Tab/Exams'
import Profile from './Tab/Profile'
import Contact from './Tab/Contact'


import Videos from './Top/Videos'
import Chaptertest from './Top/Chaptertest'
import Resource from './Top/Resource'
import Bank from './Top/Bank'



const Stack=createStackNavigator()
const Drawer=createDrawerNavigator()
const BottomTab=createBottomTabNavigator()
const TopTab=createMaterialTopTabNavigator()




function MyStack(){
  return( 
  <Stack.Navigator>
    <Stack.Screen name='Register' component={Register}
    options={{headerShown:false}}></Stack.Screen>
    <Stack.Screen name='OTP' component={OTP}
         options={{headerShown:false}}></Stack.Screen>
         <Stack.Screen name='Student' component={Student}
         options={{headerShown:false}}></Stack.Screen>
         <Stack.Screen name='School' component={School} 
         options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name='Apptour' component={Apptour}
         options={{headerShown:false}}></Stack.Screen>
         <Stack.Screen name='Learn' component={Learn}
         options={{headerShown:false}}></Stack.Screen>
         <Stack.Screen name='Kids' component={Kids}
         options={{headerShown:false}}></Stack.Screen>
         <Stack.Screen name='Full' component={Full}
         options={{headerShown:false}}></Stack.Screen>
         <Stack.Screen name='Another' component={Another}
         options={{headerShown:false}}></Stack.Screen> 
          <Stack.Screen name='Home' component={House}
         options={{headerShown:false}}></Stack.Screen> 
         <Stack.Screen name='Classes' component={Classes}
         options={{headerShown:false}}></Stack.Screen> 
         <Stack.Screen name='Chapter' component={Chapter}
         options={{headerShown:false}}></Stack.Screen>  
         <Stack.Screen name='Drawer' component={Mydrawer}
          options={{headerShown:false}}></Stack.Screen> 
        <Stack.Screen name='BottomTab' component={MyBottomTab}
        options={{headerShown:false}} ></Stack.Screen> 
        {/* <Stack.Screen name='TopTab' component={MyTopTab} 
      options={{headerShown:false}}></Stack.Screen>  
       */}
</Stack.Navigator>)
}



function Mydrawer(){
  return(
    <Drawer.Navigator
    drawerContent={(props)=> <DrawerContent {...props}/>}>
      <Drawer.Screen name='Home' component={House} options={{headerShown:false}}></Drawer.Screen>
      <Drawer.Screen name='Exam Corner' component={Exam} options={{headerShown:false}}></Drawer.Screen>
      <Drawer.Screen name='Subscription' component={Subscription} options={{headerShown:false}}></Drawer.Screen>
      <Drawer.Screen name='Analytics' component={Analytics} options={{headerShown:false}}></Drawer.Screen>
      <Drawer.Screen name='Download' component={Download} options={{headerShown:false}}></Drawer.Screen>
      <Drawer.Screen name='Notification' component={Notification} options={{headerShown:false}}></Drawer.Screen>
      <Drawer.Screen name='Referrals' component={Referrals} options={{headerShown:false}}></Drawer.Screen>
      <Drawer.Screen name='Share App' component={Share} options={{headerShown:false}}></Drawer.Screen>
      <Drawer.Screen name='Logout' component={Logout} options={{headerShown:false}}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

function MyBottomTab(){
  return(
      <BottomTab.Navigator
      screenOptions={{
          tabBarLableStyle:{fontSize:12},
          tabBarItemStyle:{width:100},
          tabBarStyle:{BackgroundColor:'white'}
        }}>
          
          <BottomTab.Screen name='Home' component={House}
         
    options={{
      headerShown:false,
       tabBarActiveTintColor:'green',
       tabBarInactiveTintColor:'gray',
      tabBarIcon:(focused)=>
      focused?<Icon name='house' size={24} color='#34eb34' />:<Icon name='house' size={24} color='#616669'/>
    }}/>
    <BottomTab.Screen name='Recent' component={Recent}
    options={{
      headerShown:false,
      tabBarActiveTintColor:'green',
      tabBarInactiveTintColor:'gray',
      tabBarIcon:(focused)=>
      focused?<Icon name='play-arrow' size={24} color='#34eb34'/>:<Icon name='play-arrow' size={24} color='#616669'/>
    }}/>
    <BottomTab.Screen name='Exams' component={Exams}
    options={{
      headerShown:false,
      tabBarActiveTintColor:'green',
      tabBarInactiveTintColor:'gray',
      tabBarIcon:(focused)=>
      focused?<Icon name='article' size={24} color='#34eb34'/>:<Icon name='article' size={24} color='#616669'/>
    }}/>
    <BottomTab.Screen name='Profile' component={Profile}
    options={{
      headerShown:false,
      tabBarActiveTintColor:'green',
      tabBarInactiveTintColor:'gray',
      tabBarIcon:(focused)=>
      focused?<Icon name='person' size={24} color='#34eb34'/>:<Icon name='person' size={24} color='#616669'/>
    }}/>
    <BottomTab.Screen name='Contact' component={Contact}
    options={{
      headerShown:false,
      tabBarActiveTintColor:'green',
      tabBarInactiveTintColor:'gray',
      tabBarIcon:(focused)=>
      focused?<Icon name='mail' size={24} color='#34eb34'/>:<Icon name='mail' size={24} color='#616669'/>
    }}/>
    <BottomTab.Screen name='Classes' component={Classes} 
    options={{
      headerShown:false,
      tabBarVisible:false,
    tabBarButton:()=>null}}/>
    <BottomTab.Screen name='Chapter' component={Chapter} 
    options={{
      headerShown:false,
      tabBarVisible:false,
    tabBarButton:()=>null}}/>
  
        </BottomTab.Navigator>

  )
}

function MyTopTab(){
    
  return(
    
      <TopTab.Navigator     
        screenOptions={{
          tabBarLabelStyle:{fontSize:12},
          tabBarStyle:{BackgroundColor:"#7d827c"},
          tabBarItemStyle:{width:100}

      }}>
<TopTab.Screen  name='Videos' component={Videos}
options={{
  //  tabBarLabel:'Videos',
  // tabBarLableStyle:{flexDirection:'row',width:'100%',backgroundColor:'#7d827c',justifyContent:'center',alignSelf:'center'},
  
  tabBarActiveTintColor:'green',
  tabBarInactiveTintColor:'gray',
}}></TopTab.Screen>
<TopTab.Screen  name='Chapters' component={Chaptertest}
options={{
  tabBarActiveTintColor:'green',
  tabBarInactiveTintColor:'gray',
}}></TopTab.Screen>
<TopTab.Screen  name='Resource' component={Resource}
options={{
  tabBarActiveTintColor:'green',
  tabBarInactiveTintColor:'gray',
}}></TopTab.Screen>
<TopTab.Screen  name='Bank' component={Bank}
options={{
  tabBarActiveTintColor:'green',
  tabBarInactiveTintColor:'gray',
}}></TopTab.Screen>
</TopTab.Navigator>
  )

}
export {MyTopTab}






export default function App(){
    return(<>
      

        <NavigationContainer>
          <MyStack/>
         </NavigationContainer></>
    )
}
