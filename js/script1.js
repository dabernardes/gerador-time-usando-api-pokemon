document.getElementById('escolha').addEventListener('change', function() {
    if (this.value === 'Todas') {
        document.getElementById('selecao').style.visibility = 'visible' ;
 
       document.getElementById('person').addEventListener('change', function() {
         if(this.checked === true) {
           document.getElementById('lperson').style.visibility = 'visible';
           document.getElementById('ltipo').style.visibility = 'hidden';
           document.getElementById('lcor').style.visibility = 'hidden';
        } else {
           document.getElementById('lperson').style.visibility = 'hidden';  
        }

});
document.getElementById('type').addEventListener('change', function() {
    if(this.checked === true) {
    document.getElementById('lperson').style.visibility = 'hidden';
    document.getElementById('ltipo').style.visibility = 'visible';
    document.getElementById('lcor').style.visibility = 'hidden';
    } else {
        document.getElementById('lperson').style.visibility = 'hidden';  
    }

});
document.getElementById('color').addEventListener('change', function() {
    if(this.checked === true) {
    document.getElementById('lperson').style.visibility = 'hidden';
    document.getElementById('ltipo').style.visibility = 'hidden';
    document.getElementById('lcor').style.visibility = 'visible';
    } else {
        document.getElementById('lperson').style.visibility = 'hidden';  
    }

});
document.getElementById('randon').addEventListener('change', function() {
    if(this.checked === true) {
    document.getElementById('lperson').style.visibility = 'hidden';
    document.getElementById('ltipo').style.visibility = 'hidden';
    document.getElementById('lcor').style.visibility = 'hidden';
    } else {
        document.getElementById('lperson').style.visibility = 'hidden';  
    }

});
function getPokemonData(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
            return {
                id: data.id,
                name: data.name,
                image: data.sprites.front_default
            };
        });
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateDiv(pokemon, divId) {
   
     const div = document.getElementById(divId);
    
    div.innerHTML = `
        <img src="${pokemon.image}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <p>ID: ${pokemon.id}</p>
    `;
}
  
function handleClick() {
    const divs = ['poke1', 'poke2', 'poke3', 'poke4', 'poke5', 'poke6'];
    divs.forEach(div => {
        const randomId = getRandomInt(1, 898); // IDs de Pokémon vão de 1 a 898
        getPokemonData(randomId)
            .then(pokemon => updateDiv(pokemon, div));
    });
}

document.getElementById('btn').addEventListener('click', handleClick);
} else {
    if(this.value === '1º GERAÇÃO')
    document.getElementById('selecao').style.visibility = 'visible' ;
 
    document.getElementById('person').addEventListener('change', function() {
      if(this.checked === true) {
        document.getElementById('lperson').style.visibility = 'visible';
        document.getElementById('ltipo').style.visibility = 'hidden';
        document.getElementById('lcor').style.visibility = 'hidden';
     } else {
        document.getElementById('lperson').style.visibility = 'hidden';  
     }

});
document.getElementById('type').addEventListener('change', function() {
 if(this.checked === true) {
 document.getElementById('lperson').style.visibility = 'hidden';
 document.getElementById('ltipo').style.visibility = 'visible';
 document.getElementById('lcor').style.visibility = 'hidden';
 } else {
     document.getElementById('lperson').style.visibility = 'hidden';  
 }

});
document.getElementById('color').addEventListener('change', function() {
 if(this.checked === true) {
 document.getElementById('lperson').style.visibility = 'hidden';
 document.getElementById('ltipo').style.visibility = 'hidden';
 document.getElementById('lcor').style.visibility = 'visible';
 } else {
     document.getElementById('lperson').style.visibility = 'hidden';  
 }

});
document.getElementById('randon').addEventListener('change', function() {
 if(this.checked === true) {
 document.getElementById('lperson').style.visibility = 'hidden';
 document.getElementById('ltipo').style.visibility = 'hidden';
 document.getElementById('lcor').style.visibility = 'hidden';
 } else {
     document.getElementById('lperson').style.visibility = 'hidden';  
 }

});
function getPokemonData(id) {
 return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
     .then(response => response.json())
     .then(data => {
         return {
             id: data.id,
             name: data.name,
             image: data.sprites.front_default
         };
     });
}
function getRandomInt(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateDiv(pokemon, divId) {
      
const div = document.getElementById(divId);
 
 div.innerHTML = `
     <img src="${pokemon.image}" alt="${pokemon.name}">
     <h2>${pokemon.name}</h2>
     <p>ID: ${pokemon.id}</p>
 `;
}

function handleClick() {
 const divs = ['poke1', 'poke2', 'poke3', 'poke4', 'poke5', 'poke6'];
 divs.forEach(div => {
     const  randomId1 = getRandomInt(1, 151); // IDs de Pokémon vão de 1 a 898
     getPokemonData(randomId1)
         .then(pokemon => updateDiv(pokemon, div));
 });
}

document.getElementById('btn').addEventListener('click', handleClick);
}
});