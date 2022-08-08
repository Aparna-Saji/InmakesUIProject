import React,{Component} from 'react'
import{View,StyleSheet,ScrollView,TouchableHighlight,Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Test extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.over}>
               <ScrollView style={{height:'100%',width:'100%',backgroundColor:'white'}}>
                <View style={{width:'100%'}}>
                    <View style={styles.containerscroll}>
                            <TouchableHighlight style={styles.touch}>
                                <Text style={styles.text2}>Long Chapter name can be shown here.</Text>
                            </TouchableHighlight>
                            <View style={{height:'15%',width:'100%',backgroundColor:'white',marginTop:2,flexDirection:'row'}}>
                            <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='25'/>
                            <Text style={{fontSize:14,fontWeight:'normal',marginLeft:10,color:'#7d827c'}}>12 Chapters</Text>
                            <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='30'/>
                            <Text style={{fontSize:14,fontWeight:'normal',color:'#7d827c',marginLeft:10}}>124 hours</Text>
                             </View>
                             </View>

                             <View style={styles.containerscroll}>
                            <TouchableHighlight style={styles.touch}>
                                <Text style={styles.text2}>Long Chapter name can be shown here.</Text>
                            </TouchableHighlight>
                            <View style={{height:'15%',width:'100%',backgroundColor:'white',marginTop:2,flexDirection:'row'}}>
                            <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='25'/>
                            <Text style={{fontSize:14,fontWeight:'normal',marginLeft:10,color:'#7d827c'}}>12 Chapters</Text>
                            <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='30'/>
                            <Text style={{fontSize:14,fontWeight:'normal',color:'#7d827c',marginLeft:10}}>124 hours</Text>
                             </View>
                             </View>

                             <View style={styles.containerscroll}>
                            <TouchableHighlight style={styles.touch}>
                                <Text style={styles.text2}>Long Chapter name can be shown here.</Text>
                            </TouchableHighlight>
                            <View style={{height:'15%',width:'100%',backgroundColor:'white',marginTop:2,flexDirection:'row'}}>
                            <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='25'/>
                            <Text style={{fontSize:14,fontWeight:'normal',marginLeft:10,color:'#7d827c'}}>12 Chapters</Text>
                            <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='30'/>
                            <Text style={{fontSize:14,fontWeight:'normal',color:'#7d827c',marginLeft:10}}>124 hours</Text>
                             </View>
                             </View>

                              <View style={styles.containerscroll}>
                            <TouchableHighlight style={styles.touch}>
                                <Text style={styles.text2}>Long Chapter name can be shown here.</Text>
                            </TouchableHighlight>
                            <View style={{height:'15%',width:'100%',backgroundColor:'white',marginTop:2,flexDirection:'row'}}>
                            <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='25'/>
                            <Text style={{fontSize:14,fontWeight:'normal',marginLeft:10,color:'#7d827c'}}>12 Chapters</Text>
                            <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='30'/>
                            <Text style={{fontSize:14,fontWeight:'normal',color:'#7d827c',marginLeft:10}}>124 hours</Text>
                             </View>
                             </View>

                             <View style={styles.containerscroll}>
                            <TouchableHighlight style={styles.touch}>
                                <Text style={styles.text2}>Long Chapter name can be shown here.</Text>
                            </TouchableHighlight>
                            <View style={{height:'15%',width:'100%',backgroundColor:'white',marginTop:2,flexDirection:'row'}}>
                            <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='25'/>
                            <Text style={{fontSize:14,fontWeight:'normal',marginLeft:10,color:'#7d827c'}}>12 Chapters</Text>
                            <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='30'/>
                            <Text style={{fontSize:14,fontWeight:'normal',color:'#7d827c',marginLeft:10}}>124 hours</Text>
                             </View>
                             </View>
                    </View></ScrollView> 
                    </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'red'
    },
    scrollchild:{
        width:'100%'
    },
    inner:{
        height:150,
        width:350,
        backgroundColor:"green",
        marginTop:10,
        marginLeft:20
    },
    containerscroll:{
        height:160,
        width:'100%',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:8,
        elevation:10,
        borderRadius:50,
        marginTop:10
        
    },touch:{
        height:100,
        width:"95%",
        backgroundColor:'white',
        marginLeft:2,
        alignItems:'center',
        justifyContent:'center',
        
    },text2:{
        fontSize:16,
        fontWeight:'bold',
        color:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    

})








{/* <View style={styles.over}>
<ScrollView style={{height:'100%',width:'100%',backgroundColor:'white'}}>
 <View style={{width:'100%'}}>
     <View style={styles.containerscroll}>
             <TouchableHighlight style={styles.touch}>
                 <Text style={styles.text2}>Long Chapter name can be shown here.</Text>
             </TouchableHighlight>
             <View style={{height:'15%',width:'100%',backgroundColor:'white',marginTop:2,flexDirection:'row'}}>
             <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='25'/>
             <Text style={{fontSize:14,fontWeight:'normal',marginLeft:10,color:'#7d827c'}}>12 Chapters</Text>
             <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='30'/>
             <Text style={{fontSize:14,fontWeight:'normal',color:'#7d827c',marginLeft:10}}>124 hours</Text>
              </View>
              </View>

              
     </View></ScrollView> 
     </View> */}
