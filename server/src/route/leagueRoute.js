const Joi = require('joi');
const express = require('express');
const LeagueModule = require('../modules/leagueModel.js');


const route = express.Router();

// const createSchema = Joi.object({
// name: Joi.string().required(),
// season: Joi.string().required(),
// })

// route.post("/create", async(req, res)=>{
//   const {name, season} = await createSchema.validateAsync(req.body);
//   const created = await LeagueModule.create({name, season});
//   res.json(created);
//   console.log(created);
// })

const getLeagueByNameSchema = Joi.object({
  name: Joi.string().required(),
})


route.get("/:name", async (req, res) => {
  try{
    const { name } = await getLeagueByNameSchema.validateAsync(req.params);
    const league = await LeagueModule.find({ name });
    res.json(league);
  }
  catch(err) {
    console.log(err);
  }
    
    
  });

module.exports = route;