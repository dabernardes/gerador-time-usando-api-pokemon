const ELEMENT_IDS = {
    escolha: 'escolha',
    selecao: 'selecao',
    person: 'person',
    type: 'type',
    color: 'color',
    randon: 'randon',
    lperson: 'lperson',
    ltipo: 'ltipo',
    lcor: 'lcor',
    btn: 'btn'
};

function setVisibility(id, isVisible) {
    document.getElementById(id).style.visibility = isVisible ? 'visible' : 'hidden';
}

function handleSelectionChange() {
    setVisibility(ELEMENT_IDS.selecao, true);
    switch (this.value) {
        case 'Todas':
            setVisibility(ELEMENT_IDS.selecao, true);
            document.getElementById(ELEMENT_IDS.person).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lperson, this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.type).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.ltipo, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.color).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lcor, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.randon).addEventListener('change', function () {
                const isChecked = this.checked;
                setVisibility(ELEMENT_IDS.lperson, !isChecked);
                setVisibility(ELEMENT_IDS.ltipo, !isChecked);
                setVisibility(ELEMENT_IDS.lcor, !isChecked);
            });
            break;
        case '1º GERAÇÃO':
            setVisibility(ELEMENT_IDS.selecao, true);
            document.getElementById(ELEMENT_IDS.person).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lperson, this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.type).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.ltipo, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.color).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lcor, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
            });
            break;
        case '2º GERAÇÃO':
            setVisibility(ELEMENT_IDS.selecao, true);
            document.getElementById(ELEMENT_IDS.person).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lperson, this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.type).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.ltipo, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.color).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lcor, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
            });
            break;
        case '3º GERAÇÃO':
            setVisibility(ELEMENT_IDS.selecao, true);
            document.getElementById(ELEMENT_IDS.person).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lperson, this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.type).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.ltipo, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.color).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lcor, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
            });
            break;
        case '4º GERAÇÃO':
            setVisibility(ELEMENT_IDS.selecao, true);
            document.getElementById(ELEMENT_IDS.person).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lperson, this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.type).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.ltipo, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.color).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lcor, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
            });
            break;
        case '5º GERAÇÃO':
            setVisibility(ELEMENT_IDS.selecao, true);
            document.getElementById(ELEMENT_IDS.person).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lperson, this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.type).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.ltipo, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.color).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lcor, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
            });
            break;
        case '6º GERAÇÃO':
            setVisibility(ELEMENT_IDS.selecao, true);
            document.getElementById(ELEMENT_IDS.person).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lperson, this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.type).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.ltipo, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.color).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lcor, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
            });
            break;
        case '7º GERAÇÃO':
            setVisibility(ELEMENT_IDS.selecao, true);
            document.getElementById(ELEMENT_IDS.person).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lperson, this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.type).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.ltipo, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.color).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lcor, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
            });
            break;
        case '8º GERAÇÃO':
            setVisibility(ELEMENT_IDS.selecao, true);
            document.getElementById(ELEMENT_IDS.person).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lperson, this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.type).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.ltipo, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.lcor, !this.checked);
            });
            document.getElementById(ELEMENT_IDS.color).addEventListener('change', function () {
                setVisibility(ELEMENT_IDS.lcor, this.checked);
                setVisibility(ELEMENT_IDS.lperson, !this.checked);
                setVisibility(ELEMENT_IDS.ltipo, !this.checked);
            });
            break;

        default:

    }
}

document.getElementById(ELEMENT_IDS.escolha).addEventListener('change', handleSelectionChange);

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
    const escolha = document.getElementById(ELEMENT_IDS.escolha).value;
    let maxId;
    let minId;
    
    switch (escolha) {
        case '1º GERAÇÃO':
            maxId = 151;
            minId = 1;
            break;
        
        case '2º GERAÇÃO':
            maxId = 251;
            minId = 152;
            break;
        case '3º GERAÇÃO':
            maxId = 386;
            minId = 252;
            break;
        case '4º GERAÇÃO':
            maxId = 493;
            minId = 387;
            break;
        case '5º GERAÇÃO':
            maxId = 649;
            minId = 494;
            break;
        case '6º GERAÇÃO':
            maxId = 721;
            minId = 650;
            break;
        case '7º GERAÇÃO':
            maxId = 809;
            minId = 722;
            break;
        case '8º GERAÇÃO':
            maxId = 905;
            minId = 810;
            break;
        default:
            maxId = 905;
            minId = 1;
    }
    divs.forEach(div => {
        const randomId = getRandomInt(minId, maxId); 
        getPokemonData(randomId)
            .then(pokemon => updateDiv(pokemon, div));
    });
}

document.getElementById(ELEMENT_IDS.btn).addEventListener('click', handleClick);
