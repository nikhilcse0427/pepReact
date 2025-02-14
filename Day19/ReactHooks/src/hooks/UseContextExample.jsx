import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(); // Move createContext outside

const UseContextExample = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ToolBar />
      </ThemeContext.Provider>
    </div>
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
        }}
        onClick={toggleTheme}
      >
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
}

export default UseContextExample;
