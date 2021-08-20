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
  const a1 = props.answer1;
  const a2 = props.answer2;
  const a3 = props.answer3;
  const a4 = props.answer4;
  const a5 = props.answer5;

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

  useEffect(() => {
    if (props.status2) {
      countTrueAnswer2(q1, a1);
      countTrueAnswer2(q2, a2);
      countTrueAnswer2(q3, a3);
      countTrueAnswer2(q4, a4);
      countTrueAnswer2(q5, a5);
    } else if (props.status3) {
      countTrueAnswer3(q1, a1);
      countTrueAnswer3(q2, a2);
      countTrueAnswer3(q3, a3);
      countTrueAnswer3(q4, a4);
      countTrueAnswer3(q5, a5);
    } else {
      countTrueAnswer(q1, a1);
      countTrueAnswer(q2, a2);
      countTrueAnswer(q3, a3);
      countTrueAnswer(q4, a4);
      countTrueAnswer(q5, a5);
    }
    let totalAns = countAnswer.length;
    let trueAns = countAnswer.filter((data) => data === "True").length;
    let falseAns = totalAns - trueAns;
    setTotalAnswer(totalAns);
    setTrueAnswer(trueAns);
    setFalseAnswer(falseAns);
  }, []);
  let per = ((trueAnswer / totalAnswer) * 100).toFixed(2);

  return (
    <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
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
