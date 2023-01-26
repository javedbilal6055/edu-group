import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { FormContext } from "../../allContext/context";
import axiosPut from "../../axios/axiosPut";
import avatar from "../../images/PNG/avatar.png";

const UserProfile = (props) => {
  const {
    saveUserDetails,
    userDetails,
    saveFormData,
    formData,
    multiStepForm,
    saveMultiStepForm,
    userData,
    setUserData,
    isModalOpen,
    setModalOpen,
  } = useContext(FormContext);
  const [isEditable, setEditable] = useState(false);
  const [inputUserData, setFormData] = useState(userData?.userData);
  const [selectedImage, setSelectedImage] = useState(
    inputUserData?.profilePic ? inputUserData?.profilePic : avatar
  );
  // console.log(userData)
  const handleEditForm = () => {
    setEditable(true);
  };

  const handleFormChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleAddressChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        address: {
          ...prevState.address,
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  const getFomattedDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const handleProfilePicChange = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpdateData = async () => {
    const userId = inputUserData?.userId;
    console.log(userData);

    const updateRequestData = {
      path: `/register/updateUser/${userId}`,
      data: {
        fname: inputUserData?.fname,
        lname: inputUserData?.fname,
        mobile: inputUserData?.mobile,
        gender: inputUserData?.gender,
        // userId: userId,
        password: "",
        highestQualification: inputUserData?.highestQualification,
        email: inputUserData?.email,
        // role: "student",
        address: {
          streetAdress1: inputUserData?.address?.streetAdress1,
          streetAdress2: "",
          locality: inputUserData?.address?.locality,
          landMark: inputUserData?.address?.landMark,
          city: inputUserData?.address?.City,
          state: inputUserData?.address?.state,
          pinCode: inputUserData?.address?.pinCode,
        },
        orgName: "",
        isMobileVerified: true,
        registered: true,
      },
    };
    console.log(inputUserData, "sdsd");
    let updateUserRequest = await axiosPut(updateRequestData);
    if (updateUserRequest) {
      toast.success("Profile details updated successfully!");
      saveFormData({ ...userData, userData: inputUserData });
      setEditable(false);
    }
    console.log(updateUserRequest, "updated");
  };

  return (
    <div className="row">
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-8">
              <div className="about-text go-to">
                <div className="row">
                  <div className="col-7">
                    <h3 className="about-text__heading">About me</h3>
                    {/* <h6 className="theme-color lead">A Lead UX &amp; UI designer based in Canada</h6> */}
                    {/* <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p> */}
                  </div>
                  <div className="col-5 d-flex align-items-center justify-content-end btn-grp">
                    {isEditable ? (
                      <>
                        <button
                          className="btn btn-primary"
                          onClick={handleUpdateData}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={() => setEditable(false)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={handleEditForm}
                        style={{ marginRight: "10%" }}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </div>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label className="about-list__input-labels">Name</label>
                      {isEditable ? (
                        <input
                          type="text"
                          className="form-control"
                          name="fname"
                          value={inputUserData?.fname}
                          onChange={handleFormChange}
                        />
                      ) : (
                        <p className="about-list__form-text">{`${
                          inputUserData?.fname || "-"
                        } ${inputUserData?.lname || ""}`}</p>
                      )}
                    </div>
                    <div className="media">
                      <label className="about-list__input-labels">
                        Date of Birth
                      </label>
                      {isEditable ? (
                        <input
                          type="date"
                          className="form-control"
                          name="DOB"
                          value={getFomattedDate(inputUserData?.DOB)}
                          onChange={handleFormChange}
                        />
                      ) : (
                        <p className="about-list__form-text">
                          {inputUserData?.DOB
                            ? props.showDate(inputUserData?.DOB)
                            : "-"}
                        </p>
                      )}
                    </div>
                    <div className="media">
                      <label className="about-list__input-labels">
                        Contact No
                      </label>
                      {isEditable ? (
                        <input
                          className="form-control"
                          type="number"
                          name="mobile"
                          value={inputUserData?.mobile}
                          onChange={handleFormChange}
                        />
                      ) : (
                        <p className="about-list__form-text">
                          {inputUserData?.mobile || "-"}
                        </p>
                      )}
                    </div>
                    <div className="media">
                      <label className="about-list__input-labels">Role</label>
                      {isEditable ? (
                        <input
                          className="form-control"
                          type="text"
                          name="role"
                          value={inputUserData?.role}
                          disabled
                        />
                      ) : (
                        <p className="about-list__form-text">
                          {inputUserData?.role || "-"}
                        </p>
                      )}
                    </div>
                    <div className="media">
                      <label className="about-list__input-labels">
                        Mobile Verified
                      </label>
                      {isEditable ? (
                        <input
                          className="form-control"
                          type="text"
                          name="isEnabled"
                          value={inputUserData?.isMobileVerified ? "Yes" : "No"}
                          disabled
                        />
                      ) : (
                        <p className="about-list__form-text">
                          {inputUserData?.isMobileVerified ? "Yes" : "No"}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <label className="about-list__input-labels">Gender</label>
                      {isEditable ? (
                        <select
                          className="form-control"
                          name="gender"
                          onChange={handleFormChange}
                          value={
                            inputUserData?.gender
                              ? inputUserData?.gender
                              : "SELECT"
                          }
                        >
                          <option value="SELECT">Select</option>
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Female</option>
                        </select>
                      ) : (
                        <p className="about-list__form-text">
                          {inputUserData?.gender || "-"}
                        </p>
                      )}
                    </div>
                    <div className="media">
                      <label className="about-list__input-labels">E-mail</label>
                      {isEditable ? (
                        <input
                          className="form-control"
                          type="text"
                          name="email"
                          value={inputUserData?.email}
                          onChange={handleFormChange}
                        />
                      ) : (
                        <p className="about-list__form-text">
                          {inputUserData?.email || "-"}
                        </p>
                      )}
                    </div>
                    <div className="media">
                      <label className="about-list__input-labels">
                        Highest Qualification
                      </label>
                      {isEditable ? (
                        <input
                          className="form-control"
                          type="text"
                          name="highestQualification"
                          value={inputUserData?.highestQualification}
                          onChange={handleFormChange}
                        />
                      ) : (
                        <p className="about-list__form-text">
                          {inputUserData?.highestQualification || "-"}
                        </p>
                      )}
                    </div>
                    <div className="media">
                      <label className="about-list__input-labels">
                        Active Status
                      </label>
                      {isEditable ? (
                        <input
                          className="form-control"
                          type="text"
                          name="isEnabled"
                          value={inputUserData?.isEnabled ? "Yes" : "No"}
                          onChange={handleFormChange}
                          disabled
                        />
                      ) : (
                        <p className="about-list__form-text">
                          {inputUserData?.isEnabled ? "Yes" : "No"}
                        </p>
                      )}
                    </div>
                    <div className="media">
                      <label className="about-list__input-labels">
                        Creation Date
                      </label>
                      {isEditable ? (
                        <input
                          className="form-control"
                          type="date"
                          name="createdOn"
                          value={getFomattedDate(inputUserData?.createdOn)}
                          disabled
                        />
                      ) : (
                        <p className="about-list__form-text">
                          {props.showDate(inputUserData?.createdOn) || ""}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-2 row about-list">
                  <h6 className="sub-heading">Address -</h6>
                  <div className="col-md-6">
                    <div className="media">
                      <label className="about-list__input-labels">
                        Street address
                      </label>
                      {isEditable ? (
                        <input
                          className="form-control"
                          type="text"
                          name="streetAdress1"
                          value={inputUserData?.address?.streetAdress1}
                          onChange={handleAddressChange}
                        />
                      ) : (
                        <p className="about-list__form-text">
                          {inputUserData?.address?.streetAdress1 || "-"}
                        </p>
                      )}
                    </div>

                    <div className="media">
                      <label className="about-list__input-labels">
                        LandMark
                      </label>
                      {isEditable ? (
                        <input
                          className="form-control"
                          type="text"
                          name="landMark"
                          value={inputUserData?.address?.landMark}
                          onChange={handleAddressChange}
                        />
                      ) : (
                        <p className="about-list__form-text">
                          {inputUserData?.address?.landMark || "-"}
                        </p>
                      )}
                    </div>
                    <div className="media">
                      <label className="about-list__input-labels">City</label>
                      {isEditable ? (
                        <input
                          className="form-control"
                          type="text"
                          name="city"
                          value={inputUserData?.address?.city}
                          onChange={handleAddressChange}
                        />
                      ) : (
                        <p className="about-list__form-text">
                          {inputUserData?.address?.city || "-"}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <label className="about-list__input-labels">
                        Locality
                      </label>
                      {isEditable ? (
                        <input
                          className="form-control"
                          type="text"
                          name="locality"
                          value={inputUserData?.address?.locality}
                          onChange={handleAddressChange}
                        />
                      ) : (
                        <p className="about-list__form-text">
                          {inputUserData?.address?.locality || "-"}
                        </p>
                      )}
                    </div>
                    <div className="media">
                      <label className="about-list__input-labels">
                        Pincode
                      </label>
                      {isEditable ? (
                        <input
                          className="form-control"
                          type="number"
                          name="pinCode"
                          value={inputUserData?.address?.pinCode}
                          onChange={handleAddressChange}
                        />
                      ) : (
                        <p className="about-list__form-text">
                          {inputUserData?.address?.pinCode || "-"}
                        </p>
                      )}
                    </div>
                    <div className="media">
                      <label className="about-list__input-labels">State</label>
                      {isEditable ? (
                        <input
                          className="form-control"
                          type="text"
                          name="state"
                          value={inputUserData?.address?.state}
                          onChange={handleAddressChange}
                        />
                      ) : (
                        <p className="about-list__form-text">
                          {inputUserData?.address?.state || "-"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-avatar text-center profile-pic">
                <label className="-label" for="file">
                  <span className="avatar-text">Change Image</span>
                </label>
                <input
                  className="profile-pic__input"
                  id="file"
                  type="file"
                  onInput={handleProfilePicChange}
                />
                <img
                  className="profile-pic__img"
                  src={selectedImage}
                  title=""
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
