import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Task = ({ text }) => {
	return (
		<View style={styles.item}>
			<View style={styles.itemLeft}>
				<View style={styles.square}></View>
				<Text style={styles.itemText}>{text}</Text>
			</View>
			<View style={styles.circle}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		backgroundColor: "#E84545",
		padding: 15,
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	itemLeft: {
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "wrap",
	},
	square: {
		width: 24,
		height: 24,
		backgroundColor: "rgba(255, 255, 255, 0.5)",
		opacity: 0.4,
		borderRadius: 5,
		marginRight: 15,
	},
	itemText: {
		maxWidth: "80%",
		color: "white",
	},
	circle: {
		width: 12,
		height: 12,
		borderColor: "rgba(255, 255, 255, 0.5)",
		borderWidth: 2,
		borderRadius: 100,
	},
});

export default Task;
