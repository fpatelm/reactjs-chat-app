import React from "react";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import People from '../components/People';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomePage = () => (
  <div>
    <Grid container spacing={2}>
    <Grid xs={4}>
        <Item><People/></Item>
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
