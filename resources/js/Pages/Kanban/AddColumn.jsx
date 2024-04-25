import React, { useState } from "react";
import { useForm, usePage } from '@inertiajs/react'
import SecondaryButton from "@/Components/SecondaryButton";
import { useEffect } from "react";

const AddColumn = ({ addColumn }) => {
    const [title, setTitle] = useState("");

    const { board_encrypted_id } = usePage().props

    // console.log(board_encrypted_id);
    const { data, setData, post, processing, errors, reset } = useForm({
        title: ''
    })

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };

    const handleAddColumn = (e) => {
        e.preventDefault();

        addColumn(data.title);
        setTitle("");

        data.title = '';
};

  return (
    <>
    <div className="flex flex-col  text-black p-2 rounded-md">
        <div className="items-center justify-start">
            <input
                id="title"
                type="text"
                name="title"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
                placeholder="Enter column name"
                className="border border-gray-300 p-2 rounded-md mb-2"
            />
        </div>
        <div className="flex justify-end items-end w-full">
            <SecondaryButton
                onClick={handleAddColumn}
                className="text-black rounded-md"
            >
                + Add
            </SecondaryButton>
        </div>

    </div>
    </>
  );
};

export default AddColumn;
