import React from 'react'
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { NavLink, Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <NavLink to="/" style={{ textDecoration: "none" }}>
                    <span className='logo'>DashBoard</span>
                </NavLink>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <span className="title">MAIN</span>
                    <li>
                        <DashboardIcon className="icon Dash" />
                        <span>Dashborad</span>
                    </li>
                    <span className="title">LIST</span>
                    <NavLink to="/users" style={{ textDecoration: "none" }}>

                        <li>
                            <PermIdentityOutlinedIcon className="icon User" />
                            <span>Users</span>
                        </li>
                    </NavLink>
                    <li>
                        <Inventory2Icon className="icon order" />
                        <span>Products</span>
                    </li>
                    <li>
                        <ViewStreamOutlinedIcon className="icon delivery" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon stats" />
                        <span>Delivery</span>
                    </li>
                    <span className="title">USEFUL</span>
                    <li>
                        <InsertChartIcon className="icon stat" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon  syst" />
                        <span>Notifications</span>
                    </li>
                    <span className="title">SERVICE</span>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon logs" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon set" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon pro" />
                        <span>Settings</span>
                    </li>
                    <span className="title">USER</span>
                    <li>
                        <AccountCircleOutlinedIcon className="icon log" />
                        <span>Profile</span>
                    </li>
                    <Link to="/login">
                        <li>
                            <ExitToAppOutlinedIcon className="icon log-out-icon" />
                            <span>Log out</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
