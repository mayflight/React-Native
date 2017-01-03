import React,{Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	NativeModules,
	NativeEventEmitter
} from 'react-native'


export default class Bridge extends Component {

	state = {
		text:'请点击',
		notice:'未收到通知'
	}

	_getNotice (body) {
		this.setState({
			notice:body.name+','+body.age
		})
	}
	componentWillMount() {
		//开始监听
		var iOSExport = NativeModules.iOSExport
		var emitter = new NativeEventEmitter(iOSExport)
		this.subScription = emitter.addListener("sendName",(body) => this._getNotice(body))
	}
	componentWillUnmount() {
		//删除监听
		this.subScription.remove()
	}
	_nameAndAge() { //多参数的传递
		var iOSExport = NativeModules.iOSExport
		iOSExport.rnToiOS('帝君',200)
		this.setState({
			text:'rnToiOS'
		})
	}
	_dic() { //字典的传递和返回值
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
 	async _promise(age) { //Promise回调
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
	_getConst() {
		var iOSExport = NativeModules.iOSExport
		this.setState({
			text:iOSExport.name+','+iOSExport.age
		})
	}
	render() {
		return(
			<View>
				<TouchableHighlight 
					style={[styles.highLight,{marginTop:50}]} 
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
					onPress={() => this._promise(30)}
					>
					<Text>Promise回调</Text>
				</TouchableHighlight>
				<TouchableHighlight 
					style={styles.highLight} 
					underlayColor='#5f9ea0' 
					activeOpacity={0.8}
					onPress={() => this._getConst()}
					>
					<Text>获取iOS常量</Text>
				</TouchableHighlight>
				<Text>{this.state.text}</Text>
				<Text>{this.state.notice}</Text>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	highLight:{
		height:60,
		width:120,
		margin:20,
		padding:5,
		borderWidth:1,
		borderColor:'coral',
		padding:2
	}
})