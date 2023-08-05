import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextTruncate from "react-text-truncate";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function NoteCard(props) {
  console.log(props.data.title);
  return (
    <Card
      sx={{
        alignItems: "center",
        minWidth: "18em",
        maxWidth: "18em",
        maxHeight: "16em",
        minHeight: "16em",
      }}
      raised="true"
    >
      <CardContent>
        <Typography variant="h5" component="div">
          <TextTruncate
            line={1}
            element="span"
            truncateText="…"
            text={props.data.title}
            // textTruncateChild={<a href="/">Read on</a>}
          />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Last updated: {props.data.updated_at} ago
        </Typography>
        <Typography variant="body2">
          <TextTruncate
            line={3}
            element="p"
            truncateText="…"
            text={props.data.content}
            // textTruncateChild={<a href="/">Read on</a>}
          />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
