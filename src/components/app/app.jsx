import React from "react";
import { Route, Routes } from "react-router";
import Main from "../../pages/main/main";
import Layout from "../layout/layout";
import Vacancies from "../../pages/vacancies/vacancies";
import Candidates from "../../pages/candidates/candidates";
import NotFound from "../../pages/not-found/not-found";
import  styles from "./app.module.css";
import Applications from "../../pages/applications/applications";
// import { ThemeProvider, createTheme } from "@mui/material";

// const theme = createTheme({
//   palette: {
//     primary: '#D9D9D9',
//     // secondary: purple,
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <div className={styles.page}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="vacancies" element={<Vacancies />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="applications" element={<Applications />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
    // </ThemeProvider>

  );
}

export default App;
