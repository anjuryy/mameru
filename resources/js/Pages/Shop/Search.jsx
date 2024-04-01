import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Search({allUsersData, setFilteredData })
{
    const [isInputVisible, setInputVisible] = useState(false);

    const toggleInputVisibility = () => {
        setInputVisible(!isInputVisible);
    };

    const [nameSearch, setNameSearch] = useState('')
    const [emailSearch, setEmailSearch] = useState('')

    const handleNameFilter = (event) => {
        const searchWord = event.target.value;
        setNameSearch(searchWord)

        const newFilter = allUsersData.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        })

        if(searchWord ==="")
        {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
        // console.log(searchWord);
    }

    const handleEmailFilter = (event) => {
        const searchWord = event.target.value;
        setEmailSearch(searchWord);

        const filteredData = allUsersData.filter(value =>
            value.email.toLowerCase().includes(searchWord.toLowerCase())
        );
        if(searchWord ==="")
        {
            setFilteredData([])
        } else {
            setFilteredData(filteredData)
        }
    };

    return (
        <div className="flex items-center">
            {/* <div className="relative"> */}
                <button
                className="p-2"
                onClick={toggleInputVisibility}
                >
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </button>
                {isInputVisible && (
                <input
                    value={nameSearch}
                    onChange={ handleNameFilter }
                    type="text"
                    placeholder="Search..."
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-r-md shadow-sm"
                    // onChange={ search }
                />
                )}
            {/* </div> */}
        </div>
    )
}
