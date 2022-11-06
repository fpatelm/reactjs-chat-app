import React, { Component } from "react";
import PropTypes from "prop-types";
import { Stack, IconButton, Link } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";

class Archived extends Component {
  render() {
    return (
      <Stack direction="row" spacing={2}>
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <ArchiveIcon />
        </IconButton>
        <Link href="#" underline="none">
          {"Archived"}
        </Link>
      </Stack>
    );
  }
}

Archived.propTypes = {};

export default Archived;
