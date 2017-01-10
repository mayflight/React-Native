import React,{Component} from 'react'
import {
	Alert,
	TouchableHighlight,
	Text,
	View
}from 'react-native'

class UIButton extends Component {
	render() {
		return(
			<TouchableHighlight
				state={styles.hight}
				underlayColor="burlywood"
				onPress={this.props.click}
				activeOpacity={0.5}
			>
				<Text >{this.props.text}</Text>
			</TouchableHighlight>
		)
	}
}

const styles = {
	hight:{
		width:200,
		height:100,
		backgroundColor:'aqua',
		marginTop:35
	},
	button:{
		backgroundColor:'green',
		marginTop:50,
		width:100,
		height:60,
		alignItems:'center',
		justifyContent:'center'
	}
}

export default class UIAlert extends Component {

	state = {
		one:'确定',
		two:'确定和取消',
		three:'多选'
	}

	render() {
		return(
			<View>
				<View style={styles.button}>
					<UIButton text={this.state.one} click={() => Alert.alert('提示','alter1',[{'text':'确定',onPress:() => this.setState({one:'点击了确定'})}])} />
				</View>
				<View style={styles.button}>
					<UIButton text={this.state.two} click={() => Alert.alert('提示','alter2',[{text:'确定',onPress:() => this.setState({two:'点了确定'})},{text:'取消',onPress:() => this.setState({two:'点了取消'})}])} />
				</View>
				<View style={styles.button}>
					<UIButton text={this.state.three} click={() => Alert.alert('提示','alter3',[{text:'确定',onPress:() => this.setState({three:'点了确定'})},{text:'取消',onPress:() => this.setState({three:'点了取消'})},{text:'下次再说',onPress:() => this.setState({three:'点了稍后'})}])} />
				</View>
			</View>
		)
	}
}
