// Library Imports
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Component Imports
import Picker from '../../components/Picker';
import User from '../../components/User';

// Action Imports
import {
  getUserByUsername,
  getReposByUserName
  } from "../../store/actions/App";
import "../main.css"
import "../MediaQuery.css"


// Welcome Home Component.
export default function Home(props) {
  const dispatch = useDispatch()
  // fetching data from reducers
  const userData = useSelector(state=>state.app.serachedUserData);
  const repoData = useSelector(state=>state.app.userRepoData);
  const isFetchingRecords = useSelector(state=>state.app.isFetchingData);

  // maintaining internal state of component
  const [appUserData,setAppUserData] = useState(userData);
  const [appUserRepoData,setAppUserRepoData] = useState(repoData);

  // applying useeffects for changing data at reducers.
  useEffect(() => {
    if(Object.keys(userData).length !== 0){
        console.log('appUserData...');
        console.log(appUserData);
        setAppUserData(userData);
    }
    if(Object.keys(repoData).length !== 0){
        setAppUserRepoData(repoData);
    }
  }, [userData,repoData]);

  // serach param submit handler.
  const handleSubmit = (user) => {
    // dispatching actions to fetch userdata and repositories.
    dispatch(getUserByUsername(user));
    dispatch(getReposByUserName(user));
  }

  return (
    <div className="main-container">
    <Picker onSubmit={handleSubmit} />
    {isFetchingRecords && <h2 className="data-loading">Loading...</h2>}
    <div className="inner-div">
    {!isFetchingRecords &&
        appUserData.message && (
            <div>
                <h2>{appUserData.message}</h2>
                <p>{appUserData.documentation_url}</p>
            </div>
        )}
    {Object.keys(appUserData).length !== 0  && Object.keys(appUserRepoData).length !== 0 &&
        !isFetchingRecords && (
            <User
                currentUserData={appUserData}
                userRepos={appUserRepoData}
            />
        )}
        </div>
</div>
    );
}
