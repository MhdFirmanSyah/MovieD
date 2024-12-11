import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
const Ratings = ({ rating, setRatingOpen }) => {
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
        precision={0.1}
        readOnly
      />
    </Stack>
  );
};

export default Ratings;
