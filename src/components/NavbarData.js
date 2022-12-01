import React from "react";
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as CiIcons from 'react-icons/ci';
import * as CgIcons from 'react-icons/cg';

export const NavbarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiOutlineHome />,
    cName: "nav-text",
  },
  {
    title: "Orders",
    path: "/orders",
    icon: <CiIcons.CiMemoPad />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <AiIcons.AiOutlineAppstore />,
    cName: "nav-text",
  },
  {
    title: "Manage",
    path: "/manage",
    icon: <CgIcons.CgToolbox />,
    cName: "nav-text",
  },
  {
    title: "Accounts",
    path: "/accounts",
    icon: <MdIcons.MdOutlineManageAccounts />,
    cName: "nav-text",
  },
  
];
