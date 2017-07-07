import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';



const streamUrl = 'http://104.236.145.45:8000/stream';

export function startExternalStream() {
   ReactNativeAudioStreaming.play(streamUrl, {showIniOSMediaCenter: true, showInAndroidNotifications: true});
}

export function stopExternalStream() {
   ReactNativeAudioStreaming.stop();
}

export function pauseExternalStream() {
   ReactNativeAudioStreaming.pause();
}

export function resumeExternalStream() {
   ReactNativeAudioStreaming.resume();
}
