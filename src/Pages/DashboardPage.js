import React, { useState, useEffect } from 'react';

import ProfileCard from "../Cards/ProfileCard";
import SwapRequestModel from '../Models/SwapRequestModel';
import SendConstraintsCard from '../Cards/SendConstraintsCard';

function DashboardPage(props) {

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
    // Update the document title using the browser API
    console.log("fetching data..");
    //fetch data on user


    });


    return (
      <div className="Dashboard">

          {/** NextDuteisCard */}


          {/** ProfileCard */}
          <ProfileCard />

          {/** SwapRequestHover */}
          <SwapRequestModel/>

          <SendConstraintsCard/>
          {/** HebrewDateTime */}
          {/** ReplacePasswordModel */}

      </div>
    );
  }
  
  export default DashboardPage;
  