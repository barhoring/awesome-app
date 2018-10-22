// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// // import { Text, View } from 'react-native';

// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hello Bar Horing Amir!</Text>
//       </View>
//     );
//   }
// }



import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Image, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Greeting extends Component {
  render() {
    return (
      <Text>Hello { this.props.name }</Text>
    );
  }
}

export default class BarLiz extends Component {
  render() {
    uri1 = 'https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/18403508_10212436934056535_1980563417655168223_n.jpg?_nc_cat=110&_nc_ht=scontent.ftlv6-1.fna&oh=d1f645021a191512d18b806929125eea&oe=5C5875D7';
    uri2 = 'https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/42573010_10216878031841204_4375114984925954048_o.jpg?_nc_cat=107&_nc_ht=scontent.ftlv6-1.fna&oh=5470b26771a735f7696b6c0610bd1774&oe=5C82F996';
    uri3 = 'https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/42200161_10216835780024935_3327077462155722752_o.jpg?_nc_cat=107&_nc_ht=scontent.ftlv6-1.fna&oh=ffb4b9a09e2b69dfccbb4b4fe2473495&oe=5C4F511F';
    let pic = {
      uri: uri3
    };
    return (
      // this is js
        // <Image source={pic} style={{width: 193, height: 110}} />
        <View style={{alignItems: 'center'}}>
        {/* <Image source={pic} style={styles.container} /> */}
          <Greeting name='Bar' />
          <Greeting name='Liz' />
          <Greeting name='Parsik the zevel cat' />
          <Greeting name='sisi de lesbo' />
          <Greeting name='loolli shabluli' />
        </View>
    );
  }
}

{/* // <Image source={pic} style={{width: 193, height: 110}}/> */}
// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => BarLiz );
