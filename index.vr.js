import React from 'react';
import { Easing } from 'react-native';
import {
  Animated,
  AppRegistry,
  asset,
  Box,
  Cylinder,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';
import { styles } from './styles';

export default class project_course_udemy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Txt: "Hello_Default",
      imgSrc: "chess-world.jpg",
      animetedValue: new Animated.Value(2.1),
      rotateImage: new Animated.Value(0)
    };
    this.i = 0;
  }

  componentDidMount() {
    Animated.timing(
      this.state.animetedValue,
      {
        toValue: -0.3,
        delay: 1000,
        duration: 2000, //1000
        easing: Easing.elastic(2) //bounce
      }).start();

    Animated.timing(
      this.state.rotateImage,
      {
        toValue: 3600,
        duration: 5000,
        delay: 0,
      }).start();
  }

  handleDecay() {
    Animated.decay(
      this.state.rotateImage, {
      velocity: 0.2,
      deceleration: 0.999
    }).start();
  }

  render() {
    return (
      <View>
        <Pano source={asset(this.state.imgSrc)} />

        <Animated.Image
          source={asset("Elefante.png")}
          style={{
            width: 0.5,
            height: 0.5,
            layoutOrigin: [0.5, 0.1],
            transform: [
              { translate: [0, 0.3, -2] },
              { rotateY: this.state.rotateImage }
            ]
          }}
        />
        <VrButton
          onClick={this.handleDecay.bind(this)}
          style={{
            backgroundColor: '#777879',
            transform: [{ translate: [-0.4, -0.3, -2] }]
          }}
        >
          <Text>Stop IT</Text>
        </VrButton>

        <VrButton
          onClick={() => {
            if (this.i % 2 == 0) {
              this.setState({
                Txt: "State 1",
                imgSrc: "recife.jpg"
              });
            } else {
              this.setState({
                Txt: "State 2",
                imgSrc: "chess-world.jpg"
              });
            }
            this.i++;
          }}
          onEnter={() => this.setState({ Txt: "Mouse Entrou" })}
          onExit={() => this.setState({ Txt: "Mouse Saiu" })}
          onLongClick={() => this.setState({ Txt: "LongClick" })}
        >
          <Text
            style={styles.firstText}>
            {this.state.Txt}
          </Text>
        </VrButton>

        <Animated.Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            textAlignVertical: 'center',
            layoutOrigin: [0.5, 0.5],
            transform: [
              { translateY: this.state.animetedValue },
              { translateZ: -5 },
              { translateX: 0 },
            ],
          }}
        >
          Timing Animation
        </Animated.Text>

        <Box
          dimWidth={0.35}
          dimDepth={0.35}
          dimHeight={0.35}
          texture={asset(this.state.imgSrc)}
          style={{
            color: 'white',
            transform: [{ translate: [0, 0.7, -2] }, { rotateX: 50 }, { rotateY: 50 }, { scale: [2, 0.7, 1.5] }],
          }}
        />

        <Cylinder
          radiusTop={0.2}
          radiusBottom={0.2}
          dimHeight={0.3}
          segments={90}
          texture={asset(this.state.imgSrc)}
          style={{
            color: 'white',
            transform: [{ translate: [0, -0.7, -2] }, { rotateX: 45 }, { rotateY: 45 }],
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('project_course_udemy', () => project_course_udemy);
