const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
	console.log(`[!] App on ${PORT}`)
});

app.use(express.static(__dirname + '/build'))

app.get('*', (req, res, next) => {
    res.sendFile(__dirname + '/build/index.html')
});