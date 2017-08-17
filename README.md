# .gifSPLOSION

A React App for viewing, searching for, and sharing GIFs.

## Getting Started

1. Download the project files as a Zip, or fork and clone this repository
2. Install node module dependencies `npm i`
3. Build the React front-end `npm run build`
4. Start the server `npm start`

That's it! The app will run on `http://localhost:7000`

## About this project

#### Usage

* Users arrive at a page with currently trending Gifs
* Users can see the all-time _best_ gifs or a _random_ gif
* Users can use their own _search_ terms to find a gifs
* Users can download or get shareable links for gifs

#### Implementation

This app runs on a client/server architecture. Node.js and Express power a local API that serves Gifs and also makes requests to Giphy's API for additional content. The front-end is built with React using React Router to provide RESTful routes. The front-end and back-end are brought together using Gulp for simple one-command serving. Dotenv is implemented to retain privacy of API keys.

#### Technologies

* React
* Node
* Express
* React Router
* Gulp
* dotenv
* Giphy API
* Bootstrap
