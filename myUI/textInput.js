import React,{Component} from 'react'
import {
	TextInput,
	View,
	Text,
	StyleSheet,
	Keyboard
} from 'react-native'
 
 export default class UITextInput extends Component {
 	state = {
 		text:'正在输入...'
 	}	
 	render() {
 		return(
 			<View style={styles.parent}>
 				<TextInput style={styles.one} placeholder='帝庭' placeholderTextColor='gray' multiline={true}  keyboardAppearance='dark' returnKeyType='go' blurOnSubmit={false} onSubmitEditing={Keyboard.dismiss}></TextInput>
 				<TextInput style={styles.two} defaultValue='第一世家' onChangeText={(text) => this.setState({text})} value={this.state.text}></TextInput>
 			</View>
 		)
 	}
 }

 const styles = StyleSheet.create({
 	parent:{
 		justifyContent:'flex-start',
 		alignItems:'center'
 	},
 	one:{
 		width:300,
 		height:50,
 		borderColor:'green',
 		borderWidth:2,
 		fontSize:20
 	},
 	two:{
 		width:300,
 		height:50,
 		borderColor:'red',
 		borderWidth:1
 	}
 })