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

console.log(Student instanceof User);
const students = new Students(studentsData);
console.log(students.getInfo());


//Symbol.iterator//

const text1El = document.getElementById("text1");
const text2El = document.getElementById("text2");
const text3El = document.getElementById("text3");

text1El.addEventListener('click', addCounter());
text2El.addEventListener('click', addCounter());
text3El.addEventListener('click', addCounter());

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



