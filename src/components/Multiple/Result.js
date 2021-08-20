import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function Result(props) {
  const statusCheck1 =
    props.answer[0].trim().toLowerCase() ===
    props.question.language.trim().toLowerCase();
  const statusCheck2 =
    props.answer[1].trim().toLowerCase() ===
    props.question.language2.trim().toLowerCase();
  const statusCheck3 =
    props.answer[2].trim().toLowerCase() ===
    props.question.language3.trim().toLowerCase();
  return (
    <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
      <Card className={props.className.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.question.defaultLanguage}
          </Typography>
          <p style={statusCheck1 ? { color: "green" } : null}>
            <strong>{props.lang1}</strong>: {props.answer[0]}{" "}
            <strong style={{ color: "red" }}>
              {statusCheck1 ? null : props.question.language}
            </strong>
          </p>
          {props.status2 ? null : (
            <p style={statusCheck2 ? { color: "green" } : null}>
              <strong>{props.lang2}</strong>: {props.answer[1]}{" "}
              <strong style={{ color: "red" }}>
                {statusCheck2 ? null : props.question.language2}
              </strong>
            </p>
          )}
          {props.status3 ? null : (
            <p style={statusCheck3 ? { color: "green" } : null}>
              <strong>{props.lang3}</strong>: {props.answer[2]}{" "}
              <strong style={{ color: "red" }}>
                {statusCheck3 ? null : props.question.language3}
              </strong>
            </p>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Result;
