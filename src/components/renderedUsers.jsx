import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Divider, List, ListItem } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useThunk } from "../hooks/useThunk.hook";
import { deleteUser } from "../store/store";
import Alert from "./Alert";
import Albums from "./albums";

const RenderedUsers = ({ usersList }) => {
  const [open, setOpen] = useState(false);
  const [doDeleteUser, isDeletingUser, deletingUserError] =
    useThunk(deleteUser);

  const handleDeleteUser = (user) => {
    doDeleteUser(user);
  };

  return (
    <List sx={{ marginTop: "2rem" }}>
      {usersList.map((user) => {
        return (
          <ListItem
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            key={user.id}
          >
            <Accordion
              sx={{
                width: "85%",
                backgroundColor: "white",
                borderRadius: ".5rem",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                onClick={() => setOpen(!open)}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{user.name}</Typography>
              </AccordionSummary>
              <Divider
                sx={{
                  margin: "0.2rem 0.5rem",
                }}
              />
              <AccordionDetails>
                {open && <Albums user={user} />}
              </AccordionDetails>
            </Accordion>
            {isDeletingUser ? (
              <Alert severity="error" message="Deleling..." />
            ) : (
              <Button
                sx={{
                  padding: "0.2rem 0.4rem",
                  marginLeft: "1.5rem",
                }}
                onClick={() => handleDeleteUser(user)}
                size="small"
                color="error"
                variant="outlined"
                startIcon={<Delete />}
              >
                Delete
              </Button>
            )}
            {deletingUserError && (
              <Alert severity="error" message={deletingUserError} />
            )}
          </ListItem>
        );
      })}
    </List>
  );
};

export default React.memo(RenderedUsers);
