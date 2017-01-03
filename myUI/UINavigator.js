import React,{Component} from 'react'
import {
	View,
	StyleSheet,
	Navigator,
	TouchableHighlight,
	Text,
} from 'react-native'
import Untils from './until'

class FirstPage extends Component {
	render () {
		return(
			<View style={{backgroundColor:'aqua',flex:1}}>
				<TouchableHighlight 
					onPress={() => {
						this.props.navigator.push(this.props.routes[this.props.route.index+1])
					}
					}>
				<Text style={[styles.text,{fontSize:15}]}>第一页push</Text>
				</TouchableHighlight>
				<Text style={[styles.text,{fontSize:15}]}>这是第一页</Text>
			</View>
		)
	}
}

class SecondPage extends Component {
	render () {
		return(
			<View style={{backgroundColor:'burlywood',flex:1}}>
				<TouchableHighlight 
					onPress={() => {
						this.props.navigator.push(this.props.routes[this.props.route.index+1])
					}
					}>
				<Text style={[styles.text,{fontSize:15}]}>第二页push</Text>
				</TouchableHighlight>
				<TouchableHighlight 
					onPress={() => {
						this.props.navigator.pop()
						}
					}>
				<Text style={[styles.text,{fontSize:15}]}>第二页pop</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

class ThirdPage extends Component {
	render () {
		return(
			<View style={{backgroundColor:'cornsilk',flex:1}}>
				<Text style={[styles.text,{fontSize:15}]}>这是最后一页了</Text>
				<TouchableHighlight 
					onPress={() => {
						this.props.navigator.pop()
						}
					}>
				<Text style={[styles.text,{fontSize:15}]}>第三页pop</Text>
				</TouchableHighlight>
				<TouchableHighlight 
					onPress={() => {
						this.props.navigator.popToTop()
						}
					}>
				<Text style={[styles.text,{fontSize:15}]}>返回第一页</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

export default class UINavigator extends Component {
	render() {

	const routes = [
		{message:'第一页',index:0,component:FirstPage},
		{message:'第二页',index:1,component:SecondPage},
		{message:'第三页',index:2,component:ThirdPage}
	];
		return(
			<Navigator
				initialRoute={routes[0]}
				initialRouteStack = {routes}
				renderScene={(route,navigator) =>
					<route.component route={route} navigator={navigator} routes={routes}/>
				}
				style={styles.navigator}
				configureScene = {(route) => {
					if (route.index === 0) {
						return Navigator.SceneConfigs.HorizontalSwipeJump
					}
					if (route.index === 1) {
						return Navigator.SceneConfigs.PushFromRight
					}
					if (route.index === 2) {
						return Navigator.SceneConfigs.FloatFromBottom
					}
				}}
				navigationBar={
				       <Navigator.NavigationBar
					         routeMapper={{
					           LeftButton: (route, navigator, index, navState) =>
					            { 
					            	if(route.index === 0) {
					            		return null;
					            	}else {
					            		return(
					            			<TouchableHighlight onPress={() => {
					            					navigator.jumpBack() //不能是当前栈里面的第一个页面
					            				}}>
					            				<Text>back</Text>
					            			</TouchableHighlight>
					            		)
					            	}
					             },
					           RightButton: (route, navigator, index, navState) =>
					             { 
					             	if(route.index === 2) {
					             		return null;
					             	}else {
					             		return(
					             			<TouchableHighlight onPress={() => {
					             				let routes = navigator.getCurrentRoutes()
					             				if (routes.length < 1) {
					             					return;
					             				}
					             				if (routes.pop().index !== route.index) {
					             					navigator.jumpForward() //不能是当前栈里面的最后一个页面
					             				}
					             			}}>
					             			<Text>forward</Text>
					             			</TouchableHighlight>)
					             	}
					              },
					           Title: (route, navigator, index, navState) =>
					             { return (<Text style={styles.Title}>{route.message}</Text>); },
					         }}
				         	style={{backgroundColor: 'green'}}
				       />
		   	 	}

			>

			</Navigator>
		)
	}
}

const styles = StyleSheet.create({
	navigator:{
		width:Untils.size.width,
		height:Untils.size.height,
		backgroundColor:'red'
	},
	text:{
		marginTop:70,
		alignItems:'center',
		textAlign:'center',
		color:'green',
		fontSize:20

	},
	ttile:{
		color:'white',
		fontSize:25

	}
})