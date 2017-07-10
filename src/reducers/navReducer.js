import AppNavigator from '../navigators/AppNavigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('home'));

export default navReducer = (
  state = initialState,
  action
) => AppNavigator.router.getStateForAction(action, state) || state;
