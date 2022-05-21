import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Main, Skills, AboutPage, WorkPages } from "./pages";
import { lightTheme } from "./components/Themes";
import { Nav } from "./components/";
import React from "react";

function App() {
  const location = useLocation();
  return (
    <>
      <Nav />
      <ThemeProvider theme={lightTheme}></ThemeProvider>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/work" component={WorkPages} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
