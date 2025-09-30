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

//add event listener to the submit button on form. console log values
const messageForm = document.querySelector('form[name="leave_message"]');// 'form[name="leave_message"]' looks for form with inputed name
messageForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    const userName = event.target.userName.value;
    const userEmail = event.target.userEmail.value;
    const usersMessage = event.target.usersMessage.value;
    console.log(userName, userEmail, usersMessage);

    //add messages in list
    const messageSection = document.getElementById("messages");
    const messageList = document.querySelector("#messages ul");//only gets the ul element
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
        <a href="mailto:${userEmail}"> ${userName}'s message: </a>
        <span>${usersMessage}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.textContent = `remove`;
    removeButton.type = "button";
    removeButton.addEventListener("click", () => {
        const entry = removeButton.parentNode;
        entry.remove();//remove <li> from dom
    });
    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();//will reset form after submit

   

});
