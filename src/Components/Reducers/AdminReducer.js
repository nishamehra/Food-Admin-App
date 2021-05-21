import { createStore} from 'redux';

const initialState = {};

const AdminReducer = (state = initialState, action) => {
//const { data } = action
switch(action.type){
  case 'LOAD_NUTRITION':
     state = action.payload;
     break;
     case 'ADD_NUTRITION':
     state = [...state, action.payload];
     break;
  default:
      break;
}
 return state;
 
};

export default AdminReducer