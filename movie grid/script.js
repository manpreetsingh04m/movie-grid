const cartvalue = document.getElementById('cart-value');
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const movies = [
    {
        title: "Doctor Strange 2",
        rating: "4.5",
        img: "https://assetscdn1.paytm.com/images/cinema/Doctor-Strange--In-The-Multiverse-Of-Madness-r-705x750-36f0e140-b752-11ec-a762-319bdb0970f2.jpg"
    },
    {
        title: "Bhool Bhulaiyaa 2",
        rating: "4.5",
        img: "https://assetscdn1.paytm.com/images/cinema/bb2--705x750-cbc15240-8a94-11ec-8efd-6d205f33f529.jpg"
    },
    {
        title: "Jayeshbhai Jordaar",
        rating: "4.5",
        img: "https://assetscdn1.paytm.com/images/cinema/Jayeshbhai-Jordaar---705x750-660c01c0-cf7c-11ec-98b3-41c37f260d1c.jpg"
    },
    {
        title: "Jurassic World",
        rating: "4.5",
        img: "https://assetscdn1.paytm.com/images/cinema/Jurassic-World--Dominion-705x750-b554ee90-cd51-11ec-8d22-2363945d80ef.jpg"
    },
    {
        title: "KGF2",
        rating: "4.5",
        img: "https://assetscdn1.paytm.com/images/cinema/KGF-705x750-76008750-b6fd-11ec-9639-8322852eadd4.jpg"
    },
    {
        title: "RRR",
        rating: "4.5",
        img: "https://assetscdn1.paytm.com/images/cinema/RRR-North-705x750-fd78d9c0-693d-11ec-bbcd-5d122dc4018b.jpg"
    }
];



const container = document.getElementById('movie-container');

movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    
    movieCard.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}">
        <div>
            <h2>${movie.title}</h2>
            <p>Rating: ${movie.rating}</p>
            <button class="book-button">Book now</button>
        </div>
    `;



    movieCard.addEventListener('click',()=> {
        console.log(movie)

        
        localStorage.setItem("cartvalue", JSON.stringify(movie));
    })
    container.appendChild(movieCard);

    movieCard.addEventListener('click',() =>{


        cart ++;
        cartvalue.innerHTML=cart

    })

    
    
});



