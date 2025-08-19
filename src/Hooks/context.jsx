import { createContext, useContext, useEffect, useState } from "react";
import card from "@/Services/data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState(card);
  const [filter, setFilter] = useState("all");
  // Here we define a state variable `theme`.
  // false = light mode (default), true = dark mode.
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    // This checks localStorage to see if the user has a saved preference.
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "true") {
      setTheme(true);
      document.body.classList.add("dark-theme");
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark-theme");

      // If theme is true, add the darkMode class to body.

      localStorage.setItem("theme", "true");

      // Save the preference as "true" in localStorage so it persists.
    } else {
      document.body.classList.remove("dark-theme");

      // If theme is false, remove the darkMode CSS class.

      localStorage.setItem("theme", "false");

      // Save the preference as "false".
    }
  }, [theme]);

  // filter logic
  const filteredUsers = data.filter((extensions) => {
    if (filter === "all") {
      return true;
    }
    if (filter === "active") {
      return extensions.isActive;
    }
    if (filter === "inactive") {
      return !extensions.isActive;
    }
    return true;
  });

  // remove extensions from the list
  const handleRemove = (name) => {
    const newData = data.filter((extensions) => {
      return extensions.name !== name;
    });
    setData(newData);
  };

  // toggle active and inctive
  const toggleActive = (name) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.name === name ? { ...item, isActive: !item.isActive } : item
      )
    );
  };
  return (
    <AppContext.Provider
      value={{
        data,
        theme,
        setTheme,
        filteredUsers,
        setFilter,
        handleRemove,
        toggleActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
