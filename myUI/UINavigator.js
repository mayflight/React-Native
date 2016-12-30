import React,{Component} from 'react'
import {
	View,
	StyleSheet,
	Navigator,
	TouchableHighlight,
	Text,
} from 'react-native'
import Untils from './until'
export default class UINavigator extends Component {
	render() {

	const routes = [
		{'message':'第一页',index:0},
		{'message':'第二页',index:1},
		{'message':'第三页',index:2}
	];
		return(
			<Navigator
				initialRoute={routes[0]}
				initialRouteStack = {routes}
				renderScene={(route,navigator) =>
					<View>
						<TouchableHighlight 
							onPress={() => {
									if (route.index >= 2) {
										navigator.popToTop()
									}else {
										navigator.push(routes[route.index+1])
									}
								}
							}>
							<Text style={[styles.text,{fontSize:15}]}>push</Text>
						</TouchableHighlight>
						<TouchableHighlight 
							onPress={() => {
									navigator.pop()
								}
							}>
							<Text style={[styles.text,{fontSize:15}]}>pop</Text>
						</TouchableHighlight>
					</View>
				}
				style={styles.navigator}
				configureScene = {(route) => {
					if (route.index === 0) {
						return Navigator.SceneConfigs.FloatFromRight
					}
					if (route.index === 1) {
						return Navigator.SceneConfigs.VerticalDownSwipeJump
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
					            					navigator.jumpBack()
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
					             			navigator.jumpForward()
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
		marginTop:2,
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