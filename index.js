let heading = document.querySelector('.heading');
let adviceStr = document.querySelector('.advice');
let btn = document.querySelector('.dice');


const apiURL = 'https://api.adviceslip.com/advice';


btn.addEventListener('click', async () => {

    // use fetch to getting data from api
    const rawData = await fetch(apiURL);
    let res = await rawData.json();
    // console.log(res.slip.id);

    let id = res.slip.id;
    let quote = res.slip.advice;

    heading.innerHTML = `A D V I C E  # ${id}`;
    adviceStr.innerHTML = quote;
    
});