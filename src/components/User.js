import React from 'react';
import PropTypes from 'prop-types';

import Repos from './Repos';

// This component bears the responsibility of rendering User Details.
const User = props => {
    const { currentUserData, userRepos } = props;
    console.log(currentUserData);
    return (

        <div className="user-data-container">
            <h1>{currentUserData.login}</h1>
            <div className="flex-div">
           <div className="profile-pic"> <img
                className="user-avtar"
                               src={currentUserData.avatar_url}
            /></div>
            
            {
                userRepos.length === 0 && (
                    <h2>No repos found for user {currentUserData.login}</h2>
                )}
            {
                userRepos.length > 0 && (
                    <div className="repository-container">
                          <ul>
                              <li> <div>  Name</div> 
                              <div> {currentUserData.name}</div> 
                              </li>
                              <li> <div> Email</div> 
                              <div>{currentUserData.email}  </div> 
                              </li>
                              <li> <div> Location</div> 
                              <div> {currentUserData.location}</div> 
                              </li>
                              <li> <div> Bio</div> 
                              <div> {currentUserData.bio}</div> 
                              </li>
                              <li> <div> Followers</div> 
                              <div> {currentUserData.followers}</div> 
                              </li>

                          </ul>
                    </div>
                )}
        </div>
        <div>
              <h2>Repos</h2>
        <Repos repos={userRepos} />
        </div>
        </div>
    );
};

User.propTypes = {
    currentUserData: PropTypes.object.isRequired,
    userRepos: PropTypes.object.isRequired,
};

export default User;
