import React from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
function FormVocabulary(props) {
  return (
    <form
      className={props.className.root}
      noValidate
      autoComplete="off"
      onSubmit={props.submit}
    >
      <TextField
        id="outlined-basic"
        label={props.defaultLang}
        variant="outlined"
        value={props.input1}
        onChange={props.onChange1}
        disabled={props.statusValue}
      />
      <TextField
        id="outlined-basic"
        label={props.lang1}
        variant="outlined"
        value={props.input2}
        onChange={props.onChange2}
      />
      {props.statusLang2 ? null : (
        <TextField
          id="outlined-basic"
          label={props.lang2}
          variant="outlined"
          value={props.input3}
          onChange={props.onChange3}
        />
      )}
      {props.statusLang3 ? null : (
        <TextField
          id="outlined-basic"
          label={props.lang3}
          variant="outlined"
          value={props.input4}
          onChange={props.onChange4}
        />
      )}
      <Fab
        color="primary"
        className={props.className.fab}
        type="submit"
        disabled={props.statusDisabled}
      >
        <props.icon1 />
      </Fab>
      {props.statusButton === true ? (
        <Fab
          color="primary"
          className={props.className.fab}
          onClick={props.onClose}
        >
          <props.icon2 />
        </Fab>
      ) : null}
    </form>
  );
}

export default FormVocabulary;
