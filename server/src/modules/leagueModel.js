const mongoose = require('mongoose')

const leagueSchema = mongoose.Schema({
    name: {
        type: String,
    },
    season: {
        type: String,
    },
    status: {
        type: String,
    },
    format: {
        type: String,
    },
    number_of_clubs: {
        type: String,
    },
    total_matches: {
        type: String,
    },
    matches_completed: {
        type: String,
    },
    game_week: {
        type: String,
    },
    total_game_week: {
        type: String,
    },
    progress: {
        type: String,
    },
    average_goals_per_match: {
        type: String,
    },
    average_scored_home_team: {
        type: String,
    },
    average_scored_away_team: {
        type: String,
    },
    btts_percentage: {
        type: String,
    },
    clean_sheets_percentage: {
        type: String,
    },
    prediction_risk: {
        type: String,
    },
    home_scored_advantage_percentage: {
        type: String,
    },
    home_defence_advantage_percentage: {
        type: String,
    },
    home_advantage_percentage: {
        type: String,
    },
    average_corners_per_match: {
        type: String,
    },
    average_corners_per_match_home_team: {
        type: String,
    },
    average_corners_per_match_away_team: {
        type: String,
    },
    total_corners_for_season: {
        type: String,
    },
    average_cards_per_match: {
        type: String,
    },
    average_cards_per_match_home_team: {
        type: String,
    },
    average_cards_per_match_away_team: {
        type: String,
    },
    total_cards_for_season: {
        type: String,
    },
    over_05_percentage: {
        type: String,
    },
    over_15_percentage: {
        type: String,
    },
    over_25_percentage: {
        type: String,
    },
    over_35_percentage: {
        type: String,
    },
    over_45_percentage: {
        type: String,
    },
    over_55_percentage: {
        type: String,
    },
    under_05_percentage: {
        type: String,
    },
    under_15_percentage: {
        type: String,
    },
    under_25_percentage: {
        type: String,
    },
    under_35_percentage: {
        type: String,
    },
    under_45_percentage: {
        type: String,
    },
    under_55_percentage: {
        type: String,
    },
    over_65_corners_percentage: {
        type: String,
    },
    over_75_corners_percentage: {
        type: String,
    },
    over_85_corners_percentage: {
        type: String,
    },
    over_95_corners_percentage: {
        type: String,
    },
    over_105_corners_percentage: {
        type: String,
    },
    over_115_corners_percentage: {
        type: String,
    },
    over_125_corners_percentage: {
        type: String,
    },
    over_135_corners_percentage: {
        type: String,
    },
    over_05_cards_percentage: {
        type: String,
    },
    over_15_cards_percentage: {
        type: String,
    },
    over_25_cards_percentage: {
        type: String,
    },
    over_35_cards_percentage: {
        type: String,
    },
    over_45_cards_percentage: {
        type: String,
    },
    over_55_cards_percentage: {
        type: String,
    },
    over_65_cards_percentage: {
        type: String,
    },
    over_75_cards_percentage: {
        type: String,
    },
    goals_min_0_to_10: {
        type: String,
    },
    goals_min_11_to_20: {
        type: String,
    },
    goals_min_21_to_30: {
        type: String,
    },
    goals_min_31_to_40: {
        type: String,
    },
    goals_min_41_to_50: {
        type: String,
    },
    goals_min_51_to_60: {
        type: String,
    },
    goals_min_61_to_70: {
        type: String,
    },
    goals_min_71_to_80: {
        type: String,
    },
    goals_min_81_to_90: {
        type: String,
    },
    goals_min_0_to_15: {
        type: String,
    },
    goals_min_16_to_30: {
        type: String,
    },
    goals_min_31_to_45: {
        type: String,
    },
    goals_min_46_to_60: {
        type: String,
    },
    goals_min_61_to_75: {
        type: String,
    },
    goals_min_76_to_90: {
        type: String,
    },
    xg_avg_per_match: {
        type: String,
    },
})

const LeagueModule = mongoose.model('league', leagueSchema)

module.exports = LeagueModule
