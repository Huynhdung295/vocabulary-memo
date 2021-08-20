import React from "react";
import Fab from "@material-ui/core/Fab";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function ListVocabulary(props) {
  return (
    <div className={props.className.grid}>
      <Grid container spacing={3}>
        {props.listWord.map((item) => {
          return (
            <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <Card className={props.className.root}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {item.defaultLanguage}
                  </Typography>
                  <p>
                    <strong>{props.lang1}</strong>: {item.language}
                  </p>
                  {props.statusLang2 ? null : (
                    <p>
                      <strong>{props.lang2}</strong>: {item.language2}
                    </p>
                  )}
                  {props.statusLang3 ? null : (
                    <p>
                      <strong>{props.lang3}</strong>: {item.language3}
                    </p>
                  )}
                </CardContent>
                <Fab
                  onClick={() => props.deleteWord(item.id)}
                  size="small"
                  color="primary"
                  aria-label="delete"
                >
                  <props.icon1 />
                </Fab>
                <Fab
                  onClick={() => props.editWord(item)}
                  size="small"
                  color="secondary"
                  aria-label="edit"
                >
                  <props.icon2 />
                </Fab>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ListVocabulary;
