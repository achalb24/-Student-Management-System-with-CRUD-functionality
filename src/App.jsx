// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import ViewAll from './ViewAll';
// import Layout from './Layout';
// import ViewSingleStudent from './ViewSingleStudent';
// import Update from './Update';
// import ErrorPage from './ErrorPage';

// const App = () => {
//     return (
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path='/' element={<Layout />}>
//                         <Route index element={<Home />} />
//                         <Route path='/viewall' element={<ViewAll />} />
//                         <Route path='/more/:id' element={<ViewSingleStudent />} />
//                         {/* dynamic path as for every student it will change */}
//                         <Route path='/edit/:id' element={<Update/>}/>
//                         <Route path='*' element={<ErrorPage/>}/>
//                     </Route>
//                 </Routes>
//             </BrowserRouter>
//         </>
//     )
// }

// export default App


// V6 object way

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import ViewAll from './ViewAll';
import Layout from './Layout';
import ViewSingleStudent from './ViewSingleStudent';
import Update from './Update';
import ErrorPage from './ErrorPage';

import React from 'react'
import { Toaster } from 'react-hot-toast';

let r = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/viewall',
                element: <ViewAll />
            },
            {
                path: '/more/:id',
                element: <ViewSingleStudent />
            },
            {
                path: '/edit/:id',
                element: <Update />
            },
            {
                path: '*',
                element: <ErrorPage />
            },
        ]
    }
])

const App = () => {
    return (
        <>
            <div><Toaster
                position="top-right"
                reverseOrder={false}
            /></div>
            <RouterProvider router={r}></RouterProvider>
        </>
    )


}

export default App

// // to download icons
// // npm add react-icons

// MOCK:

// import React from 'react'
// import RegistrationForm from './RegistrationForm';

// const App = () => {
//   return (
//     <>
//         <RegistrationForm/>
//     </>
//   )
// }

// export default App