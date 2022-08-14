import React from 'react';
import {
  AppRegistry,
  asset,
  Box,
  Cylinder,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class project_course_udemy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Txt: "Hello_Default",
      imgSrc: "chess-world.jpg"
    };
    this.i = 0;
  }
  start() {
    if (this.i % 2 == 0) {
      this.setState({
        Txt: "State 1",
        imgSrc: "chess-world.jpg"
      });
    } else {
      this.setState({
        Txt: "State 2",
        imgSrc: "recife.jpg"
      });
    }
    this.i++;
  }
  render() {
    return (
      <View>
        <Pano source={asset(this.state.imgSrc)} />
        <VrButton onClick={() => this.start()}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{ translate: [0, 0, -3] }],
            }}>
            {this.state.Txt}
          </Text>
        </VrButton>
        
        <Box
          dimWidth={0.35}
          dimDepth={0.35}
          dimHeight={0.35}
          texture={asset(this.state.imgSrc)}
          style={{
            color: 'white',
            transform: [{ translate: [0, -1, -2] }, { rotateX: 45 }, {rotateY: 50}, {scale: [2,0.7, 1.5]}],
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
            transform: [{ translate: [-0.75, 0, -2] }, { rotateX: 45 }, { rotateY: 45 }],
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('project_course_udemy', () => project_course_udemy);
