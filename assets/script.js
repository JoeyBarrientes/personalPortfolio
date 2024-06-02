/* ----------  Global --------------------- */
var isLight = true;
var hasChanged = 0;
let currentSlide = 0;
const navHoverInterval = 100;
const slideInterval = 4000;


/* *********** USER CONTROLLED EVENTS  *********** */
/* *********************************************** */

/* ----------  Window Scroll --------------------- */
window.addEventListener('scroll', function() {
    colorModeControl(); 
    updateParallax();
});

/* ----------  Window Resize --------------------- */
window.addEventListener('resize', function() {
    switchNav();
    updateParallax();
});

/* ---------- Burger Menu Click --------------------- */
document.getElementById('burgerMenu').addEventListener('click', function() {
    menuClick();
});


/* *************** DOM CONTENT LOAD  **************** */
/* ************************************************** */
document.addEventListener('DOMContentLoaded', function() {
    colorModeControl();
    transformOnLoad();
    setInterval(hoverNav(),navHoverInterval);
    showSlide(currentSlide);
    setInterval(() => {
        moveSlide(1);
    }, slideInterval);
    window.addEventListener('resize', () => {
        showSlide(currentSlide);
    });
    updateParallax();
});


/* *************** FUNCTIONS  **************** */
/* -------------------------------------------------- */

/* --------------------------------------------------------------------------- */
function colorModeControl() {
    const scrollPosition = window.scrollY;
    const sectionHeaders = document.getElementsByTagName('h1');
    const sectionNums = document.querySelectorAll('h1 span');
    const aboutText = document.querySelectorAll('#about p');
    const contactText = document.querySelectorAll('#contact p, #contact a');
    const burgerMenu = document.getElementById('burgerMenu');
    const homeButton = document.querySelector('.homeButton img');

    function lightScreen() {
        isLight = true;
        document.body.style.backgroundColor = 'var(--bgColor)';
        for (let i = 0; i < sectionHeaders.length; i++) {
            sectionHeaders[i].style.color = 'black';
        }
        sectionNums.forEach(num => {
            num.style.color = 'var(--tertiaryColor)';
        });
        aboutText.forEach(text => {
            text.style.color = 'black';
        });
        contactText.forEach(contactText => {
            contactText.style.color = 'black';
        });

        burgerMenu.style.color = 'black';
        homeButton.src = 'assets/images/homeDark.svg';
    }

    function darkScreen() {
        isLight = false;
        document.body.style.backgroundColor = 'var(--secondaryBgColor)';
        for (let i = 0; i < sectionHeaders.length; i++) {
            sectionHeaders[i].style.color = 'var(--bgColor)';
        }
        sectionNums.forEach(num => {
            num.style.color = 'var(--primaryShadow)';
        });
        aboutText.forEach(aboutText => {
            aboutText.style.color = 'var(--bgColor)';
        });
        contactText.forEach(contactText => {
            contactText.style.color = 'var(--bgColor';
        });
        burgerMenu.style.color = 'var(--bgColor)';
        homeButton.src = 'assets/images/homeLight.svg';        
    }

    function updateNavColor() {
        const navLinks = document.querySelectorAll('.navLink a');
        
        navLinks.forEach(link => {
    
            if ((isLight) && (hasChanged < 4)) {
                link.classList.remove('navDark');
                link.classList.add('navLight');
                hasChanged++;
            } else if ((!isLight) && (hasChanged > 0)){
                link.classList.remove('navLight');
                link.classList.add('navDark');
                hasChanged--;}
        });

        if ((isLight)) {
            burgerMenu.classList.add('burgerLight');
            burgerMenu.classList.remove('burgerDark');

            homeButton.classList.add('homeLight');
            homeButton.classList.remove('homeDark');
        } else if ((!isLight)) {
            burgerMenu.classList.add('burgerDark');
            burgerMenu.classList.remove('burgerLight');

            homeButton.classList.add('homeDark');
            homeButton.classList.remove('homeLight');
        }
    }

    function initiateColorChange() {
        if (window.innerWidth > 500){
    
            if (scrollPosition <= 547) {
                lightScreen();
                updateNavColor();
            } else if (547 < scrollPosition && scrollPosition <= 1426) {
                lightScreen();
                updateNavColor();
            } else if (1426 < scrollPosition && scrollPosition <= 3413) {
                darkScreen();
                updateNavColor();
            } else {
                lightScreen();
                updateNavColor();
            }
    
        } else{
            
            if (scrollPosition <= 309) {
                lightScreen();
                updateNavColor();
            } else if (309 < scrollPosition && scrollPosition <= 1388) {
                lightScreen();
                updateNavColor();
            } else if (1388 < scrollPosition && scrollPosition <= 3460) {
                darkScreen();
                updateNavColor();
            } else {
                lightScreen();
                updateNavColor();
            }
        }
    }

    initiateColorChange();
}

/* --------------------------------------------------------------------------- */
function menuClick() {
    var navigation = document.querySelector('.navigation');
    var navLink = document.querySelector('.navContainer > ul');
    if (navigation.style.display === 'flex') {
        navigation.style.display = 'none';
        navLink.style.display = 'none';
    } else {
        navigation.style.display = 'flex';
        navLink.style.display = 'flex';
    }
}

/* --------------------------------------------------------------------------- */
function hoverNav() {
    const burgerMenu = document.getElementById('burgerMenu');
    const homeButton = document.querySelector('.homeButton img');
    const navLinks = document.querySelectorAll('.navLink a');

    navLinks.forEach(link => {
        if ((isLight))  {
            link.classList.add('navLight');
            link.classList.remove('navDark');
        } else if ((!isLight)) {
            link.classList.add('navDark');
            link.classList.remove('navLight');
        }
    });

    if ((isLight)) {
        burgerMenu.classList.add('burgerLight');
        burgerMenu.classList.remove('burgerDark');

        homeButton.classList.add('homeLight');
        homeButton.classList.remove('homeDark');
    } else if ((!isLight)) {
        burgerMenu.classList.add('burgerDark');
        burgerMenu.classList.remove('burgerLight');

        homeButton.classList.add('homeDark');
        homeButton.classList.remove('homeLight');
    }
}

/* --------------------------------------------------------------------------- */
function transformOnLoad() {
    // Select the text element that will pop up
    const firstName = document.querySelector('.firstName');
    const lastName = document.querySelector('.lastName');
    const firstHero = document.querySelector('.firstHero');
    const secondHero = document.querySelector('.secondHero');
    const pageElements = document.querySelectorAll('#about, #skills, #projects, #contact');

    // Add the 'visible' class to the text element after a short delay
    setTimeout(function() {
        // popUpText.forEach(text => {
        firstName.classList.add('heroTextVisible');
        // secondText.classList.add('heroTextVisible');
    }, 50); // Adjust the delay as needed (100ms in this case)
    // });
    setTimeout(function() {
        lastName.classList.add('heroTextVisible');
    },150);
    setTimeout(function() {
        firstHero.classList.add('heroTextVisible');
    },250);
    setTimeout(function() {
        secondHero.classList.add('heroTextVisible');
    },350);

    
    setTimeout(function() {
        pageElements.forEach(elem => {   
            
            elem.style.transform = 'translateY(0)';    
            elem.style.opacity = '1';
        });
    },50);
}

/* --------------------------------------------------------------------------- */
function getVisibleSlides() {
    if (window.innerWidth >= 1240) {
        return 6; // Show 6 slides on large screens
    } else if (1024 <= window.innerWidth && window.innerWidth < 1240) {
        return 5; // Show 5 slides on medium screens
    } else if (580 <= window.innerWidth && window.innerWidth < 1024) {
        return 4; // Show 4 slides on smaller screens
    } else if (window.innerWidth < 580){
        return 3; // Show 3 slides on mobile
    }
}

/* --------------------------------------------------------------------------- */
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const visibleSlides = getVisibleSlides();

    if (index >= totalSlides - visibleSlides + 1) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - visibleSlides;
    } else {
        currentSlide = index;
    }
    
    const offset = -currentSlide * (100 / visibleSlides);
    document.getElementById('slideshow').style.transform = `translateX(${offset}%)`;
}

/* --------------------------------------------------------------------------- */
function moveSlide(step) {
    showSlide(currentSlide + step);
}

/* --------------------------------------------------------------------------- */
function switchNav() {
    const navigation = document.querySelector('.navigation');
    const burgerMenu = document.getElementById('burgerMenu');
    
    if (window.innerWidth > 768) {
        navigation.style.display = 'flex';
        burgerMenu.style.display = 'none';
    } else {
        navigation.style.display = 'none';
        burgerMenu.style.display = 'flex';
    }
}

/* --------------------------------------------------------------------------- */
function updateParallax() {
    const scrolled = window.scrollY;
    const descriptions = document.querySelectorAll('[id^="description"]');
    const titles = document.querySelectorAll('[id^="title"]');

    // Define the base values
    const baseDescriptionOffset = 500;
    const baseTitleOffset = 50;
    const descSpeed = -0.5;
    const titleSpeed = -0.05
    
    // Calculate the scaling factor based on window width
    const scaleFactor = Math.min(Math.max(window.innerWidth / 1920, 0.3), 1);
    
    // Calculate the actual offsets and speed
    const descriptionOffset = baseDescriptionOffset * (scaleFactor);
    const titleOffset = baseTitleOffset * scaleFactor;
    const descSpeed2 = descSpeed * scaleFactor;
    const titleSpeed2 = titleSpeed * scaleFactor
    
    descriptions.forEach((description, index) => {
        const topOffset = descriptionOffset + (425 * index * scaleFactor);
        description.style.top = `${topOffset + (scrolled * descSpeed2)}px`;
    });
    
    titles.forEach((title, index) => {
        const topOffset = titleOffset + (40 * index * scaleFactor);
        title.style.top = `${topOffset + (scrolled * titleSpeed2)}px`;
    });
}