///////////////////// Up button //////////////////
let upSpan = document.querySelector('.up');

upSpan.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

/////////////////////Transition in navigation menu //////////////////////////
let menu = document.querySelectorAll('.nav-menu li a');
let menuLinks = Array.from(menu);

function linkAction() {
    menuLinks.forEach((li) => li.classList.remove('active'));
    this.classList.add('active');
}
menuLinks.forEach((link) => link.addEventListener('click', linkAction));

//////////////////The search Input In Navigation Bar //////////////////////////
let form = document.querySelector('.form');
let button = document.querySelector('.btn');
let input = document.querySelector('.input');
let navigation = document.querySelector('header nav');

button.onclick = function () {
    form.classList.toggle('active');
    input.focus();
    navigation.style.display = 'flex';
    navigation.style.justifyContent = 'center';
    if (!form.classList.contains('active')) {
        navigation.style.justifyContent = 'end';
    }
};

/////////////////////////The Slider///////////////////////

let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
let slidesCount = sliderImages.length;
let currentSlide = 1;

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

let paginationElement = document.createElement('ul');
paginationElement.classList.add('bullets');
paginationElement.setAttribute('id', 'pagination-ul');

for (let i = 1; i <= slidesCount; i++) {
    let paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);
    paginationElement.appendChild(paginationItem);
}

document.getElementById('indicators').appendChild(paginationElement);

let paginationCreatedUl = document.getElementById('pagination-ul');

let paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Trigger The Checker Function
theChecker();

function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        // Do Nothing
        return false;
    } else {
        currentSlide++;

        theChecker();
    }
}

function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        // Do Nothing
        return false;
    } else {
        currentSlide--;

        theChecker();
    }
}

for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();
    };
}

function theChecker() {
    removeAllActive();
    sliderImages[currentSlide - 1].classList.add('active');
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');
    // Check if Current Slide is The First
    if (currentSlide == 1) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }
    // Check if Current Slide is The Last
    if (currentSlide == slidesCount) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });

    paginationBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
}

////////////////////The Shuffle ////////////////////////////
let shuffle = document.querySelectorAll('.shuffle li');
let ArrayShuffle = Array.from(shuffle);

let divs = document.querySelectorAll('.imgs-container>div');
let ArrayDiv = Array.from(divs);

ArrayShuffle.forEach((ele) => {
    ele.addEventListener('click', (e) => {
        ArrayShuffle.forEach((el) => {
            el.classList.remove('active');
        });
        e.target.classList.add('active');

        ArrayDiv.forEach((ev) => {
            ev.style.display = 'none';
        });
        document.querySelectorAll(e.target.dataset.cat).forEach((l) => {
            l.style.display = 'block';
        });
    });
});

//////////////////////////////Action will happen on scroll///////////////////////////
let sectionStat = document.querySelector('.stats');
let boxNumbers = document.querySelectorAll('.box .number');

let sectionPlan = document.querySelector('.pricing');
let planNumbers = document.querySelectorAll('.plan .num');

let interval = 4000;
//////////////Our skills on scroll/////////////////////
let sectionSkills = document.querySelector('.our-skills');
let progSpans = document.querySelectorAll('.prog span');

window.onscroll = function () {
    ////////////for up button
    if (this.scrollY >= 400) {
        upSpan.classList.add('show');
    } else {
        upSpan.classList.remove('show');
    }
    ///////////for Header effect
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

    ///////for statistics section
    if (window.scrollY >= sectionStat.offsetTop - 100) {
        boxNumbers.forEach((valueDisplay) => {
            let start = 0;
            let endValue = parseInt(valueDisplay.getAttribute('data-val'));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(() => {
                start += 1;
                valueDisplay.textContent = start;
                if (start == endValue) {
                    clearInterval(counter);
                }
            }, duration);
        });
    }
    if (window.scrollY >= sectionSkills.offsetTop - 100) {
        progSpans.forEach((span) => {
            span.style.width = span.dataset.progress;
        });
    }
    if (window.scrollY >= sectionPlan.offsetTop) {
        planNumbers.forEach((valueDis) => {
            let start = 0;
            let endValue = parseInt(valueDis.getAttribute('data-num'));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(() => {
                start += 1;
                valueDis.textContent = start;
                if (start == endValue) {
                    clearInterval(counter);
                }
            }, duration);
        });
    }
};

////////////////////////////////// In Testimonials Bullets ///////////////////////
let sliderCores = Array.from(document.querySelectorAll('.core-container .core'));
let coresCount = sliderCores.length;
let currentCore = 1;

let bulletsElement = document.createElement('ul');
bulletsElement.classList.add('bullets');
bulletsElement.setAttribute('id', 'bullets-ul');

for (let i = 1; i <= slidesCount; i++) {
    let bulletItem = document.createElement('li');
    bulletItem.setAttribute('data-index', i);
    bulletsElement.appendChild(bulletItem);
}

document.getElementById('core-control').appendChild(bulletsElement);

let bulletsCreatedUl = document.getElementById('bullets-ul');

let popBullets = Array.from(document.querySelectorAll('#bullets-ul li'));

theCheckBullet();

for (let i = 0; i < popBullets.length; i++) {
    popBullets[i].onclick = function () {
        currentCore = parseInt(this.getAttribute('data-index'));

        theCheckBullet();
    };
}

function theCheckBullet() {
    goneAllActive();

    sliderCores[currentCore - 1].classList.add('active');
    bulletsCreatedUl.children[currentCore - 1].classList.add('active');
}

function goneAllActive() {
    sliderCores.forEach(function (core) {
        core.classList.remove('active');
    });

    popBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
}
