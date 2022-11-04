
import { Component, Fragment } from 'react';
import { CHATS } from '../url';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import ListTille from './ListTille';
import SearchBar from './SearchBar';


class People extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [],
            loaded:false
         }
    }
    componentDidMount(){
        fetch(CHATS).then((res) => res.json()).then((data) => { 
            this.setState({
                items:data, loaded:true
            });
        });
    }
    render() {
        const { loaded, items } = this.state;
        if (!loaded) return <div><p>Wait....</p></div>
        return (
            <>
                <SearchBar />
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        items.map((e) => (
                            <ListTille name={e.name} msg={e.msg} avatar={e.avatar} />
                    ))
                }
                    </List>
            </>
          );
    }
}
 



export default People;