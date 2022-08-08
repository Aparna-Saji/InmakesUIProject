import React,{Component} from 'react'
import {View,StyleSheet,TouchableHighlight,Text,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// import Videos from './Videos'
// import Chaptertest from './Chaptertest'
// import Resource from './Resource'
// import Bank  from './Bank'

// const TopTab=createMaterialTopTabNavigator()

import { MyTopTab } from '../App'
export default class Chapter extends Component{
    render(){
        return(
            
        <View style={styles.container}>
            <View style={{height:'35%',width:'100%',backgroundColor:'#132236'}}>
            <TouchableHighlight style={styles.container1}
            onPress={()=>this.props.navigation.navigate('Classes')}>
              <Icon name='chevron-left' size={25} color='#4e9968'/>   
            </TouchableHighlight>
            <Text style={styles.text1}>Chapter</Text>
            <Text style={styles.text2}>Long Chapter name can be shown here.</Text>
            <View style={{height:'15%',width:'100%',backgroundColor:'#132236',marginTop:20,flexDirection:'row'}}>
                <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='20'/>
                    <Text style={{fontSize:14,fontWeight:'normal',marginLeft:10,color:'white'}}> Chapter 1</Text>
                
                <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='30'/>
                    <Text style={{fontSize:14,fontWeight:'normal',color:'white',marginLeft:10}}>3 parts</Text>
               
            </View>
            </View>
            <MyTopTab/>
            </View>
            
            )

        }
    }

    const styles=StyleSheet.create({
        container1:{
            height:30,
            width:30,
            borderWidth:2,
            borderColor:'#7d827c',
            marginTop:20,
            marginLeft:20
        },
        container:{
            height:'100%',
            width:'100%',
            backgroundColor:'white'
        },
        text1:{
            fontSize:20,
            fontWeight:'bold',
            color:'white',
            marginLeft:150
        },
        text2:{
            fontSize:24,
            fontWeight:'bold',
            color:'white',
            marginTop:10,
            marginLeft:20
        },
        over:{
            height:600,
            width:'100%',
            backgroundColor:'white',
             marginLeft:5,
             marginRight:20,
            marginTop:20,
            padding:10,
            elevation:10
        },
        containerscroll:{
            height:160,
            width:'95%',
            backgroundColor:'white',
            alignItems:'center',
            justifyContent:'center',
            marginLeft:8,
            elevation:10,
            borderRadius:30,
            marginTop:10,
            paddingRight:10
            
        },
    })


//    function MyTopTab(){
    
//   return(
    
//       <TopTab.Navigator
//       initialRouteName="<Chapter/>"
     
// screenOptions={{
//   //  activeTintColor:'#33405e',
// tabBarLableStyle:{fontSize:12},
// tabBarItemStyle:{width:100},
// tabBarStyle:{BackgroundColor:'red'}
// }}>
// <TopTab.Screen  name='Videos' component={Videos }
// options={{
//   // tabBarLabel:'Videos',
//   tabBarStyle:{flexDirection:'row',width:'80%',borderRadius:15,backgroundColor:'green',justifyContent:'center',alignSelf:'center'},
  
//   tabBarActiveTintColor:'green',
//   tabBarInactiveTintColor:'gray',
// }}></TopTab.Screen>
// <TopTab.Screen  name='Chaptertest' component={Chaptertest}
// options={{
//   tabBarActiveTintColor:'#65b568',
//   tabBarInactiveTintColor:'gray',
// }}></TopTab.Screen>
// <TopTab.Screen  name='Resource' component={Resource}
// options={{
//   tabBarActiveTintColor:'#65b568',
//   tabBarInactiveTintColor:'gray',
// }}></TopTab.Screen>
// <TopTab.Screen  name='Bank' component={Bank}
// options={{
//   tabBarActiveTintColor:'#65b568',
//   tabBarInactiveTintColor:'gray',
// }}></TopTab.Screen>
// </TopTab.Navigator>
//   )

// }
// export {MyTopTab}


 