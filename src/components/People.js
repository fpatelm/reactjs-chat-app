import { Component, Fragment } from "react";
import { CHATS } from "../url";
import {
  List,
  Stack
} from "@mui/material";
import ListTille from "./ListTille";
import SearchBar from "./SearchBar";
import Archived from "./Archived";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loaded: false,
      search: "",
    };
  }
  componentDidMount() {
    fetch(CHATS)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: data,
          loaded: true,
        });
      });
  }
  render() {
    const { loaded, items, search } = this.state;
    if (!loaded)
      return (
        <div>
          <p>Wait....</p>
        </div>
      );
    return (
      <Stack spacing={0}>
        Chats
        <SearchBar
          onChange={(value) => {
            this.setState({
              search: value.target.value,
            });
          }}
        />
        <Archived />
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
        >
          {items
            .filter((e) => {
              return e.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((e) => (
              <ListTille name={e.name} msg={e.msg} avatar={e.avatar} />
            ))}
        </List>
      </Stack>
    );
  }
}

export default People;
