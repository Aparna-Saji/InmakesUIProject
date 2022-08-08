import React,{Component} from 'react'
import { View,Text } from 'react-native'

export default class Analytics extends Component{
    render(){
        return(
            <View style={{height:'100%',width:'100%',backgroundColor:"#ac95c7"}}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'Black'}}>This is Analytics page</Text>
            </View>
        )
    }       
}