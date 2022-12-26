import { Box, Skeleton, Stack } from "@mui/material";
import { width } from "@mui/system";
import React from "react";

const UsersListSkeleton = ({ skeletonCount, variant, width, height }) => {
  return (
    <Stack
      spacing={2}
      sx={{
        mt: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Array(skeletonCount)
        .fill(0)
        .map((_, i) => {
          return (
            <Skeleton
              key={i}
              sx={{ borderRadius: 1, bgcolor: "grey.200" }}
              variant={variant}
              width={width}
              height={height}
              animation="wave"
            />
          );
        })}
    </Stack>
  );
};

export default UsersListSkeleton;
