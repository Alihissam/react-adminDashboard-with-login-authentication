import React from 'react'
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {


    const rows = [
        {
            id: 1112122,
            product: "Acer Nitro 5",
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6507/6507908_sd.jpg",
            customer: "Hissam Ali",
            date: "2 march",
            amount: "786",
            method: "cash on delivery",
            status: "Approved",
        },
        {
            id: 1112122,
            product: "Acer Nitro 5",
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6507/6507908_sd.jpg",
            customer: "Hissam Ali",
            date: "2 march",
            amount: "786",
            method: "cash on delivery",
            status: "Approved",
        },
        {
            id: 1112122,
            product: "Acer Nitro 5",
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6507/6507908_sd.jpg",
            customer: "Hissam Ali",
            date: "2 march",
            amount: "786",
            method: "cash on delivery",
            status: "Approved",
        },
        {
            id: 1112122,
            product: "Acer Nitro 5",
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6507/6507908_sd.jpg",
            customer: "Hissam Ali",
            date: "2 march",
            amount: "786",
            method: "cash on delivery",
            status: "Approved",
        },
        {
            id: 1112122,
            product: "Acer Nitro 5",
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6507/6507908_sd.jpg",
            customer: "Hissam Ali",
            date: "2 march",
            amount: "786",
            method: "cash on delivery",
            status: "Approved",
        },
    ]
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Product</TableCell>
                        <TableCell className="tableCell">Customer</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">Payment Method</TableCell>
                        <TableCell className="tableCell">Staus</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}>
                            <TableCell>
                                {row.id}
                                <div className="Cellwrapper" >
                                    <img src={row.img} alt="" className="image" />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.product}</TableCell>
                            <TableCell className="tableCell">{row.customer}</TableCell>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.method}</TableCell>
                            <TableCell className="tableCell">{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List
