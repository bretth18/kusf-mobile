import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants/constants';
import { getExternalData, getTrackList } from '../api/api';

export function getData() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}

// fetches the track playlist
export function fetchTracks() {
  return (dispatch) => {
    dispatch(getData())
    return getTrackList()
      .then((trackData) => {
        dispatch(getDataSuccess(trackData))
      })
      .catch((err) => console.log('err:', err))
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData())
     return getExternalData()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('err: ', err))
  }
}
