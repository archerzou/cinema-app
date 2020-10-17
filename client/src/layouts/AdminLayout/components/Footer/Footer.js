import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
        &copy; Archer Zou. 2020
      </Typography>
      <Typography variant="caption">
        Crafted with love |{' '}
        <Link href="http://archerzou.github.io/" target="_blank" rel="noopener">
          Archer Zou
        </Link>
      </Typography>
    </div>
  );
}
