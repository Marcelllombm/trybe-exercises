function getAPI(){
 return  fetch('https://api.imgflip.com/get_memes')
  .then((response) => response.json())
  .then((responseJson)=> (responseJson.data.memes))
}

export default getAPI;
