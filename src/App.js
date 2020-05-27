import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import Header from './components/Header'
import Detail from './components/Detail'
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Home />
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
