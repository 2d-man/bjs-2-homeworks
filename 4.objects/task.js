function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];;
}

let studentViktor = new Student('Viktor', 'male', 24);
let studentAnatoly = new Student('Anatoly', 'male', 24);
let studentSemyon = new Student('Semyon', 'male', 24);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks) {
        this.marks.push(...marks);
    } else if (!this.hasOwnProperty('excluded')) {
        this.marks = marks;
    }
}

Student.prototype.getAverage = function () {
    let average = 0;
    if ((!this.marks) || (this.marks.length < 1)) {
        return 0;
    } else {
        for (let i = 0; i < this.marks.length; i++) {
            average += this.marks[i]
        }
        return average / this.marks.length
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
