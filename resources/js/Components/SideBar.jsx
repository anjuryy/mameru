import React from 'react';

const Sidebar = ({ categoryList }) => {


    return (
        <div className="flex h-screen ">
            {/* Sidebar */}
            <div className="w-1/4 overflow-y-auto rounded-l-lg border border-gray-400">
                {/* Sidebar content */}
                <div className="h-full p-6">
                    <ul>
                        {
                            categoryList.map(data => (
                                <li key={ data.id }> { data.name } </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
            {/* Main Content */}
            <div className="w-3/4 bg-gray-50 rounded-r-lg border border-gray-400">
                {/* Main content */}
                <div className="p-6">
                    <h1>Main Content</h1>
                    <p>This is the main content area.</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
