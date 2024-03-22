import { useForm } from "@inertiajs/react";
import TextInput from "../../Components/TextInput";
import PrimaryButton from "../../Components/PrimaryButton";
import SecondaryButton from "../../Components/SecondaryButton";
import { useState } from "react";

export default function Filters({ wordEnteredData, allUsersData, setFilteredData }) {

    // const { data, setData, post, processing, errors, reset } = useForm({
    //     name: '',
    //     email: '',
    // });

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
        <div>
            <TextInput 
                type="text"
                placeholder="Name" 
                className="mr-2"
                value={nameSearch}
                onChange={ handleNameFilter }
            />

            {/* <TextInput 
                type="text"
                placeholder="Email" 
                className="mr-2" 
                value={ emailSearch }
                onChange={ handleEmailFilter }
            /> */}

                    {/* <TextInput placeholder="Company" className="mr-2"></TextInput> */}

                    {/* <SecondaryButton className="mr-2" onClick={() => reset()}> CLEAR </SecondaryButton> */}
                    {/* <PrimaryButton className="mr-2"> Search </PrimaryButton> */}

                    
            {/* </form> */}
            
        </div>
    );
}
