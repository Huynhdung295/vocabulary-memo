import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";

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
    <Box display="flex" alignItems="center">
        <FormControl  variant="outlined" className={classes.formControl}>
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
        <FormControl  variant="outlined" className={classes.formControl}>
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
        <FormControl  variant="outlined" className={classes.formControl}>
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
    </Box>
  );
}

export default SelectLang;
