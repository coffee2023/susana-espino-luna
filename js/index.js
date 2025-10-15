console.log("Hello, world!")


//create list of skills and add them to page 
const skills = ["JavaScript", "Html", "Css", "GitHub","React", "Python"];
const skillsSection = document.getElementById("skills");
const skillsList = document.querySelector("#skills ul");

for (let i =0;i<skills.length; i++){
    const skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

//================add a footer to the page===========================
const body = document.querySelector('body');
const addFooter = document.createElement('footer');
body.appendChild(addFooter);

//assign current date and year and add it to footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.textContent =`\u00A9 Susana Espino-Garcia ${thisYear} `;
footer.appendChild(copyright);


//==================LEAVE A MESSAGE========================================

//helper function to toggle messages section visibility
function toggleMessagesSection(){
    const messagesSection = document.getElementById("messages");
    const messageList = messagesSection.querySelector("ul");
    if(messageList.children.length === 0){
        messagesSection.style.display = "none";
    }else{
        messagesSection.style.display = "block";
    }
}
//initially hide the messages section
toggleMessagesSection();

//add event listener to the submit button on form. console log values
const messageForm = document.querySelector('form[name="leave_message"]');

//add event listener to handle submit
messageForm.addEventListener("submit", (event) =>{
    //prevent refresh after clicking submit
    event.preventDefault();

    //retrieve form field values
    const userName = event.target.userName.value;
    const userEmail = event.target.userEmail.value;
    const usersMessage = event.target.usersMessage.value;

    //log values in console
    console.log(userName, userEmail, usersMessage);

    //-------------add messages in list--------------------------------
    const messageSection = document.getElementById("messages");
    const messageList = document.querySelector("#messages ul");//only gets the ul element
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
        <a href="mailto:${userEmail}"> ${userName}'s message: </a>
        <span>${usersMessage}</span>
    `;


    //--------------edit button ----------------------------------

    const editButton = document.createElement("button");
    editButton.innerText = `edit`;
    editButton.type = "button";
    editButton.id = "editButton";
    editButton.addEventListener("click", () => {
        //find current message
        const messageSpan = newMessage.querySelector("span");
        //prompt the user for a new message
        const newText = prompt("Edit your message: ", messageSpan.innerText);
        //update the message
        if(newText !== null){
            messageSpan.innerText = newText;
        }
    });
    newMessage.appendChild(editButton);

    //-------------remove button----------------------------------------
    const removeButton = document.createElement("button");
    removeButton.innerText = `remove`;
    removeButton.type = "button";
    removeButton.id = "removeButton";
    removeButton.addEventListener("click", () => {
        const entry = removeButton.parentNode;//find button's parent
        entry.remove();//remove <li> from dom
        toggleMessagesSection();//check if messages section is empty
    });

    
    
    //------append message and remove button to message list----------
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);


    //show the messages section if new message is created
    toggleMessagesSection();

    //will reset form after submit
    event.target.reset();
});

//==================lesson 13 ========================

async function fetchProjects(){
    try{
        const response = await fetch("https://api.github.com/users/coffee2023/repos")
            .then(function(response){
                return response.json();
            })
            .then(function(response){
                const repositories = response;
                return console.log("My Repositories: ", repositories);
            })
    }catch(error){
        console.error("Error fetching projects: ", error);
        alert("Error fetching projects");
    }

    const projectSection = document.getElementById("projects");
    const projectList = document.querySelector("#projects ul");

    for(let i=0;i<repositories.length; i++){
        const project = document.createElement("li");
        project.innerText = repositories[i].name;
        projectList.appendChild(project);
    }

}
fetchProjects();