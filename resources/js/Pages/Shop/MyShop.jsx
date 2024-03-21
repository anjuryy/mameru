import Alert from '@/Components/Alert';
import Box from '@/Components/Box';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Pagination from '@/Components/Pagination';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function MyShop({ auth, flash }) {

    const { shop } = usePage().props;

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
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">My Shop</h2>}
        >
            <Head title="My Shop" />
            
            <Alert flash={ flash } />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                    
                    <Link
                        href={route('myshop.create')}
                    >
                        <SecondaryButton className="mb-4 flex justify-center items-center">
                            Add Product <PlusCircleIcon className="w-4 ml-1"/>
                        </SecondaryButton>
                    </Link>
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                        {
                            shop.data.map(data => (
                                <Box key={ data.id }>
                                    <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between">
                                        <div> {/* className="opacity-25" */}
                                            {/* <div
                                                class="text-xs font-bold uppercase border border-dashed p-1 border-green-300 text-green-500 dark:border-green-600 dark:text-green-600 inline-block rounded-md mb-2"
                                            >
                                                sold
                                            </div> */}

                                            <div className="xl:flex items-center gap-2">
                                                { data.name }
                                            </div>

                                            { data.description }
                                        </div>
                                        <section>
                                            <div className="flex items-center gap-1 text-gray-900">
                                                <a
                                                    className="btn-outline text-xs font-medium"
                                                    target="_blank"
                                                >Preview</a>
                                                <Link
                                                    href={route('myshop.edit', data.id)}
                                                    className="btn-outline text-xs font-medium"
                                                >
                                                    Edit
                                                </Link>
                                                {
                                                    data.deleted_at != null ?
                                                    <Link
                                                        href={route('myshop.restore', data.id)}
                                                        className="btn-outline text-xs font-medium"
                                                        as="button"
                                                        method="put"
                                                    >
                                                        Restore
                                                    </Link> :
                                                    <Link
                                                        href={route('myshop.destroy', data.id)}
                                                        method="delete"
                                                        as="button"
                                                        type="button"
                                                        className="btn-outline text-xs font-medium"
                                                    >

                                                        Delete
                                                    </Link>
                                                }
                                            </div>

                                            <div className="mt-2">
                                                <Link
                                                    href={route('uploaded_images.create', data.id)}
                                                    className="block w-full btn-outline text-xs font-medium text-center"
                                                    >
                                                    Images ({ data.images_count })
                                                </Link>
                                            </div>
                                            <div className="mt-2">
                                                <Link
                                                    className="block w-full btn-outline text-xs font-medium text-center"
                                                    >
                                                    Purchases (12)
                                                </Link>
                                            </div>
                                        </section>
                                    </div>
                                </Box>
                            ))
                        }

                    </section>

                    {/* <div className="flex justify-end">
                        <Link href={route('myshop.create')} className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 mr-4 mb-4 rounded-full focus:outline-none focus:shadow-outline flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                            </svg>
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50 text-sm">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th scope="col" className="relative px-6 py-3"></th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">

                            {
                                shop.data.map(shopData => (
                                    <tr key={shopData.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex min-w-0 gap-x-4">
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-semibold leading-6 text-gray-900"><Link key={ shopData.id } href={route('myshop.edit', shopData.id )} > {shopData.name} </Link></p>
                                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{shopData.description}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap"><div className="text-xs">{ shopData.category_name }: <b className="text-base">{ shopData.under_name }</b></div></td>
                                        <td className="px-6 py-4 whitespace-nowrap">{ shopData.quantity }</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{ shopData.price }</td>
                                        <td className="whitespace-nowrap">
                                            <Link href={route('uploaded_images.show', shopData.id)}>
                                                <SecondaryButton>
                                                    Upload Images
                                                </SecondaryButton>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div> */}

                    <Pagination getData={ shop.links } getLength={ shop }/>

                    </div>
                </div>

            </div>


        </AuthenticatedLayout>
    );
}
