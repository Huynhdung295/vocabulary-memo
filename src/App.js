import React from "react";
import "./App.css";
import StepIntro from "./components/StepIntro/StepIntro";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AppVocabulary from "./components/Vocabulary";
import MultipleApp from "./components/Multiple";
function App() {
  //  Local storage
  const defaultLanguage = localStorage.getItem("languageDef");
  const language = localStorage.getItem("language");

  return (
    <div>
      <Router>
      <Switch>
      <Route path="/multiple">
            <MultipleApp />
          </Route>
          <Route path="/start">
            <AppVocabulary />
          </Route>
          <Route path="/">
          {language === "" || defaultLanguage === "" || language === null || defaultLanguage === null? (
        <StepIntro />
      ) : (
        <AppVocabulary />
      )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
