const calculateBtn = document.getElementById("calculateBtn");
const dateInput = document.getElementById("dateInput");
const timeInput = document.getElementById("timeInput");
const numberInput = document.getElementById("numberInput");
const output = document.getElementById("output");


calculateBtn.addEventListener("click", function () {
    if (!dateInput.value || !timeInput.value || !numberInput.value) {
        alert("נא למלא את כל הפרטים");
        return
    }
    const inputTime = new Date("1970-01-01T" + timeInput.value + "Z");
    const minTime = new Date("1970-01-01T08:00:00Z");
    var days = numberInput.value
    days++
    if (inputTime < minTime) {
        days--
    }
    var inputDate = new Date(dateInput.value);
    inputDate.setDate(inputDate.getDate() + days);
    const yyyy = inputDate.getFullYear();
    let mm = inputDate.getMonth() + 1; // Months start at 0!
    let dd = inputDate.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedDate = "אתם צריכים לחזור לבסיס בתאריך: " + dd + '/' + mm + '/' + yyyy;
    output.innerHTML = formattedDate;
});