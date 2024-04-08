import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from '@inertiajs/react'

export default function Create({ auth })
{
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        image: '',
        comment: '',
    })

    const submit = (e) => {
        e.preventDefault()

        post(route('report.store'))
    }

    return (
        <AuthenticatedLayout
            user={ auth.user }
        >
            <Head title="Create Report"/>

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

                            <InputLabel htmlFor="comment" value="Comment" />

                            <div className="mt-2">
                                <textarea
                                    id="comment"
                                    name="comment"
                                    rows={ 5 }
                                    value={data.comment}
                                    onChange={(e) => setData('comment', e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>

                            <InputError message={errors.comment} className="mt-2" />
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

                        </div>

                        <div className="flex items-center justify-end mt-4">

                            <Link href={route('report.index')} >
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
    )
}
