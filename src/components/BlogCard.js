import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";


export const BlogCard = ({image, header, text}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "3rem",
        boxShadow: "rgba(149, 157, 165, 0.3) 0px 8px 24px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="medical science"
        />
        <CardContent>
          <Typography
            variant="h2"
            fontSize={"2.5rem"}
            fontWeight={"700"}
            mb={2}
            lineHeight={2}
          >
            {header}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontSize={"2rem"}
            lineHeight={2}
          >
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button
          style={{
            fontSize: "2rem",
            color: "#458FF6",
            border: "none",
            background: "white",
            marginLeft: "1rem",
            marginBottom: "2rem",
          }}
        >
          Read more
        </button>
      </CardActions>
    </Card>
  );
};
