//Aman

const nameModal = document.getElementById("nameModal");
const greeting = document.getElementById("greeting");
const inputName = document.getElementById("inputName");
const btn = document.getElementById("btn");

const greetUser = (name)=>{
    const time = new Date().getHours();
    let greet;
    if(5<=time&&time<12) greet = "Good Morning";
    else if(12<=time&&time<17) greet = "Good Afternoon";
    else if(17<=time&&time<21) greet = "Good evening";
    else greet = "Good Night";
    greeting.innerText = `${greet}, ${name}`;
    greeting.style.display = "block";
    nameModal.style.display = "none";
}

const storedName = localStorage.getItem("userName");
if(storedName){
    greetUser(storedName);
}

btn.addEventListener('click', () => {
    const name = inputName.value;
    if(name){
        greetUser(name);
        localStorage.setItem("userName", name);
    }
});