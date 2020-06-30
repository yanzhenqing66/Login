import { combineReducers } from 'redux';
import {auth} from './auth';
import flashmsg from './flashmsg'
 
const rootReducer = combineReducers({
  auth,
  flashmsg
})
export default rootReducer;