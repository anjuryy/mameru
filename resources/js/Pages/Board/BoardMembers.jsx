import { Link } from '@inertiajs/react'

export default function BoardMembers({ boardMembersData, boardId })
{
    console.log(boardMembersData);
    return <>
        <div className="grid grid-cols-4 gap-3">
            {
                boardMembersData.map((board_member, index) => (
                    <div key={ index } className="bg-white shadow rounded-md w-full h-full">
                        <div className="flex justify-between items-center p-4">
                            <div>
                                <img src="../../images/profilePic.jpeg" className="w-8 h-8 rounded-full" alt="" />
                            </div>
                            <div className="text-xs">

                                { board_member.name } ({ board_member.email })
                                <div className="flex justify-end text-red-500 pt-1">
                                    <Link
                                        href={route('board.deleteBoardMember', {id: board_member.encrypted_id, board_id: boardId})}
                                        method="delete"
                                        as="button"
                                        type="button"
                                    >
                                        Remove
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
}
