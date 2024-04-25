import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head, Link } from '@inertiajs/react'
import { useState, useRef } from "react";
import '../../../css/colorradio.css'

export default function Create({ auth }){
    const colors = [
        { id: 1, value: 'bg-red-500'},
        { id: 2, value: 'bg-blue-500'},
        { id: 3, value: 'bg-pink-500'},
        { id: 4, value: 'bg-yellow-500'},
        { id: 5, value: 'bg-orange-900'},
        { id: 6, value: 'bg-purple-500'},
        { id: 7, value: 'bg-black'},
        { id: 8, value: 'bg-green-500'},
        { id: 9, value: 'bg-orange-500'},
        { id: 10, value: 'bg-gray-500'},
    ];

    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        image: '',
        color: ''
    });

    const fileInputRef = useRef(null);

    const handleReset = (e) => {
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Clear the value of the file input
        }
        // Resetting the image field to its initial state
        data.image = ''
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('board.store'));
    }
    return <>
        <AuthenticatedLayout
            user={ auth.user }
        >
            <Head title="Create Board"/>

            <div className="p-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <div className={`${data.color} bg-black h-28 w-full`}></div> */}
                        <div className="flex justify-end items-end">
                            {
                                data.image != '' ? (
                                    <img src={data.image ? URL.createObjectURL(data.image) : ''} alt="" className="h-28 w-96 flex justify-end" />
                                ) : data.color ? (
                                    <div className={`${data.color} bg-black h-28 w-96`}></div>
                                ) : (
                                    <img src="../images/profilePic.jpeg" alt="" className="h-28 w-96 flex justify-end" />
                                )
                            }
                            {/* ? <img src="../images/profilePic.jpeg" alt="" className="h-28 w-96 flex justify-end" /> : '' */}
                        </div>

                        <div className="p-6">
                            <form onSubmit={ submit } encType="multipart/form-data">

                                <div className="px-4 sm:px-0">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900">Fill Up Board Information</h3>
                                </div>
                                <div className="mt-6 border-t border-gray-100">
                                    <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Board name</dt>

                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <TextInput
                                                type="text"
                                                name="title"
                                                value={data.title}
                                                className="mt-1 block w-50"
                                                onChange={(e) => setData('title', e.target.value)}
                                                placeholder="Enter a Board Name"
                                            />

                                            <InputError message={errors.title} className="mt-2" />
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">

                                            <textarea
                                                type="text"
                                                name="description"
                                                value={data.description}
                                                className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                                onChange={(e) => setData('description', e.target.value)}
                                                rows={4}
                                            ></textarea>

                                            <InputError message={errors.description} className="mt-2" />
                                        </dd>
                                    </div>
                                    <div className="px-4 sm:px-0">
                                        <h3 className="text-base font-semibold leading-7 text-gray-900">Choose Image Cover or Color Cover</h3>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Cover Image</dt>

                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <input
                                            type="file"
                                            className="border rounded-md file:ox-4 file:py-2 border-gray-200 dark:border-gray-700 file:text-gray-700 file: dark:text-gray-400 file:border-0 file:bg-gray-100 file:dark:bg-gray-800 file:font-medium file:hover:bg-gray-200 file:dark:hover:bg-gray-700 file:hover:cursor-pointer file:mr-4"
                                            label="File"
                                            name="image"
                                            ref={fileInputRef}
                                            onChange={(e) =>
                                                setData("image", e.target.files[0])
                                            }
                                            // onChange={handleChange}
                                        />
                                            <SecondaryButton className="ml-2" onClick={handleReset}>Clear</SecondaryButton>
                                            <InputError message={errors.image} className="mt-2" />
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Cover Color</dt>

                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">

                                        <div className="colors">
                                            {
                                                colors.map(color => (
                                                    <label key={color.id}>
                                                        <input
                                                            type="radio"
                                                            name="color"
                                                            value={color.value}
                                                            onChange={(e) => setData('color', e.target.value)}
                                                        />
                                                        <span className={`swatch ${color.value} rounded-full`}></span>
                                                    </label>
                                                ))
                                            }
                                            <SecondaryButton className="ml-2" onClick={reset.color}>Clear</SecondaryButton>
                                        </div>

                                            <InputError message={errors.color} className="mt-2" />
                                        </dd>
                                    </div>
                                    </dl>
                                </div>

                                <hr />
                                <div className="flex justify-between items-center mt-4">
                                    <div></div>
                                    <div className="space-x-2">
                                        <Link href={route('board.index')}>
                                            <SecondaryButton> Back </SecondaryButton>
                                        </Link>
                                        <PrimaryButton> Create </PrimaryButton>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    </>
}
