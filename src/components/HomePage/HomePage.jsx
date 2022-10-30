import React from "react";
import PropTypes from "prop-types";
import styles from "./HomePage.module.scss";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomePage = () => (
  <div className={styles.HomePage}>
    <Grid container spacing={2}>
    <Grid xs={4}>
        <Item>xs=4 t tr t hg</Item>
      </Grid>
      <Grid xs={8}>
        <Item>xs=8</Item>
      </Grid>
      
    </Grid>
  </div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
