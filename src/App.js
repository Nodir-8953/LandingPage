import React from "react";
import  ReactDOM from "react-dom";
import Header from "./components/Header/Header"
import Main from './components/Main/Main'
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer/>
      </>
    )
  }
}
export default App;
