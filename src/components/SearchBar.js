import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IconButton, InputBase } from '@mui/material';


class SearchBar extends Component {
    render() {
        return (
            <>
                <InputBase sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'  }}
                    placeholder="Search or start a new chat"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                
            </>
        );
    }
}


SearchBar.propTypes = {

};


export default SearchBar;
