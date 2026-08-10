import React, { useEffect } from "react";
import "./App.scss";
import Main from "./containers/Main";
import ReactGA from 'react-ga4';

function App() {
  useEffect(() => {
    // Ensure the measurement ID is set in your .env file as REACT_APP_GA_MEASUREMENT_ID
    const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;
    if (measurementId) {
      ReactGA.initialize(measurementId);
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
