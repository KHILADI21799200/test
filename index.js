const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const {addStudent, searchStudent} = require('./controllers/student')
require('dotenv').config()


const app = express()
const port = 7500
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const mongoURI = process.env.MONGO_URI

// Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

// Adding Student GET and POST
app.get('/add_student', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'addStudent.html'));
})
app.post('/add_student', addStudent)

// Student Search GET and POST Routes:
app.get('/search_student', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'searchStudent.html'));
})

app.post('/search_student', searchStudent)

app.listen(port, () => {
    console.log(`Temporary Server is online on port ${port}`)
})