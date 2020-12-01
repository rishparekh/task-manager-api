const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const { ObjectID } = require('mongodb')

const app = express()
const port = process.env.PORT

/* app.use((req, res, next) => {
    if (req.method === 'GET') {
        res.send('Get requests are disbaled')
    } else {
        next()
    }
}) */



/* const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, callBack) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return callBack(new Error('Please upload a Word document'))
        }
        callBack(undefined, true)
    }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({
        error:error.message
    })
}) */


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on the port ' + port)
})

/* const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'Red12345$'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log('password', password)
    console.log('Hashed password', hashedPassword)

    const isMatch = await bcrypt.compare(password, hashedPassword)
    console.log('isMatch', isMatch)

}

myFunction()

const jwt = require('jsonwebtoken')

const jwtFunction = async () => {
    const token = jwt.sign({ _id: 'abcd1234' }, 'thisismynewcourse', { expiresIn: '7 days' })
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)

}

jwtFunction() */
