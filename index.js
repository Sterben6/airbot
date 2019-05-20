const discord = require('discord.js')
const { token } = require('./config.json')
const client = new discord.Client

client.login(token)
