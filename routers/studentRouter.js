const express = require('express')
const router = express.Router()
const {StudentRegistration,
    studentLogin
} = require("../controllers/StudentController")

router.route("/student-signUp").post(StudentRegistration)
// router.post("/student-signUp", StudentRegistration)
 router.post("/student-login", studentLogin)

module.exports = router