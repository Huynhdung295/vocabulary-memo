import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CardQuestion from "./CardQuestion";
import Result from "./Result";
import ResultTotal from "./ResultTotal";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import BeforeSubmit from "./BeforeSubmit";

import MobileStepper from "@material-ui/core/MobileStepper";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "100%",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  step: {
    margin: theme.spacing(1),
    width: "100%",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  wrapButton: {
    display: "flex",
    justifyContent: "space-between",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  grid: {
    flexGrow: 1,
    overflow: "hidden",
  },
  absolute: {
    position: "fixed",
    bottom: theme.spacing(5),
    right: theme.spacing(3),
  },
}));

function HighQuestion() {
  const classes = useStyles();
  // LocalStorage
  const getDataApp = localStorage.getItem("dataApp");
  let listDataWord = JSON.parse(getDataApp);
  if (listDataWord === null || listDataWord === "") listDataWord = [];

  const defaultLang = localStorage.getItem("languageDef");
  const lang1 = localStorage.getItem("language");
  const lang2 = localStorage.getItem("language2");
  const lang3 = localStorage.getItem("language3");

  const [activeStep, setActiveStep] = useState(0);
  const [listWord, setListWord] = useState(listDataWord);

  const [question1, setQuestion1] = useState();
  const [question2, setQuestion2] = useState();
  const [question3, setQuestion3] = useState();
  const [question4, setQuestion4] = useState();
  const [question5, setQuestion5] = useState();
  const [question6, setQuestion6] = useState();
  const [question7, setQuestion7] = useState();
  const [question8, setQuestion8] = useState();
  const [question9, setQuestion9] = useState();
  const [question10, setQuestion10] = useState();
  const [question11, setQuestion11] = useState();
  const [question12, setQuestion12] = useState();
  const [question13, setQuestion13] = useState();
  const [question14, setQuestion14] = useState();
  const [question15, setQuestion15] = useState();

  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();
  const [answer4, setAnswer4] = useState();
  const [answer5, setAnswer5] = useState();
  const [answer6, setAnswer6] = useState();
  const [answer7, setAnswer7] = useState();
  const [answer8, setAnswer8] = useState();
  const [answer9, setAnswer9] = useState();
  const [answer10, setAnswer10] = useState();
  const [answer11, setAnswer11] = useState();
  const [answer12, setAnswer12] = useState();
  const [answer13, setAnswer13] = useState();
  const [answer14, setAnswer14] = useState();
  const [answer15, setAnswer15] = useState();

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  // On change
  const onChangeInput1 = (e) => {
    setInput1(e.target.value);
  };
  const onChangeInput2 = (e) => {
    setInput2(e.target.value);
  };
  const onChangeInput3 = (e) => {
    setInput3(e.target.value);
  };

  //  Status Disabled
  let statusDisabled =
    input1 === "" ||
    input1 === null ||
    input2 === "" ||
    input2 === null ||
    input3 === "" ||
    input3 === null;
  const statusLang2 = lang2 === "2" || lang2 === null || lang2 === "";
  const statusLang3 = lang3 === "3" || lang3 === null || lang3 === "";
  if (statusLang2) {
    statusDisabled =
      input1 === "" || input3 === "" || input1 === null || input3 === null;
  }
  if (statusLang3) {
    statusDisabled =
      input1 === "" || input2 === "" || input1 === null || input2 === null;
  }
  if (activeStep === 0) statusDisabled = false;
  if (activeStep === 11) statusDisabled = false;

  // Get random
  const getRandom = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  const randomQuestion1 = getRandom(listWord);
  let newList1 = listWord.filter((data) => data !== randomQuestion1);
  const randomQuestion2 = getRandom(newList1);
  let newList2 = newList1.filter((data) => data !== randomQuestion2);
  const randomQuestion3 = getRandom(newList2);
  let newList3 = newList2.filter((data) => data !== randomQuestion3);
  const randomQuestion4 = getRandom(newList3);
  let newList4 = newList3.filter((data) => data !== randomQuestion4);
  const randomQuestion5 = getRandom(newList4);

  let newList5 = newList4.filter((data) => data !== randomQuestion5);
  const randomQuestion6 = getRandom(newList5);
  let newList6 = newList5.filter((data) => data !== randomQuestion6);
  const randomQuestion7 = getRandom(newList6);
  let newList7 = newList6.filter((data) => data !== randomQuestion7);
  const randomQuestion8 = getRandom(newList7);
  let newList8 = newList7.filter((data) => data !== randomQuestion8);
  const randomQuestion9 = getRandom(newList8);
  let newList9 = newList8.filter((data) => data !== randomQuestion9);
  const randomQuestion10 = getRandom(newList9);

  let newList10 = newList9.filter((data) => data !== randomQuestion10);
  const randomQuestion11 = getRandom(newList10);
  let newList11 = newList10.filter((data) => data !== randomQuestion11);
  const randomQuestion12 = getRandom(newList11);
  let newList12 = newList11.filter((data) => data !== randomQuestion12);
  const randomQuestion13 = getRandom(newList12);
  let newList13 = newList12.filter((data) => data !== randomQuestion13);
  const randomQuestion14 = getRandom(newList13);
  let newList14 = newList13.filter((data) => data !== randomQuestion14);
  const randomQuestion15 = getRandom(newList14);

  const setValueInput = (ans) => {
    if (ans === undefined || ans === null || ans === "") {
      setInput1("");
      setInput2("");
      setInput3("");
    } else {
      setInput1(ans[0]);
      setInput2(ans[1]);
      setInput3(ans[2]);
    }
  };

  // Submit Form
  const submitForm = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 1) setAnswer1([input1, input2, input3]);
    if (activeStep === 2) setAnswer2([input1, input2, input3]);
    if (activeStep === 3) setAnswer3([input1, input2, input3]);
    if (activeStep === 4) setAnswer4([input1, input2, input3]);
    if (activeStep === 5) setAnswer5([input1, input2, input3]);

    if (activeStep === 6) setAnswer6([input1, input2, input3]);
    if (activeStep === 7) setAnswer7([input1, input2, input3]);
    if (activeStep === 8) setAnswer8([input1, input2, input3]);
    if (activeStep === 9) setAnswer9([input1, input2, input3]);
    if (activeStep === 10) setAnswer10([input1, input2, input3]);

    if (activeStep === 11) setAnswer11([input1, input2, input3]);
    if (activeStep === 12) setAnswer12([input1, input2, input3]);
    if (activeStep === 13) setAnswer13([input1, input2, input3]);
    if (activeStep === 14) setAnswer14([input1, input2, input3]);
    if (activeStep === 15) setAnswer15([input1, input2, input3]);

    if (activeStep === 0) setValueInput(answer1);
    if (activeStep === 1) setValueInput(answer2);
    if (activeStep === 2) setValueInput(answer3);
    if (activeStep === 3) setValueInput(answer4);
    if (activeStep === 4) setValueInput(answer5);

    if (activeStep === 5) setValueInput(answer6);
    if (activeStep === 6) setValueInput(answer7);
    if (activeStep === 7) setValueInput(answer8);
    if (activeStep === 8) setValueInput(answer9);
    if (activeStep === 9) setValueInput(answer10);

    if (activeStep === 10) setValueInput(answer11);
    if (activeStep === 11) setValueInput(answer12);
    if (activeStep === 12) setValueInput(answer13);
    if (activeStep === 13) setValueInput(answer14);
    if (activeStep === 14) setValueInput(answer15);
  };

  useEffect(() => {
    setQuestion1(randomQuestion1);
    setQuestion2(randomQuestion2);
    setQuestion3(randomQuestion3);
    setQuestion4(randomQuestion4);
    setQuestion5(randomQuestion5);

    setQuestion6(randomQuestion6);
    setQuestion7(randomQuestion7);
    setQuestion8(randomQuestion8);
    setQuestion9(randomQuestion9);
    setQuestion10(randomQuestion10);

    setQuestion11(randomQuestion11);
    setQuestion12(randomQuestion12);
    setQuestion13(randomQuestion13);
    setQuestion14(randomQuestion14);
    setQuestion15(randomQuestion15);
    // eslint-disable-next-line
  }, []);

  function getSteps() {
    return [
      "Intro",
      "Question 1",
      "Question 2",
      "Question 3",
      "Question 4",
      "Question 5",
      "Question 6",
      "Question 7",
      "Question 8",
      "Question 9",
      "Question 10",
      "Question 11",
      "Question 12",
      "Question 13",
      "Question 14",
      "Question 15",
      "Result",
    ];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <h1>Welcome to Multiple-Vocabulary</h1>
            <h3>Một số lưu ý:</h3>
            <p>
              - Trong quá trình làm trắc nghiệm, bạn có thể ấn Back để làm lại
              câu trước đó
            </p>
            <p>- Khi ấn Submit thì bạn sẽ không thể ấn Back để làm lại</p>
            <p>- Sau khi Submit, bạn sẽ nhận được kết quả bài làm:</p>
            <p style={{ color: "green" }}>
              &ensp;+ Chữ màu xanh lá: Bạn đã trả lời đúng
            </p>
            <p>&ensp;+ Chữ màu đen: Bạn đã trả lời sai</p>
            <p style={{ color: "red" }}>&ensp;+ Chữ màu đỏ: Kết quả đúng</p>
          </div>
        );
      case 1:
        return (
          <CardQuestion
            title={"Question 1"}
            onSubmit={submitForm}
            question1={question1}
            classes={classes}
            defaultLang={defaultLang}
            lang1={lang1}
            lang2={lang2}
            lang3={lang3}
            value1={input1}
            value2={input2}
            value3={input3}
            onChange1={onChangeInput1}
            onChange2={onChangeInput2}
            onChange3={onChangeInput3}
            answer={answer1}
            status2={statusLang2}
            status3={statusLang3}
          />
        );
      case 2:
        return (
          <CardQuestion
            title={"Question 2"}
            onSubmit={submitForm}
            question1={question2}
            classes={classes}
            defaultLang={defaultLang}
            lang1={lang1}
            lang2={lang2}
            lang3={lang3}
            value1={input1}
            value2={input2}
            value3={input3}
            onChange1={onChangeInput1}
            onChange2={onChangeInput2}
            onChange3={onChangeInput3}
            answer={answer2}
            status2={statusLang2}
            status3={statusLang3}
          />
        );
      case 3:
        return (
          <CardQuestion
            title={"Question 3"}
            onSubmit={submitForm}
            question1={question3}
            classes={classes}
            defaultLang={defaultLang}
            lang1={lang1}
            lang2={lang2}
            lang3={lang3}
            value1={input1}
            value2={input2}
            value3={input3}
            onChange1={onChangeInput1}
            onChange2={onChangeInput2}
            onChange3={onChangeInput3}
            answer={answer3}
            status2={statusLang2}
            status3={statusLang3}
          />
        );
      case 4:
        return (
          <CardQuestion
            title={"Question 4"}
            onSubmit={submitForm}
            question1={question4}
            classes={classes}
            defaultLang={defaultLang}
            lang1={lang1}
            lang2={lang2}
            lang3={lang3}
            value1={input1}
            value2={input2}
            value3={input3}
            onChange1={onChangeInput1}
            onChange2={onChangeInput2}
            onChange3={onChangeInput3}
            answer={answer4}
            status2={statusLang2}
            status3={statusLang3}
          />
        );
      case 5:
        return (
          <CardQuestion
            title={"Question 5"}
            question1={question5}
            classes={classes}
            defaultLang={defaultLang}
            lang1={lang1}
            lang2={lang2}
            lang3={lang3}
            value1={input1}
            value2={input2}
            value3={input3}
            onChange1={onChangeInput1}
            onChange2={onChangeInput2}
            onChange3={onChangeInput3}
            answer={answer5}
            status2={statusLang2}
            status3={statusLang3}
          />
        );
      case 6:
        return (
          <CardQuestion
            title={"Question 6"}
            question1={question6}
            classes={classes}
            defaultLang={defaultLang}
            lang1={lang1}
            lang2={lang2}
            lang3={lang3}
            value1={input1}
            value2={input2}
            value3={input3}
            onChange1={onChangeInput1}
            onChange2={onChangeInput2}
            onChange3={onChangeInput3}
            answer={answer6}
            status2={statusLang2}
            status3={statusLang3}
          />
        );
      case 7:
        return (
          <CardQuestion
            title={"Question 7"}
            question1={question7}
            classes={classes}
            defaultLang={defaultLang}
            lang1={lang1}
            lang2={lang2}
            lang3={lang3}
            value1={input1}
            value2={input2}
            value3={input3}
            onChange1={onChangeInput1}
            onChange2={onChangeInput2}
            onChange3={onChangeInput3}
            answer={answer7}
            status2={statusLang2}
            status3={statusLang3}
          />
        );
      case 8:
        return (
          <CardQuestion
            title={"Question 8"}
            question1={question8}
            classes={classes}
            defaultLang={defaultLang}
            lang1={lang1}
            lang2={lang2}
            lang3={lang3}
            value1={input1}
            value2={input2}
            value3={input3}
            onChange1={onChangeInput1}
            onChange2={onChangeInput2}
            onChange3={onChangeInput3}
            answer={answer8}
            status2={statusLang2}
            status3={statusLang3}
          />
        );
      case 9:
        return (
          <CardQuestion
            title={"Question 9"}
            question1={question9}
            classes={classes}
            defaultLang={defaultLang}
            lang1={lang1}
            lang2={lang2}
            lang3={lang3}
            value1={input1}
            value2={input2}
            value3={input3}
            onChange1={onChangeInput1}
            onChange2={onChangeInput2}
            onChange3={onChangeInput3}
            answer={answer9}
            status2={statusLang2}
            status3={statusLang3}
          />
        );
      case 10:
        return (
          <CardQuestion
            title={"Question 10"}
            question1={question10}
            classes={classes}
            defaultLang={defaultLang}
            lang1={lang1}
            lang2={lang2}
            lang3={lang3}
            value1={input1}
            value2={input2}
            value3={input3}
            onChange1={onChangeInput1}
            onChange2={onChangeInput2}
            onChange3={onChangeInput3}
            answer={answer10}
            status2={statusLang2}
            status3={statusLang3}
          />
        );
      case 11:
        return (
          <CardQuestion
            title={"Question 11"}
            question1={question11}
            classes={classes}
            defaultLang={defaultLang}
            lang1={lang1}
            lang2={lang2}
            lang3={lang3}
            value1={input1}
            value2={input2}
            value3={input3}
            onChange1={onChangeInput1}
            onChange2={onChangeInput2}
            onChange3={onChangeInput3}
            answer={answer11}
            status2={statusLang2}
            status3={statusLang3}
          />
        );
      case 12:
        return (
          <CardQuestion
            title={"Question 12"}
            question1={question12}
            classes={classes}
            defaultLang={defaultLang}
            lang1={lang1}
            lang2={lang2}
            lang3={lang3}
            value1={input1}
            value2={input2}
            value3={input3}
            onChange1={onChangeInput1}
            onChange2={onChangeInput2}
            onChange3={onChangeInput3}
            answer={answer12}
            status2={statusLang2}
            status3={statusLang3}
          />
        );
      case 13:
        return (
          <CardQuestion
            title={"Question 13"}
            question1={question13}
            classes={classes}
            defaultLang={defaultLang}
            lang1={lang1}
            lang2={lang2}
            lang3={lang3}
            value1={input1}
            value2={input2}
            value3={input3}
            onChange1={onChangeInput1}
            onChange2={onChangeInput2}
            onChange3={onChangeInput3}
            answer={answer13}
            status2={statusLang2}
            status3={statusLang3}
          />
        );
      case 14:
        return (
          <CardQuestion
            title={"Question 14"}
            question1={question14}
            classes={classes}
            defaultLang={defaultLang}
            lang1={lang1}
            lang2={lang2}
            lang3={lang3}
            value1={input1}
            value2={input2}
            value3={input3}
            onChange1={onChangeInput1}
            onChange2={onChangeInput2}
            onChange3={onChangeInput3}
            answer={answer14}
            status2={statusLang2}
            status3={statusLang3}
          />
        );
      case 15:
        return (
          <CardQuestion
            title={"Question 15"}
            question1={question15}
            classes={classes}
            defaultLang={defaultLang}
            lang1={lang1}
            lang2={lang2}
            lang3={lang3}
            value1={input1}
            value2={input2}
            value3={input3}
            onChange1={onChangeInput1}
            onChange2={onChangeInput2}
            onChange3={onChangeInput3}
            answer={answer15}
            status2={statusLang2}
            status3={statusLang3}
          />
        );
      case 16:
        return (
          <div className={classes.grid}>
            <h1>Bạn kiểm tra lại 1 lần nữa trước khi Submit nhé</h1>
            <Grid container spacing={3}>
              <BeforeSubmit
                className={classes}
                defaultLang={defaultLang}
                lang1={lang1}
                lang2={lang2}
                lang3={lang3}
                question={question1}
                answer={answer1}
                status2={statusLang2}
                status3={statusLang3}
              />
              <BeforeSubmit
                className={classes}
                defaultLang={defaultLang}
                lang1={lang1}
                lang2={lang2}
                lang3={lang3}
                question={question2}
                answer={answer2}
                status2={statusLang2}
                status3={statusLang3}
              />
              <BeforeSubmit
                className={classes}
                defaultLang={defaultLang}
                lang1={lang1}
                lang2={lang2}
                lang3={lang3}
                question={question3}
                answer={answer3}
                status2={statusLang2}
                status3={statusLang3}
              />
              <BeforeSubmit
                className={classes}
                defaultLang={defaultLang}
                lang1={lang1}
                lang2={lang2}
                lang3={lang3}
                question={question4}
                answer={answer4}
                status2={statusLang2}
                status3={statusLang3}
              />
              <BeforeSubmit
                className={classes}
                defaultLang={defaultLang}
                lang1={lang1}
                lang2={lang2}
                lang3={lang3}
                question={question5}
                answer={answer5}
                status2={statusLang2}
                status3={statusLang3}
              />
              <BeforeSubmit
                className={classes}
                defaultLang={defaultLang}
                lang1={lang1}
                lang2={lang2}
                lang3={lang3}
                question={question6}
                answer={answer6}
                status2={statusLang2}
                status3={statusLang3}
              />
              <BeforeSubmit
                className={classes}
                defaultLang={defaultLang}
                lang1={lang1}
                lang2={lang2}
                lang3={lang3}
                question={question7}
                answer={answer7}
                status2={statusLang2}
                status3={statusLang3}
              />
              <BeforeSubmit
                className={classes}
                defaultLang={defaultLang}
                lang1={lang1}
                lang2={lang2}
                lang3={lang3}
                question={question8}
                answer={answer8}
                status2={statusLang2}
                status3={statusLang3}
              />
              <BeforeSubmit
                className={classes}
                defaultLang={defaultLang}
                lang1={lang1}
                lang2={lang2}
                lang3={lang3}
                question={question9}
                answer={answer9}
                status2={statusLang2}
                status3={statusLang3}
              />
              <BeforeSubmit
                className={classes}
                defaultLang={defaultLang}
                lang1={lang1}
                lang2={lang2}
                lang3={lang3}
                question={question10}
                answer={answer10}
                status2={statusLang2}
                status3={statusLang3}
              />
              <BeforeSubmit
                className={classes}
                defaultLang={defaultLang}
                lang1={lang1}
                lang2={lang2}
                lang3={lang3}
                question={question11}
                answer={answer11}
                status2={statusLang2}
                status3={statusLang3}
              />
              <BeforeSubmit
                className={classes}
                defaultLang={defaultLang}
                lang1={lang1}
                lang2={lang2}
                lang3={lang3}
                question={question12}
                answer={answer12}
                status2={statusLang2}
                status3={statusLang3}
              />
              <BeforeSubmit
                className={classes}
                defaultLang={defaultLang}
                lang1={lang1}
                lang2={lang2}
                lang3={lang3}
                question={question13}
                answer={answer13}
                status2={statusLang2}
                status3={statusLang3}
              />
              <BeforeSubmit
                className={classes}
                defaultLang={defaultLang}
                lang1={lang1}
                lang2={lang2}
                lang3={lang3}
                question={question14}
                answer={answer14}
                status2={statusLang2}
                status3={statusLang3}
              />
              <BeforeSubmit
                className={classes}
                defaultLang={defaultLang}
                lang1={lang1}
                lang2={lang2}
                lang3={lang3}
                question={question15}
                answer={answer15}
                status2={statusLang2}
                status3={statusLang3}
              />
            </Grid>
          </div>
        );
      default:
        return "Unknown stepIndex";
    }
  }

  const steps = getSteps();

  const handleBack = () => {
    if (activeStep === 2) {
      setInput1(answer1[0]);
      setInput2(answer1[1]);
      setInput3(answer1[2]);
    }
    if (activeStep === 3) {
      setInput1(answer2[0]);
      setInput2(answer2[1]);
      setInput3(answer2[2]);
    }
    if (activeStep === 4) {
      setInput1(answer3[0]);
      setInput2(answer3[1]);
      setInput3(answer3[2]);
    }
    if (activeStep === 5) {
      setInput1(answer4[0]);
      setInput2(answer4[1]);
      setInput3(answer4[2]);
    }
    if (activeStep === 6) {
      setInput1(answer5[0]);
      setInput2(answer5[1]);
      setInput3(answer5[2]);
    }
    if (activeStep === 7) {
      setInput1(answer6[0]);
      setInput2(answer6[1]);
      setInput3(answer6[2]);
    }
    if (activeStep === 8) {
      setInput1(answer7[0]);
      setInput2(answer7[1]);
      setInput3(answer7[2]);
    }
    if (activeStep === 9) {
      setInput1(answer8[0]);
      setInput2(answer8[1]);
      setInput3(answer8[2]);
    }
    if (activeStep === 10) {
      setInput1(answer9[0]);
      setInput2(answer9[1]);
      setInput3(answer9[2]);
    }
    if (activeStep === 11) {
      setInput1(answer10[0]);
      setInput2(answer10[1]);
      setInput3(answer10[2]);
    }
    if (activeStep === 12) {
      setInput1(answer11[0]);
      setInput2(answer11[1]);
      setInput3(answer11[2]);
    }
    if (activeStep === 13) {
      setInput1(answer12[0]);
      setInput2(answer12[1]);
      setInput3(answer12[2]);
    }
    if (activeStep === 14) {
      setInput1(answer13[0]);
      setInput2(answer13[1]);
      setInput3(answer13[2]);
    }
    if (activeStep === 15) {
      setInput1(answer14[0]);
      setInput2(answer14[1]);
      setInput3(answer14[2]);
    }
    if (activeStep === 16) {
      setInput1(answer15[0]);
      setInput2(answer15[1]);
      setInput3(answer15[2]);
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setAnswer1();
    setAnswer2();
    setAnswer3();
    setAnswer4();
    setAnswer5();
    setAnswer6();
    setAnswer7();
    setAnswer8();
    setAnswer9();
    setAnswer10();
    setAnswer11();
    setAnswer12();
    setAnswer13();
    setAnswer14();
    setAnswer15();
  };
  return (
    <div className="container">
      <div className={classes.root}>
        <MobileStepper
          variant="progress"
          steps={17}
          position="static"
          activeStep={activeStep - 1}
          className={classes.step}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </MobileStepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography component="div" className={classes.instructions}>
                <div className={classes.grid}>
                  <ResultTotal
                    difficult={"15"}
                    className={classes}
                    question1={question1}
                    question2={question2}
                    question3={question3}
                    question4={question4}
                    question5={question5}
                    question6={question6}
                    question7={question7}
                    question8={question8}
                    question9={question9}
                    question10={question10}
                    question11={question11}
                    question12={question12}
                    question13={question13}
                    question14={question14}
                    question15={question15}
                    answer1={answer1}
                    answer2={answer2}
                    answer3={answer3}
                    answer4={answer4}
                    answer5={answer5}
                    answer6={answer6}
                    answer7={answer7}
                    answer8={answer8}
                    answer9={answer9}
                    answer10={answer10}
                    answer11={answer11}
                    answer12={answer12}
                    answer13={answer13}
                    answer14={answer14}
                    answer15={answer15}
                    status2={statusLang2}
                    status3={statusLang3}
                  />
                  <Grid container spacing={3}>
                    <Result
                      className={classes}
                      defaultLang={defaultLang}
                      lang1={lang1}
                      lang2={lang2}
                      lang3={lang3}
                      question={question1}
                      answer={answer1}
                      status2={statusLang2}
                      status3={statusLang3}
                    />
                    <Result
                      className={classes}
                      defaultLang={defaultLang}
                      lang1={lang1}
                      lang2={lang2}
                      lang3={lang3}
                      question={question2}
                      answer={answer2}
                      status2={statusLang2}
                      status3={statusLang3}
                    />
                    <Result
                      className={classes}
                      defaultLang={defaultLang}
                      lang1={lang1}
                      lang2={lang2}
                      lang3={lang3}
                      question={question3}
                      answer={answer3}
                      status2={statusLang2}
                      status3={statusLang3}
                    />
                    <Result
                      className={classes}
                      defaultLang={defaultLang}
                      lang1={lang1}
                      lang2={lang2}
                      lang3={lang3}
                      question={question4}
                      answer={answer4}
                      status2={statusLang2}
                      status3={statusLang3}
                    />
                    <Result
                      className={classes}
                      defaultLang={defaultLang}
                      lang1={lang1}
                      lang2={lang2}
                      lang3={lang3}
                      question={question5}
                      answer={answer5}
                      status2={statusLang2}
                      status3={statusLang3}
                    />
                    <Result
                      className={classes}
                      defaultLang={defaultLang}
                      lang1={lang1}
                      lang2={lang2}
                      lang3={lang3}
                      question={question6}
                      answer={answer6}
                      status2={statusLang2}
                      status3={statusLang3}
                    />
                    <Result
                      className={classes}
                      defaultLang={defaultLang}
                      lang1={lang1}
                      lang2={lang2}
                      lang3={lang3}
                      question={question7}
                      answer={answer7}
                      status2={statusLang2}
                      status3={statusLang3}
                    />
                    <Result
                      className={classes}
                      defaultLang={defaultLang}
                      lang1={lang1}
                      lang2={lang2}
                      lang3={lang3}
                      question={question8}
                      answer={answer8}
                      status2={statusLang2}
                      status3={statusLang3}
                    />
                    <Result
                      className={classes}
                      defaultLang={defaultLang}
                      lang1={lang1}
                      lang2={lang2}
                      lang3={lang3}
                      question={question9}
                      answer={answer9}
                      status2={statusLang2}
                      status3={statusLang3}
                    />
                    <Result
                      className={classes}
                      defaultLang={defaultLang}
                      lang1={lang1}
                      lang2={lang2}
                      lang3={lang3}
                      question={question10}
                      answer={answer10}
                      status2={statusLang2}
                      status3={statusLang3}
                    />
                    <Result
                      className={classes}
                      defaultLang={defaultLang}
                      lang1={lang1}
                      lang2={lang2}
                      lang3={lang3}
                      question={question11}
                      answer={answer11}
                      status2={statusLang2}
                      status3={statusLang3}
                    />
                    <Result
                      className={classes}
                      defaultLang={defaultLang}
                      lang1={lang1}
                      lang2={lang2}
                      lang3={lang3}
                      question={question12}
                      answer={answer12}
                      status2={statusLang2}
                      status3={statusLang3}
                    />
                    <Result
                      className={classes}
                      defaultLang={defaultLang}
                      lang1={lang1}
                      lang2={lang2}
                      lang3={lang3}
                      question={question13}
                      answer={answer13}
                      status2={statusLang2}
                      status3={statusLang3}
                    />
                    <Result
                      className={classes}
                      defaultLang={defaultLang}
                      lang1={lang1}
                      lang2={lang2}
                      lang3={lang3}
                      question={question14}
                      answer={answer14}
                      status2={statusLang2}
                      status3={statusLang3}
                    />
                    <Result
                      className={classes}
                      defaultLang={defaultLang}
                      lang1={lang1}
                      lang2={lang2}
                      lang3={lang3}
                      question={question15}
                      answer={answer15}
                      status2={statusLang2}
                      status3={statusLang3}
                    />
                  </Grid>
                </div>
              </Typography>
              <Button onClick={handleReset}>Làm lại </Button>
            </div>
          ) : (
            <div>
              <Typography component="div" className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div className={classes.wrapButton}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  disabled={statusDisabled}
                  variant="contained"
                  color="primary"
                  onClick={submitForm}
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
        <Tooltip title="Home" aria-label="Home">
          <Fab color="primary" href="/" className={classes.absolute}>
            <HomeIcon />
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
}

export default HighQuestion;
