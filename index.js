const btnEl = document.getElementById('btn');
const JokeEl = document.getElementById('joke');

const apiKey = '9rRkAFqN7yBmqN6jG50edQ==ZiPj9p01aDBygc3K';  

const options = {
    method: "GET",
    headers: { 
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

 async function getJoke() {

    try {
        JokeEl.innerText = "updating..."; 
        btnEl.disabled = true; 
        btnEl.innerText = "Loading..."; 
    
        const response = await fetch(apiURL, options)
        const data = await response.json(); 
    
        btnEl.disabled = false; 
        btnEl.innerText = "Tell me a Joke";  
          
    JokeEl.innerHTML = data[0].joke;  
    } catch (error) {
        JokeEl.innerText = "An error happened, Try again later";
        btnEl.disabled = false; 
        btnEl.innerText = "Tell me a Joke";  
        console.log(error); 
    }  

}   
btnEl.addEventListener('click', getJoke);   