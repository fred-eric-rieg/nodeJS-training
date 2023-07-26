const { readFile } = require("fs").promises;
const express = require('express');
const app = express();

//app.use(express.json()); // Use that middleware in the request processing pipeline.

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/api/courses', async (req, res) => {
    res.send( await readFile('mosh_coding/index.html', 'utf8') );
});

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course); // Add the new course to the courses array.
    res.send(courses); // Return the new course to the client.
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) { res.status(404).send('Status 404 - The course with the given ID was not found.'); }
    else { res.send(course); }
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
});

// PORT
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}...`));