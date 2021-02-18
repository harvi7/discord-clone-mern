// import express from 'express'
// import mongoose from 'mongoose'

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const mongoData = require('./mongoData')

// app config
const app = express()
const port = process.env.PORT || 8002

// middlewares
app.use(express.json())
app.use(cors())

// db config
const monogoURI = 'mongodb+srv://admin:admin@cluster0.keyzx.mongodb.net/discordDB?retryWrites=true&w=majority'

mongoose.connect(monogoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// api routes
// Add a new channel
app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/new/channel', (req, res) => {
    const dbData = req.body

    mongoData.create(dbData, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// Get channel list
app.get('/get/channelList', (req, res) => {
    mongoData.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            let channels = []

            data.map((channelData) => {
                const channelInfo = {
                    id: channelData._id,
                    name: channelData.channelName
                }
                channels.push(channelInfo)
            })
            res.status(200).send(channels)
        }
    })
})

app.post('/new/message', (req, res) => {
    const newMessage = req.body

    mongoData.update(
        { _id: req.query.id },
        { $push: { conversation: req.body } },
        (err, data) => {
            if (err) {
                console.log('Error saving message...')
                console.log(err)
                
                res.status(500).send(err)
            } else {
                res.status(201).send(data)
            }
        }
    )
})

app.get('/get/data', (req, res) => {
    mongoData.find((err, data) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(data)
            }
        }
    )
})

app.get('/get/conversation', (req, res) => {
    const id = req.query.id

    mongoData.find({ _id: id}, (err, data) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(data)
            }
        }
    )
})

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`))