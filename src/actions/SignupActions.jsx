import axios from 'axios';

export const userRequest = (userData) => {
  return dispatch => {
    return axios.post('/api/user', userData);
  }
}

export const isUserExists = (username) => {
  return dispatch => {
    return axios.get(`/api/user/${username}`, username);
  }
}