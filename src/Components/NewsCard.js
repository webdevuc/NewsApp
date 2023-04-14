import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getHeadLines } from "../actions/headLineAction";
import { useEffect } from "react";

import idx from "idx";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const NewsCard = () => {
  const articles = useSelector((state) =>
    idx(state, (_) => _.headLines.article.articles)
  );
  const searchText = useSelector((state) =>
    idx(state, (_) => _.search.searchQuery)
  );
  const countryCode = useSelector((state) =>
    idx(state, (_) => _.countries.country)
  );

  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHeadLines(countryCode));
  }, [dispatch, countryCode]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const results = articles?.filter((article) => {
    if (searchText == "") {
      return article;
    } else if (
      article?.title?.toLowerCase().includes(searchText.toLowerCase()) ||
      article?.description?.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return article;
    }
  });

  return (
    <>
      <Typography variant="h4">Top news from Great Bruitain</Typography>

      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          width: "100%",
          justifyContent: "center",
        }}
      >
        {results?.length ? (
          results?.map((item, i) => {
            return (
              <Card
                sx={{
                  maxWidth: 440,
                  marginTop: 7,
                  boxShadow: 4,
                  maxHeight: 560,
                }}
              >
                <CardHeader title={item.title.substring(0, 60) + "..."} />
                <CardMedia
                  component="img"
                  height="250"
                  image={item.urlToImage}
                  alt="urlToImage"
                />
                <CardContent>
                  <Typography variant="h6" color="text.secondary" fontSize={18}>
                    {item?.description
                      ? item?.description?.substring(0, 180) + "..."
                      : "No description found"}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  ></ExpandMore>
                  <Button size="small">Learn More</Button>
                </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep
                      skillet over medium-high heat. Add chicken, shrimp and
                      chorizo, and cook,
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with
                      artichokes and
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            );
          })
        ) : (
          <Typography variant="h5">No result found</Typography>
        )}
      </Container>
    </>
  );
};
export default NewsCard;
