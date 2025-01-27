"use client";

import React, { useState, useEffect, } from 'react';
import Image from 'next/image'
import './Leaderboard.css'
import './PredictDropdown.css'
import LeaderboardTable from './LeaderboardTable';



const dummyData = [
    {
        username: "testuser1",
        profile_picture: '/testinglbimages/uifaces-popular-image.jpg',
        Season_Score: "3345",
        All_Time_Score: "15000"
    },
    {
        username: "testuser2",
        profile_picture: '/testinglbimages/uifaces-popular-image (1).jpg',
        Season_Score: "2255",
        All_Time_Score: "12000"
    },
    {
        username: "testuser3",
        profile_picture: '/testinglbimages/uifaces-popular-image (2).jpg',
        Season_Score: "1900",
        All_Time_Score: "11500"
    },
    {
        username: "testuser4",
        profile_picture: '/testinglbimages/uifaces-popular-image (3).jpg',
        Season_Score: "1700",
        All_Time_Score: "11000"
    },
    {
        username: "testuser5",
        profile_picture: '/testinglbimages/uifaces-popular-image (4).jpg',
        Season_Score: "1500",
        All_Time_Score: "10000"
    },
    {
        username: "testuser6",
        profile_picture: '/testinglbimages/uifaces-popular-image (5).jpg',
        Season_Score: "1350",
        All_Time_Score: "9000"
    },
    {
        username: "testuser7",
        profile_picture: '/testinglbimages/uifaces-popular-image (6).jpg',
        Season_Score: "1200",
        All_Time_Score: "8500"
    },
    {
        username: "testuser8",
        profile_picture: '/testinglbimages/uifaces-popular-image (7).jpg',
        Season_Score: "1100",
        All_Time_Score: "8000"
    },
    {
        username: "testuser9",
        profile_picture: '/testinglbimages/uifaces-popular-image (8).jpg',
        Season_Score: "1000",
        All_Time_Score: "7500"
    },
    {
        username: "testuser10",
        profile_picture: '/testinglbimages/uifaces-popular-image (9).jpg',
        Season_Score: "950",
        All_Time_Score: "7000"
    },
    {
        username: "testuser11",
        profile_picture: '/testinglbimages/uifaces-popular-image (10).jpg',
        Season_Score: "900",
        All_Time_Score: "6500"
    },
    {
        username: "testuser12",
        profile_picture: '/testinglbimages/uifaces-popular-image (11).jpg',
        Season_Score: "850",
        All_Time_Score: "6000"
    },
    {
        username: "testuser13",
        profile_picture: '/testinglbimages/uifaces-popular-image (12).jpg',
        Season_Score: "800",
        All_Time_Score: "5500"
    },
    {
        username: "testuser14",
        profile_picture: '/testinglbimages/uifaces-popular-image (13).jpg',
        Season_Score: "750",
        All_Time_Score: "5000"
    },
    {
        username: "testuser15",
        profile_picture: '/testinglbimages/uifaces-popular-image (12).jpg',
        Season_Score: "700",
        All_Time_Score: "4500"
    },
    {
        username: "testuser16",
        profile_picture: '/testinglbimages/uifaces-popular-image (10).jpg',
        Season_Score: "650",
        All_Time_Score: "4000"
    }
];


const weekWinnerData =
{
    username: "testuser1",
    profile_picture: '/testinglbimages/uifaces-popular-image.jpg',
    Season_Score: "45",
    All_Time_Score: "700"
}


function LeaderboardServer() {
    const [isChapterDropdownOpen, setIsChapterDropdownOpen] = useState(false);
    const [isSeasonDropdownOpen, setSeasonDropdownOpen] = useState(false);
    const [selectedChapter, setSelectedChapter] = useState("Chapter 6");
    const [selectedSeason, setSelectedSeason] = useState("Season 1");

    const [chapter_options, setChapterOptions] = useState(["Chapter 5", "Chapter 6"]);
    const [season_options, setSeasonOptions] = useState(["Season 1", "Season 2", "Season 3"]);


    const toggleChapterDropdown = () => {
        setIsChapterDropdownOpen((prev) => !prev);

    };
    const toggleSeasonDropdown = () => {
        setSeasonDropdownOpen((prev) => !prev);

    };

    return (
        <>
            <div className='leaderboard-wrapper'>
                <div className='select-sec-wrapper'>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '60px' }} >
                        <div style={{ display: 'flex', flexDirection: 'column' }} >
                            <label>Season</label>
                            <div className={`select-menu ${isChapterDropdownOpen ? 'menuactive' : ''}`}>

                                <div className="select-btn" onClick={toggleChapterDropdown}>
                                    <ion-icon style={{ color: `white`, }} name="chevron-down-outline"></ion-icon>
                                    <span style={{ display: `flex`, width: `100%`, }} className="sBtn-text">{selectedChapter}</span>
                                    <i className={`bx bx-chevron-down ${isChapterDropdownOpen ? 'rotated' : ''}`}></i>
                                </div>
                                <ul className="options">
                                    {chapter_options.map((option) => (
                                        <li
                                            key={option}
                                            className="option"
                                            onClick={() => handleChapterOptionClick(option)}
                                        >
                                            <span className="option-text">{option}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'column' }} >
                            </div> <label>Season</label>
                            <div className={`select-menu ${isSeasonDropdownOpen ? 'menuactive' : ''}`}>

                                <div className="select-btn" onClick={toggleSeasonDropdown}>
                                    <ion-icon style={{ color: `white`, }} name="chevron-down-outline"></ion-icon>
                                    <span style={{ display: `flex`, width: `100%`, }} className="sBtn-text">{selectedSeason}</span>
                                    <i className={`bx bx-chevron-down ${isSeasonDropdownOpen ? 'rotated' : ''}`}></i>
                                </div>
                                <ul className="options">
                                    {season_options.map((option) => (
                                        <li
                                            key={option}
                                            className="option"
                                            onClick={() => handleSeasonOptionClick(option)}
                                        >
                                            <span className="option-text">{option}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  <h1 className='page-title' >Points Leaderboard</h1>*/}
                <div className="leaderboard-container">


                    {/* Left Div - Leaderboard */}
                    <div className="leaderboard-table-container">
                        <LeaderboardTable data={dummyData} />
                    </div>

                    {/* Right Div - Cards */}
                    <div className="cards-container">
                        <div className="card">🏆 Last Week Winner

                            <div   style={{ display: 'flex', flexDirection: 'row' }} >
                                <div style={{ flexDirection: 'row',  marginTop: '10px', display: 'flex', height: '100%', width: '48px', height: '48px', position: 'relative' }}>
                                    <Image
                                        src={weekWinnerData.profile_picture}
                                        alt={weekWinnerData.username}
                                        style={{ borderRadius: '50%' }}
                                        layout="fill"
                                        objectFit="cover"
                                        priority={true}
                                    />
                                   
                                </div>
                                <div style={{ display: 'flex',  alignItems: 'center',  marginLeft: '10px', textAlign: 'center' }}>
                                        {weekWinnerData.username}
                                    </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}


export default LeaderboardServer;