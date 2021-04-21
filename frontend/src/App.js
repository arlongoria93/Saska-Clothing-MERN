import React from "react";
import { Container } from "react-bootstrap";

import Footer from "./components/Footer";
import Header from "./components/Header";

import HomeScreen from "./screens/HomeScreens";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer apples="toes" />
    </>
  );
};

export default App;
