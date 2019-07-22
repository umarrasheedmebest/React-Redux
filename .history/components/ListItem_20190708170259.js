import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
    return (
      <TouchableOpacity  onPress = {this.removePlace}>
        <View style = { styles.listItem }>
          <Text>{ props.placeName }</Text>
        </View>
      </TouchableOpacity>
    );
}

removePlace() {
    this.props.onPress('Hello from the child')
}


const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee'
  }
});

export default ListItem;