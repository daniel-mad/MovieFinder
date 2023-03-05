import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const Nav = ({ handleSearch, getMostPopular }) => {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = (event, search) => {
    if (!search || search === "") return;
    if (event.key === "Enter" || event.type === "click") {
      handleSearch(search);
      setSearch("");
    }
  };

  return (
    <AppBar className="navbar">
      <Toolbar>
        <Typography
          sx={{ cursor: "pointer", typography: { xs: "subtitle2", md: "h6" } }}
          component="div"
          onClick={getMostPopular}
        >
          MOVIE FINDER
        </Typography>
        <InputBase
          sx={{
            ml: 2,
            px: 1,
            background: "white",
            borderRadius: 0.75,
            width: "60%",
          }}
          onChange={onChange}
          placeholder="Search Movie..."
          value={search}
          onKeyDown={(event) => onSearch(event, search)}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={(event) => onSearch(event, search)}
        >
          <SearchIcon sx={{ color: "white" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
