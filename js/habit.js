//Aman

const habitButton = document.getElementById("habitButton");
const count = document.getElementById("count");

const showCount = (dati) => {
    const time = new Date();
    const CountDays = Math.floor((time - new Date(dati)) / (1000 * 60 * 60 * 24));
    count.innerText = `${CountDays}`;
    count.style.display = "block";
    habitButton.style.display = "none";
};

const startDate = localStorage.getItem("startDate");
if (startDate) {
    showCount(startDate);
}

habitButton.addEventListener('click', () => {
    const startDate = new Date();
    showCount(startDate);
    localStorage.setItem("startDate", startDate);
});