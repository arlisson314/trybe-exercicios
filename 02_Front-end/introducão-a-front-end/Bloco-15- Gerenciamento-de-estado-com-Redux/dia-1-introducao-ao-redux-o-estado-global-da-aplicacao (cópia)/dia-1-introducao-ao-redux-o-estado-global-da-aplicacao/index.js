const btnPrevius = document.getElementById('previous')
const btnNext = document.getElementById('next')

btnNext.addEventListener('click', () =>  { store.dispatch(actionChangeColor())})
btnPrevius.addEventListener('click', () =>  { store.dispatch(actionChangeColor2())})

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const actionChangeColor = () => ({ type: NEXT_COLOR })
const actionChangeColor2 = () => ({ type: PREVEUS_COLOR })

const NEXT_COLOR = 'NEXT_COLOR'
const PREVEUS_COLOR = 'PREVEUS_COLOR'

const nextColor = (arrayColors, position) => {
  return position === arrayColors.length - 1 ? 0 :
  position + 1
} 

const previusColor = (arrayColors, position) => {
  return position === 0 ? arrayColors.length - 1 :
  position - 1
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'NEXT_COLOR':
    return {
      ...state,
      index: nextColor(state.colors, state.index)
    }
    case 'PREVEUS_COLOR':
      return {
        ...state,
        index: previusColor(state.colors, state.index)
      }
    default:
    return INITIAL_STATE
  }

};

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
const { colors, index } = store.getState();
const myspan = document.getElementById('value');
myspan.innerText = colors[index];
document.body.style.color = myspan.innerText;
});
