"use client"
import Image from "next/image";
import React, { useState } from 'react';
import './Dashboard.css'
import defaultIdentity from "../../assets/images/identity/default-identity.jpg"; 

//default identity image is in the folder

const Dashboard = () => {

    const session = {
        user: {
          username: "testuser",
          email: "testuser@example.com",
          image: "/path/to/test-user-avatar.jpg",
        },
        expires: "2025-12-31T23:59:59.999Z",
      };
      

    const [filter, setFilter] = useState('all-time');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div className="dashboard-container">
            <div className="user-profile-pic">
                <Image
                    width={82}
                    height={82}
                    src={session.user.profilePicture || defaultIdentity.src}
                    alt="User Avatar"
                    className="profile-picture"
                />
                <h2>{session.user.username}</h2>
            </div>
            <div className="higher-order-report"  >
                <div className="prediction-accuracy">
                    <div className='card-classification' >Prediction Accuracy</div>
                    <h3>Last 7 Days</h3>

                    <div className='percent-value'  >93.2<div>%</div></div>

                </div>
                <div className="prediction-accuracy">
                    <div className='card-classification' >Prediction Accuracy</div>
                    <h3>Last Month</h3>

                    <div className='percent-value'  >75.1<div>%</div></div>

                </div>
                <div className="prediction-accuracy">
                    <div className='card-classification' >Prediction Accuracy</div>
                    <h3>All-Time</h3>

                    <div className='percent-value'  >65.6<div>%</div></div>

                </div>
            </div>
            <div className="total-predictions">
                <h3>Total Predictions Made</h3>
                <p>1000</p>
            </div>

            {/* Additional Dashboard Features */}
            <div className="dashboard-features">
                <h3>Upcoming Events</h3>
                <p>List of events and dates when predictions will open.</p>

                <h3>Top Predictors</h3>
                <p>Mini Leaderboard showing top predictors and their scores.</p>

                <h3>Recent Predictions</h3>
                <p>Summary of recent predictions made by the user.</p>

                <h3>Notification Center</h3>
                <p>Updates about new events, results, and user activities.</p>

                <h3>Achievements</h3>
                <p>Badges or milestones earned by the user based on their prediction performance.</p>
            </div>
        </div>
    );
};

export default Dashboard;