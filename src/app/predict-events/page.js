"use client"

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { usePathname } from 'next/navigation';
import './PredictComponent.css'
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'







export default function EventPrediction({ predictionData, tournamentName, tournamentWindow }) {

    const leaderboardData = [

        {
            'Matches': "5",
            'Players': "Player1, Player2, Player3",
            'Points': "379",
            'Rank': "1",
            'TeamID': 575527484225002
        },
        {
            'Matches': "5",
            'Players': "Player1, Player2, Player3",
            'Points': "379",
            'Rank': "1",
            'TeamID': 575527484445002
        },
        {
            'Matches': "5",
            'Players': "Player1, Player2, Player3",
            'Points': "379",
            'Rank': "1",
            'TeamID': 575527484533002
        },
        {
            'Matches': "5",
            'Players': "Player1, Player2, Player3",
            'Points': "379",
            'Rank': "1",
            'TeamID': 57554845002
        },
        {
            'Matches': "5",
            'Players': "Player1, Player2, Player3",
            'Points': "379",
            'Rank': "1",
            'TeamID': 575527445002
        },

    ]
    console.log('leaderboardData from EVENT_PREDICTION FUNCTION', leaderboardData)
    console.log('predictionData from EVENT_PREDICTION FUNCTION', predictionData)

    const [loading, setIsLoading] = useState(false);

    const [currentEventNumber, setCurrentEventNumber] = useState('');
    const [currentRoundNumber, setCurrentRoundNumber] = useState('');
    const [displayLeaderboards, setDisplayLeaderboards] = useState(null);
    const [rawTournamentName, setRawTournamentName] = useState(null);
    const [displayTournamentName, setDisplayTournamentName] = useState(tournamentName);
    const [displayTournamentWindow, setDisplayTournamentWindow] = useState(tournamentWindow);
    const [isTourneyTitleAndWindowLoading, setIsTourneyTitleAndWindowLoading] = useState('');

    const [timeRemaining, setTimeRemaining] = useState(0);

    const [state, setState] = useState({
        ITEMS: leaderboardData,
        prediction: []
    });

    const [isPredLBLoading, setISPredLBLoading] = useState(true);
    const [isEventSelected, setIsEventSelected] = useState(true);
    const [isLBLoading, setLBLoading] = useState(false);

    const handleSubmitPredictions = async () => {

    };

    const handleSavePredictions = () => {

    }



    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        // If the item was dropped in the same position
        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

        // Ensure sourceList and destinationList are valid arrays
        const getArrayFromState = (listId) => {
            if (listId === "ITEMS") {
                return Array.isArray(state.ITEMS) ? state.ITEMS : [];
            } else {
                return Array.isArray(state.prediction[0]) ? state.prediction[0] : [];
            }
        };

        // Handle reordering in the same list (ITEMS or prediction)
        if (source.droppableId === destination.droppableId) {
            const itemsList = getArrayFromState(source.droppableId);
            const [reorderedItem] = itemsList.splice(source.index, 1); // Remove the item
            itemsList.splice(destination.index, 0, reorderedItem); // Insert the item in the new position

            // Update the state based on the list being modified
            if (source.droppableId === "ITEMS") {
                setState({ ...state, ITEMS: [...itemsList] });
            } else {
                setState({ ...state, prediction: [[...itemsList]] });
            }
        }
        // Handle moving an item between lists (ITEMS and prediction)
        else {
            const sourceList = getArrayFromState(source.droppableId);
            const destinationList = getArrayFromState(destination.droppableId);

            const [movedItem] = sourceList.splice(source.index, 1); // Remove the item
            destinationList.splice(destination.index, 0, movedItem); // Insert the item in the new list

            // Update both lists
            setState({
                ...state,
                ITEMS: source.droppableId === "ITEMS" ? [...sourceList] : [...destinationList],
                prediction: destination.droppableId === "prediction" ? [[...destinationList]] : state.prediction
            });
        }
    };


    return (

        isEventSelected ? (
            <SkeletonTheme baseColor="rgba(68, 68, 68, 0.93)" highlightColor="rgba(225, 225, 225, 0.04)">
                <div className="event-wrapper" style={{
                    justifyContent: "center",
                    backgroundColor: '#15171a',
                    display: "flex",
                    width: "100%",
                    overflow: 'hidden'
                }}>

                    <div className="event-r" style={{
                        backgroundColor: "transparent",
                        justifyContent: "center",
                        flexDirection: "column",
                        display: "flex",
                        width: "800px",
                        maxWidth: "800px",
                        overflow: 'hidden',
                    }}  >
                        {/* backgroundImage: `url(${tournamentContextBackground})` */}
                        <div
                            className="title-wrapper-container"
                            style={{

                                background: '#15171a !important',

                                maxWidth: "800px",
                                backgroundRepeat: 'no-repeat',
                                overflow: 'hidden',
                            }}
                        >
                            <div className="title-wrapper">
                                <div className="tournament-info">
                                    <span className="tournament-title">
                                        Tournament Title
                                    </span>
                                    <span className="tournament-window">
                                        Window x    Session x                            </span>
                                    <div className="time-left">
                                        <span>Predictions Close In: {timeRemaining}</span>
                                        {/* predictions close in X mins, hours, days */}
                                    </div>
                                    {/* <div className="prediction-status">
                                    <div className="prediction-alert">
                                        <div className="gradient-circle">
                                            <div className="icon-inner">
                                                <ion-icon name="alert-outline"></ion-icon>
                                            </div>
                                        </div>
                                        <span className="alert-message">NO PREDICTION SUBMITTED</span>
                                    </div>
                                </div> */}
                                </div>

                                <div className="prediction-tools">


                                    <button
                                        className="prediction-tools-button"
                                        onClick={handleSubmitPredictions}
                                    >
                                        Submit Predictions
                                    </button>
                                    <button
                                        className="prediction-tools-button"
                                        onClick={handleSavePredictions}
                                    >
                                        <div style={{ display: `flex`, justifyContent: 'center', height: '100%' }} >
                                            <div style={{ display: `flex`, justifyContent: `center` }} >
                                                <ion-icon
                                                    style={{ fontSize: `20px`, paddingRight: `5px` }}
                                                    name="share-outline"
                                                ></ion-icon>
                                            </div>
                                            <div>
                                                Share Predictions
                                            </div>
                                        </div>
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className="tp-container" >

                            <DragDropContext onDragEnd={onDragEnd}>
                                <div className="preview-section">

                                    <div className="section-title">

                                        <h3>Qualified Teams</h3>
                                    </div>
                                    <div className="preview-container-wrapper">
                                        <div className="rank-column-preview">
                                            {isLBLoading ? (
                                                // Render Skeletons while loading
                                                Array.from({ length: 1 }).map((_, index) => (
                                                    <div key={index} className="rank-skeleton">
                                                        <Skeleton height={1930} width={50} />
                                                    </div>
                                                ))
                                            ) : (
                                                // Render actual items
                                                state.ITEMS.map((_, index) => (
                                                    <div
                                                        key={index}
                                                        className={`rank ${index % 2 === 0 ? 'even-item' : 'odd-item'}`}
                                                    >
                                                        {index + 1}
                                                    </div>
                                                ))
                                            )}

                                        </div>

                                        <Droppable droppableId="ITEMS" isDropDisabled={true}>
                                            {(dropProvided) => (
                                                <div
                                                    ref={dropProvided.innerRef}
                                                    {...dropProvided.droppableProps}
                                                    className="droppable-container"
                                                >
                                                    {true ? (
                                                        state?.ITEMS?.map((item, index) => (
                                                            <Draggable key={item?.TeamID || 'null'} draggableId={item?.TeamID?.toString() || "null"} index={index}>
                                                                {(dragProvided) => (
                                                                    <div
                                                                        ref={dragProvided.innerRef}
                                                                        {...dragProvided.draggableProps}
                                                                        {...dragProvided.dragHandleProps}
                                                                        className={`draggable-item ${index % 2 === 0 ? "even-item" : "odd-item"}`}
                                                                    >
                                                                        <div style={{ display: "flex", width: "100%", height: "100%", maxHeight: "45px", }}>
                                                                            {item?.Players?.split(", ")
                                                                                .filter(Boolean)
                                                                                .map((player, i, arr) => (
                                                                                    <React.Fragment key={i}>
                                                                                        <div
                                                                                            style={{
                                                                                                display: "flex",
                                                                                                flex: 1,
                                                                                                minHeight: "45px",
                                                                                                maxHeight: "45px",
                                                                                                alignItems: "center",
                                                                                                justifyContent: "center",
                                                                                                textAlign: "center",
                                                                                                overflow: "hidden",
                                                                                                whiteSpace: "nowrap",
                                                                                                textOverflow: "ellipsis",
                                                                                                cursor: "pointer"
                                                                                            }}
                                                                                        >
                                                                                            <p style={{
                                                                                                flex: 1,
                                                                                                maxHeight: "45px",
                                                                                                fontSize: "1.0rem",
                                                                                                textAlign: "center",
                                                                                                overflow: "hidden",
                                                                                                whiteSpace: "nowrap",
                                                                                                textOverflow: "ellipsis",
                                                                                            }}  >{player}</p>
                                                                                        </div>
                                                                                        {i < arr.length - 1 && (
                                                                                            <div
                                                                                                style={{ flex: 0.05, fontSize: "0.76rem", textAlign: "center", maxHeight: "45px", }}
                                                                                                className="plus-sign"
                                                                                            >
                                                                                                +
                                                                                            </div>
                                                                                        )}
                                                                                    </React.Fragment>
                                                                                ))}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))
                                                    ) :
                                                        <Skeleton height={1930} width={300} />

                                                    }
                                                    {dropProvided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                </div>
                                <div className="prediction-section">
                                    <div className="section-title">
                                        <h3>Your Predictions</h3>
                                    </div>
                                    <div className="prediction-container-wrapper">
                                        <div className="rank-column-prediction">
                                            {state?.prediction?.[0]?.length > 0 ? (
                                                state.prediction[0].map((_, index) => (
                                                    <div key={index} className={`rank ${index < 3 ? `rank-${index + 1}` : ''}`}>
                                                        {index + 1}
                                                    </div>
                                                ))
                                            ) : (
                                                <div>No predictions available</div> // Show message or empty div
                                            )}
                                        </div>

                                        <Droppable droppableId="prediction">
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.droppableProps}
                                                    className="droppable-container prediction-container"
                                                >
                                                    {state?.prediction?.[0]?.length > 0 ? (
                                                        state.prediction[0].map((item, index) => {
                                                            const players = item?.Players ? item.Players.split(", ").filter(Boolean) : [];
                                                            const teamId = item?.TeamID || `team-${index}`;

                                                            return (
                                                                <Draggable key={teamId} draggableId={teamId.toString()} index={index}>
                                                                    {(dragProvided) => (
                                                                        <div
                                                                            ref={dragProvided.innerRef}
                                                                            {...dragProvided.draggableProps}
                                                                            {...dragProvided.dragHandleProps}
                                                                            className={`draggable-item ${index % 2 === 0 ? "even-item" : "odd-item"}`}
                                                                        >
                                                                            <div style={{ display: "flex", width: "100%", height: "100%" }}>
                                                                                {players.length > 0 ? (
                                                                                    players.map((player, i, arr) => (
                                                                                        <React.Fragment key={i}>
                                                                                            <div
                                                                                                style={{
                                                                                                    display: "flex",
                                                                                                    flex: 1,
                                                                                                    minHeight: "45px",
                                                                                                    maxHeight: "45px",
                                                                                                    alignItems: "center",
                                                                                                    justifyContent: "center",
                                                                                                    textAlign: "center",
                                                                                                    overflow: "hidden",
                                                                                                    whiteSpace: "nowrap",
                                                                                                    textOverflow: "ellipsis",
                                                                                                    cursor: "pointer"
                                                                                                }}
                                                                                            >
                                                                                                <p
                                                                                                    style={{
                                                                                                        flex: 1,
                                                                                                        maxHeight: "45px",
                                                                                                        fontSize: "1.0rem",
                                                                                                        textAlign: "center",
                                                                                                        overflow: "hidden",
                                                                                                        whiteSpace: "nowrap",
                                                                                                        textOverflow: "ellipsis",
                                                                                                    }}
                                                                                                >
                                                                                                    {player}
                                                                                                </p>
                                                                                            </div>
                                                                                            {i < arr.length - 1 && (
                                                                                                <div
                                                                                                    style={{ flex: 0.05, textAlign: "center" }}
                                                                                                    className="plus-sign"
                                                                                                >
                                                                                                    +
                                                                                                </div>
                                                                                            )}
                                                                                        </React.Fragment>
                                                                                    ))
                                                                                ) : (
                                                                                    <div>No players available</div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </Draggable>
                                                            );
                                                        })
                                                    ) : (
                                                        <div>No predictions available</div> // Show message or empty div
                                                    )}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                </div>


                            </DragDropContext>

                        </div>

                    </div>

                </div>
            </SkeletonTheme>
        ) : <></>


    );

}