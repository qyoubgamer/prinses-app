function myFunction() {
  var x = document.getElementById('form_aandacht');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

//index.js
function sendEmailNood() {
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'prinsesjeaandacht@gmail.com',
    Password: 'Nassim2011',
    To: 'prinsesjeaandacht@gmail.com',
    From: 'prinsesjeaandacht@gmail.com',
    Subject: 'NOOD!!!!!!!!!!! Prinsesje wil aandacht',
    Body: 'Ze heeft op de noodknop gedrukt en heeft nu aandacht nodig!!!!',
  }).then((message) =>
    alert("Aandacht's verzoek is gestuurd naar je mannetje")
  );
}

function sendEmail() {
  var num = document.getElementById('aandacht_nummer').value;
  var text = document.getElementById('aandacht_text').value;
  var bodyText = `Gekozen nummer is: ${num} <br> Text is: ${text}`;

  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'prinsesjeaandacht@gmail.com',
    Password: 'Nassim2011',
    To: 'prinsesjeaandacht@gmail.com',
    From: 'prinsesjeaandacht@gmail.com',
    Subject: 'Prinsesje wil aandacht',
    Body: bodyText,
  }).then((message) =>
    alert("Aandacht's verzoek is gestuurd naar je mannetje")
  );
}

function sendEmailVuur() {
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'prinsesjeaandacht@gmail.com',
    Password: 'Nassim2011',
    To: 'prinsesjeaandacht@gmail.com',
    From: 'prinsesjeaandacht@gmail.com',
    Subject: 'VUUR FOTO!!! prinsesje mist je!',
    Body: 'Stuur een vuur foto!!!!!!!',
  }).then((message) =>
    alert("Aandacht's verzoek is gestuurd naar je mannetje")
  );
}

function sendEmailHart() {
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'prinsesjeaandacht@gmail.com',
    Password: 'Nassim2011',
    To: 'prinsesjeaandacht@gmail.com',
    From: 'prinsesjeaandacht@gmail.com',
    Subject: 'HART FOTO!!! prinsesje wil een kusje!',
    Body: 'Stuur een foto met een kusje!!!!!',
  }).then((message) =>
    alert("Aandacht's verzoek is gestuurd naar je mannetje")
  );
}

function sendEmailDatum() {
  var datum = document.getElementById('datum_dag').dataset.value;
  var dateText = document.getElementById('datum_text').value;
  var dateDatum = `Prinsesje wil een date op: ${datum} <br> En ze wilt: ${dateText}`;

  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'prinsesjeaandacht@gmail.com',
    Password: 'Nassim2011',
    To: 'prinsesjeaandacht@gmail.com',
    From: 'prinsesjeaandacht@gmail.com',
    Subject: 'Prinsesje wil een date!!!!!!',
    Body: dateDatum,
  }).then((message) =>
    alert("Aandacht's verzoek is gestuurd naar je mannetje")
  );
}

// calander
const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector(
  '.date-picker .selected-date'
);
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector(
  '.date-picker .dates .month .next-mth'
);
const prev_mth_element = document.querySelector(
  '.date-picker .dates .month .prev-mth'
);
const days_element = document.querySelector('.date-picker .dates .days');

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

// EVENT LISTENERS
date_picker_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

// FUNCTIONS
function toggleDatePicker(e) {
  if (!checkEventPathForClass(e.path, 'dates')) {
    dates_element.classList.toggle('active');
  }
}

function goToNextMonth(e) {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  mth_element.textContent = months[month] + ' ' + year;
  populateDates();
}

function goToPrevMonth(e) {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  mth_element.textContent = months[month] + ' ' + year;
  populateDates();
}

function populateDates(e) {
  days_element.innerHTML = '';
  let amount_days = 31;

  if (month == 1) {
    amount_days = 28;
  }

  for (let i = 0; i < amount_days; i++) {
    const day_element = document.createElement('div');
    day_element.classList.add('day');
    day_element.textContent = i + 1;

    if (
      selectedDay == i + 1 &&
      selectedYear == year &&
      selectedMonth == month
    ) {
      day_element.classList.add('selected');
    }

    day_element.addEventListener('click', function () {
      selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
      selectedDay = i + 1;
      selectedMonth = month;
      selectedYear = year;

      selected_date_element.textContent = formatDate(selectedDate);
      selected_date_element.dataset.value = selectedDate;

      populateDates();
    });

    days_element.appendChild(day_element);
  }
}

// HELPER FUNCTIONS
function checkEventPathForClass(path, selector) {
  for (let i = 0; i < path.length; i++) {
    if (path[i].classList && path[i].classList.contains(selector)) {
      return true;
    }
  }

  return false;
}
function formatDate(d) {
  let day = d.getDate();
  if (day < 10) {
    day = '0' + day;
  }

  let month = d.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }

  let year = d.getFullYear();

  return day + ' / ' + month + ' / ' + year;
}
