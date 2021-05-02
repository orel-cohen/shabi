import React, { useState, useEffect } from 'react';

import ProfileCard from "../Cards/ProfileCard";
import SwapRequestModel from '../Models/SwapRequestModel';
import SendConstraintsCard from '../Cards/SendConstraintsCard';
import ReplacePasswordModel from "../Models/ReplacePasswordModel";
import FollowingDuteisCard from '../Cards/FollowingDuties';
import HebrewDateCard from '../Cards/HebrewDateCard';
import JusticeBoardCard from '../Cards/JusticeBoardCard';

function DashboardPage(props) {

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
    // Update the document title using the browser API
    console.log("fetching useer data..");
    //fetch data on user


    });


    return (
      <div className="Dashboard">


          {/** ProfileCard */}
          <ProfileCard />

          {/** SwapRequestModel */}
          <SwapRequestModel/>

          <SendConstraintsCard/>

          {/** Desplying to user the next near duties */}
          <FollowingDuteisCard/>

          {/** Card for showing justice board (without edit option) */}
          <JusticeBoardCard/>

          {/** HebrewDateTime */}
          <HebrewDateCard/>

          {/** model that let the user replace password */}
          <ReplacePasswordModel/>

      </div>
    );
  }
  
  export default DashboardPage;
  