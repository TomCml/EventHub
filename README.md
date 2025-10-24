🚀 EventHub - Projet Fil Rouge

L'objectif d'EventHub : Devenir une application web complète pour la gestion d'événements et de festivals, incluant la billetterie, la gestion des stocks, l'organisation des artistes, et plus encore.

🏗️ Conventions de Commit

Pour maintenir un historique Git clair et lisible, ce projet utilise les Conventional Commits. Chaque message de commit doit être préfixé par un type :

feat: Une nouvelle fonctionnalité (ex: feat: add user login page)

fix: Une correction de bug (ex: fix: correct password validation)

docs: Changements dans la documentation (ex: docs: update README with API info)

style: Changements de style qui n'affectent pas la logique (ex: style: reformat code with prettier)

refactor: Modification du code qui n'ajoute ni fonctionnalité ni ne corrige de bug (ex: refactor: simplify email service)

test: Ajout ou modification de tests (ex: test: add unit tests for login)

chore: Tâches diverses, maintenance, mise à jour de dépendances (ex: chore: update docker-compose version)

perf: Amélioration des performances (ex: perf: optimize database query)

🐳 [Semaine Actuelle : DevOps-1]

Cette semaine est dédiée à l'introduction aux principes DevOps et à la conteneurisation.

Objectif : Mettre en place un Proof of Concept (POC) de l'architecture de déploiement d'EventHub avec Docker, en simulant le frontend et le backend.

## 🚀 Démarrage Rapide

Pour lancer le projet en local, suivez ces étapes :

1.  **Cloner le dépôt :**

2.  **Créer le fichier de configuration :**
    Le projet utilise un fichier `.env` pour gérer les secrets (mots de passe de base de données, etc.). Un template est fourni.

3.  **Lancer l'application (Docker) :**
    docker compose up --build

4.  **Accéder à l'application :**
    Ouvrez votre navigateur à l'adresse `http://localhost:8080`.
