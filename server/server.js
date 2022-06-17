const express = require("express");
const cors = require("cors");
const compression = require("compression");
const connectDB = require("./connection");

const leagueRoute = require('./src/route/leagueRoute');
const teamRoute = require('./src/route/teamRoute');
const playerRoute = require('./src/route/playerRoute');
const matchRoute = require('./src/route/matchRoute'); 

connectDB();

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(cors(), compression(), express.json());

server.use('/league', leagueRoute);
server.use('/team', teamRoute)
server.use('/player', playerRoute)
server.use('/match', matchRoute)


const port = process.env.port || 3000;

server.listen(port, function (error) {
  if (error) {
    console.log( `error opening server`);
  } else console.log(`Server has started on port: ${port}`);
});


