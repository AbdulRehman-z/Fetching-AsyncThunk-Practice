import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, ListItem } from "@mui/material";
import { grey } from "@mui/material/colors";

const Accordian = ({ album }) => {
  return (
    <ListItem key={album.id}>
      <Accordion
        sx={{
          bgcolor: grey[900],
          width: "36rem",
          bgcolor: grey[100],
          borderRadius: ".5rem",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{album.title}</Typography>
        </AccordionSummary>

        <AccordionDetails>Nothing</AccordionDetails>
      </Accordion>
    </ListItem>
  );
};

export default Accordian;
