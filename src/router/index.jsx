import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/Home'
import Banner from '../components/Banner'
import Music from '../components/Music'
import Playlist from '../pages/Playlist'

const Routers = () => {
  return (
    <>
      {
        useRoutes([
            {
                path: "/",
                element: <Layout/>,
                children: [
                    {
                        path: "/",
                        element: <Home/>,
                        children: [
                            {
                                path: "/",
                                element: <Banner/>
                            },
                            {
                                path: "/playlist",
                                element: <Playlist/>
                            },
                        ]
                    }
                ]
            }
        ])
      }
    </>
  )
}

export default Routers
