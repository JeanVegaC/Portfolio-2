/* ====================== MODE DARK ======================= */

// --color-text-main: #000;
// /* TEXT-SLATE-500 */
// --color-text-second: rgb(100 116 139);
let colorMode = 'dark';
const buttonChangeModeDark = document.getElementById('button-dark');

buttonChangeModeDark.addEventListener('click', () => {
    modeDark();
})

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

/* =========================== NAV =============================== */

const $linkButtons = document.querySelectorAll("#link-button"),
    $section = document.querySelectorAll("#section"),
    $buttonNextSection = document.querySelectorAll('#button-next-section');

/* NRO SECTION FOR CHANGE SECTION WITH BUTTON NEXT */
let nroSection = 1;

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
let proyectValue = 'Pages',
    iteratorImages,
    iteratorTitles;

const $image = document.querySelector("#image"),
    $proyecTitle = document.getElementById("proyect-title");

const iterableProyectPages = [`Assets/img/pageNagatoro.jpeg`];
const iterableProyectGames = [`Assets/img/GameChess.PNG`,`Assets/img/Piedra,papel o tijera.PNG`, `Assets/img/FutballStady.PNG`];
const proyectTitleGames = ["Game Chess","Rock, paper or scissors", "Football stadium"];
const proyectTitlePages = ["Page Nagatoro"];

const initializeProyect = () => {
    if (proyectValue == 'Pages') {
        $image.src = `Assets/img/pageHikomori.jpg`;
        $proyecTitle.innerHTML = "Page Hikomori";
    } else {
        $image.src = `Assets/img/Pokedex.PNG`;
        $proyecTitle.innerHTML = "Pokedex/Poke API";
    }

    if (proyectValue == 'Pages') {
        iteratorImages = iterableProyectPages[Symbol.iterator]();
        iteratorTitles = proyectTitlePages[Symbol.iterator]();
    } else {
        iteratorImages = iterableProyectGames[Symbol.iterator]();
        iteratorTitles = proyectTitleGames[Symbol.iterator]();
    }
}

initializeProyect();


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
        if (contPoint == 4) {
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

const changeProyect = () => {
    /* CHANGE NEXT POINT */
    nextPoint(contPoint);

    /* REMOVE OPACITY OF IMAGE PROYECT */
    $image.classList.remove("toggle-opacity");

    /* TIME OUT OF ADD OPACITY IMAGE PROYECT */
    setTimeout(() => {
        $image.classList.add("toggle-opacity");
    }, 100);

    /* TIME OUT OF NEXT IMAGE PROYECT */
    setTimeout(() => {
        let tmp = iteratorImages.next().value;
        $image.src = tmp;
        /* RESET CHANGE IMAGE PROYECTS */
        if (tmp == undefined) {
            initializeProyect();
        }
    }, 0);

    /* CHANGE TITLE PROYECTS */
    let tmp2 = iteratorTitles.next().value;
    $proyecTitle.innerHTML = tmp2;

    /* RESET CHANGE TITLE PROYECTS */
    if (tmp2 == undefined) {
        if (proyectValue == 'Pages') {
            $proyecTitle.innerHTML = "Page Hikomori";
            iteratorTitles = proyectTitlePages[Symbol.iterator]();
            point = 0;
        } else {
            $proyecTitle.innerHTML = "Chess game";
            iteratorTitles = proyectTitleGames[Symbol.iterator]();
            point = 0;
        }
    }
}

$buttonNextProyect.addEventListener("click", () => {
    changeProyect();
});


/* ===== CHANGE NUMBER POINTS IN LIST POINTS ===== */

const $listPoints = document.getElementById('list-points');

const changeNumberPoints = () => {
    if (proyectValue == 'Pages') {
        $listPoints.innerHTML = `<li class="color-third rounded-full h-4 w-4 point-active" id="point"></li>
    <li class="color-third rounded-full h-4 w-4" id="point"></li>`;
    } else {
        $listPoints.innerHTML = `<li class="color-third rounded-full h-4 w-4 point-active" id="point"></li>
    <li class="color-third rounded-full h-4 w-4" id="point"></li>
    <li class="color-third rounded-full h-4 w-4" id="point"></li>
    <li class="color-third rounded-full h-4 w-4" id="point"></li>`;
    }
}

/* ===== CHANGE PROYECT LIST TO PAGES OR GAMES ===== */

/* BUTTONS LIST PROYECTS PAGES/GAMES */
const listProyect = document.querySelectorAll('#list-proyect');

const changeListProyects = (e) => {
    listProyect.forEach(a => {
        a.classList.remove('list-proyect-active');
    })
    e.classList.add('list-proyect-active');
    /* GET VALUE DATA FILTER OF SPAN LIST-PROYECT */
    proyectValue = e.dataset.filter;

    initializeProyect();

    /* CHANGE NUMBER OF POINTS */
    changeNumberPoints();

    /* RESET ACTIVE POINT POS */
    contPoint = 0;
}

/* EVENT FOR CHANGE OF PAGES OR GAMES */
listProyect.forEach(e => {
    e.addEventListener('click', () => {
        changeListProyects(e);
    })
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
})