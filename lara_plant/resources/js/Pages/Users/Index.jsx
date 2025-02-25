import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { useState, useEffect } from "react";
import { CiMenuKebab } from 'react-icons/ci';
import { Link}  from '@inertiajs/react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { BsPlusCircleFill,BsDashCircleFill } from 'react-icons/bs';

const Index = ({ users }) => {

    const downloadPDF = () => {
        const doc = new jsPDF();
        const table = document.querySelector('.admin_table');

        const headers = [...table.querySelectorAll('.table_header th')]
            .filter((header) => header.innerText !== 'Actions')
            .map((header) => header.innerText);

        const rows = users.map((user, index) => [index + 1, user.name, user.email]);

        doc.autoTable({
            head: [headers],
            body: rows,
            styles: {
                cellPadding: 5,
                fontSize: 10,
                valign: 'middle',
                halign: 'center',
            },
            headerStyles: {
                fillColor: [52, 73, 94],
                textColor: 255,
                fontSize: 12,
                fontStyle: 'bold',
            },
            alternateRowStyles: {
                fillColor: [240, 240, 240],
            },
            startY: 20,
        });

        doc.save('user_details.pdf');
    };
    
    return (
        <div className="container-fluid">
            <div className="responsive-table">
               <div className="col-lg-3 col-md-12">
               <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
                 <h3 className="m-0 text-center text-lg-start">Users</h3>
                    <div className="d-flex align-items-center w-250 pl-15">
                        <span className="search me-3">
                               <i className="fa-solid fa-magnifying-glass fs-3"></i>
                         </span>
                        <form className="search" action="">
                            <input className="search border rounded" id="myInput" type="text" placeholder="Search" />
                       </form>
                    </div>
                     <div className="d-flex align-items-center justify-content-end w-100 pl-20">
                         <button className='btn btn-success d-flex align-items-center border-0 me-4 justify-content-end '>
                             <BsPlusCircleFill className='fs-5' />
                              <Link href={route('users.create')} className="ms-2 text-white text-decoration-none " type="button">AddUser</Link>
                            </button>
                         <button className="btn btn-success d-flex align-items-center border-0 me-2  justify-content-end" onClick={downloadPDF}>
                        DownloadPDF
                    </button>
                    </div></div>
                 </div>
                <table className="admin_table table ">
                        <thead className="table_header ">
                        <tr>
                            <th >Sr. No</th>
                            <th > 
                                <div className="d-flex align-items-end justify-content-start">
                                    Name
                                    <span className="d-inline-flex flex-column up_down_icon">
                                        <i className="fa-solid fa-caret-up"></i>
                                           <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                </div>
                            </th>
                            <th>
                                <div className="d-flex align-items-end justify-content-start">
                                    Email
                                    <span className="d-inline-flex flex-column up_down_icon">
                                        <i className="fa-solid fa-caret-up"></i>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                </div>
                            </th>
                            <th>
                                <div className="d-flex align-items-end justify-content-start">
                                    Email_verified
                                    <span className="d-inline-flex flex-column up_down_icon">
                                        <i className="fa-solid fa-caret-up"></i>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                </div>
                            </th>
                            <th>
                                <div className="d-flex align-items-end justify-content-start">
                                    Created_On
                                    <span className="d-inline-flex flex-column up_down_icon">
                                        <i className="fa-solid fa-caret-up"></i>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                </div>
                            </th>
                            <th>
                                <div className="d-flex align-items-end justify-content-start">
                                    Actions
                                    <span className="d-inline-flex flex-column up_down_icon">
                                        <i className="fa-solid fa-caret-up"></i>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="table_body">
                     <tr className='text-center text-md-end'>
                        <td colSpan="6" style={{paddingTop:"25px"}}>
                       </td></tr>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td data-label="Sr. No">{index + 1}</td>
                                <td data-label="name">{user.name}</td>
                                <td data-label="email">{user.email}</td>
                                <td data-label="email_verified">{user.email_verified_at ? 'Yes': 'ON'}</td>
                                <td data-label="created_on">{user.created_on}</td>
                                <td data-label="Membership" style={{paddingRight:"17%"}}>
                                <div className="d-flex align-items-center">
                                   <button className='btn btn-success d-flex align-items-center border-0 me-2'>
                                      <BsPlusCircleFill className='fs-5' />
                                      <Link href={route('users.edit', user.id)} className="ms-2 text-white text-decoration-none w-10" type="button">Edit</Link>
                                   </button>
                                   <button className='btn btn-danger d-flex align-items-center border-0 me-2'>
                                      <BsDashCircleFill className='fs-5' />
                                      <Link href={route('users.destroy', user.id)} className="ms-2 text-white text-decoration-none w-10" type="button">Delete</Link>
                                   </button>
                                </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                </table>
            </div>
        </div>
    );
};

Index.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Index;
