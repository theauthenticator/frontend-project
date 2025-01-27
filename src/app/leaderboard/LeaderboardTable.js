import React, { useState, useMemo } from 'react';
import { useReactTable, getCoreRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table';
import './LeaderboardTable.css';
import Image from "next/image";

const LeaderboardTable = ({ data }) => {
    const [columnFilters, setColumnFilters] = useState([]);

    const columns = useMemo(
        () => [
            {
                accessorKey: "Rank",
                header: "Rank",
                showHeader: false,
                cell: (info) => {
                    const rank = info.row.index + 1;
                    return (
                        <div style={{
                            fontWeight: rank <= 3 ? "bold" : "normal",
                            fontSize: rank === 1 ? "0rem" : rank === 2 ? "0rem" : rank === 3 ? "0rem" : "1rem",
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            {rank === 1 && (
                                <svg
                                    width="30px"
                                    height="30px"
                                    viewBox="0 0 128 128"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--noto"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path
                                        d="M69.09 4.24c-1.08.96-9.48 17.63-9.48 17.63l-6.25 25.21l24.32-2.23S97.91 7.23 98.32 6.36c.73-1.58 1.12-2.23-1.67-2.23c-2.79-.01-26.55-.79-27.56.11z"
                                        fill="#176cc7"
                                    />
                                    <path
                                        d="M81.68 43.29c-1.21-.65-36.85-1.21-37.69 0c-.76 1.1-.65 6.13-.28 6.78c.37.65 12.35 6.22 12.35 6.22l-.01 2.03s.66 1.59 7.34 1.59s7.37-1.35 7.37-1.35l.06-2.05s10.49-5.24 11.04-5.7c.56-.47 1.03-6.87-.18-7.52zM70.7 51.62s-.03-1.4-.72-1.75c-.69-.35-11.8-.29-12.74-.24c-.94.05-.94 1.73-.94 1.73l-7.6-3.7v-.74l28.3.2l.05.84l-6.35 3.66z"
                                        fill="#fcc417"
                                    />
                                    <path
                                        d="M59.26 51.17c-.94 0-1.48.98-1.48 2.67c0 1.58.54 2.91 1.73 2.81c.98-.08 1.32-1.58 1.23-2.91c-.09-1.58-.29-2.57-1.48-2.57z"
                                        fill="#fdffff"
                                    />
                                    <path
                                        d="M28.98 90.72c0 23.96 21.66 34.63 36.06 34.12c15.88-.57 34.9-12.95 33.75-35.81C97.7 67.37 79.48 57.1 63.7 57.21c-18.34.13-34.72 12.58-34.72 33.51z"
                                        fill="#fcc417"
                                    />
                                    <path
                                        d="M64.53 120.67c-.25 0-.51 0-.76-.01c-7.5-.25-14.91-3.41-20.33-8.66c-5.8-5.62-8.98-13.22-8.94-21.39c.09-19.95 17.53-29.2 29.36-29.2h.1c16.03.07 29.19 12.53 29.56 29.42c.16 7.52-2.92 15.41-8.96 21.35c-5.64 5.53-13.12 8.49-20.03 8.49zm-.69-55.94c-10.61 0-26.3 8.68-26.34 25.88c-.03 12.86 9.93 26.08 26.52 26.64c6.32.2 12.83-2.22 18.09-7.39c5.46-5.37 8.53-12.29 8.42-18.99c-.24-14.53-12.12-26.09-26.54-26.15c-.04 0-.12.01-.15.01z"
                                        fill="#fa912c"
                                    />
                                    <path
                                        d="M57.82 60.61c-.69-.95-8.51-.77-15.9 6.45c-7.13 6.97-7.9 13.54-6.53 13.92c1.55.43 3.44-6.53 9.97-12.38c6-5.36 13.84-6.1 12.46-7.99z"
                                        fill="#fefffa"
                                    />
                                    <path
                                        d="M88.07 86.48c-2.41.34.09 7.56-5.5 15.64c-4.85 7.01-10.35 9.55-9.71 11.09c.86 2.06 9.67-3.07 13.75-11.43c3.7-7.57 3.26-15.56 1.46-15.3z"
                                        fill="#fefffa"
                                    />
                                    <path
                                        d="M55.85 77.02c-.52.77-.05 7.52.26 7.82c.6.6 5.16-1.55 5.16-1.55l-.17 18.05s-3.35-.04-3.7.09c-.69.26-.6 7.22-.09 7.56s14.18.52 14.7-.17c.52-.69.39-6.78.15-7.06c-.43-.52-3.7-.31-3.7-.31s.28-26.58.19-27.43s-1.03-1.38-2.15-1.12s-10.32 3.62-10.65 4.12z"
                                        fill="#fa912c"
                                    />
                                    <path
                                        d="M25.51 3.72c-.63.58 23.46 43.48 23.46 43.48s4.04.52 13.06.6s13.49-.52 13.49-.52S56.79 4.15 55.67 3.72c-.55-.22-7.97-.3-15.22-.38c-7.26-.09-14.34-.18-14.94.38z"
                                        fill="#2e9df4"
                                    />
                                </svg>
                            )}
                            {rank === 2 && (
                                <svg
                                    width="30px"
                                    height="30px"
                                    viewBox="0 0 128 128"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--noto"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path
                                        d="M69.09 4.24c-1.08.96-9.48 17.63-9.48 17.63l-6.25 25.21l24.32-2.23S97.91 7.23 98.32 6.36c.73-1.58 1.12-2.23-1.67-2.23c-2.79-.01-26.55-.79-27.56.11z"
                                        fill="#176cc7"
                                    />
                                    <path
                                        d="M81.68 43.29c-1.21-.65-36.85-1.21-37.69 0c-.76 1.1-.33 6.87-.04 7.56c.52 1.2 12.03 6.43 12.03 6.43l-.22 2.38s.94.24 7.63.24s8.01-.34 8.01-.34l.02-2.15s10.36-5.04 10.88-5.74c.44-.58.59-7.73-.62-8.38zm-10.61 9.12s.33-1.47-.36-1.81c-.69-.35-12.53-.19-13.47-.14c-.94.05-.94 1.73-.94 1.73l-7.6-4.53v-.74l28.3.2l.05.84l-5.98 4.45z"
                                        fill="#cecdd2"
                                    />
                                    <path
                                        d="M59.26 51.17c-.94 0-1.48.98-1.48 2.67c0 1.58.54 2.91 1.73 2.81c.98-.08 1.32-1.58 1.23-2.91c-.09-1.58-.29-2.57-1.48-2.57z"
                                        fill="#fdffff"
                                    />
                                    <path
                                        d="M28.97 91.89c0 23.96 22.05 34.13 36.46 33.7c16.79-.5 34.51-13.24 33.36-36.1C97.7 67.83 79.33 58.2 63.55 58.31c-18.34.14-34.58 12.65-34.58 33.58z"
                                        fill="#cecdd2"
                                    />
                                    <path
                                        d="M64.53 121.13c-.25 0-.51 0-.76-.01c-7.5-.25-14.91-3.41-20.33-8.66c-5.8-5.62-8.98-13.22-8.94-21.39c.09-19.95 17.53-29.2 29.36-29.2h.1c16.03.07 29.19 12.53 29.56 29.42c.16 7.52-2.92 15.41-8.96 21.35c-5.64 5.53-13.12 8.49-20.03 8.49zm-.69-55.94c-10.61 0-26.3 8.68-26.34 25.88c-.03 12.86 9.93 26.08 26.52 26.64c6.32.2 12.83-2.22 18.09-7.39c5.46-5.37 8.53-12.29 8.42-18.99c-.26-14.53-12.14-26.09-26.56-26.16c-.02 0-.1.02-.13.02z"
                                        fill="#9b9b9d"
                                    />
                                    <path
                                        d="M58.09 61.47c-.69-.95-7.76-.68-15.37 5.87c-7.56 6.51-8.69 13.71-7.33 14.09c1.55.43 3.44-6.53 9.97-12.38c6-5.35 14.1-5.69 12.73-7.58z"
                                        fill="#fefffa"
                                    />
                                    <path
                                        d="M87.88 87.72c-2.41.34.09 7.56-5.5 15.64c-4.85 7.01-10.35 9.55-9.71 11.09c.86 2.06 9.67-3.07 13.75-11.43c3.69-7.56 3.25-15.55 1.46-15.3z"
                                        fill="#fefffa"
                                    />
                                    <path
                                        d="M25.51 3.72c-.63.58 23.46 43.48 23.46 43.48s4.04.52 13.06.6s13.49-.52 13.49-.52S56.79 4.15 55.67 3.72c-.55-.22-7.97-.3-15.22-.38c-7.26-.09-14.34-.18-14.94.38z"
                                        fill="#2e9df4"
                                    />
                                    <path
                                        d="M56.85 86.35c1.04.01 1.97-1.4 2.83-2.26c1.83-1.84 3.75-3.3 5.94-1.32C71 87.66 60.2 92.62 56.1 99.4c-3.06 5.06-3.68 8.95-2.83 9.99s21.54.99 21.82.47c.28-.52.57-7.45.09-7.78s-10.65-.14-10.65-.14s.85-1.98 4.34-5c3.83-3.31 6.9-7.86 6.08-13.24c-1.7-11.12-12.9-11.53-17.75-7.66c-4.73 3.77-3.71 10.27-.35 10.31z"
                                        fill="#9b9b9d"
                                    />
                                </svg>

                            )}
                            {rank === 3 && (
                                <svg
                                    width="30px"
                                    height="30px"
                                    viewBox="0 0 128 128"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--noto"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path
                                        d="M69.09 4.24c-1.08.96-9.48 17.63-9.48 17.63l-6.25 25.21l24.32-2.23S97.91 7.23 98.32 6.36c.73-1.58 1.12-2.23-1.67-2.23c-2.79-.01-26.55-.79-27.56.11z"
                                        fill="#176cc7"
                                    />
                                    <path
                                        d="M81.68 43.29c-1.21-.65-36.85-1.21-37.69 0c-.76 1.1-.33 6.87-.04 7.56c.52 1.2 12.03 6.43 12.03 6.43l-.22 2.38s.94.24 7.63.24s8.01-.34 8.01-.34l.02-2.15s10.36-5.04 10.88-5.74c.44-.58.59-7.73-.62-8.38zm-10.61 9.12s.33-1.47-.36-1.81c-.69-.35-12.53-.19-13.47-.14c-.94.05-.94 1.73-.94 1.73l-7.46-3.84l-.14-1.43l28.3.2l-.1 1.35l-5.83 3.94z"
                                        fill="#f79429"
                                    />
                                    <path
                                        d="M59.26 51.89c-.94 0-1.48.98-1.48 2.67c0 1.58.54 2.91 1.73 2.81c.98-.08 1.32-1.58 1.23-2.91c-.09-1.59-.29-2.57-1.48-2.57z"
                                        fill="#fdffff"
                                    />
                                    <path
                                        d="M29.31 92.09c0 23.96 21.71 33.93 36.12 33.5c16.79-.5 34.85-13.24 33.36-36.1c-1.4-21.45-19.46-31.29-35.24-31.18c-18.34.14-34.24 12.85-34.24 33.78z"
                                        fill="#f79429"
                                    />
                                    <path
                                        d="M64.67 121.97c-.25 0-.51 0-.76-.01c-7.5-.25-14.91-3.41-20.33-8.66c-5.8-5.62-8.98-13.22-8.94-21.39c.09-19.95 17.53-29.2 29.36-29.2h.1c16.03.07 29.19 12.53 29.56 29.42c.16 7.52-2.24 15-8.28 20.94c-5.64 5.52-13.8 8.9-20.71 8.9zm-.69-55.94c-10.61 0-26.3 8.68-26.34 25.88c-.03 12.86 9.93 26.08 26.52 26.64c6.32.2 13.45-2.14 18.7-7.3c5.46-5.37 7.91-12.37 7.8-19.07c-.24-14.53-12.12-26.09-26.54-26.15c-.03-.02-.11 0-.14 0z"
                                        fill="#d25116"
                                    />
                                    <path
                                        d="M58.09 61.47c-.69-.95-7.76-.68-15.37 5.87c-7.56 6.51-8.69 13.71-7.33 14.09c1.55.43 3.44-6.53 9.97-12.38c6-5.35 14.1-5.69 12.73-7.58z"
                                        fill="#fefffa"
                                    />
                                    <path
                                        d="M88.48 87.64c-2.41.34.09 7.56-5.5 15.64c-4.85 7.01-10.35 9.55-9.71 11.09c.86 2.06 9.67-3.07 13.75-11.43c3.69-7.57 3.25-15.56 1.46-15.3z"
                                        fill="#fefffa"
                                    />
                                    <path
                                        d="M25.51 3.72c-.63.58 23.46 43.48 23.46 43.48s4.04.52 13.06.6s13.49-.52 13.49-.52S56.79 4.15 55.67 3.72c-.55-.22-7.97-.3-15.22-.38c-7.26-.09-14.34-.18-14.94.38z"
                                        fill="#2e9df4"
                                    />
                                    <path
                                        d="M74.95 83.71c-1.16-10.05-12.86-10.89-17.71-7.03c-4.72 3.76-4.27 9-.96 9.61c2.61.48 3.29-1.59 4.05-2.54c1.72-2.13 4.46-2.33 6.25-.62c2.03 1.95.78 6.61-2.27 6.8c-2.27.14-3.42.02-3.71.41c-.41.55-.35 4.88.07 5.36c.48.55 2.4.21 4.05.27c2.27.09 4.68 3.45 3.09 5.97c-1.65 2.61-6.04 1.44-7.62-.14c-2.09-2.09-4.18-.89-4.88-.07c-1.1 1.3-2.27 4.26 1.79 7.14c4.05 2.88 16.34 3.43 18.82-5.49c2.16-7.79-2.88-10.99-2.88-10.99s2.57-2.95 1.91-8.68z"
                                        fill="#d25116"
                                    />
                                </svg>
                            )}
                            {rank}
                        </div>
                    );
                },
                headerStyle: { width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center' },
                cellStyle: { width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' },
            },
            {
                accessorKey: "username",
                header: "Player",
                showHeader: false,
                cell: ({ row: { original, index } }) => {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'flex', height: '100%',  width: '28px', height: '28px', position: 'relative' }}>
                                <Image
                                    src={original.profile_picture}
                                    alt={original.username}
                                    style={{ borderRadius: '50%' }}
                                    layout="fill"
                                    objectFit="cover"
                                    priority={true}
                                />
                            </div>
                            <div style={{ marginLeft: '10px' }}>
                                {original.username}
                            </div>
                        </div>
                    );
                },
                headerStyle: { display: 'flex', width: '70%', justifyContent: 'left' },
                cellStyle: { paddingLeft: '0px', width: '70%', display: 'flex', flexDirection: 'row', flexGrow: '1' },
            },
            {
                accessorKey: "Season_Score",
                header: "Season Score",
                showHeader: true,
                cell: (info) => <div>{info.getValue()}</div>,
                cellStyle: { width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' },
                headerStyle: { width: '30%', alignItems: 'center', textAlign: 'center' }
            },
            {
                accessorKey: "All_Time_Score",
                header: "All Time Score",
                showHeader: true,
                cell: (info) => <div>{info.getValue()}</div>,
                cellStyle: { width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' },
                headerStyle: { width: '30%', alignItems: 'center', textAlign: 'center' }
            },
           
        ],
        []
    );

    const table = useReactTable({
        data,
        columns,
        state: { columnFilters },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <div className="leaderboard-table-container-wrapper">
            <div className="table">
                <div className="tr">
                    {table.getHeaderGroups().map((headerGroup) => (
                        headerGroup.headers.map((header) => (
                            <div
                                className="th"
                                key={header.id}
                                style={header.column.columnDef.headerStyle}
                            >
                                {header.column.columnDef.showHeader ? header.column.columnDef.header : null}
                            </div>
                        ))
                    ))}
                </div>
                {table.getRowModel().rows.map((row) => (
                    <div className="tr" key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <div
                                key={cell.id}
                                className="td"
                                style={cell.column.columnDef.cellStyle}
                            >
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeaderboardTable;
