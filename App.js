import React, { useState, useEffect } from "react";
import data from "./Data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import img from "./assets/avatar1.png";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [cv, setCv] = useState(data);
  const [value, setValue] = useState(0);
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const { title, info } = cv[value];

  return (
    <div>
      <div className="app">
        <button className="btn" onClick={toggleTheme}>
          Toggle dark mode
        </button>
      </div>
      <div className="app">
        <img src={img} alt="avatar" />
      </div>
      <div className="main-title">
        <h2 className="app">Portfolio</h2>
        <div className="underline"></div>
      </div>
      <div className="content-center">
        <div className="btn-container">
          {cv.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`content-btn ${index === value && "active-btn"}`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{info}</h4>
        </article>
        <div className="icons app">
          <a href="https://github.com/vandev-om/">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ivan-l-frontend-developer/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
