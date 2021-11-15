const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
    findPerson: function (type, id) {
        return this[type + "s"].find((person) => person.id === id);
    },
    assignStudent: function (id, subject) {
        let availableTeacher = this.teachers.find(
            (teacher) =>
                teacher.subjects.includes(subject) && teacher.capacityLeft
        );
        if (availableTeacher) {
            availableTeacher.students.push(id);
            availableTeacher.capacityLeft--;
        } else {
            console.log("Sorry, no available teachers left");
        }
    },
    assignTeachersSubject: function (teacherId, subject) {
        let teacher = this.findPerson("teacher", teacherId);
        !teacher.subjects.includes(subject) && teacher.subjects.push(subject);
    },
    getStudentsTeachers: function (studentID) {
        return this.teachers.filter((teacher) =>
            teacher.students.includes(studentID)
        );
    },
};

// Tests
console.log(school.findPerson("student", 12)); // { id: 12, name: 'Old-Timmy', age: 86 }
school.assignStudent(12, "history");
school.assignTeachersSubject(2, "wow");
console.log(school.findPerson("teacher", 2));
console.log(school.getStudentsTeachers(12));
