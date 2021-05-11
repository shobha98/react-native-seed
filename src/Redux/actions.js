import ActionType from './constants';

export const increaseCount = () => ({
  type: ActionType.INCREASE_COUNT,
});

export const decreaseCount = () => ({
  type: ActionType.DECREASE_COUNT,
});
