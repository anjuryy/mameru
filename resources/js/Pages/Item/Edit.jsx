import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PhotoIcon } from '@heroicons/react/20/solid';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Edit({ auth }) {
    const { sectionItem } = usePage().props
    const { section } = usePage().props

    const { data, setData, put, processing, errors, reset } = useForm({
        section_id: sectionItem[0].section_id,
        name: sectionItem[0].name,
        url: sectionItem[0].url,
    });

    const submit = (e) => {
        e.preventDefault();

        put(route('item.update', sectionItem[0].id));
    };

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">To Do List</h2>}
        >
            <Head title="Blog - Create" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <form onSubmit={submit} encType="multipart/form-data">
                        <div>
                            <InputLabel htmlFor="section_id" value="Sections" />

                            <select
                                id="section_id"
                                name="section_id"
                                value={data.section_id}
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                autoComplete="section_id"
                                onChange={(e) => setData('section_id', e.target.value)}
                                required
                            >
                                <option> Select a section ...</option>
                                {
                                    section.map(data => (
                                        <option key={ data.id } value={ data.id }>{ data.under_name } - { data.name } </option>
                                    ))
                                }
                            </select>

                            <InputError message={errors.section_id} className="mt-2" />
                        </div>

                        <div className="mt-2">
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
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

                            <Link onClick={handleGoBack} >
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
