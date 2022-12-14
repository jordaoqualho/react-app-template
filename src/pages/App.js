import useTheme from "hooks/useTheme";
import { Routes } from "pages/routes";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "store/store";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globalStyle";
import { AppContainer } from "styles/styledComponents";
import dark from "themes/dark";
import light from "themes/light";

function App() {
  const [theme, setTheme] = useTheme("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  useEffect(() => {
    setTheme(theme.title === "light" ? light : dark);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppContainer>
            <Routes toggleTheme={toggleTheme} />
          </AppContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
