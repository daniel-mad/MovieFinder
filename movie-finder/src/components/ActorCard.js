import { Avatar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const ActorCard = ({ actor }) => {
  return (
    <Stack alignItems="center">
      <Avatar
        alt={actor.name}
        src={actor.image}
        sx={{ width: { md: 150, xs: 70 }, height: { md: 150, xs: 70 } }}
      />
      <Typography
        component="p"
        sx={{
          display: "flex",
          justifyContent: "center",
          typography: { md: "body3", xs: "caption" },
        }}
      >
        {actor.name}
      </Typography>
    </Stack>
  );
};

export default ActorCard;
