let container = document.getElementById('card-container');
let input = document.querySelector('.search-bar');
let yearDropdown = document.querySelector('.yearDropdown');
let colorDropdown = document.querySelector('.colorDropdown');



let cards = [
    {
        id: 1,
        movieName: 'kanguva',
        ButtonColor: 'grey',
        year: 2024,
        img: "./images/kanguva.avif"

    },
    {
        id: 2,
        movieName: 'goat',
        ButtonColor: 'blue',
        year: 2024,
        img: "./images/goat.avif"

    },
    {
        id: 3,
        movieName: 'jollojimkana',
        ButtonColor: 'red',
        year: 2023,
        img: "./images/jollojimkana.avif"

    },
    {
        id: 4,
        movieName: 'luckbaskhar',
        ButtonColor: 'brown',
        year: 2021,
        img: "./images/luckbaskhar.avif"

    },
    {
        id: 5,
        movieName: 'missyou',
        ButtonColor: 'blue',
        year: 2021,
        img: "./images/missyou.avif"

    },
    {
        id: 6,
        movieName: 'pani',
        ButtonColor: 'brown',
        year: 2022,
        img: "./images/panni.avif"

    },
    {
        id: 7,
        movieName: 'parari',
        ButtonColor: 'green',
        year: 2020,
        img: "./images/parari.avif"

    },
    {
        id: 8,
        movieName: 'sorgavaasal',
        ButtonColor: 'grey',
        year: 2021,
        img: "./images/sorgavaasal.avif"

    },
    {
        id: 9,
        movieName: 'venom',
        ButtonColor: 'orange',
        year: 2022,
        img: "./images/venom.avif"

    },
    {
        id: 10,
        movieName: 'zebra',
        ButtonColor: 'purple',
        year: 2023,
        img: "./images/zebra.avif"

    }
]

input.addEventListener('input', (e) => {
    const inputvalue = input.value.toLowerCase();
    container.innerHTML = "";
    let filteredItems = cards.filter((ele) => {
        return ele.movieName.startsWith(inputvalue);
    });

    if (filteredItems.length) {
        filteredItems.forEach(ele => {
            container.innerHTML += `
            <div class="card">
            <img src=${ele.img} />
            <h2>${ele.movieName}</h2>
            <p>year:${ele.year}</p>
            <button style='background-color:${ele.ButtonColor}'>Book Now</button>
            </div>
 `
        });
    } else {

        container.innerHTML = "<p>No results found.</p>";
    }

})

cards.forEach((ele) => {

    container.innerHTML += `
            <div class="card">
            <img src=${ele.img} />
            <h2>${ele.movieName}</h2>
            <p>year:${ele.year}</p>
            <button style='background-color:${ele.ButtonColor}'>Book Now</button>
             </div>
 `

})

yearDropdown.addEventListener("change", () => {
    const selectedYear = yearDropdown.value;
    let filteredYearItems = cards.filter((ele) => {
        return ele.year == selectedYear
    });



    if (filteredYearItems.length) {
        container.innerHTML = ""
        filteredYearItems.forEach(ele => {
            container.innerHTML += `
            <div class="card">
            <img src=${ele.img} />
            <h2>${ele.movieName}</h2>
            <p>year:${ele.year}</p>
            <button style='background-color:${ele.ButtonColor}'>Book Now</button>
            </div>
 `
        });
    } else {
       container.innerHTML = ""
        cards.forEach((ele) => {

            container.innerHTML += `
                    <div class="card">
                    <img src=${ele.img} />
                    <h2>${ele.movieName}</h2>
                    <p>year:${ele.year}</p>
                    <button style='background-color:${ele.ButtonColor}'>Book Now</button>
                     </div>
         `
        
        })
    }


});

colorDropdown.addEventListener("change", () => {
    const selectedColor = colorDropdown.value;

    let filteredColorItems = cards.filter((ele) => {
        return ele.ButtonColor == selectedColor
    });
    

    if (filteredColorItems.length) {
        container.innerHTML = ""
        filteredColorItems.forEach(ele => {
            container.innerHTML += `
            <div class="card">
            <img src=${ele.img} />
            <h2>${ele.movieName}</h2>
            <p>year:${ele.year}</p>
            <button style='background-color:${ele.ButtonColor}'>Book Now</button>
            </div>
 `
        });
    } else {
       container.innerHTML = ""
        cards.forEach((ele) => {

            container.innerHTML += `
                    <div class="card">
                    <img src=${ele.img} />
                    <h2>${ele.movieName}</h2>
                    <p>year:${ele.year}</p>
                    <button style='background-color:${ele.ButtonColor}'>Book Now</button>
                     </div>
         `
        
        })
    }


});
