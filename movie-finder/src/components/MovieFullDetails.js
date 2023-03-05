import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ActorCard from "./ActorCard";
import { Autoplay } from "swiper";
import StarIcon from "@mui/icons-material/Star";
import { Container } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  height: "90vh",
  overflow: "auto",
};

const MovieFullDetails = ({ movieDetails }) => {
  return (
    <div className="movie-full-details">
      <Container>
        <Box sx={style}>
          <Card>
            <CardMedia
              component="img"
              alt={movieDetails.title}
              height="500"
              image={movieDetails.image}
              sx={{ objectFit: "fill" }}
            />
            <CardContent>
              {movieDetails.genres.split(",").map((genre, index) => {
                return <Chip key={index} label={genre} />;
              })}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginY: 2,
                }}
              >
                <Typography sx={{ typography: { xs: "h6", md: "h5" } }}>
                  {movieDetails.title}
                </Typography>
                <Typography variant="p" component="div">
                  {movieDetails.year}
                </Typography>
              </Box>
              <Stack direction="row">
                <StarIcon sx={{ color: "yellow", fontSize: "1.5rem" }} />
                <Typography variant="h6" component="div">
                  {movieDetails.imDbRating}
                </Typography>
              </Stack>
              <Divider />

              <Box marginY={3}>
                <Typography sx={{ typography: { xs: "h6" } }}>PLOT</Typography>
                <Typography variant="p" component="p">
                  {movieDetails.plot}
                </Typography>
              </Box>
              <Divider />
              <Box marginY={3} sx={{ background: "#fff" }}>
                <Typography variant="h6">CAST</Typography>
              </Box>
              <Swiper
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                {movieDetails.actorList.map((actor) => (
                  <SwiperSlide key={actor.id}>
                    <ActorCard key={actor.id} actor={actor} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};
export default MovieFullDetails;
