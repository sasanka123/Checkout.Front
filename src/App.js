//import { useState } from "react";
import Header from "./components/Header";
import PricingRulesList from "./components/PricingRulesList";
import Checkout from "./components/Checkout";
//import Rules from "./data/Rules";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <PricingRulesList />
        <Checkout />
      </div>
    </>
  );
}

export default App;
