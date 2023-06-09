import {Sequelize} from "sequelize"
import dotenv from 'dotenv'
dotenv.config()

export const db = new Sequelize('app', '', '',{
    storage:"./food.sqlite",
    dialect: "sqlite",
    logging: false,
})
//Twilio
export const accountSid = process.env.AccountSID;
export const authToken = process.env.AuthToken;
export const fromAdminPhone = process.env.FromAdminPhone
//Nodemailer
export const GMAIL_USER = process.env.GMAIL_USER
export const GMAIL_PASS = process.env.GMAIL_PASS
export const fromAdminMail = process.env.fromAdminMail as string
export const userSubject = process.env.userSubject as string
//Secret
export const APP_SECRET = process.env.APP_SECRET!