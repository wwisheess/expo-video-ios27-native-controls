# expo-video: native controls missing on iOS 27

Minimal reproduction for an `expo-video` bug: a `VideoView` rendered in a screen pushed with `@react-navigation/native-stack` never shows AVKit controls on iOS 27.

## Steps

1. `npm install`
2. `npx expo start` and open the project in Expo Go on an iOS 27 simulator or device
3. Tap **Open player**, then tap the video

**Expected:** AVKit playback controls appear.
**Actual:** no controls appear. On iOS 26.5 the controls do appear.

## Recordings

Both recorded with Expo Go 57.0.9.

- [expo-video-ios27-no-controls.mp4](./expo-video-ios27-no-controls.mp4), iOS 27 simulator. The first part shows the pushed screen: tapping the video shows no controls. The last part shows the same screen after calling `endAppearanceTransition` on the player's `AVPlayerViewController` through LLDB: the controls appear on the next tap.
- [expo-video-ios26-controls-ok.mp4](./expo-video-ios26-controls-ok.mp4), iOS 26.5 simulator. The same steps show the controls.
