import { Box, Button, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store/store";
import RenderedUsers from "./renderedUsers";
import UsersListSkeleton from "./usersListSkeleton";
import Alert from "./Alert";

const UsersList = () => {
  const dispatch = useDispatch();
  const { usersList } = useSelector((state) => state.users);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(null);

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      .catch((error) => setLoadingUsersError(error.message))
      .finally(() => setIsLoadingUsers(false));
  }, []);

  const handleAddUser = () => {
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch((error) => setCreatingUserError(error.message))
      .finally(() => setIsCreatingUser(false));
  };

  if (isLoadingUsers) {
    return (
      <UsersListSkeleton
        skeletonCount={4}
        width={500}
        height={29}
        variant="rectangular"
      />
    );
  }

  if (loadingUsersError) {
    return <Alert severity="error" message="Failed to fetch users 😢." />;
  }

  if (usersList.length > 0) {
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
              loading={isCreatingUser}
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
        <Box>
          <RenderedUsers usersList={usersList} />
        </Box>
      </Box>
    );
  }
};

export default UsersList;
