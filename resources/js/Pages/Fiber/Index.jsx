import { Suspense } from 'react'
// import { Logo } from '@pmndrs/branding'
import '../../../css/style.css'
import { App } from './App'
import ApplicationLogo from '@/Components/ApplicationLogo'
import { Link } from '@inertiajs/react'

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

    return (
        <>
            <Suspense fallback={null}>
    <div className="grid lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2 lg:order-1 w-full lg:w-auto"> {/* Adjusted width */}
            <App />
        </div>

        <div className="lg:col-span-1 col-auto w-full lg:w-full mt-4 lg:mt-40 lg:order-2"> {/* Adjusted width and margin */}
            <div className="bold text-2xl flex items-center justify-center">
                Features
            </div>
            <div className="p-6">
                <div className="text-black bold text-1xl flex items-start justify-start">
                    To Do Lists:
                </div>
                <p className="indent-4 p-1 text-gray-500"> Calendar for the deadlines </p>
            </div>
            <div className="p-6">
                <div className="text-black bold text-1xl flex items-start justify-start">
                    Blog:
                </div>
                <p className="indent-4 p-1 text-gray-500"> Upload Image</p>
                <p className="indent-4 p-1 text-gray-500"> Comment on posts</p>
            </div>
            <div className="p-6">
                <div className="text-black bold text-1xl flex items-start justify-start">
                    Shop:
                </div>
                <p className="indent-4 p-1 text-gray-500"> Add your own product</p>
                <p className="indent-4 p-1 text-gray-500"> An Easy-to-Use Checkout</p>
                <p className="indent-4 p-1 text-gray-500"> Simple Design</p>
                <p className="indent-4 p-1 text-gray-500"> Currency Converter</p>
            </div>
            <div className="p-6">
                <div className="text-black bold text-1xl flex items-start justify-start">
                    Chat:
                </div>
                <p className="indent-4 p-1 text-gray-500"> Inline replies</p>
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
