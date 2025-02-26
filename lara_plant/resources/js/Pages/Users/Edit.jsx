import { useForm } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import AdminLayout from '@/Layouts/AdminLayout'
import PrimaryButton from '@/Components/PrimaryButton';

const Edit = ({user}) => {
  const {data,setData,post,errors} = useForm({
    name:user.name || "",
    email:user.email || "",
    password:"",
    role:user.role || "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    post(route("users.update",user.id),{
      onSuccess: ()=>{setSuccessMessage("User Update Successfully...");},
    });

  };
  useEffect(() => {
    if (successMessage) {
      setTimeout(() => setSuccessMessage(""), 5000); // Hide success message after 5 seconds
    }
  }, [successMessage]);
  return (
    <div className="container-fluid">
     <div className="row">
        <div className="col-sm-12">
            <div className="card">
                <div className="card-body">
                    <div className="form theme-form">
                         <h2>Edit User/Agent</h2>
                             {successMessage && <div className="alert alert-success">{successMessage}</div>}
                        {/* Display validation errors */}
                          {errors.general && <div className="alert alert-danger">{errors.general}</div>}
                         <form onSubmit={handleSubmit}>
                         <div className="row">
                          <div className="col">
                           <div className="mb-3">
                             <label className="pb-2 fw-medium">Name</label>
                               <input  type="text"  id="name" name="name" value={data.name}  onChange={handleChange}
                              className="form-control"   />
                             {errors.name && <div className="text-danger">{errors.name}</div>}
                           </div>
                           </div>
                           </div>
                           <div className="row">
                          <div className="col">
                           <div className="mb-3">
                                   <label className="pb-2 fw-medium">Email</label>
                           <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  value={data.email}
                                  onChange={handleChange}
                                  className="form-control"
                                />
                                {errors.email && <div className="text-danger">{errors.email}</div>}
                          </div>
                          </div>
                          </div>
                          <div className="row">
                          <div className="col">
                           <div className="mb-3">
                                  <label className="pb-2 fw-medium">Password</label>
                                  <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={data.password}
                                    onChange={handleChange}
                                    className="form-control"
                                  />
                                  {errors.password && <div className="text-danger">{errors.password}</div>}
                                </div>
                                </div>
                                </div>
                            <div className="row">
                          <div className="col">
                           <div className="mb-3">
                          <label htmlFor="role">Role</label>
                          <select
                            id="role"
                            name="role"
                            value={data.role}
                            onChange={handleChange}
                            className="form-control"
                          >
                            <option value="user">User</option>
                            <option value="agent">Agent</option>
                          </select>
                        </div>
                        </div>
                        </div>
   <PrimaryButton className="ms-4" >Submit</PrimaryButton>
      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};
Edit.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default Edit;
