# LOL Esport API

Différents chemins utiles :

## Ligues

- `/leagues` : Récupère la liste des différentes ligues
- `/league/id/{id}` : Récupère la ligue avec l'ID associé
- `/league/name/{name}` : Récupère la ligue avec le nom associé

## Tournois

- `/tournaments` : Récupère la liste des différents tournois
- `/tournament/league/{id}` : Récupère le tournoi avec l'ID de Ligue associé
- `/tournament/{id}` : Récupère le tournoi qui correspond à l'ID donné

## Equipes

- `/teams` : Récupère la liste des différentes équipes
- `/teams/{search}` : Récupère la liste des équipes qui contiennent le champ `search`
- `/teams/league/{name}` : Récupère la liste des équipes qui sont dans la ligue spécifiée
- `/teams/region/{name}` : Récupère la liste des équipes qui sont dans la région spécifiée

## Joueurs

*Les Chemins ci-dessous ne seront peut être pas développés*

- `/players` : Récupère la liste des différents joueurs
- `/player/{surname}` : Récupère le profil du joueur

## Matchs

- `/match/{id}` : Récupère les informations du match avec l'ID spécifié
