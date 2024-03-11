import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PhotoIcon } from '@heroicons/react/20/solid';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { Divider } from 'antd';
import { useEffect, useState } from 'react';
import Comments from './Comments';

export default function Create({ auth }) {
    const blog_list = usePage().props

    // console.log(blog_list.comments);

    const { data, setData, post, processing, errors, reset } = useForm({
        comment: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('blog.storeComment', blog_list.blog_info.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">To Do List</h2>}
        >
            <Head title="Blog" />

            <div className="py-9">
                <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className='flex justify-center items-center'>
                            <div>
                                {
                                    blog_list.blog_info.image && blog_list.blog_info.image.length > 0 ?
                                    <img
                                        src={'../uploads/' + blog_list.blog_info.image}
                                        alt="Card Image"
                                        className="w-120 h-80 rounded-md mb-2"
                                    />
                                 :
                                <img
                                    src={"../images/profilePic.jpeg"}
                                    alt="Card Image"
                                    className="w-120 h-80 rounded-md mb-2"
                                />
                                }
                                {/* <img className="w-80 h-80 rounded-lg" src={'../uploads/' + blog_list.blog_info.image} /> */}
                            </div>
                        </div>
                        <div className='flex justify-center items-center pt-2'>
                            <b>
                                { blog_list.blog_info.title }
                            </b>
                        </div>
                        <div className='flex justify-start items-center mt-8'>
                            <article>
                                { blog_list.blog_info.blog }
                            </article>
                        </div>
                        <div className="text-gray-200 text-sm mt-4">
                            <Divider > Comments </Divider>
                        </div>

                        <Comments commentList={ blog_list.comments } />
                        {/* {
                            blog_list.comments.map((blog, index) => (
                                <Comments key={index} userName={ blog.name } comment={ blog.comment }/>
                            ))
                        } */}

                    <form onSubmit={submit} encType='multipart/form-data'>
                        <div className='mt-6'>
                            <InputLabel htmlFor="comment" value="Write your comment" />

                            <TextInput
                                id="comment"
                                name="comment"
                                placeholder="Enter your comment here..."
                                value={data.comment}
                                className="mt-1 block w-full"
                                autoComplete="comment"
                                isFocused={true}
                                onChange={(e) => setData('comment', e.target.value)}

                            />

                            <InputError message={errors.comment} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <SecondaryButton className="ms-4" disabled={processing}>
                                <Link href={route('blog.index')} >
                                Back
                                </Link>

                            </SecondaryButton>
                            <PrimaryButton className="ms-4" disabled={processing}>
                                Send
                            </PrimaryButton>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
