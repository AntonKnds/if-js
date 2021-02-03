/*//Clases
const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  }
]

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return (this.firstName + " " + this.lastName);
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    return (new Date().getFullYear() - this.admissionYear);
  }
}

class Students {
  constructor(students) {
    this.students = students.flatMap(function ({firstName, lastName, admissionYear, courseName}) {
      return (new Student(firstName, lastName, admissionYear, courseName));
    });
  }

  getInfo() {
    const result = [];
    this.students.forEach(function (element) {
      result.push(`${element.fullName} - ${element.courseName} - ${element.course} курс`);
    })
    return result;
  }
}

const students = new Students(studentsData);
console.log(students.getInfo());


//Symbol.iterator
const text = document.querySelectorAll('p');

let colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this.data;
  },
  next(counter) {
    return {value: this.data[counter], done: false}
  }
};

function addCounter() {
  let counter = 0;
  return function (event) {
    event.target.style.color = colors.next(counter).value;
    counter = counter > 3 ? 0 : counter + 1;
  }
};

text.forEach(elem => elem.addEventListener('click', addCounter()));
*/
/*
//Calendar
let calendar = [];
function getCalendarMonth(year, month, daysInWeek, checkInDate, checkOutDate) {
  let days = [];
  let week = [];
  let lastDayPreviousMonth = getLastDayOfMonth(year, month);
  let lastDayCurrentMonth = getLastDayOfCurrentMonth(year,month);
  let offsetDay = offSet(year,month);
  let currentDay = new Date().getDate();

  function offSet(year, month) {
    let date = new Date(year, month, 0);
    return date.getDay();
  }

  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month, 0);
    return date.getDate();
  }

  function getLastDayOfCurrentMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

  if (daysInWeek > 7) {
    throw new Error("incorrect date");
  };

  for (let i = (lastDayPreviousMonth - offsetDay + 1); i <= lastDayPreviousMonth; i++) {
    days.push({
      dayOfMonth: i,
      currentMonth: false,
      selectDay: (checkInDate == i || checkOutDate == i),
    });
  };

  for (let i = 1; i <= lastDayCurrentMonth; i++) {
    days.push({
      dayOfMonth: i,
      currentMonth: true,
      selectDay: (checkInDate == i || checkOutDate == i),
    });
    if (days.length >= daysInWeek) {
      week = days.splice(0, daysInWeek);
      calendar.push(week);
    };
  };
  if ((days.length < daysInWeek) && days.length !== 0) {
    calendar.push(days);
    for (let i = 1; days.length < daysInWeek; i++) {
      days.push({
        dayOfMonth: i,
        currentMonth: false,
        selectDay: (checkInDate == i || checkOutDate == i),
      });
    };
  };
  calendar.forEach((elem) => {
    for ( let i = 0; i < elem.length; i++) {
      if ( elem[i].dayOfMonth == currentDay) {
        elem[i].currentDay = true;
      }
    }
  })
  return (calendar);
};

getCalendarMonth(2020, 0, 7, 15, 20);
console.log(calendar);
*/
//sessionStorage
const hotels = document.getElementById('homes-wrapper');
let arr;
(async () => {
  if (sessionStorage.getItem('hotels') === null) {
    data = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular', {
      method: "GET"
    }).then((response) => response.text())
      .then((data) => JSON.parse(data));
    sessionStorage.setItem('hotels', JSON.stringify(data));
  } else {
    data = JSON.parse(sessionStorage.getItem('hotels'));
  }
  if (!data) {
    console.log('Error!!')
  }
  data.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('hotelCard');
    element.innerHTML = `
    <div class="col-xs-3">
        <div class="card">
            <img src="${item.imageUrl}" alt="${item.country}">
            <div class="hotelName">${item.name}</div>
            <div class="location">${item.city}</div>
        </div>
    </div>
  `;
    hotels.appendChild(element);
  });
})();

// formData
const formEl = document.getElementById('form');
formEl.addEventListener('submit', async event => {
  event.preventDefault();
  const fetchOptions = {
    method: 'POST',
    body: new FormData(formEl),
  };

  const res = await fetch('https://fe-student-api.herokuapp.com/api/file', fetchOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(result => result)
    .catch(error => console.log(error.message));
  console.log(res);
});

