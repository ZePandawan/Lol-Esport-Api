/*
import fetch from 'node-fetch';
const fetch = require('node-fetch');
// Définition de l'adresse URL à requêter
const url = 'https://esports-api.lolesports.com/persisted/gw/getLeagues?hl=fr-FR';

// Configuration de la requête avec l'en-tête
const options = {
  method: 'GET',
  headers: {
    'x-api-key': '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z'
  }
};

// Envoi de la requête avec fetch
fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Réponse réseau incorrecte');
    }
    return response.json(); // Analyser la réponse en tant que JSON
  })
  .then(data => {
    console.log('Réponse de l\'API :', data);
  })
  .catch(error => {
    console.error('Erreur lors de la requête :', error.message);
  });


*/

const express = require('express');
const app = express();
const PORT = 6969;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        name: 'LoL API',
        version: "0.1.0",
        author: "Vincent REIX <vincentreix54@gmail.com>",
        repository: ""
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


