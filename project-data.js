const  projects = [
    { id: 1,
        title : "portfolio website",
        description : " A personal  portfolio website using HTML and CSS. ",
        category: "web",
        technology: ["HTML", "CSS"],
        feature: true
    },

    {
        id:2,
        title:"caluculator",
         description : " a simple caluculator application.",
        category: "javaScript",
        technology: ["HTML", "CSS", "javaScript"],
        feature: true
    },
    {
        id:3,
         title:"to-Do List",
         description : " a simple application for manging daily tasks.",
        category: "javaScript",
        technology: ["HTML", "CSS", "javaScript"],
        feature: true
    },
    {
        id:4,
        title:"weather App",
         description : " A weather application that display weather information.",
        category: "web",
        technology: ["HTML", "CSS", "javaScript"],
        feature: false
    }
];
projects.forEach(project => {
    console.log(`${project.title}-${
        project.description}[${project.category}]`);
});

const formattedprojects = 
projects.map(project => {
    return `${project.title}-${project.description} [${project.category}]`;
});
console.log(formattedprojects);

