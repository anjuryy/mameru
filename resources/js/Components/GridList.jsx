import { PlusCircleIcon } from '@heroicons/react/20/solid';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import Modal from './Modal';

const GridItem = ({ data, id, urlForEdit }) => {
    const [isHovered, setIsHovered] = useState(false);

    var underName = data.under_name ? data.under_name+': '  : ''

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Link href={route(urlForEdit, id)}>
            <div
                key={data.id}
                className={`bg-white p-2 text-center border rounded-lg border-gray-800`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    transition: 'background-color 0.3s ease',
                    backgroundColor: isHovered ? 'rgb(31 41 55)' : 'white', // Change background color on hover
                    color: isHovered ? 'white' : 'rgb(31 41 55)', // Change text color on hover
                }}
            >
                {isHovered ? 'Edit' : underName + data.name} {/* Change text when hovered */}
            </div>
        </Link>
    );
};

const GridList = ({ gridCount, title, urlForCreate, postData, urlForEdit }) => {

    // const [isOpen, setIsOpen] = useState(false);

    // const handleOpenModal = () => {
    //     setIsOpen(true);
    // };

    // const handleCloseModal = () => {
    //     setIsOpen(false);
    // };

    return (
        <div>
            <div className="text-lg p-2 flex items-center">
                {title}

                <Link href={route(urlForCreate)}>
                    <PlusCircleIcon className='w-5 ml-1'/>
                </Link>

                {/* <button onClick={handleOpenModal}>Open Modal</button>
                    <Modal show={isOpen} onClose={handleCloseModal} maxWidth="2xl" closeable>
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-4">Modal Content</h2>
                            <p>This is the content of the modal.</p>
                        </div>
                    </Modal> */}
            </div>

            <div className="grid grid-cols-6 gap-3">
                {/* Render GridItems */}
                {postData.map(data => (
                    <GridItem key={data.id} data={data} id={data.id} urlForEdit={ urlForEdit }/>
                ))}
            </div>
        </div>
    );
};

export default GridList;
