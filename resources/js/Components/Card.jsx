import { Link } from '@inertiajs/react';
import React from 'react';

function Card({ title, content, imageUrl, id }) {
    // imageUrl.data == null ? console.log('Hi') : console.log('hello');
    return (
        <div className="relative bg-white shadow-md rounded-md p-4 max-w-sm mx-auto">
            {/* Image */}
            <div className="flex items-center justify-center">
                {
                    imageUrl && imageUrl.length > 0 ? imageUrl.map(data => (
                        <img
                            key={data.id}
                            src={"images/" + data.filename}
                            alt="Card Image"
                            className="w-80 h-auto rounded-md mb-2"
                        />
                    )) :
                    <img
                        src={"images/profilePic.jpeg"}
                        alt="Card Image"
                        className="w-80 h-auto rounded-md mb-2"
                    />

                }
            </div>
            {/* <img
                  v-for="image in listing.images" :key="image.id"
                  src="imageUrl"
            /> */}
            {/* Title and Content */}
            <h2 className="text-xl font-semibold mb-2">{title}</h2>

            <p className="text-gray-600 mb-2 overflow-hidden">
                <span className="whitespace-normal break-words">{content}</span>
            </p>

            {/* Edit Button */}

            <button className="absolute bottom-2 right-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                <Link
                    href={route('blog.show', id)}
                >
                    Edit
                </Link>

            </button>
        </div>
    );
}

  export default Card;
