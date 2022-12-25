import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Divider, List, ListItem } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import { Delete } from "@mui/icons-material";

const RenderedUsers = ({ usersList }) => {
  return (
    <List sx={{ marginTop: "2rem" }}>
      {usersList.map((user) => {
        return (
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            key={user.id}
          >
            <Accordion
              sx={{
                backgroundColor: "white",
                borderRadius: ".5rem",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{user.name}</Typography>
              </AccordionSummary>
              <Divider
                sx={{
                  margin: "0.2rem 1rem",
                }}
              />
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Button
              sx={{
                padding: "0.2rem 1rem",
                marginLeft: "1.5rem",
              }}
              size="small"
              color="error"
              variant="outlined"
              startIcon={<Delete />}
            >
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default RenderedUsers;

// <ListItem key={user.id}>
//               <Accordion
//                 sx={{
//                   marginTop: "1rem",
//                   width: "50rem",
//                   height: "4rem",
//                   backgroundColor: "white",
//                   borderRadius: "5rem",
//                 }}
//               >
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   // aria-controls="panel1a-content"
//                   // id="panel1a-header"
//                 >
//                   <Typography>Accordion 1</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <Typography>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Suspendisse malesuada lacus ex, sit amet blandit leo
//                     lobortis eget.
//                   </Typography>
//                 </AccordionDetails>
//               </Accordion>
//             </ListItem>
