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

    console.log(card);
    // console.log(nice);
    const DEFAULT_CARDS_WITH_STRING_ID = card.map(card => ({
        ...card,
        id: card.id.toString()
    }));

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

export default Board
