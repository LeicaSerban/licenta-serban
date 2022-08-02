import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

export default function Home2(props) {
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
  
 
 const average_goals_per_match = `Avarage goals per match: ${dataLeague?.average_goals_per_match}`
 const average_corners_per_match = `Average Corners Per Matchs: ${dataLeague?.average_corners_per_match}`
 const total_corners_for_season = `Total Corners: ${dataLeague?.total_corners_for_season}`
 const average_cards_per_match = `Average Cards Per Match: ${dataLeague?.average_cards_per_match}`
 const total_cards_for_season = `Total Cards: ${dataLeague?.total_cards_for_season}`
 const goals_min_76_to_90 = `Goals min 76 to 90: ${dataLeague?.goals_min_76_to_90}`
 const over_45_cards_percentage = `Over 4,5 Cards Percentage: ${dataLeague?.over_45_cards_percentage}%`

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[average_goals_per_match,average_corners_per_match,total_corners_for_season,average_cards_per_match,total_cards_for_season,goals_min_76_to_90,over_45_cards_percentage].map((value) => {
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
