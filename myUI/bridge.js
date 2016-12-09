import React,{Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	NativeModules
} from 'react-native'


export default class Bridge extends Component {

	state = {
		text:'请点击'
	}
	_nameAndAge() {
		var iOSExport = NativeModules.iOSExport
		iOSExport.rnToiOS('帝君',200)
		this.setState({
			text:'rnToiOS'
		})
	}
	_dic() {
		var iOSExport = NativeModules.iOSExport
		iOSExport.rnToiOSwithDic({
			'姓名':'幽冥',
			'年龄':20,
			'法力':'200'
		},(error,string) =>{

			this.setState({
				text:string
			})
		})
		this.setState({
			text:'rnToiOSwithDic'
		})
	}
 	async _promise(age) {
		try{
			var iOSExport = NativeModules.iOSExport
			var resolve = await iOSExport.rnToiOSAge(age)
			this.setState({
				text:resolve
			})
		}catch(e) {
			console.error(e);
		}
	}
	render() {
		return(
			<View>
				<Text>{this.state.text}</Text>
				<TouchableHighlight 
					style={styles.highLight} 
					underlayColor='#deb887' 
					activeOpacity={0.8}
					onPress={() => this._nameAndAge()}
					>
					<Text>简单数据传递</Text>
				</TouchableHighlight>
				<TouchableHighlight 
					style={styles.highLight} 
					underlayColor='coral' 
					activeOpacity={0.8}
					onPress={() => this._dic()}
					>
					<Text>字典的传递和回调</Text>
				</TouchableHighlight>
				<TouchableHighlight 
					style={styles.highLight} 
					underlayColor='#5f9ea0' 
					activeOpacity={0.8}
					onPress={() => this._promise(20)}
					>
					<Text>Promise回调</Text>
				</TouchableHighlight>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	highLight:{
		height:60,
		width:120,
		margin:50,
		padding:5,
		borderWidth:1,
		borderColor:'coral',
		padding:2
	}
})