/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements, useLoaderData } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github ,{githubInfoLoader} from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import './index.css'
import Signup from './components/Signup/Signup.jsx'
import Login from './components/SignIn/Login.jsx'
const router1 = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path:"github",
        element: <Github />
      }
    ]
  }
])
const router2=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='signup' element={<Signup />}/>
      <Route path='signin' element={<Login />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route loader={githubInfoLoader} path='github' element={<Github />}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router2} />
  </React.StrictMode>,
)
