import React,{Component} from 'react'
import {
	StyleSheet,
	View,
	Switch
} from 'react-native'

export default class UISwitch extends Component {

	state = {
		open:this.props.open
	}

	render() {
		return(
			<View>
			<Switch 
				style={styles.switch} 
				value={this.state.open} 
				onValueChange={(value) => this.setState({open:value})}
				tintColor='black'
				onTintColor='red'
				thumbTintColor='green'
				disabled={this.state.open}
				/>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	switch:{
		marginBottom:10
	}
})