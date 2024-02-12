const UserServices = require('../services/users');
const JsonWebTokenServices = require('../services/jwt.js');

const fs = require("fs");
var path = require("path");
const schedule = require("../mockedValues/schedule_today");

class UserController {
    static async login(req, res) {
      const { username, password } = req.body;

      console.log(req.body);

      try {
        
        const student = await UserServices.findStudent(username);
        console.log('Student:', student);
      
        if (!student || !student.password) {
          return res.status(401).json({
            error: 'Student does not exist or password is incorrect',
          });
        }
      
        let isPasswordMatched = password === student.password;
      
        if (!isPasswordMatched) {
          return res.status(401).json({
            error: 'Student does not exist or password is incorrect',
          });
        }
      
        const accessToken = await JsonWebTokenServices.generateAccessToken(student.id + 1);
        console.log(accessToken);
      
        return res.status(200).send({
          accessToken,
        });
      } catch (error) {
        console.error('Error finding student:', error);
        return res.status(500).json({
          error: 'Internal server error',
        });
      }
      
    }

    static async presenceTotal (req, res) {
        try {
            const id = req.user.id;

            const totalPresence = await UserServices.findPresenceByStudentId(id);

            if(!totalPresence) {
                return res.status(401).json({
                    error: "Student not found",
                })
            }

            return res.status(200).send({
                totalPresence,
              });
        } catch (error) {
            console.error(error);
        }
    }

    static async presenceToday (req, res) {
        try {
            const id = req.user.id;

            const todayPresence = await UserServices.findTodaysPresenceByStudentId(id);

            if(!todayPresence) {
                return res.status(401).json({
                    error: "Student not found",
                })
            }

            return res.status(200).send({
                todayPresence,
              });
        } catch (error) {
            console.error(error);
        }
    }

    static async scheduleToday (req, res) {
        try {
          console.log(req.body);
          const id = req.user.id;

          const scheduleById = await UserServices.findTodaysScheduleByStudentId(id);

          if(!scheduleById) {
              return res.status(401).json({
                  error: "Student not found",
              })
          }

          const schedule = scheduleById.kolegiji;
          return res.status(200).send({
              schedule,
            });
          } catch (error) {
              console.error(error);
          }
    } 
    static async scheduleWeek (req, res) {
        try {
            const id = req.user.id;

            const scheduleById = await UserServices.findWeekScheduleByStudentId(id);

            if(!scheduleById) {
                return res.status(401).json({
                    error: "Student not found",
                })
            }

            const schedule = scheduleById.kolegiji;
            return res.status(200).send({
                schedule,
              });
        } catch (error) {
            console.error(error);
        }
    }

  static async scheduleTodayUpdate(req, res) {
    try {
      const id = req.user.id;
      const lecture = req.body;

      const todaySchedule = await UserServices.findTodaysScheduleByStudentId(
        id
      );

      if (!todaySchedule) {
        return res.status(401).json({
          error: "Student not found",
        });
      }

      todaySchedule.kolegiji.forEach((lec) => {
        if (lec.code === lecture.code) {
          lec.presence = true;
        }
      });

      schedule.forEach((sch) => {
        if (sch.id_studenta === todaySchedule.id_studenta) {
          sch.id_studenta = todaySchedule.id_studenta;
        }
      });

      fs.writeFileSync(
        path.resolve(__dirname, "../mockedValues/schedule_today.json"),
        JSON.stringify(schedule),
        (err) => {
          if (err) return console.log(err);
        }
      );
      return res.status(200).send("OK");
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = UserController;
