import React from "react";
import styles from "./app.module.css";
import { Route, Routes } from "react-router";
import Main from "../../pages/main/main";
import Layout from "../layout/layout";
import Vacancies from "../../pages/vacancies/vacancies";
import Candidates from "../../pages/candidates/candidates";
import NotFound from "../../pages/not-found/not-found";

function App() {

  return (
    <div className={styles.page}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='vacancies' element={<Vacancies />} />
          <Route path='candidates' element={<Candidates />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;

