import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(); // Move createContext outside

const UseContextExample = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.3s ease",
        }}
      >
        <ToolBar />
      </div>
    </ThemeContext.Provider>
  );
};

function ToolBar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div>
      <h2>useContext example</h2>
      <button
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
          border: "1px solid",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={toggleTheme}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default UseContextExample;
