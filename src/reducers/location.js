export default function locationReducer(state = 'Turlock, CA', action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return action.payload;

    default:
      return state;
  }
}
