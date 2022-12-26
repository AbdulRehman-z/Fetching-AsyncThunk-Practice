import { AlertTitle, Box, Button, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store/store";
import RenderedUsers from "./renderedUsers";
import UsersListSkeleton from "./usersListSkeleton";
import Alert from "./Alert";
import MuiAlert from "@mui/material/Alert";
import { useThunk } from "../hooks/useThunk.hook";

const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  const usersList = useSelector((state) => state.users.usersList);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleAddUser = () => {
    doAddUser();
  };

  let content;

  if (isLoadingUsers) {
    content = (
      <UsersListSkeleton
        skeletonCount={4}
        width={500}
        height={29}
        variant="rectangular"
      />
    );
  } else if (loadingUsersError) {
    content = (
      <MuiAlert
        severity="error"
        sx={{
          mt: 6,
        }}
      >
        <AlertTitle>Error</AlertTitle>
        Failed to load users — <strong>check your connection!</strong>
      </MuiAlert>
    );
  } else {
    content = <RenderedUsers usersList={usersList} />;
  }

  return (
    <Box
      sx={{
        width: "50rem",
        marginTop: "3rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Users</Typography>
        {isCreatingUser ? (
          <Alert severity="info" message="Creating user..." />
        ) : (
          <LoadingButton
            onClick={handleAddUser}
            startIcon={<AddCircleIcon />}
            variant="outlined"
          >
            Add User
          </LoadingButton>
        )}
        {creatingUserError && (
          <Alert severity="error" message="Failed to create user 😢." />
        )}
      </Box>
      <Box>{content}</Box>
    </Box>
  );
};

export default UsersList;
