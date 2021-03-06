import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SelectLang from "./SelectLang";
import { useHistory } from "react-router-dom";
import SelectDefault from "./SelectDefault";

function StepIntro(props) {
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
      value: "Hindi ",
      language: "Hindi ",
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
  //  Local storage
  const getLanguageDefault = (item) =>
    localStorage.setItem("languageDef", item);
  const defaultLanguage = localStorage.getItem("languageDef");

  const getLanguage = (item) => localStorage.setItem("language", item);
  const getLanguage2 = (item) => localStorage.setItem("language2", item);
  const getLanguage3 = (item) => localStorage.setItem("language3", item);

  const language = localStorage.getItem("language");
  const language2 = localStorage.getItem("language2");
  const language3 = localStorage.getItem("language3");

  const [optLangDef, setOptLangDef] = useState("");
  const [optLang, setOptLang] = useState("");
  const [optLang2, setOptLang2] = useState(2);
  const [optLang3, setOptLang3] = useState(3);

  getLanguage3(optLang3);
  getLanguage2(optLang2);
  getLanguage(optLang);
  getLanguageDefault(optLangDef);

  let history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));

  const getSteps = () => {
    return ["B?????c 1", "B?????c 2", "B?????c 3"];
  };
  const handleOnChangeLangDefault = (e) => {
    setOptLangDef(e.target.value);
    getLanguageDefault(e.target.value);
  };
  const handleOnChangeLang = (e) => {
    setOptLang(e.target.value);
    getLanguage(e.target.value);
  };
  const handleOnChangeLang2 = (e) => {
    setOptLang2(e.target.value);
    getLanguage2(e.target.value);
  };

  const handleOnChangeLang3 = (e) => {
    setOptLang3(e.target.value);
    getLanguage3(e.target.value);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <h3>Ch???n ng??n ng??? m???c ?????nh c???a b???n</h3>
            <SelectDefault
              optLang={optLangDef}
              onChange={handleOnChangeLangDefault}
              listLanguage={listLanguage}
            />
         {optLangDef === "" ? null : <p>B???n ??ang ch???n {defaultLanguage}</p>}
          </div>
        );
      case 1:
        return (
          <div>
            <h3>Ch???n ng??n ng??? b???n mu???n ??n t???p</h3>
            <h5>(T???i ??a 3 ng??n ng???)</h5>
            <SelectLang
              optLang={optLang}
              optLang2={optLang2}
              optLang3={optLang3}
              onChange={handleOnChangeLang}
              onChange2={handleOnChangeLang2}
              onChange3={handleOnChangeLang3}
              listLanguage={listLanguage}
            />
            <p>
              Vui l??ng kh??ng ch???n l???i ng??n ng??? m???c ?????nh:
              <strong>{defaultLanguage}</strong>
            </p>
            {optLang === 1  || optLang === "" ? null : <p>B???n ??ang ch???n {language}</p>}
            {optLang2 === 2 || optLang2 === "" ? null : <p>B???n ??ang ch???n th??m ng??n ng??? b??? sung l?? {language2}</p>}
            {optLang3 === 3 || optLang3 === "" ? null : <p>B???n ??ang ch???n th??m ng??n ng??? b??? sung l?? {language3}</p>}
          </div>
        );
      case 2:
        return (
          <div>
            <h2> Ch??ng m???ng b???n ???? ho??n t???t ????ng k?? ng??n ng???!</h2>
            <p>
              Ng??n ng??? m???c ?????nh c???a b???n l?? <strong>{defaultLanguage}</strong>
            </p>
            <p>
              Ng??n ng??? b???n mu???n ??n t???p l?? <strong>{language}</strong>{optLang2 === 2 || optLang2 === "" ? null : <strong>, {language2}</strong>}{optLang3 === 3 || optLang2 === "" ? null : <strong>, {language3}</strong>}
            </p>

            <h5>
              (B???n ki???m tra l???i 1 l???n n???a, n???u kh??ng c?? g?? thay ?????i th?? b???n ch???n
              FINISH nh??!)
            </h5>
          </div>
        );
      default:
        return "Unknown";
    }
  };

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
    if (activeStep === steps.length - 1) {
      history.push("/start");
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
<div className="container">
<div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography component="div">{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  {defaultLanguage === language ? (
                    <Button
                      onClick={handleBack}
                      className={classes.button}
                      disabled
                    >
                      Back
                    </Button>
                  ) : (
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                  )}
                  {
                  optLangDef === "" ||
                  optLang === 1 ||
                  defaultLanguage === language ||
                  language2 === defaultLanguage ||
                  language3 === defaultLanguage ||
                  language === language2 ||
                  language === language3 ||
                  language2 === language3 ? (
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      disabled
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  )}
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
 
</div>
  );
}

export default StepIntro;
