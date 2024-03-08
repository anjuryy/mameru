// import { Link } from '@inertiajs/react';
// import React from 'react';

// export default function Pagination({ todoData }) {

//     function getClassName(active) {
//         if(active) {
//             return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-blue-700 text-white";
//         } else{
//             return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
//         }
//     }

//     return (
//         todoData.length > 3 && (
//             <div className="mb-4">
//                 <div className="flex flex-wrap mt-8">

//                     {todoData.map((todo, index) => (
//                         // <React.Fragment key={index}>
//                             todo.url === null ?
//                                     (
//                                         <div
//                                             className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
//                                         >
//                                             {todo.label}
//                                         </div>
//                                     ) :

//                                     (
//                                         <Link
//                                             key={ index }
//                                             className={getClassName(todo.active)}
//                                             href={ todo.url }
//                                         >
//                                             {todo.label}
//                                         </Link>
//                                     )
//                         // </React.Fragment>
//                     ))}

//                 </div>
//             </div>
//         )
//     );
// }

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from '@inertiajs/react'

function getClassName(active) {
    if(active) {
        return "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
    } else{
        return "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0";
    }
}

export default function Pagination( { todoData, todoLength } ) {
    // console.log(todoLength);
    // console.log(todoLength.data.length);
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{ todoLength.from }</span> to <span className="font-medium">{ todoLength.to }</span> of{' '}
            <span className="font-medium">{ todoLength.total }</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            { todoData.map((todo, index) => (
                // <React.Fragment key={index}>
                    // todo.url === null ?
                            // (
                            //     <div
                            //         className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
                            //     >
                            //         {todo.label}
                            //     </div>
                            // ) :

                            // (
                                <Link
                                    key={ index }
                                    className={getClassName(todo.active)}
                                    // className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    href={ todo.url }
                                >
                                    { todo.label === '&laquo; Previous' ?
                                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                        : todo.label === 'Next &raquo;' ?
                                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                        : todo.label
                                    }
                                </Link>
                            // )
                // </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
