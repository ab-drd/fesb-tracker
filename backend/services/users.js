let students = require('../mockedValues/users');
let presenceTotal = require('../mockedValues/presence_general');
let presenceToday = require('../mockedValues/presence_today');
let scheduleToday = require('../mockedValues/schedule_today');
let scheduleWeek = require('../mockedValues/schedule_week');

class UserServices {
    static async findStudent(fesbAccount) {
        try {
            let student = students.find(student => student.fesbAccount === fesbAccount);
            return student;

        } catch (error) {
            console.error(error);
          }
    }

    static async findStudentById(id) {
        try {
            let student = students.find(student => student.id === id);
            return student;

        } catch (error) {
            console.error(error);
          }
    }

    static async findPresenceByStudentId(id) {
        try {
            let presence = presenceTotal.find(presence => presence.id_studenta === id);
            return presence;

        } catch (error) {
            console.error(error);
          }
    }

    static async findTodaysPresenceByStudentId(id) {
        try {
            let presence = presenceToday.find(presence => presence.id_studenta === id);
            return presence;

        } catch (error) {
            console.error(error);
          }
    }

    static async findTodaysScheduleByStudentId(id) {
        try {
            let schedule = scheduleToday.find(schedule => schedule.id_studenta === id);
            return schedule;

        } catch (error) {
            console.error(error);
          }
    }
    static async findWeekScheduleByStudentId(id) {
        try {
            let schedule = scheduleWeek.find(schedule => schedule.id_studenta === id);
            return schedule;


        } catch (error) {
            console.error(error);
          }
    }
}

module.exports = UserServices;