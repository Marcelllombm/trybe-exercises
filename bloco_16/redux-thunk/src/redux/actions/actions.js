function arrayMemes(resposta) {
return {type: 'UPDATE', data: resposta}
}

export function updateMeneAction(dataAPI){
  return (dispatch) => {
    dataAPI.then(resposta => dispatch(arrayMemes(resposta)))
  }
}

