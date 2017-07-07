import { START_STREAM, PAUSE_STREAM, RESUME_STREAM, STOP_STREAM, PLAYING_STREAM } from '../constants/constants';
import { startExternalStream, stopExternalStream,
        resumeExternalStream, pauseExternalStream }  from '../api/streamApi';

export function getStream() {
  return {
    type: START_STREAM
  }
}


export function getPauseStream() {
  return {
    type: PAUSE_STREAM
  }
}

export function getPlayingStream() {
  return {
    type: PLAYING_STREAM
  }
}

export function getResumeStream() {
  return {
    type: RESUME_STREAM
  }
}

export function getStopStream() {
  return {
    type: STOP_STREAM
  }
}


export function startStream() {
  return (dispatch) => {
    dispatch(getStream())
    startExternalStream()
      .then(() => {
        dispatch(getPlayingStream())
      })
      .catch((err) => console.log('err: ', err))
  }
}

export function pauseStream() {
  return (dispatch) => {
    dispatch(getPauseStream())
    pauseExternalStream()
      .catch((err) => console.log('err:', err))
  }
}

export function resumeStream() {
  return (dispatch) => {
    dispatch(getResumeStream())
    resumeExternalStream()
      .then(() => {
        dispatch(getPlayingStream())
      })
      .catch((err) => console.log('err:', err))
  }
}

export function stopStream() {
  return (dispatch) => {
    dispatch(getStopStream())
    stopExternalStream()
    .catch((err) => console.log('err', err))
  }
}
