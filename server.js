const express = require('express')
const app = express()
const {Pool} = require('pg')

const PORT = process.env.PORT || 5001

app.use(express.static('public'))

const pool = new Pool({
    password: '',
    host: 'localhost',
    user: 'garrettross',
    database: 'test',
    port: 5432
})


// paths
// Get all messages
app.get('/api/messages', async (req, res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM message')
        res.send(rows)
    } catch (error) {
        console.log('server error')
        res.status(500).json(error)
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})