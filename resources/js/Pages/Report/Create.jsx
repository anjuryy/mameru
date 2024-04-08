import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from '@inertiajs/react'

export default function Create({ auth })
{
    const {} = useForm({
        title: '',
        image: '',

    })
    return (
        <AuthenticatedLayout
            user={ auth.user }
        >
            <Head title="Create Report"/>


        </AuthenticatedLayout>
    )
}
