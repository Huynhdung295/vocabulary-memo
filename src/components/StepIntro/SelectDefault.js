import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";

function SelectDefault(props) {

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
            {props.listLanguage.map((item) => {
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

export default SelectDefault;