import Alert from '@/Components/Alert';
import Filters from '@/Pages/Todo/Filters';
import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PlusIcon } from '@heroicons/react/20/solid';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Index({ auth, flash }) {

    const {todolist} = usePage().props;

    // console.log(todolist);

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

            <Head title="To Do - Create" />

            <div className="p-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">

                    <div className="flex justify-between items-center">
                        {
                            todolist.data.length == 0 ?
                            <div></div>
                            : 
                            <div>
                                <Filters allUsersData={ todolist.data } setFilteredData={ setFilteredData }/>
                            </div>
                        }
                        
                        <Link href={route('todo.create')} className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 mr-4 mb-4 rounded-sm focus:outline-none focus:shadow-outline flex items-center">
                            <PlusIcon className="w-5" />
                        </Link>
                    </div>
                    {
                        todolist.data.length == 0 ?
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
                                                 <li key={value.name} className="flex justify-between gap-x-6 py-5">
                                                     <div className="flex min-w-0 gap-x-4">
                                                         <div className="min-w-0 flex-auto">
                                                             <p className="text-sm font-semibold leading-6 text-gray-900"> <Link key={ value.id } href={route('todo.edit', value.encrypted_id )} > {value.name} </Link> </p>
                                                             <p className="mt-1 truncate text-xs leading-5 text-gray-500">{value.task_desc}</p>
                                                         </div>
                                                     </div>
                                                     <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                         {value.completed ? (
                                                         <div className="mt-1 flex items-center gap-x-1.5">
                                                             <div className="flex-none rounded-full bg-gray-500/20 p-1">
                                                             <div className="h-1.5 w-1.5 rounded-full bg-gray-500" />
                                                             </div>
                                                             <p className="text-xs leading-5 text-gray-500">Dated: {value.deadline}</p>
                                                         </div>
                                                         ) : (
                                                         <div className="mt-1 flex items-center gap-x-1.5">
                                                             <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                             <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                             </div>
                                                             <p className="text-xs leading-5 text-gray-500">Dated: {value.deadline}</p>
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
                             {todolist.data.map(todo => (
                                 <li key={todo.name} className="flex justify-between gap-x-6 py-5">
                                 <div className="flex min-w-0 gap-x-4">
                                     <div className="min-w-0 flex-auto">
                                         <p className="text-sm font-semibold leading-6 text-gray-900"> <Link key={ todo.id } href={route('todo.edit', todo.encrypted_id )} > {todo.name} </Link> </p>
                                         <p className="mt-1 truncate text-xs leading-5 text-gray-500">{todo.task_desc}</p>
                                     </div>
                                 </div>
                                 <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                     {todo.completed ? (
                                     <div className="mt-1 flex items-center gap-x-1.5">
                                         <div className="flex-none rounded-full bg-gray-500/20 p-1">
                                         <div className="h-1.5 w-1.5 rounded-full bg-gray-500" />
                                         </div>
                                         <p className="text-xs leading-5 text-gray-500">Dated: {todo.deadline}</p>
                                     </div>
                                     ) : (
                                     <div className="mt-1 flex items-center gap-x-1.5 min-w-0">
                                         <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                         <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                         </div>
                                         <div className="min-w-0 flex-auto">
     
                                         </div>
                                         <p className="text-xs leading-5 text-gray-500">Dated: {todo.deadline}</p>
                                     </div>
                                     )}
                                 </div>
                                 </li>
                             ))}
                         </ul>
                         : null }
                            <Pagination getData={ todolist.links } getLength={ todolist }/>
                        </div>
                    }
                    </div>
                </div>

            </div>


        </AuthenticatedLayout>
    );
}
