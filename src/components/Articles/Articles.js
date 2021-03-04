import React from "react";
import Navbar from "../Home/Nabvar/Navbar";
import "./Articles.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    textAlign:"left",
    fontFamily: "Times New Roman",
  },
  media: {
    height: 220,
  },
});


const Articles = ({ article, handleClick }) => {

  const classes = useStyles();
 
  return (
    
      <div className="col-md-4 mb-5 card-design">
        <Card className={classes.root} onClick={()=>handleClick(article.id)}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={article.img}
              title="Contemplative Reptile"
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="h2">
                {article.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {article.shortDes}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    
  );
};

export default Articles;
