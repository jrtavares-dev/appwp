import React, { Component } from 'react';
import { TouchableOpacity, Image } from "react-native";
import { Container, Content, Text, Card, CardItem} from 'native-base';
import 'react-native-gesture-handler';
import styles from "../components/styles/styles";
import axios from 'axios';

export default class DrawerExample extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }



  render() {
    return (
      <Container style={styles.Container}>
        <Content padder>
          { this.state.posts.map(post => (
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Noticia', {url:post.link})}>
                <Card style={styles.Cards}>

                <CardItem cardBody>
                    <Image source={{uri: post.jetpack_featured_media_url}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>

                <CardItem header bordered>
                    <Text style={styles.BigTitulo}>{ post.title.rendered }</Text>
                </CardItem>
                
                </Card>

            </TouchableOpacity>

          ))}
        </Content>
      </Container>
    );
  }


  componentDidMount() {
    axios.get("https://radar64.com/wp-json/wp/v2/posts?_embed").then(response => {
      this.setState({ posts: response.data })
    })
  }
}