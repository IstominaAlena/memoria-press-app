import { useState, useEffect } from "react";

import { getStudentList } from "./services/dataAPI";

import SectionWrapper from "./components/shared/SectionWrapper";
import Navigation from "./components/Navigation";
import Filter from "./components/Filter";
import DataTable from "./components/DataTable";

import "./styles/App.css";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const { data } = await getStudentList(1, 20);
        setState(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getStudents();
  }, []);

  return (
    <div className="App">
      <SectionWrapper className="header">
        <Navigation />
      </SectionWrapper>
      <SectionWrapper className="filter">
        <Filter />
      </SectionWrapper>
      <SectionWrapper className="section">
        <DataTable datas={state} />
      </SectionWrapper>
    </div>
  );
}

export default App;
