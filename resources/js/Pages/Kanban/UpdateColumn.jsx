import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from '@inertiajs/react'
import { useState } from "react";

export default function UpdateColumn({ showModal, setShowModal, temp_id, title, setDataFromUpdateColumn }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        title: title
    });

    const closeModal = () => {
        setShowModal(false);
        reset();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value); // Update the data object in the parent component
    };

    const submit = (e) => {
        e.preventDefault()

        const updatedData = { title: data.title }; // Extract the updated data
        setDataFromUpdateColumn(updatedData);

        put(route('column.updateColumnValue', temp_id))
    }

    return (
        <>
            <Modal show={showModal} maxWidth="2xl">
                <div>
                    <h1 className='bg-gray-800 p-4 text-white'>Edit Column Name</h1>
                    <form onSubmit={submit}>
                        <div className='p-4'>
                            <InputLabel value={"Column"}/>

                            <TextInput
                                id="title"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full"
                                autoComplete="title"
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="flex justify-end p-4 space-x-2">
                            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
                            <PrimaryButton> Update </PrimaryButton>
                        </div>

                    </form>
                </div>
            </Modal>
        </>
    );
}
