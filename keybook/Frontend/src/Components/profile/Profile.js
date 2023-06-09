import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import ProfileHobbies from './ProfileHobbies';
import ProfileStudies from './ProfileStudies';
import ProfileLanguages from './ProfileLanguages';
import ProfileTools from './ProfileTools';
import Feedback from './Feedback';
import getRequest from '../../utils/getRequest';

function Profile() {
  const [user, setUser] = useState({});
  const { userId } = useParams();


  useEffect(() => {
    const fetchUser = async () => {
      const userLog = localStorage.getItem('userId');
      const response = await getRequest({
        endpoint: `users/user/${userId || userLog}`
      })
      setUser(response);
    };

    fetchUser();
  }, [userId]);

  return (
    <div id="cuenta">
      <div className="container-fluid main-structure">
        <div className="row">
          <div className="col-sm-5 col-md-4 col-lg-3">
            {user && <ProfileStudies user={user} />}
            {user && <ProfileTools user={user} />}
          </div>
          <div className="col-sm-7 col-md-7 col-lg-6">
            {user && <ProfileCard user={user} />}
            <Feedback userId={userId}
              user={user} />
          </div>
          <div className="col-sm-5 col-md-4 col-lg-3">
            {user && <ProfileHobbies user={user} />}
            {user && <ProfileLanguages user={user} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

