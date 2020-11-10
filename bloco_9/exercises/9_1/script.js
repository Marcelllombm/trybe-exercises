const fetchJoke = () => {
    requestJoke((joke)=>{
        console.log(joke);
    });
}

const requestJoke = (callback) =>{
    setTimeout(() => {
    callback("Antes Deus e eu sabia o que esse código agora so Deus sabe hahahahaha")
    }, 3000);
}

window.onload = fetchJoke();