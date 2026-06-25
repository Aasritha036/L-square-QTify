import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

import "./Card.css";

const AlbumCard = ({ image, follows, title }) => {
  return (
    <div className="cardWrapper">
      <Card className="albumCard">
        <CardMedia
          component="img"
          image={image}
          alt={title}
          className="albumImage"
        />

        <CardContent className="albumContent">
          <Chip
            label={`${follows} Follows`}
            className="chip"
          />
        </CardContent>
      </Card>

      <Typography className="albumTitle">
        {title}
      </Typography>
    </div>
  );
};

export default AlbumCard;