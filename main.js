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
    return (2020 - this.admissionYear);
  }
}

class Students {
  constructor(students) {
    this.students = students.flatMap(function ({firstName, lastName, admissionYear, courseName}) {
      return (new Student(firstName, lastName, admissionYear, courseName));
    });
  }
}

Students.prototype.getInfo = function () {
  const result = [];
  this.students.forEach(function (element) {
    result.push(`${element.fullName} - ${element.courseName} - ${element.course} курс`);
  })
  return result;
};

const students = new Students(studentsData);
console.log(students.getInfo());



