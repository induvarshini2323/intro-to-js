//Apply saved theme
const savedTheme = localStorage.getItem('theme');
console.log(`last saved theme is ${savedTheme}`)
if (savedTheme === 'dark') {
    document.body.classList.add('darkMode');
}









//document.querySelector ("h1").textContent="DOM day 1 practice"

//document.querySelector ("h2").textContent="DOM practice"

//document.querySelector ("em").textContent="refers to the web page or HTML file you load in the browser."
//document.querySelector ("strong").textContent="the hierarchical layout or structure that represents how all these objects are arranged."
const numberOfPTag = document.querySelector("p")
console.log(numberOfPTag);

const heading = document.querySelector("#title");
console.log(heading);
heading.textContent = "welcome to siu"

const pTags = document.querySelectorAll(".message");
console.log(pTags);
pTags.forEach((content, i) =>content.textContent = `welcome buddy ${i+1} `);


//const emTags = document.querySelector("em")
//console.log(emTags)


const announcement = document.querySelector("#announcement")
announcement.innerHTML = "<em>tomorrow</em> is an <strong>Exam Day</strong>!"

const link = document.querySelector("#myLink");
console.log(link.getAttribute("href"));

link.setAttribute("href", "https://google.com")
console.log(link.getAttribute("href"));

const image = document.querySelector("#myImage");
console.log(image.getAttribute("src"));

const resultTitle = document.querySelector("#result")
resultTitle.classList.add("highlight")

resultTitle.classList.remove("highlight")

resultTitle.classList.toggle("highlight")

//create a HTML tag
const newParagraph = document.createElement("p")
newParagraph.textContent = "Welcome to javascript class"
document.querySelector(".message").appendChild(newParagraph);


const boxContainer =  document.getElementById("box")

const newParagraph2 = document.createElement("p")
newParagraph2.textContent = "Welcome to python class"
boxContainer.appendChild(newParagraph2)

const newParagraph3 = document.createElement("p")
newParagraph3.textContent = "welcome to DSA class"

const newParagraph4 = document.createElement("p")
newParagraph4.textContent ="welcome to computer fundamentals class"

boxContainer.append(newParagraph3, newParagraph4, "welcome to CN class")

//Automate update the year
//DATE
const date = new Date();
const yearSpan = document.querySelector("#year");
const currentYear = new Date().getFullYear()
yearSpan.textContent = currentYear

const hours = new Date ().getHours()

let timeOfDay;

if (hours < 12) {
    timeOfDay ="  Morning";
} else if (hours < 16) {
    timeOfDay = "Afternoon"
} else if (hours < 20) {
    timeOfDay = " Evening"
} else  {
    timeOfDay = "Night"
}

const greetingElement = document.querySelector("#greeting");
greetingElement.textContent = `Good ${timeOfDay}! thank you!`

const navToggle = document.querySelector('#navToggle');
const siteNav = document.querySelector('#siteNav');

 navToggle.addEventListener('click', function() {
     siteNav.classList.toggle('nav-open');
});

const themeToggle = document.querySelector("#darkAndLight")
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('darkMode');
    if (document.body.classList.contains('darkMode')) {
         localStorage.setItem('theme', 'dark')
    } else { 
   localStorage.setItem('theme', 'light');
    }
});






const message = document.querySelector('#message');
const chartCount = document.querySelector('#chartC ount');

 if(message && chartCount) {
message.addEventListener('input', function(event) {
    chartCount.textContent = event.target.value.length + ' / 200'
})
 }

 document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {        
        siteNav.classList.remove('nav-open')
    }
 })

 const snacks = [
    { name: "apple", price:1.5},
    { name: "garnola Bac", price:2.0},
    { name: "trail mix", price: 3.25},
    {name: "blueberry", price: 4.00}
 ];
 const snackList = document.querySelector("#snackList");

 const html = snacks.map(function (snack) {
    return `<li>${snack.name} - $${snack.price.toFixed(2)}</li>`;
 }).join("")

 snackList.innerHTML = html


 const  projects = [
    {id: 1,
         title : "portfolio website",
        description : " A personal  portfolio website using HTML and CSS. ",
        category: "web",
    },
        {
         id:2,
        title:"caluculator",
         description : " a simple caluculator application.",
        category: "javaScript",
        }
    ];
    function renderProjects(projectList) {
        const grid = document.querySelector("#projectGrid");

        const cardsHTML = projectList.map(function (project) {
            return `
            <div class="project-card">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              </div>
              `
        }).join("")
        grid.innerHTML = cardsHTML
    }
//const projectList =document.querySelector("#projectList");

//const html1 = projects.map(function (project){
    //return `<ol>${project.id} - ${project.title}- ${project.description}</ol>`;





console.log(projects.filter(project => project.category ==="web"))

console.log(projects.map(project => project.category));


console.log( new Set(projects.map(project => project.category)));

console.log(["All", ...new Set(projects.map(project => project.category))]);

function renderFilterButton() {
     const categories = ["All", ...new Set(projects.map(project => project.category))];
     const buttonHtml = categories.map(function (category) {
        return `<button class="filter-btn" data-tag = "${category}"> ${category} </button>`
     }).join("")

     document.querySelector("#filterButton").innerHTML = buttonHtml

     document.querySelector("#filterButton").addEventListener('click',function (event) {

          if (event.target.matches(".filter-btn")) {
            applyFilters(event.target.dataset.tag)
          }
     })
}

renderFilterButton();

function applyFilters(category) {
    if (category === "All") {
        renderProjects(projects)
    } else {
        renderProjects(projects.filter(project => project.category === category));
    }
}



const contactForm = document.querySelector('#contact-form');

//contactForm.addEventListener('submit', function (event) {
   // event.preventDefault();
  //  console.log('submit intercepited - the page did not reload');
//});
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
     const name=document.querySelector("#name").value.trim();
     localStorage.setItem('name', JSON.stringify(name))
     console.log(localStorage.getItem('name'))

     const email=document.querySelector("#email").value.trim();
      localStorage.setItem('Email',JSON.stringify(email))
      console.log(localStorage.getItem('Email'))


     const message1=document.querySelector("#message1").value.trim();
     localStorage.setItem('message2',JSON.stringify(message1))
     console.log(localStorage.getItem('message2'))

     
    let isFormValid = formValidation(name, email, message)

console.log(`isFormValid: ${isFormValid}`)

    if (isFormValid) {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push({name, email, message});
        localStorage.setItem('messages', JSON.stringify(messages));
        console.log(messages)

        
    }

     
})

function isEmailValid(value) {
   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
   return emailPattern.test(value);
}

console.log(isEmailValid('uppalapatiinduvarshini@gmail.com'))

function showError(fieldId, show) {
    const errorElement = document.querySelector(`#${fieldId}-error`);
    errorElement.classList.toggle('show', show);
}

function formValidation(name, email, message) {
   let isValid= true;

   if (name ==="") {
     showError('name', true);
     isValid = false;
   } else {
    showError('name', false);
   }

   if (email === '' || !isEmailValid(email)) {
      showError('email', true);
      isValid = false
   } else {
     showError('email', false);
   }

    if (message === '') {
        showError('message', true);
        isValid = false
    } else {
        showError('message',false)
    }

    return isValid;
}
    

localStorage.setItem('color', 'blue');
console.log(localStorage.getItem('color'))
localStorage.removeItem('color');
console.log(localStorage.getItem('color'))

let student = { name: 'induvarshini', favouriteSubject: 'javascript'}
localStorage.setItem('student1',JSON.stringify (student))
console.log(localStorage.getItem('student1'))

console.log(JSON.parse(localStorage.getItem('student1')).favouriteSubject)

let student1 = { college: 'siu', branch: 'STAI'}
localStorage.setItem('student2',JSON.stringify (student1))

// localStorage.setItem()

//1. save an arrey of 3 favourite things under key 'favourites',
// json stringify.
//2. reload it, then parse the data with json parse and console log
// second item of the array
//3. find the raw string in the application tab.

let favouriteThings = ['coading',  'music',  'cooking' ]
localStorage.setItem('favourite',JSON.stringify (favouriteThings));
console.log(localStorage.getItem('favourite'))
console.log(JSON.parse(localStorage.getItem('favourite'))[1]);










