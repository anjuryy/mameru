import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import { useForm } from '@inertiajs/react';

export default function DeleteForm({ className = '', title, desc, dataId }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteTask = (e) => {
        e.preventDefault();

        destroy(route('report.destroy', dataId), {
            preserveScroll: true,
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">{ title }</h2>

                <p className="mt-1 text-sm text-gray-600">
                    { desc }
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>{ title }</DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={ deleteTask } className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete your report?
                    </h2>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Delete Report
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
