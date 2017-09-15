/**
 * Created by mattgriffin on 8/15/17.
 */
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {

    const { title, artist, thumbnail_image, image, url } = album;
    const { thumbnailStyle, headerContentStyle, thumbnailMargin, headerTextStyle, imageStyle } = styles;

    return (
      <Card>
          <CardSection>
              <View style={thumbnailMargin}>
                  <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
              </View>
              <View style={headerContentStyle}>
                  <Text style={headerTextStyle}>{ title }</Text>
                  <Text>{ artist }</Text>
              </View>
          </CardSection>

          <CardSection>
              <Image style={imageStyle} source={{ uri: image }} />
          </CardSection>

          <CardSection>
              <Button onPress={ () => Linking.openURL(url)}>
                Buy Now
              </Button>
          </CardSection>
      </Card>
    );
};

const styles = {
  headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
  },
    thumbnailStyle: {
      height: 50,
        width: 50
    },
    thumbnailMargin: {
      justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    headerTextStyle: {
      fontSize: 18
    },
    imageStyle: {
      height:300,
      flex: 1,
      width: null
    }
};

export default AlbumDetail;