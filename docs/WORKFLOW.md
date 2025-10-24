Workflow Git pour EventHub

Ce document définit le flux de travail Git (Git flow) adopté pour le projet EventHub.

1. Les Branches Protégées

Nous avons deux branches principales (protégées) :

main : Production

Objectif : Cette branche reflète l'état exact du code qui est (ou devrait être) en production.

Règle : Ne jamais push directement sur la branche main. Le seul moyen de l'alimenter est de "merger" la branche dev dedans.

dev : Intégration

Objectif : C'est la branche principale de développement. Elle rassemble toutes les nouvelles fonctionnalités ("features") terminées et testées.

Règle : Ne jamais push directement sur la branche dev. Tout ajout de code doit se faire via une Pull Request (PR) depuis une branche éphémère.

2. Les Branches Éphémères

Ces branches sont créées pour des tâches spécifiques et sont supprimées une fois leur contenu fusionné (mergé) dans dev.

Syntaxe : type/nom-de-la-tache

Exemple :

feat/nom-de-la-feature (ex: feat/docker-setup, feat/login-page)

chore/maintenance (ex: chore/setup-husky)

3. Le Workflow en 5 Étapes

Voici le cycle de vie d'une nouvelle fonctionnalité :

Partir de dev :

On s'assure d'avoir la dernière version :

git checkout dev
git pull origin dev

On créé la branche de travail :

git checkout -b feat/devops1

Travailler et "Committer"

Pusher sur le repo la branche de travail

git push -u origin feat/devops1

Ouvrir une Pull Request (PR) :

Une fois le travail terminé, ouvrir une Pull Request sur GitHub pour fusionner la branche feat/devops1 dans la branche dev.

C'est ici que la revue de code se passe.

Fusionner (Merge) et Nettoyer :

Une fois la PR validée (et les tests/checks passés, voir "Règles de Protection"), on merge la PR dans dev.

Pour finir, on supprime la branche éphémère feat/devops1.

Ce cycle garantit que dev reste toujours stable et que main ne contient que des versions testées et validées.
