import React from 'react';
import {   FaCartPlus } from 'react-icons/fa';
import {  AiFillHome } from 'react-icons/ai';
import {  IoIosPaper } from "react-icons/io";

export const SIdebarData = [
    {
        title: "Home",
        path: "/" ,
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    // {
    //     title: "Add Expense",
    //     path: "/expense" ,
    //     icon: <FaCartPlus />,
    //     cName: 'nav-text'
    // },
{
    title: "Reports",
    path: "/reports" ,
    icon: <IoIosPaper />,
    cName: 'nav-text'
},
]