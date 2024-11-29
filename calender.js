const week = document.getElementById('week');
const month = document.getElementById('month');
const date = document.getElementById('date');
const year = document.getElementById('year');
const currentDays = document.getElementById('currentDate');
const previousBtn = document.querySelector('.change_btn_l');
const nextBtn = document.querySelector('.change_btn_r');

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let dateToday = new Date();

function updateDateDisplay() {
  const dayNmbr = dateToday.getDay();
  const currentMonthNmbr = dateToday.getMonth();
  const currentDate = dateToday.getDate();
  const currentYear = dateToday.getFullYear();

  week.innerHTML = weeks[dayNmbr];
  month.innerHTML = months[currentMonthNmbr];
  date.innerHTML = currentDate;
  year.innerHTML = currentYear;
}

function renderCalendar() {
  const currentMonth = new Date(dateToday.getFullYear(), dateToday.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(dateToday.getFullYear(), dateToday.getMonth(), 1).getDay();
  const lastDateOfPrevMonth = new Date(dateToday.getFullYear(), dateToday.getMonth(), 0).getDate();
  let days = '';

  for (let i = firstDayOfMonth; i > 0; i--) {
    days += `<div class="date prev_day">${lastDateOfPrevMonth - i + 1}</div>`;
  }

  for (let i = 1; i <= currentMonth; i++) {
    if (i === dateToday.getDate()) {
      days += `<div class="date current_day">${i}</div>`; // Highlight current date
    } else {
      days += `<div class="date">${i}</div>`;
    }
  }

  const totalCells = 42;
  const usedCells = firstDayOfMonth + currentMonth;
  const remainingCells = totalCells - usedCells;
  for (let i = 1; i <= remainingCells; i++) {
    days += `<div class="date prev_day">${i}</div>`;
  }

  currentDays.innerHTML = days;
}

previousBtn.addEventListener('click', () => {
  dateToday.setDate(dateToday.getDate() - 1);
  updateDateDisplay();
  renderCalendar();
});

nextBtn.addEventListener('click', () => {
  dateToday.setDate(dateToday.getDate() + 1);
  updateDateDisplay();
  renderCalendar();
});

updateDateDisplay();
renderCalendar();
