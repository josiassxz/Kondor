import React from 'react'
import { Container, Content } from './styles'
import {
    FaTimes,
    FaHome,
    FaRegSun,
    FaUserAlt,
} from 'react-icons/fa'

import SideBarItem from '../SideBarItem'
import {Link} from "react-router-dom";

const SideBar = ({ active }) => {

    const closeSidebar = () => {
        active(false)
    }

    return (
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar} />
            <Content>
                <SideBarItem Icon={FaHome} Text="Home" />
                <SideBarItem to='/' Icon={FaUserAlt} Text="Users" />
                <SideBarItem Icon={FaRegSun} Text="Settings" />
            </Content>
        </Container>
    )
}

export default SideBar
