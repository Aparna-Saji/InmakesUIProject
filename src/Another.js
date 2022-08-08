import React,{Component} from 'react'
import {View,StyleSheet,Image,Text,TouchableHighlight} from 'react-native'

export default class Another extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../assets/trf.jpg')}
                style={styles.img}></Image>
                <Text style={styles.text1}>Another title page</Text>
                <Text style={styles.text2}>Another beautiful body text for this example on boarding.</Text>
                <TouchableHighlight style={styles.btn}
                underlayColor='transparent'
                backgroundColor='white'
                 onPress={()=>this.props.navigation.navigate('BottomTab')}> 
                    <Text style={styles.text3}
                    >Done</Text>
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
        marginTop:50,
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
    marginBottom:20
   },
  
   btn:{
    height:50,
    width:70,
    backgroundColor:'white',
    marginLeft:300
   },
   text3:{
    alignItems:'center',
     justifyContent:"center",
      marginLeft:10,
      marginTop:10,
      fontSize:20,
      fontWeight:'bold',
      color:'black'
   }
})