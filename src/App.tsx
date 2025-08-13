import "./App.css";
import Header from "./components/Header";
import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = React.useState("dark");
  const [day, month, date] = new Date().toString().split(" ");
  const dateInfo = [day, month, date];
  function toggleTheme() {
    setTheme((prevVal) => (prevVal === "dark" ? "" : "dark"));
  }
  return (
    <div
      className={
        theme === "dark"
          ? "bg-bg-dark text-light-text min-h-screen"
          : "bg-bg-light text-dark-text min-h-screen"
      }
    >
      <Header theme={theme} toggle={toggleTheme} dateInfo={dateInfo}></Header>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
