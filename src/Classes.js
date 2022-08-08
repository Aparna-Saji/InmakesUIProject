import React,{Component} from 'react'
import {View,StyleSheet,TouchableHighlight,Text,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default class Classes extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{height:'35%',width:'100%',backgroundColor:'#132236'}}>
                <TouchableHighlight style={styles.container1}
                onPress={()=>this.props.navigation.navigate('Home')}>
                    <Icon name='chevron-left' size={25} color='#4e9968'/>
                </TouchableHighlight>
                <Text style={styles.text1}>Chapters</Text>
                <View style={{height:'15%',width:'100%',backgroundColor:'#132236',marginTop:20,flexDirection:'row'}}>
                    <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='20'/>
                        <Text style={{fontSize:14,fontWeight:'normal',marginLeft:10,color:'white'}}>12 Chapters</Text>
                    
                    <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='30'/>
                        <Text style={{fontSize:14,fontWeight:'normal',color:'white',marginLeft:10}}>124 hours</Text>
                   
                </View>
                </View>
                <View style={styles.over}>
               <ScrollView style={{height:'100%',width:'100%',backgroundColor:'white'}}>
                <View style={{width:'100%'}}>
                    <View style={styles.containerscroll}>
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <TouchableHighlight style={styles.touch}
                            underlayColor='transparent'
                            onPress={()=>this.props.navigation.navigate('Chapter')}>
                                <Text style={styles.text2}
                                >Long Chapter name can be shown here.</Text>
                            </TouchableHighlight>
                            <View style={{height:'15%',width:'100%',backgroundColor:'white',marginTop:2,flexDirection:'row'}}>
                            <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='25'/>
                            <Text style={{fontSize:14,fontWeight:'normal',marginLeft:10,color:'#7d827c'}}>12 Chapters</Text>
                            <Icon name='radio-button-checked' size={20} color='#4e9968' marginLeft='30'/>
                            <Text style={{fontSize:14,fontWeight:'normal',color:'#7d827c',marginLeft:10}}>124 hours</Text>
                             </View>
                             </View>
                             </View>
                             <View style={styles.containerscroll}>
                             <View style={{alignItems:'center',justifyContent:'center'}}>
                            <TouchableHighlight style={styles.touch}
                             underlayColor='transparent'
                             onPress={()=>this.props.navigation.navigate('Chapter')}>
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

                             <View style={styles.containerscroll}>
                             <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <TouchableHighlight style={styles.touch}
                                     underlayColor='transparent'
                                     onPress={()=>this.props.navigation.navigate('Chapter')}>
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

                              <View style={styles.containerscroll}>
                              <View style={{alignItems:'center',justifyContent:'center'}}>
                            <TouchableHighlight style={styles.touch}
                             underlayColor='transparent'
                             onPress={()=>this.props.navigation.navigate('Chapter')}>
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

                             <View style={styles.containerscroll}>
                             <View style={{alignItems:'center',justifyContent:'center'}}>
                            <TouchableHighlight style={styles.touch} underlayColor='transparent'
                            onPress={()=>this.props.navigation.navigate('Chapter')}>
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

                             <View style={styles.containerscroll}>
                             <View style={{alignItems:'center',justifyContent:'center'}}>
                            <TouchableHighlight style={styles.touch} underlayColor='transparent'
                            onPress={()=>this.props.navigation.navigate('Chapter')}>
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

                             <View style={styles.containerscroll}>
                             <View style={{alignItems:'center',justifyContent:'center'}}>
                            <TouchableHighlight style={styles.touch} underlayColor='transparent'
                            onPress={()=>this.props.navigation.navigate('Chapter')}>
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
                    </View></ScrollView> 
                    </View>
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
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        marginTop:40,
        marginLeft:20
    },
    over:{
        height:600,
        width:'100%',
        backgroundColor:'white',
         marginLeft:10,
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
        borderRadius:50,
        marginTop:10
        
    },touch:{
        height:100,
        width:"95%",
        backgroundColor:'white',
        marginLeft:2,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
        
    },text2:{
        fontSize:22,
        fontWeight:'bold',
        color:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    inner:{
        height:150,
        width:350,
        backgroundColor:"green",
        marginTop:10,
        marginLeft:20
    },

})