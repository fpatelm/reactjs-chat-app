import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Avatar,  ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

class ListTille extends Component {
    render() {
        return (
            <ListItem alignItems="flex-start" key={this.props.name}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={this.props.avatar} />
                </ListItemAvatar>
                <ListItemText
                    primary={this.props.name}
                    secondary={
                        <Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                
                            </Typography>
                            {` ${this.props.msg}`}
                        </Fragment>
                    }
                />
            </ListItem>
        );
    }
}

ListTille.propTypes = {

};

export default ListTille;