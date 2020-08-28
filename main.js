class Tuiles {
  constructor(image, name) {
    this.image = image;
    this.name = name;
  }
  createTuiles(app) {
    app.innerHTML += `<div class="tuiles">
    <img class="picture " src="${this.image}" alt="${this.name}">
    </div>`;
  }
}

// variable
let gridContainer = document.querySelector(".grid-container");
let restart = document.querySelector(".restart");
let compteur = 0;
let contentTuiles = [
  {
    images:
    "https://lh3.googleusercontent.com/proxy/weKql0pB8oP7GLNqfCeJ4ltkkdE9An72WZD8nNl__Y1ZNLAPhDRwtcuLAy-9FGNd-vkRHAKcEz40k2QI2IO8lIsACmM2so5Qnax7ryCmV8fyXbmCiyYmmwJOiwN9JDP1EwlNNRoqkIecnqsIRJJM2X_Rhf4avacCwhX9d-lBQDJaPMKgDXKMND-hS8vHHQ",
    name: "Hercules"
  },
  {
    images: "https://vignette.wikia.nocookie.net/kingdomhearts/images/a/ac/Hades_KHBBS.png/revision/latest?cb=20161028115537",
    name: "Hades"
  },
  {
    images:
    "https://vignette.wikia.nocookie.net/kingdomhearts/images/c/ca/M%C3%A9gara_KHIII.png/revision/latest/top-crop/width/360/height/450?cb=20181214100648&path-prefix=fr",
    name: "Megara"
  },
  {
    images:
    "https://vignette.wikia.nocookie.net/kingdomhearts/images/6/68/P%C3%A9gase_KHIII.png/revision/latest/scale-to-width-down/310?cb=20181019042103&path-prefix=fr",
    name: "Pegase"
  },
  {
    images:
    "https://vignette.wikia.nocookie.net/kingdomhearts/images/a/a2/Phil_KHIII.png/revision/latest/scale-to-width-down/310?cb=20181019052201&path-prefix=fr",
    name: "Philoctete"
  },
  {
    images:
    "https://vignette.wikia.nocookie.net/kingdomhearts/images/4/42/Peine.png/revision/latest?cb=20130106114247&path-prefix=fr",
    name: "Peine"
  },
  {
    images: "https://ekladata.com/p8I3X1-o2tHHMkHIv8e96FlimG0.png",
    name: "Panic"
  },
  {
    images:
    "https://vignette.wikia.nocookie.net/kingdomhearts/images/6/69/Zeus_KHIII.png/revision/latest/top-crop/width/360/height/450?cb=20181019034858&path-prefix=fr",
    name: "Zeus"
  }
];
let checkCard = [];
let isCheckTwoCard = true;

// ajoute la copie parfait de la premiere liste
contentTuiles = [...contentTuiles, ...contentTuiles];


// creation des cartes sur le plateau
function generateBoard() {
  gridContainer.innerHTML = "";
  for (let i = 0; i < contentTuiles.length; i++) {
    const tuiles = new Tuiles(
      contentTuiles[i].images,
      contentTuiles[i].name
      );
      tuiles.createTuiles(gridContainer);
    }
    refresh();
  }

// melangeur de carte
function mixedCard(arrayK){
  console.log(arrayK);
  let i, rand, tmp;
  for (i = arrayK.length - 1; i > 0; i--) {
    rand = Math.floor(Math.random() * (i + 1));
    tmp = arrayK[i];
    arrayK[i] = arrayK[rand];
    arrayK[rand] = tmp;
  }
  generateBoard();
  return arrayK;
}

mixedCard(contentTuiles);

function refresh(){

  // recuperation des variables crees
  let tuilesImage = document.querySelectorAll(".tuiles");
  
  //pour chaque click sur tuile
  tuilesImage.forEach(element => {
    element.addEventListener("click",function(){
      
      if(isCheckTwoCard){
        checkCard.push(element);
  
        compteur++;
  
        element.firstElementChild.classList.add("active");// add class active up tuile
        
        console.log(compteur);

        if(compteur == 2){
            if(checkCard[0].firstChild.nextSibling.alt == checkCard[1].firstChild.nextSibling.alt){
              clearlist();
            }else{
              setTimeout(clearCard,1000);
              isCheckTwoCard = false;
            }
        }
      }else{
        return;
      }
    }
    )
  });
}



function clearCard(){
  checkCard[0].firstElementChild.classList.remove("active");
  checkCard[1].firstElementChild.classList.remove("active");
  compteur = 0;
  checkCard.pop();
  checkCard.pop();
  isCheckTwoCard = true;
}

function clearlist(){
  compteur = 0;
  checkCard.pop();
  checkCard.pop();
}

let picture = document.querySelectorAll(".picture");

restart.addEventListener("click",function(){ 
  picture.forEach(element => {
    element.classList.remove("active");
  });
  mixedCard(contentTuiles);
});





