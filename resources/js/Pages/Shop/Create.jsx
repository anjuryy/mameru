import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth })
{
    const { data, setData, post, processing, errors, reset } = useForm({
        section_id: '',
        name: '',
        description: '',
        quantity: '',
        category: '',
        urlLink: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('item.store'));
    };

    return (
        <AuthenticatedLayout
            user={ auth.user }
        >
            <Head title="Add Product" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <form onSubmit={submit} encType="multipart/form-data">


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
                            <InputLabel htmlFor="shortDescription" value="Short Description" />

                            <TextInput
                                id="shortDescription"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full"
                                autoComplete="description"
                                onChange={(e) => setData('description', e.target.value)}
                                required
                            />

                            <InputError message={errors.description} className="mt-2" />
                        </div>

                        <div className="mt-2">
                            <InputLabel htmlFor="urlLink" value="URL" />

                            <TextInput
                                id="urlLink"
                                name="url"
                                value={data.urlLink}
                                className="mt-1 block w-full"
                                autoComplete="urlLink"
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
    )
}
