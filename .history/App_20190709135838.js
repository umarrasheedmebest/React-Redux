import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, ActivityIndicator, Text } from 'react-native';
import ListItem from './components/ListItem';
import { connect } from 'react-redux';
import { addPlace } from './actions/place';
import { removePlace } from './actions/place';

class App extends Component {

  state = {
    placeName: '',
    places: [],
    isLoading: fasle
  }

  placeSubmitHandler = () => {
    console.log(this.props);
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.props.add(this.state.placeName);
  }

  removePlace = (placeName) => {
    this.props.remove(placeName);
  }

  placeNameChangeHandler = (value) => {
    this.setState({
      placeName: value
    });
  }

  placesOutput = () => {
    return (
      <FlatList style={styles.listContainer}
        data={this.props.places}
        keyExtractor={(item, index) => index.toString()}
        renderItem={info => (
          <ListItem
            placeName={info.item.value}
            onPress={this.removePlace}
          />
        )}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Seach Places"
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          ></TextInput>
          <Button title='Add'
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>
          {this.placesOutput()}
        </View>
        <View style={styles.listContainer}>
        {this.props.isLoading? <ActivityIndicator />: <Text>Loaded</Text>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    },
    remove: (name) => {
      dispatch(removePlace(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)