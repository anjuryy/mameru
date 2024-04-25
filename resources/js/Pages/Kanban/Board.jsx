import React, { useState } from "react";
import BurnBarrel from "./BurnBarrel";
import Column from "./Column";
import AddColumn from "./AddColumn";
import { usePage, useForm } from '@inertiajs/react'
import { useEffect } from "react";

const Board = () => {
    const nice = usePage().props
    const { board } = usePage().props
    const { card } = usePage().props
    const { board_encrypted_id } = usePage().props

    // console.log(nice);
    const DEFAULT_CARDS_WITH_STRING_ID = card.map(card => ({
        ...card,
        id: card.id.toString()
    }));

    // const [allColumnlist, setAllColumn] = useState([])

    // useEffect(() => {
    //     const getColumns = async () => {
    //         try {
    //             const getres = await fetch(`http://localhost:8000/api/column/${board_encrypted_id}`);
    //             const setusers = await getres.json();
    //             // console.log(setusers.result);
    //             setAllColumn(setusers);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     // Call getusers immediately when component mounts
    //     getColumns();

    //     // Set up interval to call getusers every second
    //     const intervalId = setInterval(getColumns, 1000);

    //     // Clean up the interval on component unmount
    //     return () => clearInterval(intervalId);
    // }, [board_encrypted_id]);

    const [cards, setCards] = useState(DEFAULT_CARDS_WITH_STRING_ID);
    const [columns, setColumns] = useState(board);

    const { data, post } = useForm({
        title: '',
        temp_id: ''
    })

    const addColumn = (title) => {
        let temp_id = title.length + Date.now().toString()
        data.title = title
        data.temp_id = temp_id

        post(route('board.storeColumn', board_encrypted_id));

        const newColumn = { title, temp_id: temp_id };
        setColumns([...columns, newColumn]);
    };

    return (
        <div className="flex h-full w-full gap-3 p-12">
            {columns.map((column) => (
                <Column
                key={column.temp_id}
                title={column.title}
                column={column.id}
                headingColor="text-neutral-500"
                cards={cards}
                setCards={setCards}
                columns={ setColumns }
                temp_id={column.temp_id}
                />
            ))}
            <AddColumn addColumn={addColumn} />
            <BurnBarrel setCards={setCards} />
        </div>
    );
};

const DEFAULT_COLUMNS = [
    // { title: "Backlog", id: "1" },
    // { title: "TODO", id: "2" },
    // { title: "In progress", id: "3" },
    // { title: "Complete", id: "4" },
    { title: "Sample", id: 1 },
    { title: "Sample2", id: 2 }
];

const DEFAULT_CARDS = [
    { board_id: 2, by_user_id: 2, card_id: 1, column: 1, id: 1 ,title: "Nice" },
    { board_id: 2, by_user_id: 2, card_id: 2, column: 1, id: 2 ,title: "New" },
    // { title: "Nice", id: "1", column: "1"},
    // { title: "New", id: "2", column: "1"}
    // // BACKLOG
    // { title: "Look into render bug in dashboard", id: "1", column: "1" },
    // { title: "SOX compliance checklist", id: "2", column: "1" },
    // { title: "[SPIKE] Migrate to Azure", id: "3", column: "1" },
    // { title: "Document Notifications service", id: "4", column: "1" },
    // // TODO
    // {
    //   title: "Research DB options for new microservice", id: "5", column: "2",
    // },
    // { title: "Postmortem for outage", id: "6", column: "2" },
    // { title: "Sync with product on Q3 roadmap", id: "7", column: "2" },

    // // DOING
    // {
    //   title: "Refactor context providers to use Zustand",
    //   id: "8",
    //   column: "3",
    // },
    // { title: "Add logging to daily CRON", id: "9", column: "3" },
    // // DONE
    // {
    //   title: "Set up DD dashboards for Lambda listener",
    //   id: "10",
    //   column: "4",
    // },
];

export default Board
