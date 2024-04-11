import Alert from '@/Components/Alert';
import Filters from '@/Pages/Todo/Filters';
import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PlusIcon } from '@heroicons/react/20/solid';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import SecondaryButton from '@/Components/SecondaryButton';

export default function Index({ auth, flash }) {

    const { notifications } = usePage().props;

    console.log(notifications);

    const [allTodolist, setAllcountry] = useState([])
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        const getusers = async() => {
            const getres = await fetch("http://127.0.0.1:8000/api/task/searchBar")
            const setusers = await getres.json();
            // console.log(setusers)
            setAllcountry(await setusers.results)
        }
        getusers()
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">To Do List</h2>}
        >
            <Alert flash={ flash } />

            <Head title="Notifications List" />

            <div className="p-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <ul role="list" className="divide-y divide-gray-100">
                            {notifications.data.map(notif => (
                                <li key={notif.id} className="flex justify-between items-center py-8 px-4">
                                    <div className="flex items-center justify-center">
                                        <div className="capitalize font-bold">
                                            { notif.purchasor_name }
                                        </div>
                                        <div>
                                            &nbsp;has made a purchase from your product
                                        </div>
                                    </div>
                                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                        {
                                            notif.read_at === null
                                            ?
                                            <Link
                                                href={ route('notification.seen', notif.id )}
                                                as="button"
                                                method="put"
                                                className="btn-outline text-xs font-medium uppercase"
                                            >
                                                Mark As Read
                                            </Link>
                                            : ''
                                        }


                                    </div>
                                </li>
                            ))}
                        </ul>

                        <Pagination getData={ notifications.links } getLength={ notifications }/>

                    </div>
                </div>

            </div>


        </AuthenticatedLayout>
    );
}
