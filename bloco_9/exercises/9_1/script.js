const appendJoke = (joke)=>{
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML= joke;
    ul.appendChild(li);
};

const fetchJoke = () => {
    // requestJoke((joke)=>{
    // appendJoke(joke);
    // });
    const param = {headers:{Accept: 'application/json'}};
    fetch("https://icanhazdadjoke.com/search?term=house",param )
    .then((response)=>{
       response.json().then((data)=>{
          appendJoke(data.results[0].joke);
       });
       
    });
    
}

// const requestJoke = (callback) =>{
//     setTimeout(() => {
//     callback("Antes Deus e eu sabia o que esse código agora so Deus sabe hahahahaha")
//     }, 3000);
// }

window.onload = fetchJoke();