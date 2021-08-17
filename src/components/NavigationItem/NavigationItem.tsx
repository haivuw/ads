import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


export default function NavigationItem({ icon, textButton }) {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
            {icon}
        </ListItemIcon>
        <ListItemText primary={textButton} />
      </ListItem>
    </List>
  );
}
