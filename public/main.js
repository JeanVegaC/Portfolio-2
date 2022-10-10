/* ====================== MODE DARK ======================= */

// --color-text-main: #000;
// /* TEXT-SLATE-500 */
// --color-text-second: rgb(100 116 139);
let colorMode = 'dark';
const buttonChangeModeDark = document.getElementById('button-dark');

const modeDark = () => {
    const iconsMode = buttonChangeModeDark.childNodes;

    const $html = document.documentElement,
        $body = document.body;
    const $main = document.querySelector('main');
    const $footer = document.querySelector('footer');

    if (colorMode == 'dark') {
        colorMode = 'light';
        $html.style.setProperty('--color-body', '#555');
        $html.style.setProperty('--color-dark', '#fff');

        $html.style.setProperty('--color-second', '#666');
        $html.style.setProperty('--color-active', '#000');
        $html.style.setProperty('--color-third', '#888');

        $html.style.setProperty('--color-text-main', '#fff');
        $html.style.setProperty('--color-text-second', '#999');

        $body.style.backgroundColor = '#999';
        $main.style.backgroundColor = '#333';
        $footer.style.backgroundColor = '#333';

        iconsMode.forEach(e => {
            e.classList.remove('colorMode');
        });

        iconsMode[0].classList.add('colorMode');

    } else {
        colorMode = 'dark';
        $html.style.setProperty('--color-body', '#fff');
        $html.style.setProperty('--color-dark', '#000');

        $html.style.setProperty('--color-second', 'rgb(226 232 249)');
        $html.style.setProperty('--color-active', 'rgb(148 163 184)');
        $html.style.setProperty('--color-third', 'rgb(203 213 225)');

        $html.style.setProperty('--color-text-main', '#000');
        $html.style.setProperty('--color-text-second', 'rgb(100 116 139)');

        $body.style.backgroundColor = '#fff';
        $main.style.backgroundColor = '#fff';
        $footer.style.backgroundColor = '#fff';

        iconsMode.forEach(e => {
            e.classList.remove('colorMode');
        });

        iconsMode[1].classList.add('colorMode');
    }




}

buttonChangeModeDark.addEventListener('click',modeDark);

/* =========================== NAV =============================== */

const $linkButtons = document.querySelectorAll("#link-button"),
    $section = document.querySelectorAll("#section"),
    $buttonNextSection = document.querySelectorAll('#button-next-section');

/* NRO SECTION FOR CHANGE SECTION WITH BUTTON NEXT */
let nroSection =1;
/* APPLY COLOR LINK BUTTON  */
$linkButtons.forEach((e, i) => {
    e.addEventListener("click", () => {
        applyColorLink(e, i);
    });
});

const applyColorLink = (e, i) => {
    $linkButtons.forEach((a) => {
        a.classList.remove("active");
    });
    e.classList.add("active");

    $section.forEach((a) => {
        a.classList.remove("apply-opacity");
    });
    nroSection = i + 1;
    $section[i].classList.add("apply-opacity");
}

/* NEXT SECTION WITH BUTTON NEXT */
$buttonNextSection.forEach(e => {
    e.addEventListener('click', () => {
        if(nroSection == 4){
            nroSection = 0;
        }
        changeSectionNext(nroSection);
        nroSection += 1;
    });
});

const changeSectionNext = n => {
    $linkButtons.forEach((a) => {
        a.classList.remove("active");
    });
    $linkButtons[n].classList.add("active");

    $section.forEach((a) => {
        a.classList.remove("apply-opacity");
    });
    $section[n].classList.add("apply-opacity");

}

/* ============================ PORTFOLIO ============================ */

/* ===== INITIALIZE LIST PROYECTS WITH IMAGES AND TITLES ===== */

/* PROYECT VALUE FOR LIST OF PROYECTS */
let proyectValue = 'Pages';

/* ===== CHANGE POS POINT ACTIVE OF LIST POINTS ===== */

/* CONT POINT FOR POINT ACTIVE IN POS 0 */
let contPoint = 0;

const nextPoint = () => {

    /* LIST POINTS OF PROYECTS */
    const $points = document.querySelectorAll("#point");

    contPoint += 1;
    if (proyectValue == 'Pages') {
        if (contPoint == 2) {
            contPoint = 0;
        }
    } else {
        if (contPoint == 3) {
            contPoint = 0;
        }
    }

    $points.forEach(e => {
        e.classList.remove('point-active');
    })

    $points[contPoint].classList.add('point-active');
}

/* ===== CHANGE PROYECT WITH BUTTON NEXT ===== */

const $buttonNextProyect = document.querySelector("#button-next");

/* CHANGE PROYECT DEMO */

const viewDemo = (e) => {
    const $viewDemo = document.getElementById('proyect-demo');
    console.log(e);
    if (proyectValue == 'Pages') {
        if (e == 0) {
            $viewDemo.href = 'https://page-anime-ajax.vercel.app/'
        } else {
            $viewDemo.href = '#none'
        }
    } else {
        if (e == 2) {
            $viewDemo.href = 'https://pokedex-cjud.vercel.app/';
        } else if (e == 3) {
            $viewDemo.href = 'https://game-tic-tac-toe-xi.vercel.app/';
        } else if (e == 4) {
            $viewDemo.href = 'https://rock-paper-and-scisor.vercel.app/';
        } else {
            $viewDemo.href = '#random';
        }
    }
    
}

/* ===== CHANGE NUMBER POINTS IN LIST POINTS ===== */

const $listPoints = document.getElementById('list-points');

const createListPoints = e => {

    // while ($listPoints.firstChild) {
    //     $listPoints.removeChild($listPoints.firstChild);
    // }
    $listPoints.innerHTML ="";

    const $fragment = document.createDocumentFragment();
    for (let i = 0; i < e; i++) {
        const $li = document.createElement('li');
        $li.classList.add('color-third', 'rounded-full', 'h-4', 'w-4');

        $li.id = 'point';
        if (i == 0) $li.classList.add('point-active');
        $fragment.appendChild($li);
    }
    $listPoints.appendChild($fragment);
}

const changeNumberPoints = () => {
    if (proyectValue == 'Pages') {
        createListPoints(2);
    } else { createListPoints(3); }

}
changeNumberPoints();

/* ===== CHANGE PROYECT ====== */

let proyect = 0;
const $proyect = document.querySelectorAll('#proyect');
const $proyectTitle = document.getElementById('proyect-title');
const changeProyect = () => {
    
    
    proyect++;
    if (proyectValue == 'Pages') {
        if (proyect == 2) {
            proyect = 0;
        }
    } else {
        if (proyect == 5) {
            proyect = 2;
        }
    }
    
    viewDemo(proyect);
    
    switch (proyect) {
        case 0: $proyectTitle.textContent = 'ANIME J';
            break;
        case 1: $proyectTitle.textContent = 'In process';
            break;
        case 2: $proyectTitle.textContent = 'Pokedex / PokeAPI';
            break;
        case 3: $proyectTitle.textContent = 'Tic Tac Toe';
            break;
        case 4: $proyectTitle.textContent = 'Rock,Papper and scisor';
            break;
        default: $proyectTitle.textContent = 'Loading';
            break;
    }


    $proyect.forEach(e => {
        e.classList.remove('proyect-active');
    });
    $proyect[proyect].classList.add('proyect-active');
    
    nextPoint();
}

$buttonNextProyect.addEventListener("click", changeProyect);



/* ===== CHANGE PROYECT LIST TO PAGES OR GAMES ===== */

/* BUTTONS LIST PROYECTS PAGES/GAMES */
const spanProyect = document.querySelectorAll('#span-proyect');

const changeListProyects = e => {
    
    
    const spanClicked = e.dataset.filter;

    const listProyect = document.querySelectorAll('#list-proyect');
    listProyect.forEach(e => {
        e.classList.remove('list-proyect-active');
    })

    const spanProyect = document.querySelectorAll('#span-proyect');
    spanProyect.forEach(e => {
        e.classList.remove('span-proyect-active');
    })
    e.classList.add('span-proyect-active')

    if (spanClicked == 'Pages') {
        proyectValue = 'Pages';
        contPoint = 0;
        $proyectTitle.textContent = 'ANIME J';
        listProyect[0].classList.add('list-proyect-active');
        $proyect[0].classList.add('proyect-active');
        proyect = 0;
    } else {
        proyectValue = 'Games';
        contPoint = 0;
        $proyectTitle.textContent = 'Pokedex / PokeAPI';
        proyect = 2;
        $proyect[2].classList.add('proyect-active');
        listProyect[1].classList.add('list-proyect-active');
    }

    viewDemo(proyect);
    changeNumberPoints();

}

/* EVENT FOR CHANGE OF PAGES OR GAMES */
spanProyect.forEach(e => {

    e.addEventListener('click', () => {
        changeListProyects(e);
    });
});

/* SWIPER */

let swiper = new Swiper(".mySwiper", {
    loop:true,
    grabCursor:true,

    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    // breakpoints:{
    //     568:{
    //         slidesPerView:2,
    //     }
    // }
    
  });


/* ====================== ABOUT ME =========================== */

/* ======= OPEN LIST OF SKILLS ====== */

const openListSkills = e => {
    let tmp = e.className;

    if (tmp.indexOf('skill-open') != -1) {
        e.classList.remove('skill-open');
    } else {
        listSkills.forEach(a => {
            a.classList.remove('skill-open');
        });
        e.classList.add('skill-open');
    }
}

const listSkills = document.querySelectorAll('.list-skills');
listSkills.forEach(e => {
    e.addEventListener('click', () => {
        openListSkills(e);
    })
})


/* =========================== FOOTER ========================= */

const links = document.querySelectorAll('.link');

links.forEach((e,i)=> {
    e.addEventListener('click', () => {
        nroSection = i;
        changeSectionNext(nroSection);
        nroSection += 1;
    });
});

console.log(1=="1")