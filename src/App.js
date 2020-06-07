import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import Header from './components/Header'
import Detail from './components/Detail'
import Footer from "./components/Footer";
import ContinentsSection from "./components/ContinentsSection";
import RegionsSection from "./components/RegionsSection";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Detail placeId={"5ecee28b15476c4fe8ff3ac9"}/>
        <ContinentsSection />
        <RegionsSection />
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
