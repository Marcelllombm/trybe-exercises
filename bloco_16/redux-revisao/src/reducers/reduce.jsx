const INITIAL_STATE = {
  label: 'Sua lista aqui',
  lista: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TROCA_LABEL':
      return { ...state, label: action.text };
    case 'ATUALIZA_LISTA':
      return { ...state, lista:[...state.lista, action.text], 
        label: '' };

    default:
      return state;
  }
};

export default reducer;