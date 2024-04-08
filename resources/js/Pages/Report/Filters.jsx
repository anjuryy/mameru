import { useForm } from "@inertiajs/react";
import TextInput from "../../Components/TextInput";
import PrimaryButton from "../../Components/PrimaryButton";
import SecondaryButton from "../../Components/SecondaryButton";
import { useState } from "react";

export default function Filters({ wordEnteredData, allUsersData, setFilteredData }) {

    // console.log(allUsersData.filter);
    // const { data, setData, post, processing, errors, reset } = useForm({
    //     name: '',
    //     email: '',
    // });

    const [nameSearch, setNameSearch] = useState('')
    const [statusSearch, setStatusSearch] = useState('')

    const handleNameFilter = (event) => {
        const searchWord = event.target.value;    
        setNameSearch(searchWord)

        const newFilter = allUsersData.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase())
        })

        if(searchWord ==="")
        {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
        // console.log(searchWord);
    }

    const handleStatusFilter = (event) => {
        const searchWord = event.target.value;
        setStatusSearch(searchWord);
        
        

        const filteredData = allUsersData.filter((value) => {
            const statusString = String(value.status);
            return statusString.toLowerCase().includes(searchWord.toLowerCase())
        })

        if(searchWord ==="")
        {
            setFilteredData([])
        } else {
            setFilteredData(filteredData)
        }
    };

    return (
        <div>
            <TextInput 
                type="text"
                placeholder="Title" 
                className="mr-2"
                value={nameSearch}
                onChange={ handleNameFilter }
            />

            <select 
                type="text"
                placeholder="Status" 
                className="mr-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-40" 
                value={ statusSearch }
                onChange={ handleStatusFilter }
            >
                <option value="0">Pending</option>
                <option value="1">Ongoing</option>
                <option value="3">Completed</option>

            </select>
            
        </div>
    );
}
