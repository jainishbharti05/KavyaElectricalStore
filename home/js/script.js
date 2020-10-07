// Sticky Navbar 
let navBar = document.getElementById('navBar');
let navbarHeight = navBar.offsetTop;

window.onscroll = function () {
    if (window.pageYOffset >= navbarHeight) {
        navBar.classList.add("sticky")
    } else {
        navBar.classList.remove("sticky");
    }
}


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


// Blog Collapse with heading 

let blogHeading = document.querySelectorAll(".blog>h4");
blogHeading.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        let clickedHeading = e.target;

        e.target.nextElementSibling.classList.toggle("show");
        blogHeading.forEach(item => {
            if (item !== clickedHeading) {
                item.nextElementSibling.classList.remove("show");
            }
            if (item !== clickedHeading) {
                item.firstElementChild.innerHTML = '<i class="fa fa-caret-right"></i>'
            }
            if (item.nextElementSibling.classList.contains('show')) {
                item.style.color = "#00BCD1";
                item.firstElementChild.innerHTML = '<i class="fa fa-caret-down"></i>';


            }
            else {
                item.style.color = "black";
                item.firstElementChild.innerHTML = '<i class="fa fa-caret-right"></i>';
            }

        })


    })
});

// Categorisation

let categoryButtons = document.querySelectorAll('.categories>button');

categoryButtons.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        let allComponents = document.querySelectorAll('.component');
        allComponents.forEach(element => {
            element.classList.remove('show-component');

        })

        let clickedComponent = e.currentTarget.innerText.toLowerCase();
        clickedComponent = clickedComponent.replace(/\s+/g, "");
        let matchedComponent = document.getElementById(clickedComponent);
        try {
            matchedComponent.classList.add('show-component');
        } catch (err) {
            console.log(err);

        }

    });
});







let exploreBtns = document.querySelectorAll('.varietyItems>button');

exploreBtns.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        
        let allSubComponents = document.querySelectorAll('.component');
        allSubComponents.forEach(element => {
            element.classList.remove('show-component');

        })

        let clickedSubComponent = e.currentTarget.previousElementSibling.previousElementSibling.innerText.toLowerCase();
        clickedSubComponent = clickedSubComponent.replace(/\s+/g, "");
        
        let matchedSubComponent = document.getElementById(clickedSubComponent);
        try {
            matchedSubComponent.classList.add('show-component');
        } catch (err) {
            console.log(err);

        }

    })
});





//  SLIDE show

let j = 0;
const fans = ["../static/images/filtered/fanslide1.jpg", "../static/images/filtered/fanslide2.jpg"];
function changeFans() {
    document.fanslide.src = fans[j];
    if (j < fans.length - 1) {
        j++;
    } else {
        j = 0;
    }
    setTimeout("changeFans()", 3000);
}
onload = changeFans;




var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml12 .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add({
        targets: '.ml12 .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
    });






























