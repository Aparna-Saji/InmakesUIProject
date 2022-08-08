import React,{Component} from 'react'

import { View,StyleSheet,Text,Image,TextInput,TouchableHighlight } from 'react-native'
import App from './Input'



export default class Student extends Component{

    

    render(){
       return(
            <View style={styles.container}>
                <Image source={require('../../assets/inmakes.webp')}
                style={styles.logo}></Image>
                <Image source={require('../../assets/icon.jpg')}
                style={styles.icon}></Image>
                <Text style={styles.text1}>Student Details</Text>
                <View style={styles.bottomcontainer}>

                   
                     <TextInput style={styles.text2}
                    placeholder='Full name'></TextInput>

                    <TextInput style={styles.text2}
                    placeholder='Email'></TextInput>

                    {/* <Design/> */}
                      <App/>
                    
                   
                   
                    <TextInput style={styles.text2}
                    placeholder='Pin code'></TextInput>


                <TouchableHighlight style={styles.bottombtn}
                        underlayColor='white'
                         backgroundColor='#65b568'
                         onPress={()=>this.props.navigation.navigate('School')}>
                    <Text style={styles.bottomdsg}>Register</Text>
                </TouchableHighlight>


                </View>
                 
                    
                    
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
    icon:{
        height:220,
        width:350,
        marginLeft:40,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        height:54,
        width:300,
        marginLeft:50,
        marginTop:50,
        alignItems:'center',
        justifyContent:'center'
    },
    text1:{
        fontSize:22,
        fontWeight:"bold",
        color:'black',
        marginLeft:130
    },
    text2:{
        width:300,
        marginLeft:50,
        borderRadius:10,
        backgroundColor:'#b8c1cf',
        borderWidth:2,
        marginTop:20,
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
        borderColor:'#65b568',
        borderWidth:2
        
    },
    

    
    bottomcontainer:{
        
        height:'90%',
        width:'100%',
        borderTopEndRadius:30,
        borderTopLeftRadius:30,
        backgroundColor:"#132236",
        marginTop:10
    },
    bottombtn:{
        backgroundColor:'#65b568',
        marginLeft:50,
        height:40,
        width:300,
        marginTop:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
        

    },
    bottomdsg:{
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        
    },
    })