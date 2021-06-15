import React, {useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
//import * as Animatable from 'react-native-animatable';

import Screen from '../components/Screen';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Button from '../components/Button';

const IntroScreen = props => {
  const imageAni = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(imageAni, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [imageAni]);
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        {/* <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        /> */}
        <Animated.Image
          style={{
            ...styles.logo,
            opacity: imageAni,
          }}
          source={require('../assets/logo.png')}
          resizeMode="stretch"
        />
      </View>
      <Animated.View
        style={{
          ...styles.form,
          transform: [
            {
              translateY: imageAni.interpolate({
                inputRange: [0, 1],
                outputRange: [200, 0],
              }),
            },
          ],
        }}>
        <Card style={styles.cardContainer}>
          <Text style={styles.title}>Conected with everyone</Text>
          <View style={styles.button}>
            <Button
              title="Get Start"
              color={Colors.primary}
              width="50%"
              onPress={() => {
                props.navigation.navigate('signin');
              }}
            />
          </View>
        </Card>
      </Animated.View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#009387',
    width: '100%',
    flex: 1,
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: Dimensions.get('screen').height * 0.28,
    height: Dimensions.get('screen').height * 0.28,
  },
  form: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#05375a',
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
});

export default IntroScreen;
