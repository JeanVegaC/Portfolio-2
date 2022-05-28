const $fragment = document.createDocumentFragment();
const $listPokemon = document.getElementById('list-pokemon');

const $btnNext = document.getElementById('btn-next'),
    $btnPrev = document.getElementById('btn-prev');

const $search = document.getElementById('search'),
    $btnSearch = document.getElementById('btn-search');
    
let start=1;
let end=14;

const fetchPokemon = async (s,e)=>{
    for (let i = start; i <= e; i++) {
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`),
        json = await data.json();
        createPokemon(json);
    }
    start = s;
    end = e;

}


const createPokemon = e =>{
    const $li = document.createElement('li');
    $li.classList.add('pokemon');

    statsPokemon(e,$li);

    $fragment.appendChild($li);
    $listPokemon.appendChild($fragment);

}

const statsPokemon = (e,li) =>{
    const h3 = document.createElement('h3');
    h3.classList.add('name');
    h3.textContent = e.name;

    const img = document.createElement('img');
    img.classList.add('img');
    img.setAttribute('id','img');
    img.src = e.sprites.front_shiny;

    const span = document.createElement('span');
    span.setAttribute('id','id');
    span.textContent = '#'+e.id;

    const div = document.createElement('div');
    div.classList.add('stats-data');

    for (let i = 0; i < 3; i++) {
        const spanName = document.createElement('span');
        const spanStat = document.createElement('span');
        spanName.textContent = e.stats[i].stat.name;
        spanStat.textContent = e.stats[i].base_stat;
        div.appendChild(spanName);
        div.appendChild(spanStat);
    }

    li.appendChild(h3);
    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(div);


    // $li.innerHTML = `<h3 class="name">${e.name}</h3>
    // <img class="img" src="${e.sprites.front_shiny}"></img>
    // <span id="id">#${e.id}</span>
    // <div class="stats-data"><span>${e.stats[0].stat.name}</span><span>${e.stats[0].base_stat}</span><span>${e.stats[1].stat.name}</span><span>${e.stats[1].base_stat}</span><span>${e.stats[2].stat.name}</span><span>${e.stats[2].base_stat}</span></div>`;
}

const nextList = () =>{
    removeChildNodes($listPokemon);
    start = end+1;
    end = end+14;
    fetchPokemon(start,end);
    $btnPrev.disabled = false;
}

const prevList = () =>{
    start = start-14;
    end = start+13;

    removeChildNodes($listPokemon);
    fetchPokemon(start,end);

    if(start == 1) $btnPrev.disabled = true
    
}

const removeChildNodes =(parent)=>{
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

const searchPokemon = async (e)=>{
    const url = [];

        for (let i = 1; i <= 898; i++) {
            let link = `https://pokeapi.co/api/v2/pokemon/${i}`
            let data = await fetch(link);
            json = await data.json();
        
            if(json.name.includes(e.toString()) == true){
                url.push(link);
            }
        }
        removeChildNodes($listPokemon);
        url.forEach( async (e) =>{
            let data = await fetch(e),
            json = await data.json();
            
            await createPokemon(json);
            const overlay = document.querySelector('.overlay');
        overlay.classList.remove('show-overlay')
        })
        
        $btnPrev.disabled = true;
        $btnNext.disabled = true;

}

if(start == 1) $btnPrev.disabled = true;
$btnNext.addEventListener('click',nextList);
$btnPrev.addEventListener('click',prevList);
$btnSearch.addEventListener('click',()=>{
    removeChildNodes($listPokemon);
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('show-overlay')
    searchPokemon($search.value);
    $btnPrev.disabled = true;
    $btnNext.disabled = true;
});
fetchPokemon(1,14); 

