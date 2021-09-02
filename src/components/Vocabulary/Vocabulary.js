import React, { useState } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import FormVocabulary from "./FormVocabulary";
import ListVocabulary from "./ListVocabulary";
import { Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
// Style Material UI
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  fab: {
    margin: theme.spacing(1),
  },
  grid: {
    flexGrow: 1,
    overflow: "hidden",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Vocabulary() {
  // Call Styles
  const classes = useStyles();
  //  Call history for button
  const history = useHistory();
  // LocalStorage
  const setDataApp = (data) => localStorage.setItem("dataApp", data);
  const getDataApp = localStorage.getItem("dataApp");
  let listDataWord = JSON.parse(getDataApp);
  if (listDataWord === null || listDataWord === "") listDataWord = [];
  const defaultLang = localStorage.getItem("languageDef");
  const lang1 = localStorage.getItem("language");
  const lang2 = localStorage.getItem("language2");
  const lang3 = localStorage.getItem("language3");
  // Hook
  const [listWord, setListWord] = useState(listDataWord);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [openModal, setOpenModel] = useState(false);
  const [currentValue1, setCurrentValue1] = useState(JSON.stringify({}));
  const [currentValue2, setCurrentValue2] = useState(JSON.stringify({}));
  const [currentValue3, setCurrentValue3] = useState(JSON.stringify({}));
  const [currentValue4, setCurrentValue4] = useState(JSON.stringify({}));
  const [currentArray, setCurrentArray] = useState();
  // -- Get Event On Change
  const handleOnChange1 = (e) => {
    setInput1(e.target.value);
  };
  const handleOnChange2 = (e) => {
    setInput2(e.target.value);
  };
  const handleOnChange3 = (e) => {
    setInput3(e.target.value);
  };
  const handleOnChange4 = (e) => {
    setInput4(e.target.value);
  };
  const handleEditInputChange1 = (e) => {
    setCurrentValue1({ ...currentValue1, defaultLanguage: e.target.value });
  };
  const handleEditInputChange2 = (e) => {
    setCurrentValue2({ ...currentValue2, language: e.target.value });
  };
  const handleEditInputChange3 = (e) => {
    setCurrentValue3({ ...currentValue3, language2: e.target.value });
  };
  const handleEditInputChange4 = (e) => {
    setCurrentValue4({ ...currentValue4, language3: e.target.value });
  };

  // -- Handle Open/Close Modal
  const handleClose = () => {
    setOpenModel(false);
  };
  // -- Set Data
  const setData = (newArray) => {
    setListWord(newArray);
    setDataApp(JSON.stringify(newArray));
  };
  // -- Add Word
  const addWord = (defaultLanguage, language, language2, language3) => {
    setData([
      ...listWord,
      {
        id: Math.random(),
        defaultLanguage,
        language,
        language2,
        language3,
      },
    ]);
  };
  // -- Delete Word
  const deleteWord = (id) => {
    const removeWord = listWord.filter((data) => data.id !== id);
    setData(removeWord);
  };
  // -- Edit Word
  const updateWord = (id, update) => {
    const updateWord = listWord.map((data) => (data.id === id ? update : data));
    setData(updateWord);
  };

  const editWord = (item) => {
    setOpenModel(true);
    setCurrentValue1({ ...item });
    setCurrentValue2({ ...item });
    setCurrentValue3({ ...item });
    setCurrentValue4({ ...item });
    setCurrentArray({ ...item });
  };
  // -- Status Input
  let statusDisabled =
    input1 === "" ||
    input2 === "" ||
    input3 === "" ||
    input4 === "" ||
    input1 === null ||
    input2 === null ||
    input3 === null ||
    input4 === null;
  let statusUpdate =
    currentValue2.language === "" ||
    currentValue3.language2 === "" ||
    currentValue4.language3 === "" ||
    currentValue2.language === null ||
    currentValue3.language2 === null ||
    currentValue4.language3 === null;
  const statusLang2 = lang2 === "2" || lang2 === null || lang2 === "";
  const statusLang3 = lang3 === "3" || lang3 === null || lang3 === "";
  if (statusLang2) {
    statusDisabled =
      input1 === "" ||
      input2 === "" ||
      input4 === "" ||
      input1 === null ||
      input2 === null ||
      input4 === null;
    statusUpdate =
      currentValue2.language === "" ||
      currentValue4.language3 === "" ||
      currentValue2.language === null ||
      currentValue4.language3 === null;
  }
  if (statusLang3) {
    statusDisabled =
      input1 === "" ||
      input2 === "" ||
      input3 === "" ||
      input1 === null ||
      input2 === null ||
      input3 === null;
    statusUpdate =
      currentValue2.language === "" ||
      currentValue3.language2 === "" ||
      currentValue2.language === null ||
      currentValue3.language2 === null;
  }
  // -- Submit Add
  const submitAddWord = () => {
    addWord(input1.trim(), input2.trim(), input3.trim(), input4.trim());
    setInput1("");
    setInput2("");
    setInput3("");
    setInput4("");
  };
  // -- Submit Update
  const submitUpdate = () => {
    const arrayPush = {
      ...currentArray,
      language: currentValue2.language,
      language2: currentValue3.language2,
      language3: currentValue4.language3,
    };
    updateWord(currentValue2.id, arrayPush);
  };

  return (
    <div>
      <Typography variant="h5" component="h1">
        Tạo từ vựng
      </Typography>
      <FormVocabulary
        className={classes}
        submit={submitAddWord}
        defaultLang={defaultLang}
        lang1={lang1}
        lang2={lang2}
        lang3={lang3}
        onChange1={handleOnChange1}
        onChange2={handleOnChange2}
        onChange3={handleOnChange3}
        onChange4={handleOnChange4}
        input1={input1}
        input2={input2}
        input3={input3}
        input4={input4}
        statusDisabled={statusDisabled}
        icon1={AddIcon}
        icon2={CloseIcon}
        statusButton={false}
        statusLang2={statusLang2}
        statusLang3={statusLang3}
        statusValue={false}
      />
      <Typography variant="h5" component="h1">
        Ôn tập từ vựng
      </Typography>
      <Button
        disabled={listWord.length < 5}
        className={classes.root}
        onClick={() => {
          history.push("/multiple");
        }}
        variant="contained"
        color="primary"
      >
        Làm trắc nghiệm (Easy)
      </Button>
      <p>(Trong từ điển của bạn tối thiểu phải có 5 từ)</p>
      <Button
        disabled={listWord.length < 10}
        className={classes.root}
        onClick={() => {
          history.push("/multipleMed");
        }}
        variant="contained"
        color="primary"
      >
        Làm trắc nghiệm (Medium)
      </Button>
      <p>(Trong từ điển của bạn tối thiểu phải có 10 từ)</p>
      <Button
        disabled={listWord.length < 15}
        className={classes.root}
        onClick={() => {
          history.push("/multipleHar");
        }}
        variant="contained"
        color="primary"
      >
        Làm trắc nghiệm (Hard)
      </Button>
      <p>(Trong từ điển của bạn tối thiểu phải có 15 từ)</p>
      <Button
        disabled={listWord.length < 20}
        className={classes.root}
        onClick={() => {
          history.push("/multipleEx");
        }}
        variant="contained"
        color="primary"
      >
        Làm trắc nghiệm (Expert)
      </Button>
      <p>(Trong từ điển của bạn tối thiểu phải có 20 từ)</p>
      <Typography variant="h5" component="h1">
        Danh sách từ vựng
      </Typography>

      <ListVocabulary
        className={classes}
        defaultLang={defaultLang}
        lang1={lang1}
        lang2={lang2}
        lang3={lang3}
        listWord={listWord}
        deleteWord={deleteWord}
        editWord={editWord}
        icon1={DeleteForeverIcon}
        icon2={EditIcon}
        statusLang2={statusLang2}
        statusLang3={statusLang3}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Update Note</h2>
            <FormVocabulary
              className={classes}
              submit={submitUpdate}
              defaultLang={defaultLang}
              lang1={lang1}
              lang2={lang2}
              lang3={lang3}
              onChange1={handleEditInputChange1}
              onChange2={handleEditInputChange2}
              onChange3={handleEditInputChange3}
              onChange4={handleEditInputChange4}
              input1={currentValue1.defaultLanguage}
              input2={currentValue2.language}
              input3={currentValue3.language2}
              input4={currentValue4.language3}
              statusDisabled={statusUpdate}
              icon1={SaveIcon}
              icon2={CloseIcon}
              statusButton={true}
              statusLang2={statusLang2}
              statusLang3={statusLang3}
              onClose={handleClose}
              statusValue={true}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Vocabulary;
