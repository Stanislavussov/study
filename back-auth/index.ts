import * as express from 'express'

const bodyParser = require('body-parser')
const {port, tokenKey} = require('./constants')
const cors = require('cors')
const crypto = require("crypto")

const app = express()

interface IMockUser {
    readonly id?: number,
    login: string,
    email: string,
    password?: string,
    registerData: string
}

const mockUser: IMockUser = {
    id: 2,
    login: "Max",
    email: "max@gmail.com",
    password: "daddqweq3e23e23e23r2r23r23r23r2r2r2t656",
    registerData: "02-04-2021T20:00:00Z"
}

app.use(async (req, res, next) => {
    if(req.url === '/sign-in') {
        return next()
    }

    if(req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1]
        const tokenParts = token.split('.')
        const signature = crypto.createHmac('SHA256', tokenKey).update(`${tokenParts[0]}.${tokenParts[1]}`).digest('base64')
        if(tokenParts[2] === signature){
            next()
        }
    } else {
        res.status(401).send("You need to authorize")
    }
})

app.get('/users', async (req, res) => {
    res.send("Data")
})

app.post('/sign-in', async (req, res) => {
    // request get user data from database
    const dataExistUser = userFormat<IMockUser>(mockUser)
    if(!dataExistUser){
        res.status(403).send("User is empty")
    }
    const head = Buffer.from(JSON.stringify({alg: 'HS256', typ: 'jwt'})).toString('base64')
    const body = Buffer.from(JSON.stringify(dataExistUser)).toString('base64')
    const preSignature = crypto.createHmac('SHA256', tokenKey)
    const signature = preSignature.update(`${head}.${body}`).digest('base64')
    console.log("is working")
    const token = `${head}.${body}.${signature}`

    res.send(token)
})


app.listen(port, () => {
    console.log(`Server is working on ${port} port!`)
})


const userFormat = function<T>(user: IMockUser): { registerData: string; id: number; login: string; email: string } {
    return {
        id: user.id,
        login: user.login,
        email: user.email,
        registerData: user.registerData
    }
}