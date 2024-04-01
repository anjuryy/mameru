import Alert from '@/Components/Alert';
import Card from '@/Components/Card';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Pagination from '@/Components/Pagination';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';

export default function Index({ auth, flash }) {

    const { blog_list } = usePage().props;
    // console.log(blog_list);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Blogs List</h2>}
        >
            <Alert flash={ flash } />

            <Head title="Blog Posts" />
            <div className="p-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="flex justify-between">
                            {
                                blog_list.data.length == 0 ? 
                                <div></div>
                                : 
                                <Link href={route('blog.myblog')} className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 mr-4 mb-4 rounded-full focus:outline-none focus:shadow-outline flex items-center">
                                    My Blog
                                </Link>
                            }
                            <Link href={route('blog.create')} className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 mr-4 mb-4 rounded-sm focus:outline-none focus:shadow-outline flex items-center">
                                <PlusIcon className="w-5" />
                            </Link>
                        </div>
                        {
                            blog_list.data.length == 0 ? 
                                <div className="text-gray-300 h-96 flex items-center justify-center w-full text-3xl">No Record Found</div> 
                            : 
                            <div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mb-2">
                                    {/* Map through the cards data and render a Card component for each */}
                                    {blog_list.data.map(blog => (
                                        <Card key={blog.id} title={blog.title} content={blog.blog} imageUrl={blog.image} id={blog.encrypted_id} buttonValue={'View'}/>
                                    ))}
                                </div>

                                <Pagination getData={ blog_list.links } getLength={ blog_list }/>
                            </div>
                        }
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
