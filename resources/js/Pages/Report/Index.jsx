import Alert from '@/Components/Alert';
import Filters from '@/Pages/Report/Filters';
import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PlusIcon } from '@heroicons/react/20/solid';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Index({ auth, flash }) {

    const { reports } = usePage().props;

    const [allReportlist, setAllcountry] = useState([])
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        const getusers = async() => {
            const getres = await fetch("https://anjurypatawaran.online/api/task/searchBar")
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

            <Head title="Report" />

            <div className="p-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">

                    <div className="flex justify-between items-center">
                        {
                            reports.data.length == 0 ?
                            <div></div>
                            :
                            <div>
                                <Filters allUsersData={ reports.data } setFilteredData={ setFilteredData }/>
                            </div>
                        }

                        <Link href={route('report.create')} className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 mr-4 mb-4 rounded-sm focus:outline-none focus:shadow-outline flex items-center">
                            <PlusIcon className="w-5" />
                        </Link>
                    </div>
                    {
                        reports.data.length == 0 ?
                            <div className="text-gray-300 h-96 flex items-center justify-center w-full text-3xl">No Record Found</div>
                        :
                         <div>
                         <ul role="list" className="divide-y divide-gray-100">
                         {
                             filteredData.length !== 0 && (
                                 <div className="">
                                     {
                                         filteredData.slice(0, 15).map((value, index) => {
                                             return (
                                                 <li key={value.id} className="flex justify-between gap-x-6 py-5">
                                                     <div className="flex min-w-0 gap-x-4">
                                                         <div className="min-w-0 flex-auto">
                                                             <p className="text-sm font-semibold leading-6 text-gray-900"> <Link key={ value.id } href={route('report.edit', value.encrypted_id )} > {value.title} </Link> </p>
                                                             <p className="mt-1 truncate text-xs leading-5 text-gray-500">{value.comment}</p>
                                                         </div>
                                                     </div>
                                                     <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                     {value.status === 0 ? (
                                                            <div className="mt-1 flex items-center gap-x-1.5">
                                                                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                                                    Status: Pending
                                                                </span>
                                                            </div>
                                                        ) : value.status === 1 ? (
                                                            <div className="mt-1 flex items-center gap-x-1.5">
                                                                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                                                    Status: Ongoing
                                                                </span>
                                                            </div>
                                                        ) : (
                                                            <div className="mt-1 flex items-center gap-x-1.5">
                                                                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                                    Status: Completed
                                                                </span>
                                                            </div>
                                                        )}
                                                     </div>
                                                 </li>
                                             )
                                         })
                                     }
                                 </div>
                             )
                         }
                         </ul>
                         { filteredData.length === 0 ?
                         <ul role="list" className="divide-y divide-gray-100">
                             {reports.data.map(data => (
                                <li key={data.id} className="flex justify-between gap-x-6 py-5">
                                 <div className="flex min-w-0 gap-x-4">
                                     <div className="min-w-0 flex-auto">
                                         <p className="text-sm font-semibold leading-6 text-gray-900"> <Link key={ data.encrypted_id } href={route('report.show', data.encrypted_id )} > { data.title } </Link> </p>
                                         <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data.comment}</p>
                                     </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                        {data.status === 0 ? (
                                            <div className="mt-1 flex items-center gap-x-1.5">
                                                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                                    Status: Pending
                                                </span>
                                            </div>
                                        ) : data.status === 1 ? (
                                            <div className="mt-1 flex items-center gap-x-1.5">
                                                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                                    Status: Ongoing
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="mt-1 flex items-center gap-x-1.5">
                                                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                    Status: Completed
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </li>
                             ))}
                         </ul>
                         : null }
                            <Pagination getData={ reports.links } getLength={ reports }/>
                        </div>
                    }
                    </div>
                </div>

            </div>


        </AuthenticatedLayout>
    );
}
