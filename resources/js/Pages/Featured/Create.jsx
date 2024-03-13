import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PhotoIcon } from '@heroicons/react/20/solid';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Create({ auth }) {
    const { category } = usePage().props

    const { data, setData, post, processing, errors, reset } = useForm({
        category_id: '',
        name: '',
        urlLink: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('featured.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">To Do List</h2>}
        >
            <Head title="Feature - Create" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <form onSubmit={submit} encType="multipart/form-data">
                        <div>
                            <InputLabel htmlFor="category_id" value="Categories" />

                            <select
                                id="category_id"
                                name="category_id"
                                value={data.category_id}
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                autoComplete="category_id"
                                onChange={(e) => setData('category_id', e.target.value)}
                                required
                            >
                                <option> Select a category ...</option>
                                {
                                    category.map(data => (
                                        <option key={ data.id } value={ data.id }> { data.name } </option>
                                    ))
                                }
                            </select>

                            <InputError message={errors.category_id} className="mt-2" />
                        </div>

                        <div className="mt-2">
                            <InputLabel htmlFor="name" value="Name" />

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

                        <div className="mt-2">
                            <InputLabel htmlFor="urlLink" value="URL" />

                            <TextInput
                                id="urlLink"
                                name="url"
                                value={data.urlLink}
                                className="mt-1 block w-full"
                                autoComplete="urlLink"
                                isFocused={true}
                                onChange={(e) => setData('urlLink', e.target.value)}
                            />

                            <InputError message={errors.urlLink} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-4">

                            <Link href={route('management.index')} >
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
