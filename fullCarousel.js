import React, {PureComponent, useRef} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';

export default class FullCarousel extends PureComponent {
  constructor() {
    super();
    this.state = {
      active: 0,
    };
  }

  handleMovements = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.active) {
      this.setState({
        active: slide,
      });
    }
  };
  render() {
    let detailImage = this.props.navigation.state.params.detailImage;
    
    let length = detailImage.length;
    console.log(length)
    let indexs = detailImage[length - 1];
    let newImage = detailImage.filter(a => a !== indexs);
    newImage.unshift(indexs);

    return (
      <View
        style={{
          height: heightPercentageToDP('100%'),
          width: Dimensions.get('window').width,
          backgroundColor: 'black',
        }}
        resizeMode="cover">
        <View style={styles.backIconContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon name="close" size={25} />
          </TouchableOpacity>
        </View>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.handleMovements}
          showsHorizontalScrollIndicator={false}
          style={[styles.backgroundImage, styles.topStyle]}>
          {newImage.map((img, index) => (
            <FastImage
              key={index}
              style={styles.backgroundImage}
              source={{
                uri: img,
                headers: {Authorization: 'sdtas122'},
                priority: FastImage.priority.normal,
              }}
              resizeMode={'contain'}
            />
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            // position: 'absolute',
            justifyContent: 'center',
            top: heightPercentageToDP('-20%'),
            // justifyContent: 'center',
            // zIndex: 9999,
          }}>
          {newImage.map((i, k) => (
            <Text
              key={k}
              style={
                k === this.state.active ? styles.paggingAxtive : styles.pagging
              }>
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // backgroundImage: {
  //   height: null,
  //   flex: 1,
  //   width: null,
  //   backgroundColor: 'black',
  // },
  backButton: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  topStyle: {
    // top: heightPercentageToDP('20%'),
  },
  backIconContainer: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#d4d1cd',
    position: 'absolute',
    marginTop: 40,
    right: 25,
    zIndex: 9999,
    width: 30,
    height: 30,
    borderRadius: 200,
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: heightPercentageToDP('100%'),
    backgroundColor: 'black',
  },
  pagging: {
    fontSize: 15,
    color: '#888',
  },
  paggingAxtive: {
    fontSize: 15,
    color: 'white',
  },
});
