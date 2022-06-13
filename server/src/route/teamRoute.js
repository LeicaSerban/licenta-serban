const Joi = require('joi')
const express = require('express')
const TeamModule = require('../modules/teamModel.js')

const route = express.Router()


const getAllTeams = Joi.object({});

route.get("/teams", async (req, res) => {
  const teams = await getAllTeams.validateAsync(req.body);
  const findTeams = await TeamModule.find({ teams });
  try {
    res.send(findTeams);
  } catch (error) {
    res.status(500).send(error);
  }
});

const getTeamByNameSchema = Joi.object({
    common_name: Joi.string().required(),
})

route.get('/:common_name', async (req, res) => {
    try {
        const { common_name } = await getTeamByNameSchema.validateAsync(
            req.params
        )
        const team = await TeamModule.find({ common_name })
        res.json(team)
    } catch (err) {
        console.log(err)
    }
})

module.exports = route
