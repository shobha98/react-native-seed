import ActionType from './constants';

const initialState = {
  count: 0,
};

const getCount = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREASE_COUNT:
      state.count += 1;
      return {...state};
    case ActionType.DECREASE_COUNT:
      state.count -= 1;
      return {...state};
    default:
      return {...state};
  }
};

export default getCount;
