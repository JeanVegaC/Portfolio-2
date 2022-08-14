"use Strict";

/* CONSTRUCTION OF TABLE*/ 
const tablero = document.querySelector('.tablero');
const fila1 = () => {
    for (let i = 0; i < 8; i++) {

        let div = document.createElement('DIV');
        div.classList.add('celda');
        if (i % 2 == 0) {
            div.classList.add('negro');
        } else { div.classList.add('blanco'); }
        tablero.appendChild(div);
    }
}
const fila2 = () => {
    for (let i = 0; i < 8; i++) {

        let div = document.createElement('DIV');
        div.classList.add('celda');
        if (i % 2 == 0) {
            div.classList.add('blanco');
        } else { div.classList.add('negro'); }
        tablero.appendChild(div);
    }
}

for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        fila1();
    } else {
        fila2();
    }
}

const celdas = document.querySelectorAll('.celda');
celdas.forEach((e, i, a) => {
    if (celdas[i] == celdas[0]) {
        img = document.createElement('IMG');
        img.classList.add('img')
        // img.setAttribute('src', '/img/descargar (3).png')
        console.log(img)
        img.src = './img/descargar (3).png';
        celdas[0].appendChild(img);
    }

    e.addEventListener('click', () => {
        moverPer(i);
    })
})

/* MOVE FRUTILLA */
const moverFru = (i) => {
    const frutilla = document.querySelector('.frutilla');
    if (celdas[i] == frutilla.parentElement) {
        pos = Math.trunc(Math.random() * 63);
        celdas[pos].appendChild(frutilla);
        cont++;
        document.querySelector('.score').removeAttribute('hidden');
    }
    score();

}

/* SCORE */ 
document.querySelector('.score').setAttribute('hidden','true');
let cont = 0;
let contAnt =0;

const score = () => {
    let score = cont;
    if (score==contAnt) {
        console.log('BUGGED')
    }else{
        contAnt++;
        document.querySelector('.score').innerHTML = `SCORE : ${score}`;
    }
}

/* CREATE FRUTILLA */
const frutilla = () => {
    const frutilla = document.createElement('IMG');
    frutilla.classList.add('frutilla');
    frutilla.setAttribute('src', './img/frutilla.png');
    frutilla.src = './img/frutilla.png';

    pos = Math.trunc(Math.random() * 63);
    celdas[pos].appendChild(frutilla);
    moverFru();

}
frutilla();

/* MOVE PERSON */
const moverPer = (i) => {
    const img = document.querySelector('.img');
    celdas[i].appendChild(img);
    moverFru(i);
}