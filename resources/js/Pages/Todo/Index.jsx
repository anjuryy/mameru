import Alert from '@/Components/Alert';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Pagination from '@/Components/Pagination';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Index({ auth, flash }) {

    const { todo_list } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">To Do List</h2>}
        >
            <Alert flash={ flash } />

            <Head title="To Do - Create" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">

                    <div className="flex justify-end">
                        <Link href={route('todo.create')} className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 mr-4 mb-4 rounded-full focus:outline-none focus:shadow-outline flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                            </svg>
                        </Link>
                    </div>
                    <ul role="list" className="divide-y divide-gray-100">
                        {todo_list.data.map(todo => (
                            <li key={todo.name} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900"> <Link key={ todo.id } href={route('todo.edit', todo.id )} > {todo.name} </Link> </p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{todo.task_desc}</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                {/* <p className="text-sm leading-6 text-gray-900">{person.role}</p> */}
                                {todo.completed ? (
                                // <p className="mt-1 text-xs leading-5 text-gray-500">
                                //     Inactive Date: <date dateTime={todo.updated_at}> </date>
                                // </p>
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none rounded-full bg-gray-500/20 p-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-gray-500" />
                                    </div>
                                    <p className="text-xs leading-5 text-gray-500">Inactive</p>
                                </div>
                                ) : (
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    </div>
                                    <p className="text-xs leading-5 text-gray-500">Active</p>
                                </div>
                                )}
                            </div>
                            </li>
                        ))}
                        </ul>
                        <Pagination getData={ todo_list.links } getLength={ todo_list }/>
                    </div>
                </div>

            </div>


        </AuthenticatedLayout>
    );
}
