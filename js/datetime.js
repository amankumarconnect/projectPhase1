function DateTime() {
    document.querySelector(".dt").textContent = new Date().toLocaleString();
}
DateTime();
setInterval(DateTime, 1000);
