const question1 = document.querySelector("#question1");
const question2 = document.querySelector("#question2");
const question3 = document.querySelector("#question3");
const question4 = document.querySelector("#question4");
const body = document.querySelector("body");

const optionsArray = [
  "Alakazam",
  "Arcanine",
  "Bulbasaur",
  "Cubone",
  "Ditto",
  "Gloom",
  "Gyarados",
  "Hitmonlee",
  "Horsea",
  "Koffing",
  "Mewtwo",
  "Pikachu",
  "Seaking",
  "Tauros",
  "Venonat",
  "Victreebe",
  "eevee",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
];
// axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
//   .then(function (response) {
  //     // handle success
  //     console.log(response);
  let randomPokemon;
  // getting game data
  const container = document.querySelector('#pokemon-container');
  const randomNum = function(){
    return Number(Math.floor(Math.random() * 151));
    //  return Number(Math.floor(Math.random() * 151));
    // console.log(ran);
  
    
  }


  const fPokeData = async function(){
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    const pokemon = await res.data.results;
    getPokeData(pokemon);
  }
let gamedata;
const main = document.querySelector('main');
const playbtn = document.querySelector('#play');

// making a function where i can get random pokemon
  const getPokeData = async function(pokemon){
    let randomvar =  randomNum();
    // const pokemon = await fPokeData();
    randomPokemon = pokemon[randomvar -1];

    console.log(randomPokemon);
    console.log(randomvar);
    console.log(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomvar}.png`);
    return newdata(randomvar);
    
    
  };
  
   async function newdata(randomvar) {
  const newhtml =  `
            <img class=pokeIMGX src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomvar}.png"/>
  `;
  console.log(newhtml)
  container.insertAdjacentHTML("beforeend",newhtml);
}

 fPokeData();

 //multiple choice btns
 const playBtn = document.querySelector("#play-btn");
 playBtn.addEventListener("click", function (){
  playBtn.innerHTML = '';
  const container = document.createElement("div");
  container.setAttribute('class', 'container');
  const question1 =document.createElement("button");
  question1.setAttribute("class", "next-hide");
  question1.textContent = optionsArray[Math.floor(Math.random() * optionsArray.length)]
  question1.addEventListener("click", () =>{
    question1.style.backgroundColor = 'red';
  })

  const question2 = document.createElement("button");
  question2.setAttribute("class", "next-hide");
  question2.textContent = randomPokemon.name;
  question2.addEventListener("click", () =>{
    question2.style.backgroundColor = 'green';
    const pokeImageX = document.querySelectorAll('#pokeIMGX');
    pokeImageX.innerHTML = "";
    alert("Good Job!");
    fPokeData();
    getPokeData();
    newdata();
    question();
    container.innerHTML = '';
  })

  const question3 = document.createElement("button");
  question3.setAttribute("class", "next-hide");
  question3.textContent =  optionsArray[Math.floor(Math.random() * optionsArray.length)]
  question3.addEventListener("click", () =>{
    question3.style.backgroundColor = 'red';
  })
  const question4 = document.createElement("button");
  question4.setAttribute("class", "next-hide");
  question4.textContent =  optionsArray[Math.floor(Math.random() * optionsArray.length)]
  question4.addEventListener("click", () =>{
    question4.style.backgroundColor = 'red';
  })
  
  container.append(question1);
  container.append(question2);
  container.append(question3);
  container.append(question4);
  body.append(container);
})
 
 // for my not random but random pokemon in my questions
 function randomValueGenerator(array) {
   const randomIndex = Math.floor(Math.random() * array.length);
   console.log(array[randomIndex]);
 }
 randomValueGenerator(optionsArray);
 function question() {
   randomValueGenerator(optionsArray);
 }
 
 
// var questions = getElementById('#questions')
  
//  async function pokeImage(){
// const pokeImage = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
// console.log(pokeImage)
// const pokeImageData = await pokeImage.json();
// console.log(pokeImageData.sprites.front_shiny);
// const html = `<img id="pokeImg" src=${pokeImageData.sprites.front_shiny}> `
// container.insertAdjacentHTML("beforeend",html);
//   }
//   pokeImage();

  
  


  // const pokeFinder = async function() {
  //   const poki = await getPokeData();
  //   // const pokePoke = await axios.get(poki.url);
  //    const pokemonImg = await pokePoke.data.results
  //   // console.log(pokemonImg);
  // }


  //getting fetch request
    // const pokemonImg = await axios.get(pokemon.url)
    // const pokemonImg = await pokemon.sprites.other['official-artwork'].front_default;
    // const anything = await pokemonImg.data.results;
  // getting access to the pokemon
  // const pokemonImg = await https://pokeapi.co/api/v2/pokemon/39/;
  
  
  // pokeFinder();

// const gameLogic = async function(){
//     const {name, url} = await getPokeData();
//     console.log(name, url);
//     //post a pic of pokemon
    

//     //ask user what pokemon this is
//     // let question = prompt("What pokemon is this");
    
//     //check if answer is correct
//   
//     //if not correct prompt guess again

//   }

//   }
//  gameLogic();
// making a button to give me the random pokemon

//   playbtn.addEventListener('click', gameLogic);
// }