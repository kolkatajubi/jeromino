const express = require('express')
const app = express();
var path = require('path');
var socket = require("socket.io");
port = 4001;

var server = app.listen(port, function () {
    console.log("listening to server request on port-4001");
});


//var socket = require("socket.io-client")("http://127.0.0.1:4001")

var io = socket(server);

app.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname + "/dashboard.html"));
});
app.get('/css', (req, resp) => {
    resp.sendFile(path.join(__dirname + "/styles.css"));
});
app.get('/script', (req, resp) => {
    resp.sendFile(path.join(__dirname + "/erroraction.js"));
});
app.get('/api', (req, resp) => {
    resp.sendFile(path.join(__dirname + "/api.js"));
});


io.on('connection', function (socket) {
    console.log('made socket connection', socket.id);
    socket.on('event', function (data) {
        io.emit('event', {
            status: "success",
            data: {
                '001': [
                    {
                        query_id: '001',
                        answer: "answer"
                    },
                    {
                        query_id: '001',
                        answer: "answer2"
                    },
                    {
                        query_id: '001',
                        answer: "answer"
                    }
                ],
                '002': [
                    {
                        query_id: '002',
                        answer: "answer"
                    },
                    {
                        query_id: '002',
                        answer: "answer2"
                    },
                    {
                        query_id: '002',
                        answer: "answer"
                    }
                ]
            }
        })
        console.log(data);
    })
});




