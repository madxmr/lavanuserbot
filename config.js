/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/



const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './Lavanstax.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v0.1.0 Global',
    USERNAME: process.env.USERNAME === undefined ? '' : process.env.USERNAME,
    PASSWORD: process.env.PASSWORD === undefined ? '' : process.env.PASSWORD,
    PREFIX: process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,
    BRANCH: 'master',
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './Lavanstax.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    AFK_MESSAGE: process.env.AFK_MESSAGE === undefined ? 'Hayat çok kısa, yapacak çok şey var...\nOnlardan birini yapıyorum.. Sahibim şuanda #AFK İam X Kadir' : process.env.AFK_MESSAGE,
    SEND_READ: process.env.SEND_READ === undefined ? 'false' : process.env.SEND_READ,
    PENDING_REQUEST: process.env.PENDING_REQUEST === undefined ? 'true' : process.env.PENDING_REQUEST,
    FOLLOW_SEND: process.env.FOLLOW_SEND === undefined ? 'true' : process.env.FOLLOW_SEND,
    DEFAULT_BIO: process.env.DEFAULT_BIO === undefined ? '❤️ @Lavanderprojects ' : process.env.DEFAULT_BIO,
    SP_DC : process.env.SP_DC === undefined ? '' : process.env.SP_DC,
    SP_KEY : process.env.SP_KEY === undefined ? '' : process.env.SP_KEY
    }
