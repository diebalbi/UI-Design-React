import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <RegisterForm />;
    </ApolloProvider>
  ); 
}

export default App;
