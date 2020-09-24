import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Tooltip from '@material-ui/core/Tooltip';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3)
  },
  noMaxWidth: {
    maxWidth: 'none',
    padding: '1em',
    fontSize: '1em'
  },
}));

export default function SimpleTooltips() {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title="Mensaje para Mike Morron: Esto no está para un 10, pero tampoco para un 6 eh." aria-label="add" classes={{ tooltip: classes.noMaxWidth }}>
        <EmojiPeopleIcon />
      </Tooltip>
    </div>
  );
}