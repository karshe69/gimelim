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
    var inputDate = new Date(dateInput.value);
    inputDate.setDate(inputDate.getDate() + parseInt(numberInput.value));
    const yyyy = inputDate.getFullYear();
    let mm = inputDate.getMonth() + 1; // Months start at 0!
    let dd = inputDate.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedDate = "אתם צריכים לחזור לבסיס בתאריך:\n" + dd + '/' + mm + '/' + yyyy;
    output.innerHTML = formattedDate;
});