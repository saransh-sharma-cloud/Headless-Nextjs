import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function CustomSkeleton({ height, width }) {
  return (
    <Stack spacing={2}>
      <Skeleton
        variant="rectangular"
        width={width ? width : 300}
        height={height ? height : 300}
        sx={{ bgcolor: "grey.700" }}
      />
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem", bgcolor: "grey.700" }}
        width={width ? width : 300}
      />
    </Stack>
  );
}
