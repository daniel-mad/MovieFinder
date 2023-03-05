import { Pagination, Stack } from "@mui/material";
import React from "react";

const Paging = ({ movies, page, pageSize, onChange }) => {
  const pageCount = Math.ceil(movies.length / pageSize);

  return (
    <Stack mt={3}>
      <Pagination
        sx={{ mx: "auto", marginY: 5 }}
        page={page}
        count={pageCount}
        color="primary"
        onChange={onChange}
      />
    </Stack>
  );
};

export default Paging;
