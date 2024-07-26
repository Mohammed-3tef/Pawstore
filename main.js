let currentIndex = 0;
const slides = document.querySelector(".slides");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const dogsBreeds = [
    {
        image: "Images/DogBreedImages/GoldenRetriver.svg",
        breed: "Golden Retriver",
    },
    {
        image: "Images/DogBreedImages/SiberianHusky.svg",
        breed: "Siberian Husky",
    },
    {
        image: "Images/DogBreedImages/Pitbull.svg",
        breed: "Pitbull",
    },
    {
        image: "Images/DogBreedImages/Pug.svg",
        breed: "Pug",
    },
    {
        image: "Images/DogBreedImages/JapaneseSpitz.svg",
        breed: "Japanese Spitz",
    },
    {
        image: "Images/DogBreedImages/Labrador.svg",
        breed: "Labrador",
    }
]

const blogs = [
    {
        image: "Images/BlogSectionImages/BlogSection1.svg",
        details: "Are you having trouble finding the right dog?",
    },
    {
        image: "Images/BlogSectionImages/BlogSection2.svg",
        details: "Is your dog aggresive towards your kids?",
    },
    {
        image: "Images/BlogSectionImages/BlogSection3.svg",
        details: "Looking for someone to train your dog?",
    },
    {
        image: "Images/BlogSectionImages/BlogSection4.svg",
        details: "Choose the most stylist and durable products for your dog.",
    },
]

dogsBreeds.forEach((dog) => {
    document.getElementById("breeds").innerHTML +=
    `
        <div class="dogCard">
            <img src="${dog.image}" class="dogImage" alt="${dog.breed}">
            <div>
                <a href=""> <p class="dogName">${dog.breed}</p> </a>
            </div>
        </div>
        
        <style>
            .dogCard {
                display: flex;
                flex-direction:column;
                align-items: center;
                justify-content: space-between;
                height: 14rem; 
                background: transparent;
                padding: 1.5rem; 
                border-radius: 2.5rem;
                a {
                    color: black;
                    text-decoration: none;
                    transition: 350ms;
                    .dogName {
                        font-size: 1.25rem;
                        text-align: center;
                    }
                }
                .dogImage {
                    width: 80%;
                    height: 80%;
                    border-radius: 0.5rem;
                }
            }
            
            a:hover {color: rgb(229, 134, 8);}
        </style>
    `
});

blogs.forEach((item) => {
    document.getElementById("blogs").innerHTML += 
    `
        <div class="blogCard">
            <img src="${item.image}" class="blogImage" alt="Blog Section">
            <div>
                <a href=""> <p class="blogName">${item.details}</p> </a>
            </div>
        </div>
        
        <style>
            .blogCard {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                height: 27rem; 
                width: 25rem; 
                padding: 1rem; 
                border-radius: 2.5rem;
                box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
                transition: 350ms;
                a {
                    color: black;
                    text-decoration: none;
                    transition: 350ms;
                    .blogName {
                        font-size: 1.25rem;
                        text-align: center;
                    }
                }
                .blogImage {
                    width: 75%;
                    height: 75%;
                    border-radius: 0.5rem;
                }
            }
            
            a:hover {color: rgb(229, 134, 8);}
            .blogCard:hover {box-shadow: rgba(0, 0, 0, 0.2) 5px 35px 55px -3px;}
            
            @media (max-device-width: 800px){
                .blogCard {
                    width: 100%;
                }
            }
            @media (max-device-width: 500px){
                .blogCard {
                    flex-direction: row-reverse;
                }
            }
            
            @media only screen and (max-width: 600px) {
                .blogCard {
                    width: 100%;
                }
            }
        </style>
    `
});

function openNav() {
    document.getElementById("mySidenav").style.width = "40%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function nextImg () {
    currentIndex = (currentIndex + 1) % slides.children.length;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevImg () {
    currentIndex =
    currentIndex == 0
        ? slides.children.length - 1
        : (currentIndex - 1) % slides.children.length;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", nextImg);
prevBtn.addEventListener("click", prevImg);
