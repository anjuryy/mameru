import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

export default function Create({ auth })
{
    const { shop } = usePage().props
    const { product } = usePage().props

    // console.log(product);
    const { data, setData, put, processing, errors, reset } = useForm({
        name: product.name,
        description: product.description,
        quantity: product.quantity,
        price: product.price,
        category: product.category,
    });

    const submit = (e) => {
        e.preventDefault();

        put(route('myshop.update', product.id));
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

                        <div>
                            <InputLabel htmlFor="category" value="Sections" />

                            <select
                                id="category"
                                name="category"
                                value={data.category}
                                type="text"
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                autoComplete="category"
                                onChange={(e) => setData('category', e.target.value)}
                                required
                            >
                                <option> Select a item section ...</option>
                                {
                                    shop.map(data => (
                                        <option key={ data.id } value={ data.id }>{ data.under_name }: { data.name } </option>
                                    ))
                                }
                            </select>

                            <InputError message={errors.category} className="mt-2" />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="mt-2">
                                <InputLabel htmlFor="quantity" value="Quantity" />

                                <TextInput
                                    id="quantity"
                                    name="quantity"
                                    type="number"
                                    max="999"
                                    value={data.quantity}
                                    className="mt-1 block w-full"
                                    autoComplete="quantity"
                                    onChange={(e) => setData('quantity', e.target.value)}
                                    required
                                />

                                <InputError message={errors.quantity} className="mt-2" />
                            </div>

                            <div className="mt-2">
                                <InputLabel htmlFor="price" value="Price" />

                                <TextInput
                                    id="price"
                                    name="price"
                                    type="number"
                                    value={data.price}
                                    className="mt-1 block w-full"
                                    autoComplete="price"
                                    onChange={(e) => setData('price', e.target.value)}
                                    required
                                />

                                <InputError message={errors.price} className="mt-2" />
                            </div>
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
