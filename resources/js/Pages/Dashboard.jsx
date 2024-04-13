import Box from '@/Components/Box';
import BoxThreeD from '../ReactFiber/Box.jsx';
import { DashboardCard } from '@/Components/DashboardCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, router } from '@inertiajs/react';
import { useState } from 'react';
import { ClipboardDocumentCheckIcon, RectangleGroupIcon, SwatchIcon, UserGroupIcon, TicketIcon } from "@heroicons/react/20/solid";
import Weather from '@/Components/Weather.jsx';
import Quotes from '@/Components/Quotes.jsx';
import Sun from '@/ReactFiber/Sun.jsx';
import Moon from '@/ReactFiber/Moon.jsx';

export default function Dashboard({ auth }) {
    const counts = usePage().props;

    const [currentDate, setCurrentDate] = useState(new Date());

    // Function to navigate to the previous month
    const goToPreviousMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    };

    // Function to navigate to the next month
    const goToNextMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };

    // Get the number of days in the current month
    const numDaysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Get the day of the week for the first day of the month
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    // Create an array of days of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Create an array of dates for the current month
    const datesOfMonth = Array.from({ length: numDaysInMonth }, (_, index) => index + 1);

    const { todo_list } = usePage().props

    const dayNumbers = todo_list.map(todoList => (
        (new Date(todoList.deadline)).getDay()
    ));

    const now = new Date();

    const currentHour = now.getHours();

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-6">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 p-4">
                            <div className="col-span-1">
                                {
                                    auth.role != 1 ?
                                    <div>
                                        <div className='h-50'>
                                            {
                                                currentHour >= 18 ?
                                                <Moon />
                                                :
                                                <Sun />

                                            }
                                        </div>

                                        <Weather />
                                        <Quotes />
                                    </div>
                                    :
                                    <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-2">
                                        <Box>
                                            <DashboardCard link={'users.index'} title={'Users'} icon={ <UserGroupIcon className="w-10 text-blue-500"/> } total={ counts.user_count }/>
                                        </Box>
                                        <Box>
                                            <DashboardCard link={'todo.index'} title={'Tasks'} icon={ <ClipboardDocumentCheckIcon className="w-10 text-red-500"/> } total={ counts.task_count }/>
                                        </Box>
                                        <Box>
                                            <DashboardCard link={'blog.index'} title={'Blogs'} icon={ <RectangleGroupIcon className="w-10 text-green-500"/> } total={ counts.blog_count }/>
                                        </Box>
                                        <Box>
                                            <DashboardCard link={'product.index'} title={'Products'} icon={ <SwatchIcon className="w-10 text-yellow-500"/> } total={ counts.product_count }/>
                                        </Box>
                                        <Box>
                                            <DashboardCard link={'ticket.index'} title={'Tickets'} icon={ <TicketIcon className="w-10 text-violet-500"/> } total={ counts.report_count }/>
                                        </Box>
                                    </div>
                                }



                                <div className="w-10">

                                </div>

                            </div>

                            <div className="col-span-2"> {/** hidden md:block */}
                                <Box>
                                    <div className="mx-auto p-4">
                                        <div className="border p-6 rounded-lg mb-4">
                                            <div className="flex justify-between mb-6">
                                            <button onClick={goToPreviousMonth}>&lt; Previous</button>
                                            <h1 className="text-3xl font-bold">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h1>
                                            <button onClick={goToNextMonth}>Next &gt;</button>
                                            </div>
                                            <div className="grid grid-cols-7 gap-4">
                                            {daysOfWeek.map(day => (
                                                <div key={day}>
                                                    <div className="text-center font-bold text-lg xl:block hidden">
                                                        { day }
                                                    </div>
                                                    <div className="text-center font-bold text-lg xl:hidden block">
                                                        { day.split(" ").map(word => word.charAt(0)) }
                                                    </div>
                                                </div>
                                            ))}
                                            {[...Array(firstDayOfMonth).keys()].map(() => (
                                                <div key={`empty-${Math.random()}`} className=""></div>
                                            ))}
                                            {datesOfMonth.map(date => (
                                                <div key={date} className="text-right border rounded-lg p-4 text-xs lg:h-24 h-10">

                                                {date}
                                                {
                                                    todo_list.map(todoList => {
                                                        const dateString = todoList.deadline;
                                                        const dateParts = dateString.split("-");
                                                        const day = dateParts[2]; // Extract the day part
                                                        const month = dateParts[1]; // Extract the day part
                                                        const year = dateParts[0]; // Extract the day part

                                                        const monthIndex = currentDate.getMonth();
                                                        const monthString = String(monthIndex + 1).padStart(2, '0');

                                                            return (
                                                                <div key={ date }>
                                                                    <div className="text-sm text-left mt-6 text-indigo-400">
                                                                        {
                                                                            date == day && monthString == month && currentDate.getFullYear() == year
                                                                                ?
                                                                            <div>
                                                                                <div className="group 2xl:block hidden">
                                                                                    { todoList.name }
                                                                                    <div className="hidden group-hover:block absolute bg-white border border-gray-300 p-4 rounded-lg">
                                                                                        { todoList.task_desc == null ? 'No Description' : todoList.task_desc }
                                                                                    </div>
                                                                                </div>
                                                                                <div className="group 2xl:hidden block">
                                                                                    <li className='text-gray-500'></li>
                                                                                    <div className="hidden group-hover:block absolute bg-white border border-gray-300 p-4 rounded-lg">
                                                                                        { todoList.task_desc == null ? 'No Description' : todoList.task_desc }
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                                :
                                                                            ''
                                                                        }
                                                                    </div>
                                                                </div>
                                                            );
                                                        })
                                                    }
                                                </div>
                                            ))}
                                            </div>
                                        </div>
                                    </div>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
