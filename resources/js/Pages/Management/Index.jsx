import Alert from '@/Components/Alert';
import GridList from '@/Components/GridList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Index({ auth, flash }) {

    const { category } = usePage().props;
    const { featured } = usePage().props;
    const { section } = usePage().props;
    const { sectionItem } = usePage().props;

    // console.log(featured);
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

            <Alert flash={ flash } />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <GridList gridCount={ 3 } title={ 'Categories' } urlForCreate={ 'category.create' } postData={ category } urlForEdit={ 'category.edit' }/>
                        <GridList gridCount={ 3 } title={ 'Features' } urlForCreate={ 'featured.create' } postData={ featured } urlForEdit={ 'featured.edit' }/>
                        <GridList gridCount={ 3 } title={ 'Sections' } urlForCreate={ 'section.create' } postData={ section } urlForEdit={ 'section.edit' }/>
                        <GridList gridCount={ 3 } title={ 'Items' } urlForCreate={ 'item.create' } postData={ sectionItem } urlForEdit={ 'item.edit' }/>
                    </div>
                </div>

            </div>


        </AuthenticatedLayout>
    );
}
