const express = require('express');
const app = express();
const PORT = 6969;

app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.json({
        name: 'LoL API',
        version: "0.1.0",
        author: "Vincent REIX <vincentreix54@gmail.com>",
        repository: ""
    });
});

// Leagues routes
app.get('/leagues',(req,res) => {
  res.json({});
});

app.get('/leagues/id/:id',(req,res) => {
  const leagueId = req.params.id;
  res.json({
    id: leagueId
  });
});

app.get('/leagues/name/:name',(req,res) => {
  const leagueName = req.params.name;
  res.json({
    name: leagueName
  });
});


// 404 error
app.use((req, res, next) => {
  res.status(404).send('Sorry, this route does not exist!');
});

// Launch server on specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
