
/* ---------- Slideshow ---------- */
let currentSlide = 0;

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

function moveSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(() => {
        moveSlide(1);
    }, 4000); // Change slide every 4 seconds

    window.addEventListener('resize', () => {
        showSlide(currentSlide);
    });
});
/* -------------------------------- */

/* ---------- Navigation ---------- */

document.getElementById('burgerMenu').addEventListener('click', function() {
    var navigation = document.querySelector('.navigation');
    var navLink = document.querySelector('.navContainer > ul');
    var sideHeader = document.querySelector('.sideHeaderContainer');
    if (navigation.style.display === 'flex') {
        navigation.style.display = 'none';
        navLink.style.display = 'none';
        // sideHeader.style.display = 'none';
    } else {
        navigation.style.display = 'flex';
        navLink.style.display = 'flex';
        // sideHeader.style.display = 'block';
    }
  });
  

window.addEventListener('resize', function() {
    var navigation = document.querySelector('.navigation');
    var sideHeader = document.querySelector('.sideHeaderContainer');
    var burgerMenu = document.getElementById('burgerMenu');
    
    if (window.innerWidth > 768) {
        navigation.style.display = 'flex';
        burgerMenu.style.display = 'none';
        // sideHeader.style.display = 'none';
    } else {
        navigation.style.display = 'none';
        burgerMenu.style.display = 'flex';
    }
  });
/* --------------------------------------- */

/* ---------- Projects Parallax ---------- */
document.addEventListener('scroll', function() {
    updateParallax();
});

window.addEventListener('resize', function() {
    updateParallax();
});

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

// Initial call to set positions correctly on page load
updateParallax();

/* --------------------------------------------- */
  
    // Function to set the initial state based on scroll position



// document.addEventListener('DOMContentLoaded', function() {
//     let hasChanged = 4;
    
//     function updateNav() {
//         const navLinks = document.querySelectorAll('.navLink a');
//         const navLinksCont = document.querySelectorAll('.navLink');
//         const scrollPosition = window.scrollY;
//         // let hasChanged = false;
          
        
//         navLinks.forEach(link => {
//             var computedColor = window.getComputedStyle(document.body).backgroundColor;
//         console.log(computedColor);
            
//             if ((computedColor === 'rgb(71, 45, 48)') && (hasChanged > 0)) { // Check for black color in RGB format
//                 console.log(true)
//                 link.style.color = 'white';
//                 hasChanged--;
//             } else if ((computedColor === 'rgb(254, 246, 236)') && hasChanged < 4){
//                 console.log(false)
//                 link.style.color = 'black';
//                 hasChanged++;
//             }


//             link.addEventListener('mouseenter', function() {
//                 // console.log(computedColor)
//                 if (computedColor === 'rgb(254, 246, 236)') { // Check for black color in RGB format
//                     link.style.color = 'var(--secondaryColor)';
//                     link.classList.remove('darkHover')
//                     link.classList.add('lightHover');
//                 } else if (computedColor !== 'rgb(254, 246, 236)'){
//                     link.style.color = 'white';
//                     link.classList.remove('lightHover');
//                     link.classList.add('darkHover');        
//                 }
//                 });

//             link.addEventListener('mouseleave', function() {
//                 if (link.classList.contains('lightHover')) {
//                     link.style.color = 'black';
//                     link.classList.remove('lightHover');
//                 } else if (link.classList.contains('darkHover')) {
//                     link.style.color = 'white';
//                     link.classList.remove('darkHover');
//                 }
//                 });


//             // window.addEventListener('scroll', function() {
//             //     // computedColor = window.getComputedStyle(document.body).backgroundColor;
                

              

//             // });
    
//         });
//     }

//     setInterval(updateNav, 50);

//   });
  

/* ---------- Change Background Color ---------- */
window.addEventListener('scroll', function() {
    // console.log(window.scrollY)
    const scrollPosition = window.scrollY;
    var projectsHeader = document.querySelector('.projectsHeader');
    var projectsSpan = document.querySelector('#projects h1 span');
    var navLinks = document.querySelectorAll('.navLink a');
    var burgerMenu = document.getElementById('burgerMenu');
    let hasChanged = false;
    
    if (window.innerWidth > 500){
        
        // navLinks.forEach(link => {
        //     if (scrollPosition <= 547) {
        //         // if (!hasChanged){
        //             link.style.color = 'rgb(0,0,0)';
        //             // hasChanged = true;
        //         // }
        //     } else if (547 < scrollPosition && scrollPosition <= 1434) {
        //         if (hasChanged){
        //             link.style.color = 'rgb(0,0,0)';
        //             hasChanged = false;
        //         }
        //     } else if (1434 < scrollPosition && scrollPosition <= 3486) {
        //         if (!hasChanged){
        //             link.style.color = 'rgb(0,0,0)';
        //             hasChanged = true;
        //         }
        //         link.style.color = 'rgb(255, 255, 255)';
        //     } else {
        //         link.style.color = 'rgb(0,0,0)';
        //     }
        // });
    

        // navLinks.forEach(link => {
        //     var computedColor = window.getComputedStyle(document.body).backgroundColor;
        // // console.log(computedColor);
        //     if (scrollPosition <= 547) {
        //         link.style.color = 'rgb(0,0,0)';
        //     } else if (547 < scrollPosition && scrollPosition <= 1434) {
        //         link.style.color = 'rgb(0,0,0)';
        //     } else if (1434 < scrollPosition && scrollPosition <= 3486) {
        //         link.style.color = 'rgb(255, 255, 255)';
        //     } else {
        //         link.style.color = 'rgb(0,0,0)';
        //     }
        // });

        if (scrollPosition <= 547) {
            document.body.style.backgroundColor = '#fef6ec';
            projectsHeader.style.color = 'black';
            projectsSpan.style.color = 'var(--tertiaryColor)';
            burgerMenu.style.color = 'black';
        } else if (547 < scrollPosition && scrollPosition <= 1434) {
            document.body.style.backgroundColor = '#fef6ec';
            projectsHeader.style.color = 'black';
            projectsSpan.style.color = 'var(--tertiaryColor)';
            burgerMenu.style.color = 'black';   
        } else if (1434 < scrollPosition && scrollPosition <= 3600) {
            document.body.style.backgroundColor = '#472d30';
            projectsHeader.style.color = 'var(--bgColor)';
            projectsSpan.style.color = 'var(--primaryShadow)';
            burgerMenu.style.color = 'var(--bgColor)';
        } else {
            document.body.style.backgroundColor = '#fef6ec';
            projectsHeader.style.color = 'black';
            projectsSpan.style.color = 'var(--tertiaryColor)';
            burgerMenu.style.color = 'black';
        }

    } else{
        
        // navLinks.forEach(link => {
        //     if (scrollPosition <= 309) {
        //         link.style.color = 'rgb(0,0,0)';
        //     } else if (547 < scrollPosition && scrollPosition <= 1434) {
        //         link.style.color = 'rgb(0,0,0)';
        //     } else if (1434 < scrollPosition && scrollPosition <= 3486) {
        //         link.style.color = 'rgb(255, 255, 255)';
        //     } else {
        //         link.style.color = 'rgb(0,0,0)';
        //     }
        // });

        if (scrollPosition <= 309) {
            document.body.style.backgroundColor = '#fef6ec';
            projectsHeader.style.color = 'black';
            projectsSpan.style.color = 'var(--tertiaryColor)';
            burgerMenu.style.color = 'black';
        } else if (309 < scrollPosition && scrollPosition <= 1100) {
            document.body.style.backgroundColor = '#fef6ec';
            projectsHeader.style.color = 'black';
            projectsSpan.style.color = 'var(--tertiaryColor)';
            burgerMenu.style.color = 'black';
        } else if (1100 < scrollPosition && scrollPosition <= 3168) {
            document.body.style.backgroundColor = '#472d30';
            projectsHeader.style.color = 'var(--bgColor)';
            projectsSpan.style.color = 'var(--primaryShadow)';
            burgerMenu.style.color = 'var(--bgColor)';
        } else {
            document.body.style.backgroundColor = '#fef6ec';
            projectsHeader.style.color = 'black';
            projectsSpan.style.color = 'var(--tertiaryColor)';
            burgerMenu.style.color = 'black';
        }
    }
});
/* -------------------------------------------------- */
