import Alert from '@/Components/Alert';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Create({ auth }) {
    const [startDate, setStartDate] = useState(new Date());

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        task_desc: '',
        deadline: startDate
    });

    const handleChange = (selectedDate) => {
        setStartDate(selectedDate);
        const adjustedDate = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000);
        data.deadline = adjustedDate
    };

    const minDateTime = new Date();

    const submit = (e) => {
        e.preventDefault();
        // console.log(data.deadline);
        post(route('todo.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">To Do List</h2>}
        >
            <Head title="Task - Create" />

            <div className="py-12">
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
                            <InputLabel htmlFor="deadline" className="text-sm" value="Deadline"/>

                            <DatePicker
                                name="deadline"
                                selected={startDate}
                                onChange={handleChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15} // Optionally, you can set time intervals
                                dateFormat="MMMM d, yyyy h:mm aa" // Displayed format (optional)
                                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                            />

                        </div>

                        {/* <div className="mt-4">

                            <InputLabel htmlFor="deadline" value="Deadline" />

                            <TextInput
                                id="deadline"
                                name="deadline"
                                type="time"
                                value={data.deadline}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('deadline', e.target.value)}
                            />

                            <InputError message={errors.deadline} className="mt-2" />
                        </div> */}

                        <div className="flex items-center justify-end mt-4">

                            <Link href={route('todo.index')} >
                                <SecondaryButton className="ms-4" disabled={processing}>
                                    Back
                                </SecondaryButton>
                            </Link>

                            <PrimaryButton className="ms-4" disabled={processing}>
                                Submit
                            </PrimaryButton>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
