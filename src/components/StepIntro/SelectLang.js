import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Grid from "@material-ui/core/Grid";

function SelectLang(props) {
  let listLanguage = [
    {
      value: "English",
      language: "English",
    },
    {
      value: "Vietnamese",
      language: "Vietnamese",
    },
    {
      value: "Chinese",
      language: "Chinese",
    },
    {
      value: "Hindi",
      language: "Hindi",
    },
    {
      value: "Spanish",
      language: "Spanish",
    },
    {
      value: "Russian",
      language: "Russian",
    },
    {
      value: "Japanese",
      language: "Japanese",
    },
    {
      value: "French",
      language: "French",
    },
  ];

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Language</InputLabel>
          <Select
            native
            value={props.optLang}
            onChange={props.onChange}
            label="Language"
          >
            <option aria-label="None" value="" />
            {listLanguage.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.language}
                </option>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Language</InputLabel>
          <Select
            native
            value={props.optLang2}
            onChange={props.onChange2}
            label="Language"
          >
            <option aria-label="None" value="" />
            {listLanguage.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.language}
                </option>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Language</InputLabel>
          <Select
            native
            value={props.optLang3}
            onChange={props.onChange3}
            label="Language"
          >
            <option aria-label="None" value="" />
            {listLanguage.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.language}
                </option>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default SelectLang;
