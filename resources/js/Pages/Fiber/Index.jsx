import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
// import { Logo } from '@pmndrs/branding'
import '../../../css/style.css'
import { App } from './App'
import ApplicationLogo from '@/Components/ApplicationLogo'

function Overlay() {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
          pmnd.rs
          <br />
          dev collective
        </a>
        <div className="flex justify-between items-center h-20 text-4xl p-6">
            <div>
                <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
            </div>
            <div>
                <div className="flex justify-between items-center h-20 text-lg">
                    <div className='mr-4'>
                        <a href="#login">Login</a>

                    </div>
                    <div>
                        Register
                    </div>
                </div>
            </div>
        </div>
        {/* <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>bad —</div>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>10/17/2021</div> */}
      </div>
    )
  }

// createRoot(document.getElementById('root')).render(

// )

function Index() {

    return (
        <>
    <Suspense fallback={null}>
        <div className="grid grid-cols-3">
            <div className="col-span-2">
                <App />
            </div>
            <div className="col-span-1 w-full mt-24">
                <div className="bold text-2xl flex items-center justify-center">
                    Features
                </div>
                <div className="p-6">
                    <div className="text-black bold text-1xl flex items-start justify-start">
                        To Do Lists:
                    </div>
                    <p className="indent-4 p-1"> Calendar for the deadlines </p>
                </div>
            </div>
        </div>

      <div id="login"></div>
    </Suspense>

    <Overlay />
    {/* <Logo style={{ position: 'absolute', top: 40, left: 40, width: 30 }} /> */}
  </>
    );
}

export default Index;
