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
