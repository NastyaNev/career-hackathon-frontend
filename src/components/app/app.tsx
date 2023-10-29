import React from "react";
import { Route, Routes } from "react-router";
import Main from "../../pages/main/main";
import Layout from "../layout/layout";
// import Vacancies from "../../pages/vacancies/vacancies";
import Candidates from "../../pages/candidates/candidates";
import NotFound from "../../pages/not-found/not-found";
import styles from "./app.module.css";
import Applications from "../../pages/applications/applications";
import Vacancy from "../../pages/vacancies/vacancy/vacancy";
import Candidate from "../../pages/candidates/candidate/candidate";
import ApplicationsNew from "../../pages/applications/applications-new/applicationa-new";
import ApplicationsArchive from "../../pages/applications/applications-archive/applications-archive";
import VacancyApplications from "../../pages/vacancies/vacancy/vacancy-applications/vacancy-applications";
import MyCandidates from "../../pages/vacancies/vacancy/my-candidates/my-candidates";
import ApplicationsActual from "../../pages/applications/applications-actual/applications-actual";
import VacanciesActual from "../../pages/vacancies/vacancies-actual/vacancies-actual";
import VacanciesArchive from "../../pages/vacancies/vacancies-archive/vacancies-archive";

function App() {
  return (
    <div className={styles.page}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="/vacancies" element={<Vacancies />} >
            <Route path="/vacancies" element={<VacanciesActual />} />
            <Route path="/vacancies/vacancies-archive" element={<VacanciesArchive />} />
          </Route>
          <Route path="/vacancies/vacancy" element={<Vacancy />} >
            <Route path="/vacancies/vacancy" element={<MyCandidates />} />
            <Route path="/vacancies/vacancy/vacancy-applications" element={<VacancyApplications />} />
          </Route>
          <Route path="/candidates/candidate" element={<Candidate />} />
          <Route path="/applications" element={<Applications />} >
            <Route path="/applications" element={<ApplicationsActual />} />
            <Route path="/applications/new" element={<ApplicationsNew />} />
            <Route path="/applications/applications-archive" element={<ApplicationsArchive />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
