import { Button, Typography } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { AlertTitle, List } from "@mui/material";
import UsersListSkeleton from "./usersListSkeleton";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store/store";
import { Box } from "@mui/system";
import { Add } from "@mui/icons-material";
import Accordian from "./accordian";

const Albums = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = (
      <UsersListSkeleton
        skeletonCount={1}
        width={500}
        height={29}
        variant="rectangular"
      />
    );
  } else if (error) {
    content = (
      <MuiAlert
        severity="error"
        sx={{
          mt: 6,
        }}
      >
        <AlertTitle>Error</AlertTitle>
        Failed to load albums — <strong>check your connection!</strong>
      </MuiAlert>
    );
  } else {
    content = data.map((album) => {
      return <Accordian album={album} />;
    });
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: "35rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          Albums
        </Typography>
        <Button startIcon={<Add />} onClick={handleAddAlbum}>
          Add album
        </Button>
      </Box>

      <List>{content}</List>
    </Box>
  );
};

export default Albums;
