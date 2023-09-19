import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, Pressable, Dimensions} from 'react-native';

function LogIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [timesPressed, setTimesPressed] = useState(0);
  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }


  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text style={styles.username}>Username:</Text>
        <TextInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder={'enter your username here'}
          style={styles.input}
        />
        <Text style={{color: 'white'}}>{userName}</Text>
        <Text style={styles.password}>Password:</Text>
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder={'enter your password here'}
          style={styles.input}
        />
        <Text style={{color: 'white'}}>{password}</Text>
        <Pressable
            onPress={() => {
              setTimesPressed(current => current + 1);
            }}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#f96501',
              },
              styles.wrapperCustom,
            ]}>
            {({pressed}) => (
              <Text style={styles.text}>{pressed ? 'Logging in ...' : 'Log in'}</Text>
            )}
        </Pressable>
        <Text style={styles.create}> Don't have an account? Click below to create one. </Text>
        <Pressable
            onPress={() => {
              setTimesPressed(current => current + 1);
            }}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#f96501',
              },
              styles.wrapperCustom,
            ]}>
            {({pressed}) => (
              <Text style={styles.text}>{pressed ? 'Creating account ...' : 'Create account'}</Text>
            )}
        </Pressable>       
      </View>
    </SafeAreaView>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth * 0.75,
    alignItems: 'top',
    backgroundColor: '#1e2030',
    justifyContent: 'center',  
  },
  input: {
    alignContent: 'center',
    borderColor: 'orange',
    color: 'grey',
    fontSize: 24
  },
  text: {
    borderRadius: 20,
    alignContent: 'center',
    color: 'black',
    fontSize: 24
  },
  username: {
    alignContent: 'center',
    color: 'white',
    fontSize: 24
  },
  password: {
    alignContent: 'center',
    color: 'white',
    fontSize: 24
  },
  create: {
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    color: 'white',
    fontSize: 20
  },
  wrapperCustom: {
    borderColor: 'purple',
    fontSize: 18
  }
});

export default LogIn;