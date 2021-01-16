import  { createActionCreator } from '../utils/state';


export const onUpdate = createActionCreator('UPDATE', (list)=>({list}));

const initState = {
    list: [
        { value: 'asdfa'},
        { value: 'asdfaf'}
    ]
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case onUpdate.type:
        return {
            ...state,
            list: action.list
        }

    default:
      return state;
  }
}

export default rootReducer;