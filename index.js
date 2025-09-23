//create list of skills and add them to page 
const skills = ["JavaScript", "Html", "Css", "GitHub","React", "Python"];
const skillsSection = document.getElementById("skills");
const skillsList = document.querySelector("#skills ul");

for (let i =0;i<skills.length; i++){
    const skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}
//================================================================

// add a footer to the page
const body = document.querySelector('body');
const addFooter = document.createElement('footer');
body.appendChild(addFooter);

//assign current date and year and add it to footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.textContent =`Susana Espino-Garcia ${thisYear} \u00A9`;
footer.appendChild(copyright);
//===============================================================