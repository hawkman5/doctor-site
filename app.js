const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-nav');
    const navLinks = document.querySelectorAll('.navbar-nav li');

    
    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('navbar-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();


// My first fetch function

// fetch('https://www.sebastianrivermedical.org/data/erwait?_format=json').then(function (response) {
//         return response.json();
//     }).then(function (obj) {
//         console.log(obj);
//     }).catch(function (error) {
//         console.error('Something went wrong with the fetching');
//         console.error(error);
//     })

// ------------------------

// async fetch from stack overflow
// https://stackoverflow.com/questions/48474970/saving-fetched-json-into-variable/48475017

// new code from youtube video
// https://www.youtube.com/watch?v=Yp9KIcSKTNo

async function getData() {
    return (await fetch("https://www.sebastianrivermedical.org/data/erwait?_format=json")).json();
  }
  
  document.addEventListener("DOMContentLoaded", async () => {
    let erWait = [];

    try {
        erWait = await getData();
    } catch (e) {
        console.log("Error!");
        console.log(e);
    }

    console.log(erWait);
  });