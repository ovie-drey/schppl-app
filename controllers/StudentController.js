const studentModel = require('../models/studentModel')
const bcrypt = require('bcryptjs')

const StudentRegistration = async (req, res) => {
   try {
     const {name,password,email, StudentClass} = req.body
     const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const lowerCasePassword = password.toLowerCase()

    if(!name || !password || !email || !StudentClass){
        return res.status(404).json({message:'all fields are requires'})
    }

    //testing if email is valid 
    if(!validEmail.test(email)){
         return res.status(404).json({message:'enter a valid email'})
    }

    const existingUser = await studentModel.findOne({email})
    if(existingUser){
        return res.status(400).json({message:"email already exist"})
    }

    //password security
    const saltedPassword = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(lowerCasePassword, saltedPassword)

    //creating a new student
    const savedstudent = new studentModel({
        name,
        lowerCasePassword:hashedPassword,
        email,
        StudentClass
    })
    await savedstudent.save()

    res.status(200).json({message:"student created successsfuly"})
    
   } catch (error) {
     res.status(500).json()
   }

    
}

const studentLogin = async (req,res) => {
  try {

      const {email, password} = req.body
    const lowerCasePassword = password.toLowerCase()
    const validUser = await studentModel.findOne({email})
    if(!validUser){
        return res.status(404).json({message:"user with this email is not registered"})
    }

    const existingPassword = bcrypt.compare(lowerCasePassword, validUser.password)
    if(!existingPassword){
        return res.status(400).json({message:"password is not correct"})
    }
   const data = {
    name: validUser.name,
    email: validUser.email,
    _id: validUser._id,
    StudentClass: validUser.StudentClass
};

    
    res.status(200).json({message:"login successful", data})
    
  } catch (error) {
    res.status(500).json({message:error.message})
  }
   
    
}



module.exports ={
    StudentRegistration,
    studentLogin
}