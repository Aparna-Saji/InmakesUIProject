import  React,{Component} from 'react'
import{View,Text,Image,StyleSheet,TouchableHighlight} from 'react-native'
import { color } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default class DraweContent  extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Icon name='disabled-by-default' size={30} color='green' 
                style={{marginTop:40,marginLeft:20}}
                onPress={()=>this.props.navigation.navigate('BottomTab')}/>
                <View style={styles.profilecontainer}>
                   
                    <View style={styles.profileicon}>
                        <Image style={styles.profilimage} source={require('../../../assets/person.jpg')}></Image> 
                    </View>

                    <View style={styles.infoview}>
                        <Text style={styles.profiletext}>Aaron Taylor</Text>
                        <Text style={styles.profilemail}>ID:1234</Text>
                    </View>
                
                
                </View>
                
               
                    <Text style={styles.menu}
                   onPress={()=>this.props.navigation.navigate('Exam Corner')}>
                     <Icon name='check-box-outline-blank' size={25} color='green'/>   Exam Corner</Text>
            
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Subscription')}>
                     <Icon name='check-box-outline-blank' size={25} color='green'/>  Subscription</Text>
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Analytics')}>
                     <Icon name='check-box-outline-blank' size={25} color='green'/>  Analytics</Text>
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Download')}>
                     <Icon name='check-box-outline-blank' size={25} color='green'/>  Download</Text>
                 <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Notification')}>
                     <Icon name='check-box-outline-blank' size={25} color='green'/>  Notification</Text>
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Referrals')}>
                     <Icon name='check-box-outline-blank' size={25} color='green'/>  Referrals</Text>
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Share App')}>
                     <Icon name='check-box-outline-blank' size={25} color='green'/> Share App</Text>
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Logout')}>
                     <Icon name='check-box-outline-blank' size={25} color='green'/> Logout</Text>

                     
                        <TouchableHighlight style={{ backgroundColor:'transparent',
        marginLeft:50,
        height:40,
        width:150,
        marginTop:30,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'green',
        borderWidth:1}}>
                            <Text style={{fontSize:18,fontWeight:'bold', color:"green"}}>Enquire Now</Text>
                        </TouchableHighlight>
                    
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#06152e',
        
    },
    menu:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:15,
        marginLeft:20,
        color:'white',
        borderBottomWidth:1,
        borderBottomColor:'white',
        paddingRight:10,
        paddingLeft:10
    },
    profilecontainer:{
        height:'25%',
        width:'100%',
        backgroundColor:'#06152e',
        flexDirection:'row',
        alignItems:'center',
    },
    profileicon:{
        height:100,
        width:100,
        backgroundColor:'gray',
        borderRadius:50,
        marginTop:10,
        marginLeft:20
    },
    infoview:{
        marginLeft:30
    },
    profilimage:{
        height:100,
        width:100,
        borderRadius:50
    },
    profiletext:{
        fontWeight:'bold',
        color:'white',
        fontSize:18,
        marginBottom:5
    },
    profilemail:{
        fontWeight:'bold',
        fontSize:16,
        color:"#bcc5d4"
    },
    icon:{
        marginTop:50
    }
})