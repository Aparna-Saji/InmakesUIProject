import React,{Component} from 'react'
import { View,StyleSheet,Text,Image,TextInput,TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class OTP extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../assets/inmakes.webp')}
                style={styles.logo}></Image>
                <Image source={require('../../assets/icon.jpg')}
                style={styles.icon}></Image>
                 <View style={styles.container}>
                    <Text style={styles.textdsg}>Verification code</Text>
                    <Text style={styles.textdes}>Please type the verification code sent to</Text>

                    <Text style={styles.textdesg}>{this.props.route.params.mobileNumber}</Text> 
                    
                    <View style={styles.bottomcontainer}>
                        <View style={styles.otpcontainer}>
                <TextInput style={{width:50,marginLeft:30,borderRadius:10}} backgroundColor='#b8c1cf' maxLength={1} keyboardType={'numeric'}></TextInput>
                <TextInput style={{width:50,marginLeft:5,borderRadius:10}} backgroundColor='#b8c1cf'  maxLength={1} keyboardType={'numeric'}></TextInput>
                <TextInput style={{width:50,marginLeft:5,borderRadius:10}} backgroundColor='#b8c1cf'  maxLength={1} keyboardType={'numeric'}></TextInput>
                <TextInput style={{width:50,marginLeft:5,borderRadius:10}} backgroundColor='#b8c1cf'  maxLength={1} keyboardType={'numeric'}></TextInput>
                <TextInput style={{width:50,marginLeft:5,borderRadius:10}} backgroundColor='#b8c1cf'  maxLength={1} keyboardType={'numeric'}></TextInput>
                <TextInput style={{width:50,marginLeft:5,borderRadius:10}} backgroundColor='#b8c1cf'  maxLength={1} keyboardType={'numeric'}></TextInput>
                     </View>
                     <TouchableHighlight style={styles.bottombtn}
                        underlayColor='white'
                         backgroundColor='#65b568'
                         onPress={()=>this.props.navigation.navigate('Student')}>
                    <Text style={styles.bottomdsg}>Resend OTP</Text>
                </TouchableHighlight>
                <Text style={styles.textotp}>Resend after 28s</Text>
                <View style={styles.icondsg}>
                    <Icon name='call' size={24} color='#65b568'/>
                    <Text style={styles.contact}>Contact us</Text>
                </View>
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
    icon:{
        height:310,
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
    textdsg:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        marginLeft:150
    },
    textdes:{
        marginLeft:70,
        
        fontSize:16,
        fontWeight:'normal',
        color:'#aba89f',
        marginBottom:5
    },
    bottomcontainer:{
        
        height:'50%',
        width:'100%',
        borderTopEndRadius:30,
        borderTopLeftRadius:30,
        backgroundColor:"#132236",
        marginTop:30
    },
    otpcontainer:{
        flexDirection:'row',
        marginTop:10
    },
    textdesg:{
        marginLeft:170,
        fontSize:16,
        fontWeight:'normal',
        color:'#aba89f',
    },
    bottombtn:{
        backgroundColor:'#65b568',
        marginLeft:40,
        height:60,
        width:300,
        marginTop:20,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
        

    },
    bottomdsg:{
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        
    },
    textotp:{
        marginLeft:140,
        fontSize:16,
        fontWeight:'normal',
        color:'#aba89f',
    },
    icondsg:{
        flexDirection:'row',
        alignItems:"center",
        marginTop:40,
        marginLeft:150
    },
    contact:{
        fontSize:18,
        fontWeight:'bold',
        color:'#65b568',
    
    }
})