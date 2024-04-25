// Import React and useState
import React, { useState } from "react";
import Board from "./Board";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from '@inertiajs/react'
import SecondaryButton from "@/Components/SecondaryButton";
import { RiUserAddFill } from "react-icons/ri";
import AddMember from "./AddMember";
import Alert from "@/Components/Alert";

export const CustomKanban = ({ auth, flash }) => {
    const [showModal, setShowModal] = useState(false);
    const { board_encrypted_id } = usePage().props
    const { board_members } = usePage().props

    return (
        <AuthenticatedLayout
            user={ auth.user }
        >
            <Alert flash={flash} />

            <header className="bg-gray-800">
                <div className="mx-auto py-1 px-1 md:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                            {board_members.map((member, index) => (
                                <div key={index} className="relative group">
                                    {
                                        index < 5
                                        ?
                                        <div>
                                            <img src="../../images/profilePic.jpeg" alt="" className="rounded-full text-white w-7 h-7 shadow-md"/>
                                            {/* <button className="bg-white rounded-full text-white w-7 h-7 shadow-md hover:bg-gray-100">
                                            </button> */}
                                            <div className="absolute hidden bg-gray-100 text-gray-800 px-4 py-2 mt-2 rounded-lg shadow-md group-hover:block full">
                                                {/* Show additional information here */}
                                                { member.email }
                                            </div>
                                        </div>
                                        :
                                        <div className="text-white ml-2 mt-2">
                                            ...
                                        </div>
                                    }

                                </div>
                            ))}
                        </div>
                        <div>
                            <SecondaryButton className="hover:bg-gray-300 hover:w-full opacity-100 hover:border-black text-black" onClick={() => setShowModal(true)}>
                                <div className="flex justify-center items-center space-x-2">
                                    <div>
                                        <RiUserAddFill className="w-3 h-3"/>
                                    </div>
                                    <div className="hover:opacity-100">
                                        Add Member
                                    </div>
                                </div>
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
            </header>

            <Head title="Kanban"/>

            <div className="h-screen overflow-y-scroll text-neutral-50">
                <Board />

                <AddMember
                    showModal={showModal}
                    setShowModal={setShowModal}
                    id={ board_encrypted_id }
                    flash={flash}
                />
            </div>
        </AuthenticatedLayout>
    );
};

export default CustomKanban;
