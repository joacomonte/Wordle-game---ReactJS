import React from "react";
import WordlePage from "./pages/WordlePage";
import  { Routes, Route } from "react-router-dom";

function App(){
  return(
      <>
      <div className="pageContainer-monte1">
          <Routes>
              <Route path="/" element={<WordlePage />} />
          </Routes>
      </div>
      </>
  )
}
export default App;