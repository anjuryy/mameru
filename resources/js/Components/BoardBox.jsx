import { LiaEditSolid } from 'react-icons/lia'
import { FaEye } from "react-icons/fa";

import { Link } from '@inertiajs/react'

export default function Box({ children, className= '', title = '', color = '', link = '', image = '', id, authId })
{

    return <>
        {
        image !== '' ? (
            <div
                style={{
                    backgroundImage: `url('../boards/${image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                className='w-full h-16 hover:h-full hover:text-2xl hover:rounded-lg rounded-t-md shadow-lg text-white flex justify-between items-center p-3'
                >
                <div className="font-bold text-md">
                    { title }
                </div>
                <div className="flex space-x-2">
                    {
                        id == authId ?
                            <Link href={route('board.edit', link)}>
                                <LiaEditSolid className="h-5 w-5 hover:text-gray-400"/>
                            </Link>
                        :
                        ''
                    }
                    <Link href={route('board.kanban', link)}>
                        <FaEye className="h-5 w-5 hover:text-gray-400"/>
                    </Link>
                </div>

            </div>
            ) : color ? ( // COLOR
                <div className={`${color} w-full h-14 p-3 rounded-t-md shadow-lg text-white flex justify-between items-center`} >
                        <div className="font-bold text-md">
                        { title }
                    </div>
                    <div className="flex space-x-2">
                        {
                            id == authId ?
                                <Link href={route('board.edit', link)}>
                                    <LiaEditSolid className="h-5 w-5 hover:text-gray-400"/>
                                </Link>
                            :
                            ''
                        }
                        <Link href={route('board.kanban', link)}>
                            <FaEye className="h-5 w-5 hover:text-gray-400"/>
                        </Link>
                    </div>

                </div>
            ) : (
                <div
                style={{
                    backgroundImage: `url('../images/profilePic.jpeg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                    className='w-full h-16 hover:h-full hover:text-2xl rounded-t-md shadow-lg text-white flex justify-between items-center p-3'
                    >
                    <div className="font-bold text-md">
                        { title }
                    </div>
                    <div className="flex space-x-2">
                        <Link href={route('board.edit', link)}>
                            <LiaEditSolid className="h-5 w-5 hover:text-gray-400"/>
                        </Link>
                        <Link href={route('board.kanban', link)}>
                            <FaEye className="h-5 w-5 hover:text-gray-400"/>
                        </Link>
                    </div>

                </div>
            )
        }

        <div className={`border border-gray-200 p-4 shadow-md mb-4 ` + className}>
            <div className="text-gray-500 font-medium mb-1">
                <slot name="header" />
            </div>
        { children }
        </div>
    </>
}
