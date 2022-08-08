import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Register from './src/register'
import Login from './src/login'
import Home from './src/Drawer/Home'
import Profile from './src/Drawer/Profile'
import DrawerContent from './src/Drawer/DrawerContent'
import Aboutus from './src/Drawer/About us'
import Setting from './src/Drawer/Setting'
import Cart from './src/Tab/Cart'
import Search from './src/Tab/Search'
import Order from './src/Tab/Order'
import Category from './src/Tab/Category'
import Call from './src/Bottamtab/Call'
import Chat from './src/Bottamtab/Chat'
import Status from './src/Bottamtab/Status'


const Stack= createStackNavigator()
const Drawer=createDrawerNavigator()
const Tab=createMaterialTopTabNavigator()
const BottamTab=createBottomTabNavigator()

function Mystack(){
  return(
    <Stack.Navigator>

      <Stack.Screen name='Register' component={Register}></Stack.Screen>
 
      <Stack.Screen name='Login' component={Login}></Stack.Screen>
      <Stack.Screen name='Drawer' component={Mydrawer} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name='Tab' component={MyTab} options={{headerShown:false}}></Stack.Screen>
     <Stack.Screen name='BottamTab' component={MyBottamTab} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
} 

function Mydrawer(){
  return(
    <Drawer.Navigator
    drawerContent={(props)=> <DrawerContent {...props}/>}>
      <Drawer.Screen name='home' component={Home}></Drawer.Screen>
      <Drawer.Screen name='profile' component={Profile}></Drawer.Screen>
      <Drawer.Screen name='aboutus' component={Aboutus}></Drawer.Screen>
      <Drawer.Screen name='settings' component={Setting}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

function MyTab(){
  return(
    <Tab.Navigator
          screenOptions={{
            tabBarLableStyle:{fontSize:12},
            tabBarItemStyle:{width:100},
            tabBarStyle:{BackgroundColor:'#fff'}
          }}>
      <Tab.Screen name='Life Cycle' component={Cart}
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:(focused)=>
        focused?<Icon name="shopping-cart" size={24} color='blue'/>:<Icon name="shopping-cart" size={24} color='gray'/>
      }}/>
      <Tab.Screen name='order' component={Order}
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:(focused)=>
        focused?<Icon name='shopping-bag' size={24 } color='blue'/>:<Icon name='shopping-bag' size={24 } color='blue'/>


      }}/>
      <Tab.Screen name='category' component={Category}
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:(focused)=>
        focused?<Icon name='category' size={24 } color='blue'/>:<Icon name='category' size={24 } color='blue'/>


      }}/>
      <Tab.Screen name='search' component={Search}
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:(focused)=>
        focused?<Icon name='search' size={24 } color='blue'/>:<Icon name='search' size={24 } color='blue'/>


      }}/>
    </Tab.Navigator>
  )
}

function MyBottamTab(){
  return(
    <BottamTab.Navigator
    screenOptions={{
      tabBarLableStyle:{fontSize:12},
      tabBarItemStyle:{width:100},
      tabBarStyle:{BackgroundColor:'#fff'}
    }}>
      <BottamTab.Screen name='call' component={Call}
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:(focused)=>
        focused?<Icon name='call' size={24} color='blue'/>:<Icon name='call' size={24} color='gray'/>
      }}/>
      <BottamTab.Screen name='chat' component={Chat}
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:(focused)=>
        focused?<Icon name='chat' size={24} color='blue'/>:<Icon name='chat' size={24} color='gray'/>
      }}/>
      <BottamTab.Screen name='status' component={Status}
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:(focused)=>
        focused?<Icon name='timelapse' size={24} color='blue'/>:<Icon name='timelapse' size={24} color='gray'/>
      }}/>
    </BottamTab.Navigator>
  )
}


export default function App(){

  return(
    <NavigationContainer>
      <Mystack></Mystack>
    </NavigationContainer>
  )
}
