const Joi = require('joi')
const express = require('express')
const PlayerModule = require('../modules/playerModel')

const route = express.Router()


const findAllPlayers = Joi.object({});

route.get("/players", async (req, res) => {
  const players = await findAllPlayers.validateAsync(req.body);
  const findPlayers = await PlayerModule.find({ players });
  try {
    res.send(findPlayers);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = route
