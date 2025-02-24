import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';

import { CiMenuKebab } from 'react-icons/ci';
import { Link,router } from '@inertiajs/react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { BsPlusCircleFill } from 'react-icons/bs';

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
                    <div className="d-flex align-items-center w-20 h-25 pl-20">
                         <button className='btn btn-success d-flex align-items-center border-0 me-2'>
                             <BsPlusCircleFill className='fs-5' />
                              <Link href={route('users.create')} className="ms-2 text-white text-decoration-none" type="button">Add</Link>
                            </button>
                         <button className="btn btn-primary mb-4 pl-10" onClick={downloadPDF}>
                        Download PDF
                    </button>
                    </div>
                   </div>
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
                        <td colSpan="4" style={{paddingTop:"25px"}}>
                       </td></tr>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td data-label="Sr. No">{index + 1}</td>
                                <td data-label="name">{user.name}</td>
                                <td data-label="email">{user.email}</td>
                                <td data-label="Membership" style={{paddingRight:"17%"}}>
                                    <div className="btn-group t_dropdown">
                                        <CiMenuKebab
                                            className="text-dark"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        />
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a href="customer-id.html" className="dropdown-item">
                                                    View Detail
                                                </a>
                                            </li>
                                            <li class="edit">
                                                <a className="dropdown-item" href={route('users.roles', user.id)}>
                                                    Roles
                                                </a>
                                            </li>
                                            <li>
                                                <Link
                                                    as="button"
                                                    href={route('users.destroy', user.id)}
                                                    className="dropdown-item"
                                                    method="delete"
                                                >
                                                    Delete
                                                </Link>
                                            </li>
                                        </ul>
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
