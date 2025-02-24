import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Listing {
  id: string;
  user_id: string;
  name: string;
  description: string;
  images: string[];
  username: string;
}

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={listing.images[0]}
        alt={listing.name}
      />
      <CardContent>
        <Typography variant="h5">{listing.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {listing.description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Seller: {listing.username}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/user/${listing.username}/${listing.id}`)}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ListingCard;
