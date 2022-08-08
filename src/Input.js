import React,{useState} from 'react'
import { StyleSheet,View} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { Colors } from 'react-native/Libraries/NewAppScreen'



function App(){
                    
  const [pickerValue,setPickerValue]=useState('Select state')
    return(
    <Picker dropdownIconColor='white'  style={{
      width:"88%",
      height:30,
      marginLeft:55,
      borderRadius:"50%",
      Color:'#b8c1cf',
      borderWidth:2,
      marginTop:20,
      alignItems:"center",
      justifyContent:"center",
      fontSize:18,
      fontWeight:'bold',
      padding:10
    }
    }
   selectedValue={pickerValue}
   onValueChange={(itemValue)=>setPickerValue(itemValue)}>
    <Picker.Item label="Select state" value={"Select state"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:10,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
    <Picker.Item label="one" value={"One"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:10,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
    <Picker.Item label="Two" value={"Two"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:10,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
    <Picker.Item label="Three" value={"Three"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:10,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
    <Picker.Item label="Four" value={"Four"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:20,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
   </Picker>
)}



function Board()
{
  const [pickerValue,setPickerValue]=useState('Select board')
    return(
    <Picker dropdownIconColor='white' style={{
      width:"88%",
      height:30,
      marginLeft:55,
      borderRadius:"50%",
      Color:'#b8c1cf',
      borderWidth:2,
      marginTop:20,
      alignItems:"center",
      justifyContent:"center",
      fontSize:18,
      fontWeight:'bold',
      padding:10,
      marginHorizontal:10
    }
    }
   selectedValue={pickerValue}
   onValueChange={(itemValue)=>setPickerValue(itemValue)}>
    <Picker.Item label="Select board" value={"Select board"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:10,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
    <Picker.Item label="CBSE" value={"CBSE"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:10,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
    <Picker.Item label="State" value={"State"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:10,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
    <Picker.Item label="ICSE" value={"ICSE"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:10,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
    
   </Picker>
)}


function Standerd(){
                    
  const [pickerValue,setPickerValue]=useState('Select class')
    return(
    <Picker dropdownIconColor='white' style={{
      width:"88%",
      height:30,
      marginLeft:55,
      borderRadius:"50%",
      Color:'#b8c1cf',
      borderWidth:2,
      marginTop:20,
      alignItems:"center",
      justifyContent:"center",
      fontSize:18,
      fontWeight:'bold',
      padding:10
    }
    }
   selectedValue={pickerValue}
   onValueChange={(itemValue)=>setPickerValue(itemValue)}>
    <Picker.Item label="Select class" value={"Select class"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:10,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
    <Picker.Item label="one" value={"One"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:10,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
    <Picker.Item label="Two" value={"Two"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:10,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
    <Picker.Item label="Three" value={"Three"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:10,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
    <Picker.Item label="Four" value={"Four"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:20,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
   </Picker>
)}

function Design(){
  const [focus,setFocus]=useState(false)
        const customStyle=focus?styles.textInputFocus:styles.textInput
       return(
        
                <TextInput 
                    value={inputA}
                    mode='outlined'
                    label={'Label'}
                    onFocus={()=>setFocus(true)}
                    style={customStyle}
                    placeholder={state[0]}
                    render={props=>(
                        <TextInputMask
                        {...props}
                        onChangeText={(formatted,extracted)=>{setinputA(extracted)
                        }}
                        mask='[00] [000] [000] [0000]'
                        />
                    )}></TextInput> 
                    )
          }
styles=StyleSheet.create({
  textInput:{
  backgroundColor:Colors.white,
  borderColor:'#2A2E42'
},
textInputFocus:{
  backgroundColor:Colors.secondary,
  borderColor:"#C0C499"
}

  
  
})
                

function Section(){
                    
  const [pickerValue,setPickerValue]=useState('Select Class')
    return(
    <Picker dropdownIconColor='white' style={{
      width:"88%",
      height:10,
      marginLeft:25,
      borderRadius:"50%",
      Color:'transparent',
      borderWidth:2,
      marginTop:1,
      alignItems:"center",
      justifyContent:"center",
      fontSize:18,
      fontWeight:'bold',
    
    }
    }
   selectedValue={pickerValue}
   onValueChange={(itemValue)=>setPickerValue(itemValue)}>
    <Picker.Item label="Select class" value={"Select class"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:10,backgroundColor:'#132236',color:'white',fontSize:16,fontWeight:'center'}}/>
    <Picker.Item label="one" value={"One"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:10,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
    <Picker.Item label="Two" value={"Two"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:10,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
    <Picker.Item label="Three" value={"Three"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:10,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
    <Picker.Item label="Four" value={"Four"} style={{height:20,width:20,marginLeft:160,borderWidth:2,
    marginTop:20,
    borderRadius:20,backgroundColor:'#b8c1cf',color:'black',fontSize:16,fontWeight:'center'}}/>
   </Picker>
)}




export default App
export {Board,Standerd,Design,Section
}
