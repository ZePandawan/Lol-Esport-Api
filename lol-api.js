//const express = require('express');
//const fetch = require('node-fetch');
import express from 'express';
import fetch from 'node-fetch';


const app = express();
const PORT = 6969;

app.use(express.json());

// #########################################################################################################################
// ##################################################### DEFAULT ROUTE #####################################################
// #########################################################################################################################
app.get('/', (req, res) => {
    res.json({
        name: 'LoL API',
        version: "0.1.0",
        author: "Vincent REIX <vincentreix54@gmail.com>",
        repository: ""
    });
});
// #########################################################################################################################



// #########################################################################################################################
// ##################################################### LEAGUES ROUTES ####################################################
// #########################################################################################################################
app.get('/leagues', async (req,res) => {
  const data = await requestData(`getLeagues?hl=fr-FR`);
  res.json(data);
});

app.get('/league/id/:id', async (req,res) => {
  const leagueId = req.params.id;
  const data = await requestData(`getLeagues?hl=fr-FR`);
  const leagues = data.data.leagues;
  const league = leagues.find(l => l.id == leagueId);
  res.json(league);
});

app.get('/league/name/:name', async (req,res) => {
  const leagueName = req.params.name;
  const data = await requestData(`getLeagues?hl=fr-FR`);
  const leagues = data.data.leagues;
  const league = leagues.find(l => l.name == leagueName);
  res.json(league);
});
// #########################################################################################################################



// #########################################################################################################################
// ################################################### TOURNAMENTS ROUTES ##################################################
// #########################################################################################################################
app.get('/tournaments', async (req,res) => {
  const data = await requestData(`getCompletedEvents?hl=fr-FR`);
  const tournaments = data.data.schedule.events;
  res.json(tournaments);
});

app.get('/tournaments/league/:id', async (req,res) => {
  const leagueId = req.params.id;
  const data = await requestData(`getTournamentsForLeague?hl=fr-FR&leagueId=${leagueId}`);
  res.json(data);
});

app.get('/tournament/:id', async (req,res) => {
  const tournamentId = req.params.id;
  const data = await requestData(`getStandings?hl=fr-FR&tournamentId=${tournamentId}`);
  res.json(data);
});
// #########################################################################################################################



// #########################################################################################################################
// ###################################################### TEAMS ROUTES #####################################################
// #########################################################################################################################
app.get('/teams', async (req,res) => {
  const data = await requestData(`getTeams?hl=fr-FR`);
  res.json(data);
});

app.get('/team/:name', async (req,res) => {
  const teamName = req.params.name;
  const data = await requestData(`getTeams?hl=fr-FR`);
  const teams = data.data.teams;
  const team = teams.find(t => t.name == teamName);
  res.json(team);
});

app.get('/teams/:search', async (req,res) => {
  const searchRequest = req.params.search;
  const data = await requestData(`getTeams?hl=fr-FR`);
  const teams = data.data.teams;
  const searchResults = teams.filter(t => t.name.includes(searchRequest));
  res.json(searchResults);
});

app.get('/teams/league/:name', async (req,res) => {
  const leagueName = req.params.name;
  const data = await requestData(`getTeams?hl=fr-FR`);
  const teams = data.data.teams;
  const teamsInLeague = teams.filter(t => t.homeLeague && t.homeLeague.name && t.homeLeague.name.includes(leagueName));
  res.json(teamsInLeague);
});

app.get('/teams/region/:name', async (req,res) => {
  const regionName = req.params.name;
  const data = await requestData(`getTeams?hl=fr-FR`);
  const teams = data.data.teams;
  const teamsInRegion = teams.filter(t => t.homeLeague && t.homeLeague.region && t.homeLeague.region.includes(regionName));
  res.json(teamsInRegion);
});
// #########################################################################################################################



// #########################################################################################################################
// ###################################################### MATCHS ROUTE #####################################################
// #########################################################################################################################
app.get('/match/:id', async (req,res) => {
  const matchId = req.params.id;
  const data = await requestData(`getWindow?gameId=${matchId}`);
  res.json(data);
});
// #########################################################################################################################



// #########################################################################################################################
// #################################################### 404 ERROR ROUTE ####################################################
// #########################################################################################################################
app.use((req, res, next) => {
  res.status(404).send('Sorry, this route does not exist!');
});
// #########################################################################################################################

// Launch server on specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// Fonction pour récupérer les données de l'API
async function requestData(path){
  const url = `https://esports-api.lolesports.com/persisted/gw/${path}`;
  const options = {
    method: 'GET',
    headers: {
      'x-api-key': '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z'
    }
  };
  
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Réponse réseau incorrecte');
    }
    const data = await response.json(); // Analyser la réponse en tant que JSON
    console.log('Réponse de l\'API :', data);
    return data;
  } catch (error) {
    console.error('Erreur lors de la requête :', error.message);
    throw error;
  }
}