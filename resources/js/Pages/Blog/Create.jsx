import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PhotoIcon } from '@heroicons/react/20/solid';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Create({ auth }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        blog: '',
        image: '',
        categorize: ''
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('blog.store'));
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
                            <InputLabel htmlFor="title" value="Title" />

                            <TextInput
                                id="title"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full"
                                autoComplete="title"
                                isFocused={true}
                                onChange={(e) => setData('title', e.target.value)}
                                required
                            />

                            <InputError message={errors.title} className="mt-2" />
                        </div>

                        <div className="mt-4">

                            <InputLabel htmlFor="blog" value="Blog" />

                            <div className="mt-2">
                                <textarea
                                    id="blog"
                                    name="blog"
                                    rows={ 5 }
                                    value={data.blog}
                                    onChange={(e) => setData('blog', e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>

                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your blog.</p>

                            <InputError message={errors.blog} className="mt-2" />
                        </div>

                        <div className="mt-4">
                        <input

                            type="file"

                            className="border rounded-md file:ox-4 file:py-2 border-gray-200 dark:border-gray-700 file:text-gray-700 file: dark:text-gray-400 file:border-0 file:bg-gray-100 file:dark:bg-gray-800 file:font-medium file:hover:bg-gray-200 file:dark:hover:bg-gray-700 file:hover:cursor-pointer file:mr-4"

                            label="File"

                            name="image"

                            onChange={(e) =>

                                setData("image", e.target.files[0])

                            }

                            />
                        {/* <input
                            className="border rounded-md file:ox-4 file:py-2 border-gray-200 dark:border-gray-700 file:text-gray-700 file: dark:text-gray-400 file:border-0 file:bg-gray-100 file:dark:bg-gray-800 file:font-medium file:hover:bg-gray-200 file:dark:hover:bg-gray-700 file:hover:cursor-pointer file:mr-4"
                            type="file"
                            name="images"
                            onChange={(e) => setData('images', e.target.files)}
                        /> */}

                            <InputError message={errors.image} className="mt-2" />
                            {/* <div className="col-span-full">
                                <InputLabel htmlFor="image" value="Upload Image" />
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        <div className="flex items-center justify-end mt-4">

                            <Link href={route('blog.index')} >
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
