import GridList from '@/Components/GridList';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Pagination from '@/Components/Pagination';
import PrimaryButton from '@/Components/PrimaryButton';
import Sidebar from '@/Components/SideBar';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Divider } from 'antd';
import { useEffect } from 'react';

export default function Index({ auth }) {

    const { category } = usePage().props;
    const { featured } = usePage().props;

    console.log(featured);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Shop Management</h2>}
        >
            <Head title="Categories" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <GridList gridCount={ 3 } title={ 'Categories' } urlForCreate={ 'category.create' } postData={ category } urlForEdit={ 'category.edit' }/>
                        <GridList gridCount={ 3 } title={ 'Features' } urlForCreate={ 'featured.create' } postData={ featured } urlForEdit={ 'featured.edit' }/>
                    </div>
                </div>

            </div>


        </AuthenticatedLayout>
    );
}
