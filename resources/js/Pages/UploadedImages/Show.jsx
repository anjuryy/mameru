import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Show({ auth })
{
    return(
        <AuthenticatedLayout
            user={ auth.user }
        >

        </AuthenticatedLayout>
    )
}
