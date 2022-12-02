import React, { useState } from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumn, userRows } from '../../datatablesource';
import { NavLink } from 'react-router-dom';

const Datatable = () => {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction" >
                        <NavLink to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </NavLink>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                    </div>
                );
            }
        }]

    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add New User
                <NavLink to="/users/new" style={{ textDecoration: "none" }} className="link">
                    Add New
                </NavLink>
            </div>
            <DataGrid
                rows={data}
                columns={userColumn.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable
