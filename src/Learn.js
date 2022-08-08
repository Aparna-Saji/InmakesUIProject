import React,{Component} from 'react'
import {View,StyleSheet,Image,Text,TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Learn extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../assets/trf.jpg')}
                style={styles.img}></Image>
                <Text style={styles.text1}>Learn as you go</Text>
                <Text style={styles.text2}>Download the Stockpile app and master the market with our mini-leason.</Text>
                <TouchableHighlight style={styles.btn}
                onPress={()=>this.props.navigation.navigate('Kids')} >
                <Icon name="arrow-forward" size={30} color='white' style={styles.icon}/> 
                </TouchableHighlight> 
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'white'
    },
   img:{
    height:500,
        width:300,
        marginLeft:50,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center'
   },
   text1:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    marginTop:10,
    marginLeft:120
   },
   text2:{
    fontSize:18,
    color:'#9ca6a5',
    marginTop:10,
    marginLeft:60,
    marginBottom:30
   },
  
   btn:{
    height:50,
    width:60,
    backgroundColor:'green',
    borderColor:'#9ca6a5',
    borderWidth:2,
    marginLeft:300
   },
   icon:{
    alignItems:'center',
     justifyContent:"center",
      marginLeft:10,
      marginTop:10
   }
})