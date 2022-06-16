import React from 'react';

import './style/SpecialPackageTable.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';

function createData(date, name, off, price) {
    return {date, name, off, price}
}

const rows = [
    createData('14 شهریور 1401', 'بسته اینترنت سه ماهه', '20%', '130,000'),
    createData('12 خرداد 1401', 'بسته ترکیبی هفتگی', '45%', '45,000'),
    createData('15 تیر 1401', 'بسته اینترنت یکماهه', '15%', '50,000'),
]


export default function () {
    return (
        <div id="special-packages-table">
            <h2>بسته های پیشنهادی مخصوص خود شما</h2>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 400}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>تاریخ انقضا بسته</TableCell>
                            <TableCell align="right">نام بسته</TableCell>
                            <TableCell align="right">تخفیف</TableCell>
                            <TableCell align="right">قیمت</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.date}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.off}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};