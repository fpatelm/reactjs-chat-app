import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, IconButton, InputBase, Paper, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsIcon from '@mui/icons-material/Directions';
class SearchBar extends Component {
    render() {
        return (
            <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100" }}
    >
   
      <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search or start a new chat"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={(event)=>this.props.onChange(event) }
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
        );
    }
}


SearchBar.propTypes = {

};


export default SearchBar;
