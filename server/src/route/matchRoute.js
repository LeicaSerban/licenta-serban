const Joi = require('joi')
const express = require('express')
const MatchModule = require('../modules/matchModel')

const route = express.Router()


const findAllMatches = Joi.object({});

route.get("/matches", async (req, res) => {
  const matches = await findAllMatches.validateAsync(req.body);
  const findMatches = await MatchModule.find({ matches });
  try {
    res.send(findMatches);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = route
