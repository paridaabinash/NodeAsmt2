const express = require('express');
const app = express();
const port = 4001;
const data = {
    name: 'Abinash Parida',
    age: 23,
    city: 'Odisha'
}
const jsonData = JSON.stringify(data);

app.get('/', (req, res) => {
    res.send(`<h1>Assignment 2</h1>
    <p>Go to /api route to see html data </p>
    <p>Go to /main route to see json data </p>`)
})
app.get('/api', (req, res) => {
    res.write(`<h1>#What is express js? </h1>
    <h2>1.Express. js is a free and open-source web application framework for Node. js.</h2> 
    <h2>2.It is used for designing and building web applications quickly and easily.</h2>`)
    res.end();
})
app.get('/main', (req, res) => {
    res.write(jsonData)
    res.end();
})

app.listen(port, () => {
    console.log(`Connected to port ${port} ✅`);
})