import React from "react";
import './style.css'
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "../../store/actions";
import { Redirect } from "react-router-dom";
import checkObjectIsEmpty from "../../utils/checkObjectIsEmpty";

function ProfilePage() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  if (checkObjectIsEmpty(user)) {
    return <Redirect to="/login" />
  }

  const handleLogout = () => {
    dispatch(resetUser());
  }

  return (
    <div>
      <h2 className="profile_title">Welcome, {user.firstName}!</h2>
      <div className="profile_info">
        <p>First name: <b>{user.firstName}</b></p>
        <p>Last name: <b>{user.lastName}</b></p>
        <p>Age: <b>{user.age}</b></p>
        <p>Country: <b>{user.country}</b></p>
      </div>
      <button className="profile_logout" onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default ProfilePage;