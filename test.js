import fetch from 'node-fetch';
//const fetch = require('node-fetch');
// Définition de l'adresse URL à requêter
const url = 'https://esports-api.lolesports.com/persisted/gw/getTeams?hl=fr-FR';

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
    const result  = data.data.teams;
    result.forEach(element => {
        console.log(element);
    });
  })
  .catch(error => {
    console.error('Erreur lors de la requête :', error.message);
  });
