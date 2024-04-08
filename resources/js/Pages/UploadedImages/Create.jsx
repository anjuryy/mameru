import Box from "@/Components/Box";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function Create({ auth })
{
    const { product_id } = usePage().props
    const { images } = usePage().props

    const { data, setData, post, processing, errors, reset } = useForm({
        filename: []
    })

    // console.log(images);
    // const { data, setData, post, processing, errors, reset } = useForm({
    //     name: '',
    //     description: '',
    //     quantity: '',
    //     price: '',
    //     category: '',
    //     urlLink: '',
    // });

    const submit = (e) => {
        e.preventDefault()

        post(route('uploaded_images.store', product_id))
    }
    return (
        <AuthenticatedLayout
            user={ auth.user }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <Box>
                            <form onSubmit={ submit } encType="multipart/form-data">
                                <section className="flex items-center gap-2 my-4">
                                    <input
                                        className="border rounded-md file:ox-4 file:py-2 border-gray-200 file:text-gray-700 file: file:border-0 file:bg-gray-100 file:font-medium file:hover:bg-gray-200 file:hover:cursor-pointer file:mr-4"
                                        type="file"
                                        name="filename"
                                        onChange={(e) => setData('filename', e.target.files)}
                                        multiple
                                    />
                                    <button type="submit" className="btn-outline disabled:opacity-25 disabled:cursor-not-allowed"> Upload </button>
                                    <button type="reset" className="btn-outline" onClick={ reset }> Reset </button>
                                </section>
                                {/* <div v-if="imageErrors.length" className="input-error">
                                    <div v-for="(error, index) in imageErrors" :key="index">
                                        {{ error }}
                                    </div>
                                </div> */}
                            </form>
                        </Box>
                        <Box className="mt-4"> { /** v-if="listing.images.length" */ }
                            <div className="text-gray-500">
                                Product Images
                            </div>
                            <section className="mt-4 grid grid-cols-3 gap-4">
                                {
                                    images.map(data => (
                                        <div key={data.id} className="flex flex-col justify-between">
                                            <img width="400" height="" src={ '../images/' + data.filename } className="rounded-md h-80" />
                                            {/* <Link href="route('realtor.listing.image.destroy', { listing: props.listing.id, image:image.id })" method="delete" as="button" type="button" class="mt-2 btn-outline text-xs"> Delete </Link> */}
                                            <Link 
                                                href={route('uploaded_images.destroy', data.id)}
                                                method="delete" 
                                                as="button" 
                                                type="button" 
                                                className="mt-2 btn-outline text-xs"
                                            > 
                                                Delete 
                                            </Link>
                                        </div>
                                    ))
                                }
                                {/* <div v-for="image in listing.images" :key="image.id" className="flex flex-col justify-between">
                                    <img width="400" height="" :src="image.src" className="rounded-md h-80">
                                    <Link :href="route('realtor.listing.image.destroy', { listing: props.listing.id, image:image.id })" method="delete" as="button" type="button" class="mt-2 btn-outline text-xs"> Delete </Link>
                                </div> */}
                            </section>
                        </Box>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
