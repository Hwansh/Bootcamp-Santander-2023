const pokemonList = document.getElementById('pokemonList');

const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const modal = document.getElementById('modal');
const fade = document.getElementById('fade');

const loadMoreButton = document.getElementById('loadMoreButton');


const limit = 6;
let offset = 0;
const maxRecords = 24;

// Deixa a 1º letra maiúscula
function capitalizeFirtsLetter(stringName){
    return stringName.charAt(0).toUpperCase() + stringName.slice(1);
}

function loadPokemonItems(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons=[]) => {
    const newHtml = pokemons.map((pokemon) => 
        `<button id="open-modal">  
            <li class="pokemon ${pokemon.type}">
                <spam class="number">#${pokemon.number}</spam>
                <spam class="name">${capitalizeFirtsLetter(pokemon.name)}</spam>
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" 
                        alt="${pokemon.name.toUpperCase()}">
                </div>
            </li>
        </button>
        `).join('')        
        pokemonList.innerHTML += newHtml
    })
}


loadPokemonItems(offset, limit)


const hideModal = () => {
    [modal, fade].forEach((elements_) => elements_.classList.toggle('hide'));
};


loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordsNextPage = offset + limit

    if (qtdRecordsNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItems(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItems(offset, limit)
    }
})


// [openModalBtn, closeModalBtn, fade].forEach((elements_) => {
//     elements_.addEventListener('click', () => hideModal());
// });

openModalBtn.addEventListener("click", hideModal());
closeModalBtn.addEventListener("click", hideModal());
fade.addEventListener("click", hideModal());
