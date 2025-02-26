import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import UserProfileEdit from './UserProfileEdit';
import UserPasswordChange from './UserPasswordChange';
import show from '@/images/profile1.png';

const UserProfile= ({ user, userProfile }) => {
  const { auth } = usePage().props;
  const imageUrl = `/storage/images/${userProfile?.img}`;
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('v-pills-01');  // Default active tab is 'Profile'

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className='container mt-5'>
      <div className="row gy-3">
        <div className="col-xxl-3 col-md-3">
          <div className="profile_head">
            <div className="profile_img card rounded-0 border-0 bg-dark text-white">
              <img
                className="card-img"
                id="output02"
                src={imageUrl || show}  // Use a fallback image if no img exists
                alt="Profile Image"
              />
              <div className="card-img-overlay bottom-0" style={{ top: 'auto' }}>
                <h4 className="card-title">
                  <i className="fa-regular fa-circle-user"></i> {auth.user?.name}
                </h4>
                <p className="card-text">{auth.user?.email}</p>
              </div>
            </div>
            <div className="nav flex-column nav-pills p-3 profile_tabs" role="tablist">
              <button
                className={`nav-link ${activeTab === 'v-pills-01' ? 'active' : ''}`}
                onClick={() => handleTabClick('v-pills-01')}
                type="button"
              >
                <i className="bi bi-person-fill"></i> Profile
              </button>
              <button
                className={`nav-link ${activeTab === 'v-pills-02' ? 'active' : ''}`}
                onClick={() => handleTabClick('v-pills-02')}
                type="button"
              >
                <i className="bi bi-pencil-square"></i> Edit Profile
              </button>
              <button
                className={`nav-link ${activeTab === 'v-pills-03' ? 'active' : ''}`}
                onClick={() => handleTabClick('v-pills-03')}
                type="button"
              >
                <i className="bi bi-lock-fill"></i> Change Password
              </button>
            </div>
          </div>
        </div>

        <div className="col-xxl-9 col-md-9">
          <div className="tab-content profile_body">
            {/* Profile Tab Content */}
            {activeTab === 'v-pills-01' && (
              <div className="tab-pane fade active show bg-white">
                <div className="row g-3">
                  <h3 className="pro_heading">Profile</h3>
                  <div className="col-lg-6 mt-5">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0 fw-bold text-dark fs-5">Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{userProfile?.name || 'No name available'}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0 fw-bold text-dark fs-5">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{userProfile?.email || 'No email available'}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0 fw-bold text-dark fs-5">Phone</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{userProfile?.phone || 'No phone available'}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0 fw-bold text-dark fs-5">Address</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{userProfile?.address || 'No address available'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <img src={show} className="w-100" alt="Profile" />
                  </div>
                </div>
              </div>
            )}

            {/* Edit Profile Tab Content */}
            {activeTab === 'v-pills-02' && (
              <div className="tab-pane fade bg-white">
                <UserProfileEdit user={user} userProfile={userProfile} />
              </div>
            )}

            {/* Change Password Tab Content */}
            {activeTab === 'v-pills-03' && (
              <div className="tab-pane fade bg-white">
                <UserPasswordChange />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

UserProfile.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default UserProfile;
