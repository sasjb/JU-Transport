import React from 'react'
import '../css/ProfileInfo.css'
function ProfileInfo() {
    return (
        <div className='main-profile'>
          <div className="container bootstrap snippets bootdey">
            <h1 className="text-primary">Profile</h1>
            <hr />
            <div className="row">
              {/* left column */}
              <div className="col-md-3">
                <div className="text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    className="avatar img-circle img-thumbnail"
                    alt="avatar"
                  />
                  <h6>Upload a different photo...</h6>
    
                  <input type="file" className="form-control" />
                </div>
              </div>
    
              <div className="col-md-9 personal-info">
                <h3>Personal Information</h3>
    
                <form className="form-horizontal" role="form">
    
    
                <div className="form-group">
                    <label className="col-lg-3 control-label"><b>ID:</b></label>
                    <div className="col-lg-8">
                      <input className="form-control" type="text" value="A125" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-3 control-label"><b>First name:</b></label>
                    <div className="col-lg-8">
                      <input className="form-control" type="text" value="Abdur" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-3 control-label"><b>Last name:</b></label>
                    <div className="col-lg-8">
                      <input className="form-control" type="text" value="Rahman" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-3 control-label"><b>Address:</b></label>
                    <div className="col-lg-8">
                      <input className="form-control" type="text" value="Islamnagar, Savar, Dhaka" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-3 control-label"><b>Phone:</b></label>
                    <div className="col-lg-8">
                      <input className="form-control" type="text" value="01821489657" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-3 control-label"><b>Email:</b></label>
                    <div className="col-lg-8">
                      <input className="form-control" type="text" value="rahman@juniv.edu" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-3 control-label"><b>Password:</b></label>
                    <div className="col-lg-8">
                      <input className="form-control" type="text" value="A12545Abdur" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-lg-3 control-label"><b>Designation:</b></label>
                    <div className="col-lg-8">
                      <input className="form-control" type="text" value="Store Officer, CSE, JU" />
                    </div>
                  </div>
                </form>
                <button type="button" className="editbutton">Edit Profile</button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      );
    };

export default ProfileInfo
