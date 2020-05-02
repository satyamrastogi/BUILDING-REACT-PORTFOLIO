import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
const generateArray = n => [...Array(n)].map((_, index) => index );

export default function FilterTopics(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(generateArray(props.name.length));

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    filterContent(newChecked);
    setChecked(newChecked);
  };

  function filterContent(newChecked){
      let checkedListName = newChecked.map((value)=>{
          return props.name[value];
      })
      props.onTask(checkedListName);
  }

  return (
    <List className={classes.root}>
      {generateArray(props.name.length ).map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={` ${props.name[value]}`} />
          </ListItem>
        );
      })}
    </List>
  );
}
