import { Box, Skeleton, Stack } from "@mui/material";
import { width } from "@mui/system";
import React from "react";

const UsersListSkeleton = ({ skeletonCount, variant, width, height }) => {
  return (
    <Stack spacing={2} m={5}>
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
