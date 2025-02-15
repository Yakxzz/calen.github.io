function createCalendar() {
    const calendar = document.getElementById("calendar");
    const daysInMonth = new Date(2025, 2, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
        let day = document.createElement("div");
        day.className = "day";
        day.innerText = i;
        calendar.appendChild(day);
    }
}
createCalendar();