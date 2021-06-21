import React, { Component } from 'react';
import { Container } from 'native-base';
import { WebView } from 'react-native-webview';
import 'react-native-gesture-handler';

import styles from "../components/styles/styles";


export default class DrawerExample extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }



  render() {
    const { url } = this.props.route.params;
    return (
      <Container style={styles.Container}>
        <WebView
        source={{ uri: url }}
        style={{ flex:1 }}
      />
      </Container>
    );
  }
}