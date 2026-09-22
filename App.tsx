import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  type NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Button, StyleSheet, View } from 'react-native';

const videoSource =
  'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8';

type ParamList = {
  Home: undefined;
  Player: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

function HomeScreen({ navigation }: NativeStackScreenProps<ParamList, 'Home'>) {
  return (
    <View style={styles.container}>
      <Button title="Open player" onPress={() => navigation.navigate('Player')} />
    </View>
  );
}

function PlayerScreen() {
  const player = useVideoPlayer(videoSource);

  return (
    <View style={styles.container}>
      <VideoView player={player} style={styles.video} nativeControls />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Player" component={PlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
});
