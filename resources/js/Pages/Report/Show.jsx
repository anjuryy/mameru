
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import DeleteForm from '../Report/DeleteForm';
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useEffect } from 'react';
import SecondaryButton from '@/Components/SecondaryButton';
import PrimaryButton from '@/Components/PrimaryButton';
export default function Create({ auth }) {

    const { report } = usePage().props

    const { data, setData, put, processing, errors, reset } = useForm({
        id: report.encrypted_id,
        title: report.title,
        comment: report.comment,
        status: report.status,
        image: report.image
    });

    useEffect(() => {
        const getImageSize = async () => {
          try {
            const response = await fetch(`../uploads/${data.image}`);
            if (response.ok) {
              const blob = await response.blob();
              const fileSizeInBytes = blob.size;
              const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            //   console.log('Image size:', fileSizeInMegabytes, 'MB');
              // Update state with image size
              setData(prevData => ({
                ...prevData,
                imageSize: fileSizeInMegabytes
              }));
            } else {
              console.error('Failed to fetch image:', response.statusText);
            }
          } catch (error) {
            console.error('Error fetching image:', error);
          }
        };
    
        if (report.image) {
          getImageSize();
        }
      }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">To Do List</h2>}
        >
            <Head title="Report - Show" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <div>
                        <div className="px-4 sm:px-0">
                            <h3 className="text-base font-semibold leading-7 text-gray-900">Report Information</h3>
                        </div>
                        <div className="mt-6 border-t border-gray-100">
                            <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Title</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ data.title }</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Comment</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ data.comment }</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Status </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    { 
                                    data.status === 0 ? 
                                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                            Pending
                                        </span> 
                                    : data.status === 1 ? 
                                        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                            Ongoind
                                        </span> 
                                    : 
                                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                            Completed
                                        </span>
                                    }
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                        <span className="truncate font-medium">{ data.image }</span>
                                        <span className="flex-shrink-0 text-gray-400">
                                        {data.imageSize && (
                                            <p>{data.imageSize.toFixed(2)} MB</p>
                                        )}
                                        </span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href={`../uploads/${data.image}`} target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Download
                                        </a>
                                    </div>
                                    </li>
                                </ul>
                                </dd>
                            </div>
                            </dl>
                        </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div></div>
                            <div className='space-x-2'>
                                <Link href={route('report.index')}>
                                    <SecondaryButton>Back</SecondaryButton>
                                </Link>
                                <Link key={ data.id } href={route('report.edit', data.id )} >
                                    <PrimaryButton>Edit</PrimaryButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
