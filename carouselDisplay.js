import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";
export default class carouselDisplay extends React.PureComponent {
  moveDetailImage = (image, index) => {
    let dataImage = [];
    let newImage = dataImage.concat(image, index);
    this.props.screenNavigation.navigate('FullCarousel', {
      detailImage: newImage,
    });
  };

  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            alignSelf: "center",
            marginTop: 170,
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          {this.props.fixedData.map((i, k) => (
            <Text
              key={k}
              style={
                k === this.props.active ? styles.pagingActive : styles.paging
              }
            >
              ⬤
            </Text>
          ))}
        </View>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.props.handleMovements}
          showsHorizontalScrollIndicator={false}
          style={styles.backgroundImage}
        >
          {this.props.fixedData.map((img, index) => (
            <TouchableOpacity
              onPress={() =>
                this.moveDetailImage(this.props.fixedData, img)
              }
            >
              <Image
                key={index}
                source={{ uri: img }}
                style={styles.backgroundImage}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backgroundImage: {
    width: Dimensions.get("window").width,
    height: (Dimensions.get("window").width * 65) / 100,
    backgroundColor: "black",
  },
  paging: {
    fontSize: 15,
    color: "#888",
  },
  pagingActive: {
    fontSize: 15,
    color: "white",
  },
});
