import * as React from "react";
import { useMediaQuery } from "@react-hook/media-query";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Ratings = ({ rating, setRatingOpen }) => {
  const isXL = useMediaQuery("(min-width: 1352px)");

  return (
    <Stack
      onMouseEnter={() => {
        setRatingOpen(true);
      }}
      onMouseLeave={() => {
        setRatingOpen(false);
      }}
      spacing={1}
      alt="half-rating"
    >
      <Rating
        className="rating-style"
        name="half-rating-read"
        defaultValue={rating / 2}
        size={isXL ? "large" : ""}
        precision={0.1}
        readOnly
      />
    </Stack>
  );
};

export default Ratings;
