export default function breedReducer(state = '', action) {
  switch (action.type) {
    case 'SET_BREED':
      return action.payload;

    case 'SET_ANIMAL':
      return '';

    default:
      return state;
  }
}
