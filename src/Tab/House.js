import React,{Component} from 'react'
import {View,StyleSheet,Image,Text,TouchableHighlight,ScrollView,} from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import {Section} from '../Input'


export default class Home extends Component{
    render(){
       
        return(
        <View style={styles.maincontainer}>
            <View style={styles.container1}>
                        <TouchableHighlight style={{height:35,width:35,backgroundColor:'white',
                        marginLeft:20,marginTop:20,borderColor:'green',borderWidth:3}}
                        onPress={()=>this.props.navigation.navigate('Drawer')}>
                        
                        <Icon name="grid-view" size={30} color='green'/>
                        </TouchableHighlight>
                
                        <Image source={require('../../../assets/inmakes.webp')}
                        style={styles.logo}></Image>
                
                        <TouchableHighlight style={{height:45,width:85,backgroundColor:'white',
                        marginLeft:3,marginTop:50,borderColor:'green',borderWidth:3,borderRadius:5,alignItems:"center",justifyContent:'center'}}>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'green'}}>
                        <Icon name='circle' size={16} color='green'/>Classes</Text>
                        </TouchableHighlight>
                        </View>
            <View style={styles.container}>
            <ScrollView style={{height:'100%',width:'100%'}}>
                <View style={{wdith:'100%'}}>
                        <View style={styles.head}>
                    <View style={styles.headercontainer}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'black',marginLeft:30,marginBottom:2}}>Good Morning</Text>
                        <Text style={{fontSize:26,fontWeight:'bold',color:'black',marginLeft:30,marginBottom:5}}>Aaron Taylor</Text>
                         <View style={styles.header_in_container}>
                            <Text style={{fontSize:16,fontWeight:'normal',color:'white',marginLeft:15,marginTop:10}}>Class</Text>
                            <Section/>
                             </View>
                     </View>
                    </View>
                    <View style={styles.clscontainer}>
                    <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        
                        <TouchableHighlight style={{height:55,width:100,backgroundColor:'white',
                         marginLeft:3,marginTop:15,borderColor:'#697180',borderWidth:3,borderRadius:10,
                         alignItems:"center",justifyContent:'center'}}
                         underlayColor='transparent'
                        onPress={()=>this.props.navigation.navigate('Classes')}>  
                         <Text style={{fontSize:16,fontWeight:'bold',color:'black',}}>
                          <Icon name='circle' size={16} color='green' /> Biology</Text>
                         </TouchableHighlight>

                         <TouchableHighlight style={{height:55,width:100,backgroundColor:'white',
                         marginLeft:3,marginTop:15,borderColor:'#697180',borderWidth:3,borderRadius:10,
                         alignItems:"center",justifyContent:'center'}}
                         underlayColor='transparent'
                        onPress={()=>this.props.navigation.navigate('Classes')}>  
                         <Text style={{fontSize:16,fontWeight:'bold',color:'black',}}>
                          <Icon name='circle' size={16} color='green' /> Physics</Text>
                         </TouchableHighlight>

                         <TouchableHighlight style={{height:55,width:130,backgroundColor:'white',
                         marginLeft:3,marginTop:15,borderColor:'#697180',borderWidth:3,borderRadius:10,
                         alignItems:"center",justifyContent:'center'}}
                         underlayColor='transparent'
                        onPress={()=>this.props.navigation.navigate('Classes')}>  
                         <Text style={{fontSize:16,fontWeight:'bold',color:'black',}}>
                          <Icon name='circle' size={16} color='green' /> Chemistry</Text>
                         </TouchableHighlight>

                         <TouchableHighlight style={{height:55,width:100,backgroundColor:'white',
                         marginLeft:3,marginTop:15,borderColor:'#697180',borderWidth:3,borderRadius:10,
                         alignItems:"center",justifyContent:'center'}}
                         underlayColor='transparent'
                        onPress={()=>this.props.navigation.navigate('Classes')}>  
                         <Text style={{fontSize:16,fontWeight:'bold',color:'black',}}>
                          <Icon name='circle' size={16} color='green' /> Maths</Text>
                         </TouchableHighlight>

                         <TouchableHighlight style={{height:55,width:100,backgroundColor:'white',
                         marginLeft:3,marginTop:15,borderColor:'#697180',borderWidth:3,borderRadius:10,
                         alignItems:"center",justifyContent:'center'}}
                         underlayColor='transparent'
                        onPress={()=>this.props.navigation.navigate('Classes')}>  
                         <Text style={{fontSize:16,fontWeight:'bold',color:'black',}}>
                          <Icon name='circle' size={16} color='green' /> English</Text>
                         </TouchableHighlight>

                         <TouchableHighlight style={{height:55,width:100,backgroundColor:'white',
                         marginLeft:3,marginTop:15,borderColor:'#697180',borderWidth:3,borderRadius:10,
                         alignItems:"center",justifyContent:'center'}}
                         underlayColor='transparent'
                        onPress={()=>this.props.navigation.navigate('Classes')}>  
                         <Text style={{fontSize:16,fontWeight:'bold',color:'black',}}>
                          <Icon name='circle' size={16} color='green' />Hindi</Text>
                         </TouchableHighlight>
                        

                         
            
                    </ScrollView>
                        </View>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'black',marginLeft:20}}>Recent Courses</Text>
                        <View style={styles.recent}>
                        <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <TouchableHighlight style={styles.touch}>
                        <Image source={require('../../../assets/courses.png')} style={styles.img_recent}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touch}>
                        <Image source={require('../../../assets/courses.png')} style={styles.img_recent}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touch}>
                        <Image source={require('../../../assets/courses.png')} style={styles.img_recent}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touch}>
                        <Image source={require('../../../assets/courses.png')} style={styles.img_recent}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touch}>
                        <Image source={require('../../../assets/courses.png')} style={styles.img_recent}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touch}>
                        <Image source={require('../../../assets/courses.png')} style={styles.img_recent}/>
                        </TouchableHighlight>
                        
                    </ScrollView>
                        </View>
                        <View style={styles.footer}>
                        <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                            <View style={styles.footer_in}>
                                <Image source={require('../../../assets/icons.png')} style={{height:80,width:80,borderRadius:40}} /> 
                                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Inmakes Live Class</Text>
                                <Text style={{fontSize:16,color:'white',padding:10}}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention.</Text>
                                <TouchableHighlight style={{height:55,width:150,backgroundColor:'#65b568',
                         marginLeft:3,marginTop:15,borderRadius:10,alignItems:"center",justifyContent:'center'}}>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'white',}}>Book a free Class</Text>
                         </TouchableHighlight>
                            </View>
                            <View style={styles.footer_in}>
                                <Image source={require('../../../assets/icons.png')} style={{height:80,width:80,borderRadius:40}} /> 
                                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Inmakes Live Class</Text>
                                <Text style={{fontSize:16,color:'white',padding:10}}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention.</Text>
                                <TouchableHighlight style={{height:55,width:150,backgroundColor:'#65b568',
                         marginLeft:3,marginTop:15,borderRadius:10,alignItems:"center",justifyContent:'center'}}>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'white',}}>Book a free Class</Text>
                         </TouchableHighlight>
                            </View>
                            <View style={styles.footer_in}>
                                <Image source={require('../../../assets/icons.png')} style={{height:80,width:80,borderRadius:40}} /> 
                                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Inmakes Live Class</Text>
                                <Text style={{fontSize:16,color:'white',padding:10}}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention.</Text>
                                <TouchableHighlight style={{height:55,width:150,backgroundColor:'#65b568',
                         marginLeft:3,marginTop:15,borderRadius:10,alignItems:"center",justifyContent:'center'}}>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'white',}}>Book a free Class</Text>
                         </TouchableHighlight>
                            </View>
                            <View style={styles.footer_in}>
                                <Image source={require('../../../assets/icons.png')} style={{height:80,width:80,borderRadius:40}} /> 
                                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Inmakes Live Class</Text>
                                <Text style={{fontSize:16,color:'white',padding:10}}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention.</Text>
                                <TouchableHighlight style={{height:55,width:150,backgroundColor:'#65b568',
                         marginLeft:3,marginTop:15,borderRadius:10,alignItems:"center",justifyContent:'center'}}>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'white',}}>Book a free Class</Text>
                         </TouchableHighlight>
                            </View>
                            <View style={styles.footer_in}>
                                <Image source={require('../../../assets/icons.png')} style={{height:80,width:80,borderRadius:40}} /> 
                                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Inmakes Live Class</Text>
                                <Text style={{fontSize:16,color:'white',padding:10}}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention.</Text>
                                <TouchableHighlight style={{height:55,width:150,backgroundColor:'#65b568',
                         marginLeft:3,marginTop:15,borderRadius:10,alignItems:"center",justifyContent:'center'}}>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'white',}}>Book a free Class</Text>
                         </TouchableHighlight>
                            </View>
                            <View style={styles.footer_in}>
                                <Image source={require('../../../assets/icons.png')} style={{height:80,width:80,borderRadius:40}} /> 
                                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Inmakes Live Class</Text>
                                <Text style={{fontSize:16,color:'white',padding:10}}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention.</Text>
                                <TouchableHighlight style={{height:55,width:150,backgroundColor:'#65b568',
                         marginLeft:3,marginTop:15,borderRadius:10,alignItems:"center",justifyContent:'center'}}>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'white',}}>Book a free Class</Text>
                         </TouchableHighlight>
                            </View>
                            </ScrollView>
                        </View>
                
                    </View>

            
            </ScrollView>
            </View>
            <View style={{height:"10%",width:"50%",backgroundColor:"green"}}></View>
          </View> 
    
           
            
)
}
}


const styles=StyleSheet.create({
    maincontainer:
    {
    height:"100%",
    width:"100%",
    backgroundColor:'white',
    padding:10
    
},
container:{
    height:"100%",
    width:"100%",
    backgroundColor:'white',
},
container1:{
    flexDirection:'row',
    height:"15%",
    width:"100%",
    backgroundColor:'white',
    marginBottom:2,
    borderBottomWidth:1,
    borderBottomColor:'#e0ded7',
    marginBottom:5
},
logo:{
    height:64,
    width:200,
    marginLeft:5,
    marginTop:20,
    alignItems:'center',
    justifyContent:'center'
},
head:{
        height:180,
        width:"100%",
        backgroundColor:'white',
        },
   
    headercontainer:{
        height:170,
        width:'100%',
        backgroundColor:'white'
    },
    header_in_container:{
        height:100,
        width:"90%",
        backgroundColor:'#132236',
        marginLeft:25,
        borderRadius:10,
        marginBottom:10,
        
    },
    clscontainer:{
        height:80,
        width:"100%",
        backgroundColor:"white",
        marginBottom:10
    },
    recent:{
        height:150,
        width:"100%",
        backgroundColor:"white",
        marginTop:5
    },
    img_recent:{
        height:130,
        width:200,
        borderRadius:20,
        marginTop:2,
        marginLeft:5
    },
    touch:{
        height:140,
        width:210,
        borderRadius:20,
        marginTop:10,
        marginLeft:5
    },
    footer:{
        height:500,
        width:"100%",
        backgroundColor:"white",
        marginTop:5
    },
    footer_in:{
        height:400,
        width:250,
        backgroundColor:'#132236',
        marginTop:10,
        marginLeft:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    profileicon:{
        height:100,
        width:100,
        backgroundColor:'gray',
        borderRadius:50,
        marginTop:10,
        marginLeft:20
    },

})