
# 👨‍💻 react-native-image-carousel-slider


<p align="center">
  <a href="https://reactjs.org/">
    <img
      alt="Node.js"
      src="https://i.udemycdn.com/course/750x422/1049092_8c52_2.jpg"
      width="460"
    />
  </a>
</p>

</h1>

<br/>



<br/>









<p align="center">
 
  </a>
  <a href="#">
    <img title="Open Source Love" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=102">
  </a>
  <a href="https://github.com/iyansr?tab=followers">
    <img title="Followers" src="https://img.shields.io/github/followers/arwysyah?style=social">
  </a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>

 
</p>


## BUILD SETUP
```bash

## Installation

npm install react-native-image-carousel-slider --save



```


## USAGE
```js

import ScrollImages from react-native-image-carousel-slider
class App extends Component {
    state={
        active:0
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
    render(){
        return(
            <ScrollImages  
            screen={'DisplayFullImages'} 
          fixedData={carDetails[1].image}
          screenNavigation={this.props.navigation}
          active={this.state.active}
          handleMovements={this.handleMovements}
        />

       
        )
    }
}
```


## Current API(Property)
Property | Type | Description
------------ | ------------- | -------------
screen | PropTypes.string | (optional)Screen Navigation and will passing property 'detailImage' as array
fixedData | PropTypes.array | (required) Array Of Image
screenNavigation| PropTypes.function | (optional) navigation function
active | PropTypes.number| display active image that choosed
handleMovements | PropTypes.object | Native Event


##  Project Documentation


- Author Account

```bash
Arwy Syahputra Siregar
github.com/arwysyah


<p > Copyright ©</p> <p style="color:green;">by Arwy Syahputra Siregar</p>


