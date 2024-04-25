import { Suspense } from 'react'
// import { Logo } from '@pmndrs/branding'
import '../../../css/style.css'
import { App } from './App'
import ApplicationLogo from '@/Components/ApplicationLogo'
import { Link, Head } from '@inertiajs/react'
import { PuzzlePieceIcon } from '@heroicons/react/20/solid';
import Collapsible from '@/Components/Collapsible'
import { useState } from 'react'

function Overlay() {
    return (
        <>
            <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
            </div>

            <div className="absolute top-0 left-0 w-full h-20 text-4xl p-6 flex justify-between items-center">
                <div>
                    <ApplicationLogo className="w-20 h-20 fill-current"/>
                </div>
                <div>
                    <div className="flex justify-between items-center h-20 text-lg">
                        <div className='mr-4 text-gray-400 hover:text-gray-800'>
                            <Link href="/login">Login</Link>
                        </div>
                        <div className="text-gray-400 hover:text-gray-800">
                            <a href="/register">Register</a>
                        </div>
                    </div>
                </div>
            </div>

      </>
    )
  }

// createRoot(document.getElementById('root')).render(

// )

function Index() {
    const [activeId, setActiveId] = useState('section1');

    const handleSetActiveId = (id) => {
        setActiveId(id === activeId ? null : id);
    };

    return (
        <>
        <Head title={ "Homepage" }/>
            <Suspense fallback={null}>
                <div className="grid lg:grid-cols-3">
                    <div className="col-span-1 lg:col-span-2 lg:order-1 w-full lg:w-auto"> {/* Adjusted width */}
                        <App />
                    </div>

                    <div className="lg:col-span-1 col-auto w-full lg:w-full mt-2 lg:mt-16 lg:order-2"> {/* Adjusted width and margin */}
                        <div className="bold text-2xl flex items-center justify-center">
                            Features
                        </div>
                        <div className="container mx-auto p-4">
                            <Collapsible
                                id="section1"
                                title="Dashboard"
                                activeId={activeId}
                                setActiveId={handleSetActiveId}
                            >
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Weather forecast </p>
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Calender tasks included</p>
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Quotes </p>
                            </Collapsible>
                            <Collapsible
                                id="section2"
                                title="To Do Lists"
                                activeId={activeId}
                                setActiveId={handleSetActiveId}
                            >
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Weather forecast </p>
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Calender tasks included</p>
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Quotes </p>
                            </Collapsible>
                            <Collapsible
                                id="section3"
                                title="Board"
                                activeId={activeId}
                                setActiveId={handleSetActiveId}
                            >
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Define custom columns based on their workflow or process</p>
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Cards represent individual tasks, items, or topics</p>
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Notification for invitation on board</p>
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Multiple users can collaborate on a board simultaneously</p>
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Drag and Drop Cards</p>
                            </Collapsible>
                            <Collapsible
                                id="section4"
                                title="Blog"
                                activeId={activeId}
                                setActiveId={handleSetActiveId}
                            >
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Upload Image</p>
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Comment on posts</p>
                            </Collapsible>
                            <Collapsible
                                id="section5"
                                title="Shop"
                                activeId={activeId}
                                setActiveId={handleSetActiveId}
                            >
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Add your own product</p>
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> An Easy-to-Use Checkout</p>
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Simple Design</p>
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Currency Converter</p>
                            </Collapsible>
                            <Collapsible
                                id="section6"
                                title="Chat"
                                activeId={activeId}
                                setActiveId={handleSetActiveId}
                            >
                                <p className="indent-4 p-1 text-gray-500 flex"><PuzzlePieceIcon className="w-2" /> Inline replies</p>
                            </Collapsible>
                        </div>

                        <div className="text-red-500 text-sm flex items-center justify-center">
                            * This portfolio is still under maintenance
                        </div>
                    </div>

                </div>
                <div id="login"></div>
            </Suspense>


            <Overlay />

            {/* <Login /> */}
        </>
    );
}

export default Index;
