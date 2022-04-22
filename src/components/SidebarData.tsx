import React from 'react'
import * as FaIcons from 'react-icons/fa' 

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'Timesheet',
        path: '/timesheet',
        icon: <FaIcons.FaUsers />
    },
    {
        title: 'Invoice',
        path: '/invoice',
        icon: <FaIcons.FaTasks />
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaInfo />
    }
]