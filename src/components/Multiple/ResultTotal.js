import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import { useEffect } from "react";

function ResultTotal(props) {
  const [trueAnswer, setTrueAnswer] = useState();
  const [falseAnswer, setFalseAnswer] = useState();
  const [totalAnswer, setTotalAnswer] = useState();
  let countAnswer = [];
  const q1 = props.question1;
  const q2 = props.question2;
  const q3 = props.question3;
  const q4 = props.question4;
  const q5 = props.question5;
  const q6 = props.question6;
  const q7 = props.question7;
  const q8 = props.question8;
  const q9 = props.question9;
  const q10 = props.question10;
  const q11 = props.question11;
  const q12 = props.question12;
  const q13 = props.question13;
  const q14 = props.question14;
  const q15 = props.question15;

  const a1 = props.answer1;
  const a2 = props.answer2;
  const a3 = props.answer3;
  const a4 = props.answer4;
  const a5 = props.answer5;
  const a6 = props.answer6;
  const a7 = props.answer7;
  const a8 = props.answer8;
  const a9 = props.answer9;
  const a10 = props.answer10;
  const a11 = props.answer11;
  const a12 = props.answer12;
  const a13 = props.answer13;
  const a14 = props.answer14;
  const a15 = props.answer15;

  const countTrueAnswer = (question, answer) => {
    if (question.language === answer[0]) {
      countAnswer.push("True");
    } else {
      countAnswer.push("False");
    }
    if (question.language2 === answer[1]) {
      countAnswer.push("True");
    } else {
      countAnswer.push("False");
    }
    if (question.language3 === answer[2]) {
      countAnswer.push("True");
    } else {
      countAnswer.push("False");
    }
  };

  const countTrueAnswer2 = (question, answer) => {
    if (question.language === answer[0]) {
      countAnswer.push("True");
    } else {
      countAnswer.push("False");
    }
    if (question.language3 === answer[2]) {
      countAnswer.push("True");
    } else {
      countAnswer.push("False");
    }
  };

  const countTrueAnswer3 = (question, answer) => {
    if (question.language === answer[0]) {
      countAnswer.push("True");
    } else {
      countAnswer.push("False");
    }
    if (question.language2 === answer[1]) {
      countAnswer.push("True");
    } else {
      countAnswer.push("False");
    }
  };
  console.log(props);
  useEffect(() => {
    if (props.status2) {
      countTrueAnswer2(q1, a1);
      countTrueAnswer2(q2, a2);
      countTrueAnswer2(q3, a3);
      countTrueAnswer2(q4, a4);
      countTrueAnswer2(q5, a5);
      if (props.difficult >= "10") {
        countTrueAnswer2(q6, a6);
        countTrueAnswer2(q7, a7);
        countTrueAnswer2(q8, a8);
        countTrueAnswer2(q9, a9);
        countTrueAnswer2(q10, a10);
        if (props.difficult >= "15") {
          countTrueAnswer2(q11, a11);
          countTrueAnswer2(q12, a12);
          countTrueAnswer2(q13, a13);
          countTrueAnswer2(q14, a14);
          countTrueAnswer2(q15, a15);
        }
      }
    } else if (props.status3) {
      countTrueAnswer3(q1, a1);
      countTrueAnswer3(q2, a2);
      countTrueAnswer3(q3, a3);
      countTrueAnswer3(q4, a4);
      countTrueAnswer3(q5, a5);
      if (props.difficult >= "10") {
        countTrueAnswer3(q6, a6);
        countTrueAnswer3(q7, a7);
        countTrueAnswer3(q8, a8);
        countTrueAnswer3(q9, a9);
        countTrueAnswer3(q10, a10);
        if (props.difficult >= "15") {
          countTrueAnswer3(q11, a11);
          countTrueAnswer3(q12, a12);
          countTrueAnswer3(q13, a13);
          countTrueAnswer3(q14, a14);
          countTrueAnswer3(q15, a15);
        }
      }
    } else {
      countTrueAnswer(q1, a1);
      countTrueAnswer(q2, a2);
      countTrueAnswer(q3, a3);
      countTrueAnswer(q4, a4);
      countTrueAnswer(q5, a5);
      if (props.difficult >= "10") {
        countTrueAnswer(q6, a6);
        countTrueAnswer(q7, a7);
        countTrueAnswer(q8, a8);
        countTrueAnswer(q9, a9);
        countTrueAnswer(q10, a10);
        if(props.difficult >= "15"){
          countTrueAnswer(q11, a11);
          countTrueAnswer(q12, a12);
          countTrueAnswer(q13, a13);
          countTrueAnswer(q14, a14);
          countTrueAnswer(q15, a15);
        }
      }
    }
    let totalAns = countAnswer.length;
    let trueAns = countAnswer.filter((data) => data === "True").length;
    let falseAns = totalAns - trueAns;
    setTotalAnswer(totalAns);
    setTrueAnswer(trueAns);
    setFalseAnswer(falseAns);
    // eslint-disable-next-line
  }, []);
  let per = ((trueAnswer / totalAnswer) * 100).toFixed(2);

  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Card className={props.className.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Tổng kết
          </Typography>
          <p>
            Số câu trả lời đúng:{" "}
            <strong>
              {trueAnswer}/{totalAnswer}
            </strong>
          </p>
          <p>
            Số câu trả lời sai:{" "}
            <strong>
              {falseAnswer}/{totalAnswer}
            </strong>
          </p>
          <p>
            Bạn đã làm được <strong>{per}%</strong>
          </p>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ResultTotal;
