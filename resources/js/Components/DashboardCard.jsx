import { ArrowRightStartOnRectangleIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import { Divider } from "antd";
import BoxThreeD from '../ReactFiber/Box.jsx';


  export function DashboardCard({ link, title, icon, total }) {
    return (
        <div className="border border-gray-500 p-4 rounded-lg ">
            <div className="flex justify-between items-center mb-3">
                <div>
                    {/* <dt className="text-sm text-gray-800 w-10 h-10"><BoxThreeD /></dt> */}
                    <dt className="text-sm text-gray-800">{ icon }</dt>
                </div>
                <div>
                    <dt className="text-sm text-gray-500">{ title }</dt>
                    <dd className="flex justify-end text-lg">{ total }</dd>
                </div>
            </div>
            <hr />
                <Link href={route(link)}>
                    <div className="h-full text-gray-600 hover:text-gray-800 flex justify-end mt-2 text-xs">
                        {/* <ChevronDoubleRightIcon className="w-6 ml-2"/> */}
                        View More
                    </div>
                </Link>
        </div>

    )
  }
