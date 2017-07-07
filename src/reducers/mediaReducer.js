import { START_STREAM, PAUSE_STREAM, RESUME_STREAM, STOP_STREAM, PLAYING_STREAM } from '../constants/constants'


const initialState = {
  isPlaying: false,
  isPaused: false,
  isBuffering: false,
}


export default function mediaReducer (state = initialState, action) {
  switch (action.type) {
    case START_STREAM:
      return {
        ...state,
        isPlaying: true,
        isPaused: false,
        isBuffering: true
      };
    case PLAYING_STREAM:
      return {
        ...state,
        isPlaying: true,
        isPaused: false,
        isBuffering: false
      }
    case STOP_STREAM:
      return {
        ...state,
        isPlaying: false,
        isPaused: false,
        isBuffering: false
      };
    case PAUSE_STREAM:
      return {
        ...state,
        isPlaying: false,
        isPaused: true,
        isBuffering: false
      };
    case RESUME_STREAM:
      return {
        ...state,
        isPlaying: true,
        isPaused: false,
        isBuffering: false
      };
    default:
      return state
  }
}
