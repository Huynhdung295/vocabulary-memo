import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

function CardQuestion(props) {
  return (
    <Card className={props.classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <h4>
          Chữ "{props.question1.defaultLanguage}" ở từ điển tiếng{" "}
          {props.defaultLang} của bạn, điền vô chỗ trống những từ tương ứng
        </h4>
        <form
          onSubmit={props.onSubmit}
          className={props.classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label={props.lang1}
            variant="outlined"
            onChange={props.onChange1}
            value={props.value1}
          />

          {props.status2 ? null : (
            <TextField
              id="outlined-basic"
              label={props.lang2}
              variant="outlined"
              onChange={props.onChange2}
              value={props.value2}
            />
          )}
          {props.status3 ? null : (
            <TextField
              id="outlined-basic"
              label={props.lang3}
              variant="outlined"
              onChange={props.onChange3}
              value={props.value3}
            />
          )}
        </form>
      </CardContent>
    </Card>
  );
}

export default CardQuestion;
