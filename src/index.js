import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CardList from "./components/CardList";
import Quotes from "./components/Quotes";

import Gambar from "./assets/images/Me.jpg";

const  quotes = "Disaat payung teduh ku dengar, disitu lah tugas-tugas terbabat habis";

ReactDOM.render (
  <React.StrictMode>
    <App />
    <CardList 
      name="Muhammad Abdul Majid"
      nim="21120118140042"
      kelompok="44"
      isNameBold
      image={Gambar}
    />
    <Quotes author="Orang" quotes={quotes} />
  </React.StrictMode>,
  document.getElementById("root")
);