
import React, { useState } from "react";
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 12;
  const countryName = 'us';
  // const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return <div>
    <Router>
      <NavBar />
      <LoadingBar
        height={3}
        color='black'
        progress={progress}
      />
      <Routes>
        <Route exact path="/" element={
          <News setProgress={setProgress} key="general" pageSize={pageSize} country={countryName} category="general" />
        } />
        <Route exact path="/business" element={
          <News setProgress={setProgress} key="business" pageSize={pageSize} country={countryName} category="business" />
        } />
        <Route exact path="/entertainment" element={
          <News setProgress={setProgress} key="entertainment" pageSize={pageSize} country={countryName} category="entertainment" />
        } />
        <Route exact path="/health" element={
          <News setProgress={setProgress} key="health" pageSize={pageSize} country={countryName} category="health" />
        } />
        <Route exact path="/science" element={
          <News setProgress={setProgress} key="science" pageSize={pageSize} country={countryName} category="science" />
        } />
        <Route exact path="/sports" element={
          <News setProgress={setProgress} key="sports" pageSize={pageSize} country={countryName} category="sports" />
        } />
        <Route exact path="/technology" element={
          <News setProgress={setProgress} key="technology" pageSize={pageSize} country={countryName} category="technology" />
        } />
      </Routes>
    </Router>
  </div>;
}

export default App;