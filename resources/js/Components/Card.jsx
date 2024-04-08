import { Link } from '@inertiajs/react';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

function Card({ title, content, imageUrl, id, buttonValue }) {
    // imageUrl.data == null ? console.log('Hi') : console.log('hello');
    // console.log(id)
    return (
        <div className="relative bg-white shadow-md rounded-md p-4 max-w-sm mx-auto">
            {/* Image */}
            <div className="flex items-center justify-center">
                {
                    imageUrl && imageUrl.length > 0 ?
                        <img
                            src={"uploads/" + imageUrl}
                            alt="Card Image"
                            className="w-80 h-80 rounded-md mb-2"
                        />
                     :
                    <img
                        src={"images/profilePic.jpeg"}
                        alt="Card Image"
                        className="w-80 h-80 rounded-md mb-2"
                    />

                }
            </div>

            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-semibold mb-2">{title}</h2>
                </div>

                <div>

                        <Link
                            href={buttonValue === 'Edit' ? route('blog.edit', id) : route('blog.show', id)}
                        >
                            <SecondaryButton>
                                { buttonValue }
                            </SecondaryButton>
                        </Link>

                </div>
            </div>
        </div>
    );
}

  export default Card;
