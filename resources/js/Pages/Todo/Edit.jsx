import DangerButton from '@/Components/DangerButton';
import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import DeleteForm from './DeleteForm';

export default function Edit({ auth }) {
    const to_do = usePage().props.todo_data;

    const { data, setData, patch, processing, errors, reset, register } = useForm({
        id: to_do.encrypted_id,
        name: to_do.name,
        task_desc: to_do.task_desc,
        deadline: to_do.deadline,
        completed: to_do.completed
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('todo.update', data.id ));
    };

    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: false, label: 'Active' },
        { value: true, label: 'Completed' },
    ];

    const handleSelect = (value) => {
        setSelectedOption(value);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">To Do List</h2>}
        >
            <Head title="To Do - Create" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Task" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="task_desc" value="Description" />

                            <TextInput
                                id="task_desc"
                                name="task_desc"
                                value={data.task_desc}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('task_desc', e.target.value)}
                            />

                            <InputError message={errors.task_desc} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="deadline" value="Deadline" />

                            <TextInput
                                id="deadline"
                                name="deadline"
                                type="date"
                                value={data.deadline}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('deadline', e.target.value)}
                            />

                            <InputError message={errors.deadline} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="completed" value="completed" />

                            <select
                                id="completed"
                                name="deadline"
                                type="text"
                                value={data.completed}
                                className="order-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                                onChange={(e) => setData('completed', e.target.value)}
                            >
                                <option value="0">Active</option>
                                <option value="1">Completed</option>
                            </select>

                            <InputError message={errors.completed} className="mt-2" />
                        </div>
                        {/* <div className="mt-4">
                            <InputLabel htmlFor="completed" value="Status"/>

                            <Dropdown.OptDropdown options={options} onSelect={handleSelect} dropdownName="completed" data={ data.completed }/>

                            <InputError message={errors.completed} className="mt-2" />
                        </div> */}

                        <div className="flex items-center justify-between mt-4">
                            <div>
                                {/* <DangerButton className="ms-4" disabled={processing} href={route('todo.index')}>
                                    <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-2">Delete</span>
                                    </div>
                                </DangerButton> */}
                            </div>
                            <div>
                            <SecondaryButton className="ms-4" disabled={processing}>
                                <Link href={route('todo.index')} >
                                Back
                                </Link>

                            </SecondaryButton>
                            <PrimaryButton className="ms-4" disabled={processing}>
                                Update
                            </PrimaryButton>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            <div className="pb-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        {/* <form onSubmit={ deleteTask } > */}
                            <DeleteForm title="Delete Task" desc="Task will be deleted." dataId = { data.id }>

                            </DeleteForm>
                        {/* </form> */}
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>


    );
}
