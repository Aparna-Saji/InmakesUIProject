import React,{Component} from 'react'
import {View,StyleSheet,Image,Text,TextInput,TouchableHighlight } from 'react-native'



export default class Register extends Component{

    constructor(){
        super();
        this.state={
            number:null
        }
    }

    passValue(mobileNumber){
        console.log(mobileNumber)
        this.setState({number:mobileNumber})
    }
   

    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../assets/inmakes.webp')}
                style={styles.logo}></Image>
                <View style={styles.container}>
                    <Text style={styles.textdsg}>Enter  Your  Mobile  Number</Text>
                    <Text style={styles.textdes}>We will send you on OTP to verify</Text>
                    <View style={styles.bottom}>
                    <View style={styles.Abc_container}>
                <TextInput style={{width:50,marginLeft:10,marginTop:30,marginBottom:60,borderRadius:10,}}
                placeholder='+91'
                backgroundColor='#b8c1cf'></TextInput>
                <TextInput style={styles.bottomph}
                placeholder='Mobile Number:'
                backgroundColor='#b8c1cf'
                keyboardType={'numeric'}
                maxLength={10}
                onChangeText={(mobileNumber)=>this.passValue(mobileNumber)}></TextInput>

                
            </View>
                        <TouchableHighlight style={styles.bottombtn}
                        underlayColor='white'
                         backgroundColor='#65b568'
                         onPress={()=>this.props.navigation.navigate('OTP',{mobileNumber:this.state.number})}>
                    <Text style={styles.bottomdsg}>Continue</Text>
                </TouchableHighlight>
                    </View>
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
    logo:{
        height:55,
        width:300,
        marginLeft:40,
        marginTop:250,
        alignItems:'center',
        justifyContent:'center'
    },
    textdsg:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        marginTop:100,
        marginLeft:80
    },
    textdes:{
        marginLeft:80,
        marginTop:5,
        fontSize:16,
        fontWeight:'normal',
        color:'#aba89f',
        marginBottom:5
    },
    bottom:{
        height:'30%',
        width:'100%',
        borderTopEndRadius:30,
        borderTopLeftRadius:30,
        backgroundColor:"#132236",
        marginTop:45
    },
    bottomph:{
       height:50,
        width:300,
        borderColor:'blue',
        borderRadius:10,
        marginTop:30,
        textAlign:'center',
        padding:2,
        fontWeight:'bold',
        fontSize:16,
        marginLeft:10,
        marginBottom:60

    },
    Abc_container:{
      
        flexDirection:'row',
        alignItems:'center'
    },
    bottombtn:{
        backgroundColor:'#65b568',
        marginLeft:40,
        height:60,
        width:300,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
        

    },
    bottomdsg:{
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        
    }

})