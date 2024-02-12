const initializeApp = require("firebase/app").initializeApp;
const firebase_database = require("firebase/database");
const getDatabase = firebase_database.getDatabase;
const ref = firebase_database.ref;
const onValue = firebase_database.onValue;
const child = firebase_database.child;
const get = firebase_database.get;

const firebaseConfig = require('./firebaseConfig').firebaseConfig;
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let studentList = [];
let courseList = [];

const studentDbRef = ref(database, "students");
onValue(studentDbRef, (snapshot) => {
    const studentData = snapshot.val();
    studentList = studentData;
})

const coursesDbRef = ref(database, "courses");
onValue(coursesDbRef, (snapshot) => {
    const courseData = snapshot.val();
    courseList = courseData;
})

/*
function readCourseIdData(courseId) {
    let reference = ref(database, `courses/${courseId}`).toJSON();
    onValue(reference, (snapshot) => {
        console.log(snapshot.val());
    });
}*/

async function readStudentList() {
    return studentList;
}
  

module.exports = {
    /*readCourseIdData,*/
    readStudentList
};




