import * as actions from '../../unit/actionType'

const initState = false;

const down = (state = initState, action) => {
  switch (action.type) {
    case actions.KEY_DOWN:
      return action.payload;
    default:
      return state;
  }
};

export default down;
