import DropIndicator from "./DropIndicator";
import { motion } from "framer-motion";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import TextInput from "@/Components/TextInput";
import { useForm } from '@inertiajs/react'

const Card = ({ title, id, card_id, name, email, column, handleDragStart }) => {
    const [showModal, setShowModal] = useState(false);
    const [editingTitle, setEditingTitle] = useState(false); // State to track if title is being edited

    const{ data, setData, put, processing, errors, reset } = useForm({
        title: title
    })

    const submit = (e) =>{
        e.preventDefault();

        put(route('card.updateCardValue', card_id))
    }

    return (
      <>
        <DropIndicator beforeId={id} column={column} />
        <motion.div
          layout
          layoutId={id}
          draggable="true"
          onDragStart={(e) => handleDragStart(e, { title, id, card_id, column })}
          className="cursor-grab rounded border border-neutral-700 bg-gray-800 p-3 active:cursor-grabbing"
        >
            <div className="flex justify-between items-center">
                {editingTitle ? (
                    <form onSubmit={submit} className="flex items-center">
                        <TextInput
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="w-full text-black"
                        />
                        {/* <PrimaryButton type="submit">Update</PrimaryButton> */}
                    </form>
                ) : (
                    <p className="text-sm text-neutral-100">{(title == data.title ? title : data.title)}</p>
                )}
                <div className="text-xs flex justify-normal items-center space-x-1">
                    <div className="relative group">
                        <div>
                            <img src="../../images/profilePic.jpeg" alt="" className="rounded-full text-white w-7 h-7 shadow-md"/>
                            {/* <button className="bg-white rounded-full text-white w-7 h-7 shadow-md hover:bg-gray-100">
                            </button> */}
                            <div className="absolute hidden bg-gray-100 text-gray-800 px-4 py-2 mt-2 rounded-lg shadow-md group-hover:block full">
                                {/* Show additional information here */}
                                { name } ({ email })
                            </div>
                        </div>
                    </div>
                    <FiEdit className="w-4 cursor-pointer" onClick={() => setEditingTitle(!editingTitle)} />
                </div>
            </div>
        </motion.div>
        {/* <Modal show={showModal} onClose={() => setShowModal(false)} maxWidth="2xl">
            <!-- Your modal content -->
        </Modal> */}
      </>
    );
};

export default Card;
