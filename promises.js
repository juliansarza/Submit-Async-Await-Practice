// Write an asynchronous function and call it with async/await

function getRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const error = false;

            if(!error) {
                  
                resolve(Math.floor(Math.random() * 100)); // random number between 0 and 100
            } else {
                reject('Error: Something went wrong');
            }
        }, 500);
    });  
}

async function f() {
    let result = await getRandomNumber();
    console.log(result);
}

f();


// Fetch remote data using async/await

async function fetchCity(name) {
    const res = await fetch(`https://geocode.xyz/seattle?json=1`);

    const data = await res.json();
    console.log(data);
}

fetchCity("Seattle");