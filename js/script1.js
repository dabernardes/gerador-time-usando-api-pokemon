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
    let radios = document.getElementsByName("a");
    let selecao;
    for(let i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            selecao = radios[i].value;
            break;
        }
    }
    let maxId;
    let ids;
    
    switch (escolha) {
        case '1º GERAÇÃO':
            ids = Array.from({length: 151}, (_, i) => i + 1);
            if( selecao === 'person'){
                const lperson = document.getElementById(ELEMENT_IDS.lperson).value;
                              
                    if(lperson === 'Ash'){
                      ids = ids.filter(id => [1, 4, 5, 6, 7, 10, 11, 12, 20, 25, 57, 89, 93, 98, 99, 122, 128, 131, 143 ,149 , 94, 83].includes(id));
              }else if(lperson === 'Gary'){
                      ids = ids.filter(id => [ 1, 7, 8, 9, 12, 15, 16, 22, 27, 31 ,34, 37, 59, 65, 76, 84, 85, 95, 99, 101, 103, 105, 106, 117, 120, 126, 127, 128, 132, 133, 142].includes(id));
              }
            }else if(selecao === 'type'){
                const ltipo = document.getElementById(ELEMENT_IDS.ltipo).value; 
                if (ltipo === 'Grama'){
                    ids = ids.filter(id => [1, 2, 3, 43, 44, 45, 46, 47, 69, 70, 71, 102, 103, 114].includes(id));
                }
            }
            break;
        case '2º GERAÇÃO':
            ids = Array.from({length: 100}, (_, i) => i + 152);
            if( selecao === 'person'){
                const lperson = document.getElementById(ELEMENT_IDS.lperson).value;
                if(lperson === 'Ash'){
                    ids = ids.filter(id => [214, 152, 153, 155, 156, 158, 164, 231, 232, 190, 207].includes(id));
             }else if(lperson === 'Gary'){
                ids = ids.filter(id => [ 163, 197, 212, 215, 216, 227, 229, 230, 235].includes(id));
              }
            } 
            break;

        case '3º GERAÇÃO':
            ids = Array.from({length: 135}, (_, i) => i + 252);
            if( selecao === 'person'){
                const lperson = document.getElementById(ELEMENT_IDS.lperson).value;
                if(lperson === 'Ash'){
                    ids = ids.filter(id => [276, 277, 252, 253, 254, 341, 324, 361, 362].includes(id));
             }}
            break;
        case '4º GERAÇÃO':
            ids = Array.from({length: 107}, (_, i) => i + 387);
            if( selecao === 'person'){
                const lperson = document.getElementById(ELEMENT_IDS.lperson).value;
                if(lperson === 'Ash'){
                    ids = ids.filter(id => [396, 397, 398, 387, 388, 389, 390, 391, 392, 418, 472, 443, 447, 448 ].includes(id));
             }}
            break;
        case '5º GERAÇÃO':
            ids = Array.from({length: 156}, (_, i) => i + 494);
            if( selecao === 'person'){
                const lperson = document.getElementById(ELEMENT_IDS.lperson).value;
                if(lperson === 'Ash'){
                    ids = ids.filter(id => [519, 520, 521, 501, 498, 499, 495, 559, 540, 541, 542, 536, 524, 525, 552, 553 ].includes(id));
             }}
            break;
        case '6º GERAÇÃO':
            ids = Array.from({length: 72}, (_, i) => i + 650);
            if( selecao === 'person'){
                const lperson = document.getElementById(ELEMENT_IDS.lperson).value;
                if(lperson === 'Ash'){
                    ids = ids.filter(id => [656, 657, 658, 661, 662, 663, 701, 704, 705, 706, 714, 715].includes(id));
             }}
            break;
        case '7º GERAÇÃO':
            ids = Array.from({length: 88}, (_, i) => i + 722);
            if( selecao === 'person'){
                const lperson = document.getElementById(ELEMENT_IDS.lperson).value;
                if(lperson === 'Ash'){
                    ids = ids.filter(id => [722, 744, 745, 725, 726, 727, 794, 803, 804, 805, 808, 809, 795].includes(id));
             }}
            break;
        case '8º GERAÇÃO':
            ids = Array.from({length: 96}, (_, i) => i + 810);
            if( selecao === 'person'){
                const lperson = document.getElementById(ELEMENT_IDS.lperson).value;
                if(lperson === 'Ash'){
                    ids = ids.filter(id => [865, 882].includes(id));
             }}
            break;
        default:
            ids = Array.from({length: 905}, (_, i) => i + 1);
            if( selecao === 'person'){
                const lperson = document.getElementById(ELEMENT_IDS.lperson).value;
                if(lperson === 'Ash'){
                    ids = ids.filter(id => [865, 882, 722, 744, 745, 725, 726, 727, 794, 803, 804, 805, 808, 809, 795, 519, 520, 521, 501, 498, 499, 495, 559, 540, 541, 542, 536, 524, 525, 552, 553, 656, 657, 658, 661, 662, 663, 701, 704, 705, 706, 714, 715, 396, 397, 398, 387, 388, 389, 390, 391, 392, 418, 472, 443, 447, 448,276, 277, 252, 253, 254, 341, 324, 361, 362, 214, 152, 153, 155, 156, 158, 164, 231, 232, 190, 207, 214, 152, 153, 155, 156, 158, 164, 231, 232, 190, 207, 1, 4, 5, 6, 7, 10, 11, 12, 20, 25, 57, 89, 93, 98, 99, 122, 128, 131, 143 ,149 , 94, 83  ].includes(id));
             }else if(lperson === 'Gary'){
                ids = ids.filter(id => [ 1, 7, 8, 9, 12, 15, 16, 22, 27, 31 ,34, 37, 59, 65, 76, 84, 85, 95, 99, 101, 103, 105, 106, 117, 120, 126, 127, 128, 132, 133, 142, 163, 197, 212, 215, 216, 227, 229, 230, 235, 410, 466].includes(id));
              }
            }
        }       

    

    divs.forEach(div => {
        const randomId = ids[Math.floor(Math.random() * ids.length)]; 
        getPokemonData(randomId)
            .then(pokemon => updateDiv(pokemon, div));
    });
}

document.getElementById(ELEMENT_IDS.btn).addEventListener('click', handleClick);
