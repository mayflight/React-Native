import React ,{Component}from 'react'
import Dimensions from 'Dimensions'
import {
	StyleSheet,
	Text,
	View,
	ScrollView
} from 'react-native'

class Circle extends Component {
	render() {
		var size = this.props.size || 20
		var backgroundColor = this.props.backgroundColor || '#dcdcdc'
		return(
			<View
				style={{
					borderRadius:size/2,
					backgroundColor:backgroundColor,
					width:size,
					height:size,
					margin:2,
					shadowOffset:{width:4,height:4},
					shadowColor:'#a9a9a9',
					shadowOpacity:0.6
				}}
			/>
		)}
}

class CircleBlock extends Component {
	render() {
		var myStyle = {
			flexDirection: 'row',
			backgroundColor: '#fffaf0',
			borderWidth:1,
			borderColor:'#228b22',
			margin:5,
			width:Dimensions.get('window').width-50
		};
		return(
			<View style={[myStyle,this.props.style]}>
				{this.props.children}
			</View>
		)
	}
}

export default class LayoutFlexBox extends Component {
	render () {
		var minCircles = [
			<Circle backgroundColor='#527fe4' size={35} key='1'/>,
			<Circle backgroundColor='#D443E3' size={10} key='2'/>,
			<Circle backgroundColor='#FF9049' size={25} key='3'/>,
			<Circle backgroundColor='#FFE649'  key='4'/>,
			<Circle backgroundColor='#ff8c00' size={30} key='5'/>,
			<Circle backgroundColor='#bdb76b' size={15} key='6'/>,
			<Circle backgroundColor='#ffd700' size={5} key='7'/>,
		];
		return(
			<ScrollView>
				<Text>flexDirection:row</Text>
				<CircleBlock style={{flexDirection:'row'}}>
					{minCircles}
				</CircleBlock>
				<Text>flexDirection:column</Text>
				<CircleBlock style={{flexDirection:'column'}}>
					{minCircles}
				</CircleBlock>
				<Text>flexDirection:row-reverse</Text>
				<CircleBlock style={{flexDirection:'row-reverse'}}>
					{minCircles}
				</CircleBlock>
				<Text>flexDirection:column-reverse</Text>
				<CircleBlock style={{flexDirection:'column-reverse',justifyContent:'center',height:300,alignItems:'center'}}>
					{minCircles}
				</CircleBlock>
				<Text>justifyContent:flex-start</Text>
				<CircleBlock style={{justifyContent:'flex-start'}}>
					{minCircles}
				</CircleBlock>
				<Text>justifyContent:center</Text>
				<CircleBlock style={{justifyContent:'center'}}>
					{minCircles}
				</CircleBlock>
				<Text>justifyContent:flex-end</Text>
				<CircleBlock style={{justifyContent:'flex-end'}}>
					{minCircles}
				</CircleBlock>
				<Text>justifyContent:space-between</Text>
				<CircleBlock style={{justifyContent:'space-between'}}>
					{minCircles}
				</CircleBlock>
				<Text>justifyContent:space-around</Text>
				<CircleBlock style={{justifyContent:'space-around'}}>
					{minCircles}
				</CircleBlock>
				<Text>alignItems: flex-start</Text>
				<CircleBlock style={{alignItems:'flex-start',height:100}}>
					{minCircles}
				</CircleBlock>
				<Text> alignItems:center</Text>
				<CircleBlock style={{alignItems:'center',height:100}}>
					{minCircles}
				</CircleBlock>
				<Text>alignItems:flex-end</Text>
				<CircleBlock style={{alignItems:'flex-end',height:100}}>
					{minCircles}
				</CircleBlock>
				<Text>flexWrap:wrap</Text>
				<CircleBlock style={{flexWrap:'wrap',height:150}}>
					{[minCircles,minCircles,minCircles,minCircles,minCircles,minCircles]}
				</CircleBlock>
				<Text>flexWrap:nowrap</Text>
				<CircleBlock style={{flexWrap:'nowrap',height:150}}>
					{[minCircles,minCircles,minCircles,minCircles,minCircles,minCircles]}
				</CircleBlock>
			</ScrollView>
		)
	}
} 
