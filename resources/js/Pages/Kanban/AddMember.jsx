import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from '@inertiajs/react'
import { useState } from "react";

export default function AddMember({ showModal, setShowModal, temp_id, title, setDataFromUpdateColumn, id, flash }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: ''
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
        setShowModal(false);

        post(route('kanban.addMember', id))
        data.email = ''
    }

    return (
        <>
            <Modal show={showModal} maxWidth="2xl">
                <div>
                    <h1 className='bg-gray-800 p-4 text-white'>Add Member</h1>
                    <form onSubmit={submit}>
                        <div className='p-4'>
                            <InputLabel value={"Email"}/>

                            <TextInput
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="email"
                                onChange={handleChange}
                                required
                            />

                            <InputError message={ flash.danger ? 'This email does not exist in our system' : ''} className="mt-2" />
                        </div>



                        <div className="flex justify-end p-4 space-x-2">
                            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
                            <PrimaryButton> Send Invitation </PrimaryButton>
                        </div>

                    </form>
                </div>
            </Modal>
        </>
    );
}
