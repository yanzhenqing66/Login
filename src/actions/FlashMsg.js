import { ADD_FLASH_MSG, DELETE_FLASH_MESSAGE } from '../constants';


export const addFlashMsg =(message) => {
  return {
    type: ADD_FLASH_MSG,
    message
  }
}

export const deleteFlashMessage = (id) =>{
  return{
      type:DELETE_FLASH_MESSAGE,
      id
  }
}