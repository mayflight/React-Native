import React,{Component} from 'react'
import {
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	View,
	Text
} from 'react-native'

export default class UIScrollView extends Component {
	state = {
		text:'没滑动'
	}

	render() {
		return (
			<View>
				<ScrollView 
					scrollEventThrottle={200}
					onScroll={() => this.setState({text:'滑动了'})}
					style={styles.scrollView}
					horizontal={this.props.horizontal}
					showsVerticalScrollIndicator={true}
					showsHorizontalScrollIndicator={true}
					contentContainerStyle={styles.content}

				>
					<Text style={styles.text}>滑动视图:{this.state.text}</Text>
					<Text style={styles.text}>滑动视图:{this.state.text}</Text>
					<Text style={styles.text}>滑动视图:{this.state.text}</Text>
					<Text style={styles.text}>滑动视图:{this.state.text}</Text>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	scrollView:{
		backgroundColor:'#f3f3f3',
		height:120,
		width:250,
		shadowColor:'red',
		shadowOffset:{width:2,height:2},
		shadowOpacity:0.8
	},
	content:{
		justifyContent:'center',
	},
	text:{
		backgroundColor:'gray',
		color:'red',
		fontSize:20,
		textAlign:'center',
		paddingTop:20,
		marginTop:20,
		marginRight:20,
		marginLeft:20
	}
})