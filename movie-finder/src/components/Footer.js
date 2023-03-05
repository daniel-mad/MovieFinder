import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <Stack justifyContent="center" alignItems="center">
        <Typography variant="subtitle1">
          Copyright &copy; Daniel Madhala {new Date().getFullYear()}
        </Typography>
      </Stack>
    </div>
  );
};

export default Footer;
