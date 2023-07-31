import React, { useState } from 'react';
import Header from "../Common/Header/index";
import Tabs from "../Common/tabOption/index";
import Footer from "../Common/Footer/index";
import Delivery from "../Tabs/Delivery/index";
import DiningOut from "../Tabs/DiningOut/index";
import NightLife from "../Tabs/NightLife/index";

export default function HomePage() {

    const [activeTab, setActiveTab] = useState("delivery");

    const getCorrectScreen = (tab)=>{
        switch(tab){
            case "dining out":
                return <DiningOut/>
            case "nightlife":
                return <NightLife/>
            default:
                return <Delivery/>
        }
    }
  return (
    <>
        <Header/>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer />
    </>
  );
}
