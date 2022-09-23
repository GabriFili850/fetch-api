import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const fetchRandomData = () => {
  return axios
    .get("https://randomuser.me/api")
    .then(({ data }) => {
      // handle success
      console.log(data);
      return JSON.stringify(data);
    })
    .catch((err) => {
      // handle error
      console.error(err);
    });
};

const App = () => {
  const [randomUserDataJSON, setRandomUserDataJSON] = useState("");

  useEffect(() => {
    fetchRandomData().then((randomData) => {
      setRandomUserDataJSON(randomData);
    });
  }, []);

  return (
    <div className="App">
      <h1>This App will fetch random data from an API</h1>

      <p>{randomUserDataJSON}</p>
    </div>
  );
};

export default App;
