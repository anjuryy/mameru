import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export default function Alert({ flash })
{
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (flash.success != null) {
            setShowAlert(true);
            // Automatically hide the alert after a certain time (e.g., 5 seconds)
            const timeoutId = setTimeout(() => {
                setShowAlert(false);
            }, 5000);

            // Clear the timeout if the component unmounts or the flash prop changes
            return () => clearTimeout(timeoutId);
        }
    }, [flash]);

    const hideAlert = () => {
        setShowAlert(false);
    };

    return(
        <div className="relative">
            {showAlert && (
                <div className="absolute top-0 right-5 bg-white text-gray-800 p-4 text-sm rounded-lg shadow-md w-80 h-19 flex justify-between items-center">
                    <span className="flex justify-center items-center mr-4">
                        <CheckBadgeIcon className="w-10 pr-2"/>
                        { flash.success }
                    </span>
                    <button onClick={hideAlert} className="text-gray-800 focus:outline-none">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M14.35 5.64a1 1 0 0 1 1.41 1.41L11.41 10l4.35 4.35a1 1 0 1 1-1.41 1.41L10 11.41l-4.35 4.35a1 1 0 1 1-1.41-1.41L8.59 10 4.24 5.64a1 1 0 0 1 1.41-1.41L10 8.59l4.35-4.35z"
                            clipRule="evenodd"
                        ></path>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    )
}
