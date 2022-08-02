import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

export default function Home(props) {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const dataLeague = props.data[0]
  
 
 const season = `Season: ${dataLeague?.season}`
 const number_of_clubs = `Number of Clubs: ${dataLeague?.number_of_clubs}`
 const total_matches = `Total Matches: ${dataLeague?.total_matches}`
 const total_game_week = `Total Game Week: ${dataLeague?.total_game_week}`
 const progress = `Progress: ${dataLeague?.progress}%`
 const prediction_risk = `Prediction Risk: ${dataLeague?.prediction_risk}%`
 const clean_sheets_percentage = `Clean Sheets Percentage: ${dataLeague?.clean_sheets_percentage}%`

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[season, number_of_clubs, total_matches, total_game_week, progress, prediction_risk, clean_sheets_percentage].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value.season}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
