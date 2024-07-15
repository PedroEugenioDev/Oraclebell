# Oraclebell: Shaman King API

## 📃 Description

This is a full RESTful API linked to an database detailing everything about Sham King franchise. This is a consumption-only API (only the HTTP GET method is available), no authentication is required to access this API, and all resources are fully open and available. 

## 📦 Tech Stack

**back-end:** Node.js, Express, mongoose and MongoDB.

## 🔑 Key Features

### Methods
Requisições para a API devem seguir os padrões:
| Method | Description |
|---|---|
| `GET` | return information on one or more records |
### Endpoints
| Endpoint | Response |
|---|---|
| `/shamans` | return an array of all shaman caracters |
| `/shamans/:name` | return an object of an specific shaman caracter |
| `/spirits` | return an array of all spirit caracters |
| `/spirits/:name` | return an object of an specific spirit caracter |
| `/animes` | return an array of all animes |
| `/animes/:title` | return an object of an specific animes |
| `/mangas` | return an array of all mangas |
| `/mangas/:title` | return an object of an specific manga |
| `/games` | return an array of all games |
| `/games/:title` | return an object of an specific games |
| `/tools` | return an array of all tools |
| `/tools/:name` | return an object of an specific tool |
### Response
| Code | Description |
|---|---|
| `200` | The resource has been fetched and transmitted in the message body. |
| `404` | The server cannot find the requested resource. |

### Exemplo
Get shaman character information:

https://oraclebell.onrender.com/api/shamans/Yoh%20Asakura

Result:

```json
{
    "spirits": [],
    "_id": "668864ad1bbfe34b0da96bef",
    "name": "Yoh Asakura",
    "birthdate": "1985-05-12T00:00:00.000Z",
    "furyoku": 108000
  }
```

## 💭 Process

- I started creating a Database at Mongo Atlas and populate with Shaman King datas from Wiki
- I creating all the basic server features and implementing all shaman features (Model, Controller and Router) to test.
- I connected the server to Atlas database.
- I implementende all other features to:
  - Spirits
  - Tools
  - Animes
  - Mangas
  - Games
 - I deployed the server at Heroku.     

## 📚 Learnings

The learning objective of this project was to develop an API to learn about RESTful API and also to provide an extensive source of data related to Shaman King franchise. I learned about back-end development with Node.js, RESTful API and database management. I also learned how to deploy an database with Mongo Atlas an servers with Heroku.

## 💻 Deploy

You can access and use a functional version of this project at Render:

[Oraclebell - Shaman King API](https://oraclebell.onrender.com/)

## 🙏 Contributing

Thank you for considering contributing to Oraclebell project

- You can contribute by sending information about characters or spirits that have not yet been added.
- You can also contribute by suggesting improvements to the project, code, endpoints, etc.
- Reporting bugs

In any case, feel free to create [a new issue](https://github.com/PedroEugenioDev/Oraclebell/issues) with detailed explanation please!
