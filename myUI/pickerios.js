import React,{Component} from 'react'
import {
	View,
	PickerIOS,
	Text,
	StyleSheet
} from 'react-native'


const names = ['句芒','帝江','强良','帝龙','仙逸']
const styles = StyleSheet.create({
	item:{
		fontSize:25,
		textAlign:'center',
		color:'green'
	},
	picker:{
		width:250,
		backgroundColor:'#f3f3f3'
	},
	text:{
		textAlign:'center',
		justifyContent:'center',
		fontSize:15,
		color:'gray'
	}
})
var PickerIOSItem = PickerIOS.Item

export default class UIPickeriOS extends Component {
	state = {
		text:names[0]
	}
	render() {
		return(
			<View>
				<PickerIOS
					style={styles.picker}
					itemStyle = {styles.item}
					selectedValue = {this.state.text}
					onValueChange={(value) => this.setState({text:value})}
				>
				{names.map((value) => (
					<PickerIOSItem value={value} label={value} key={value}/>
				))}
				</PickerIOS>
				<Text style={styles.text}>您选择了：{this.state.text}</Text>
			</View>
		)
	}
}