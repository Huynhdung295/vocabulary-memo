import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
function BeforeSubmit(props) {
  return (
    <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
      <Card className={props.className.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.question.defaultLanguage}
          </Typography>
          <p>
            <strong>{props.lang1}</strong>: {props.answer[0]}
          </p>
          {props.status2 ? null : (
            <p>
              <strong>{props.lang2}</strong>: {props.answer[1]}
            </p>
          )}
          {props.status3 ? null : (
            <p>
              <strong>{props.lang3}</strong>: {props.answer[2]}
            </p>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default BeforeSubmit;
