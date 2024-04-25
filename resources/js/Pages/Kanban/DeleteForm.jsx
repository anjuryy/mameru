// DeleteForm.jsx

import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function DeleteForm({ className = '', title, desc, dataId, onDelete }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteTask = (e) => {
        e.preventDefault();

        destroy(route('todo.destroy', dataId), {
            preserveScroll: true,
            onSuccess: () => {
                onDelete(); // Call the onDelete function provided as a prop
                closeModal();
            },
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <>
            <button
                className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                onClick={confirmUserDeletion}
            >
                {title}
            </button>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteTask} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete your task?
                    </h2>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Delete Task
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </>
    );
}
