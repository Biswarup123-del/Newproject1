import React from "react";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import Form from "./components/From";
import Documents from "./components/Docoments";
import FillingModes from "./components/FillingModes"; 
import Procedure from "./components/Procedure";

function App() {
  return (
    <div>
      <Hero />
      <Tabs />
      <Form />
      <Documents />
      <FillingModes />
      <Procedure />
      
    </div>
  );
}

export default App;
