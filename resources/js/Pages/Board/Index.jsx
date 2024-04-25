import Alert from "@/Components/Alert";
import BoardBox from "@/Components/BoardBox";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from '@inertiajs/react'

export default function Index({auth, flash})
{
    const { boards } = usePage().props

    const truncateString = (str, maxLength) => {
        if (str.length <= maxLength) {
          return str;
        } else {
          return str.substring(0, maxLength) + " ...";
        }
    };

    return (
        <AuthenticatedLayout
            user={ auth.user }
        >
            <Head title="Board List"/>

            <Alert flash={ flash } />

            <div className="p-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="flex justify-between items-center">
                            <div>
                                Board List
                            </div>
                            <div className="flex justify-center items-center">
                                <Link href={route("board.create")}>
                                    <SecondaryButton>Add Board + </SecondaryButton>
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-2">
                            {
                                boards.data.map( board => (
                                    <div key={board.id}>
                                        <BoardBox title={board.title} color={board.color} link={board.encrypted_id} image={board.image} id={board.by_user_id} authId={ auth.user.id }>
                                            <div className="text-gray-500">
                                                <div className="mb-2 text-bold text-md text-gray-800">
                                                    Description:
                                                </div>
                                                    {
                                                        truncateString(board.description, 250)
                                                    }

                                            </div>
                                        </BoardBox>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
