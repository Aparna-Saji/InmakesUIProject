import React,{Component} from 'react'
import { View,Text,StyleSheet,ScrollView,TouchableHighlight,Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Videos extends Component {
    render() {
      return (
        
        <View style={{height:'100%',width:'100%',backgroundColor:'#98afd4'}}>
            <View style={styles.over}>
               <ScrollView style={{height:'100%',width:'100%',backgroundColor:'white'}}>
                <View style={{width:'100%'}}>
                    <View style={styles.containerscroll}>
                      <Image style={styles.imagedsg} source={require('../../../assets/class.jpg')}/>
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
                      <Image style={styles.imagedsg} source={require('../../../assets/class.jpg')}/>
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
                      <Image style={styles.imagedsg} source={require('../../../assets/class.jpg')}/>
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
                      <Image style={styles.imagedsg} source={require('../../../assets/class.jpg')}/>
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
                      <Image style={styles.imagedsg} source={require('../../../assets/class.jpg')}/>
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
                      <Image style={styles.imagedsg} source={require('../../../assets/class.jpg')}/>
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
                    </View>
                    </ScrollView>
            </View>
        </View>
       
        
  
     
      )
  }}
  const styles=StyleSheet.create({
    over:{
      height:'100%',
      width:'100%',
      backgroundColor:'white',
       marginLeft:5,
       marginRight:20,
      marginTop:20,
      padding:10,
      elevation:10
  },
  containerscroll:{
      height:200,
      width:'95%',
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'center',
      marginLeft:8,
      elevation:10,
      marginTop:10,
      paddingRight:10
      
  },
  touch:{
        height:50,
        width:"95%",
        backgroundColor:'white',
        marginLeft:2,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
        
    },
    text2:{
      fontSize:18,
      color:'black',
      alignItems:'center',
      justifyContent:'center'
  },
  imagedsg:{
    height:120,
    width:'95%',
    marginTop:10
  }
  })
  