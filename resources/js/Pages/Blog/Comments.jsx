export default function Comments( { commentList } )
{
    return (
        <div>
            <ul role="list" className="divide-y divide-gray-100">
            {
                commentList.map(data => (

                        <li key={ data.name } className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={"../images/profilePic.jpeg"} alt="" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{ data.name }</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{ data.comment }</p>
                            </div>
                            </div>
                        </li>

                ))
            }
            </ul>
        </div>
    )
}
