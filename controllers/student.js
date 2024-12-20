const { Student } = require('../models/Student');

// Controller to handle adding a student to the database
const addStudent = async (req, res) => {
  try {
    // Destructure form fields from the request body
    const {
      studentID,
      name,
      fatherName,
      email,
      dob,
      doj,
      address,
      contact,
      schoolOrCollege,
    } = req.body;


    // Create a new student document
    const newStudent = new Student({
      studentID,
      name,
      fatherName,
      email,
      dob,
      doj,
      address,
      contact,
      schoolOrCollege,
    });

    // Save the student document to the database
    await newStudent.save();

    // Send a success response
    res.status(201).send(`
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Data Entry Successfull</title>
        </head>
        <body>
            <p>Data Inserted Successfully !</p>
            <a href="/add_student">Add a New</a><br><br>
            <a href="/">Go to Home</a>
            
        </body>
      </html>`);
  } catch (error) {
    console.error('Error adding student:', error);
    res.status(500).send('Failed to add student');
  }
};


const searchStudent = async (req, res) => {
  try {
    const { studentId } = req.body; // Extract studentId from the request body
    const student = await Student.findOne({ studentID: studentId }); // Use studentID instead of studentId

    if (student) {
      res.json({
        success: true,
        data: student
      });
    } else {
      res.json({
        success: false,
        message: 'Student not found'
      });
    }
  } catch (error) {
    console.error('Error searching for student:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while searching for the student'
    });
  }
};


// Export the controller as a module
module.exports = {
  addStudent, searchStudent
};
