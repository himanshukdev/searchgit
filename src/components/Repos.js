import React,{useState} from 'react';
import PropTypes from 'prop-types';
import DetailDialog from "../components/DetailsDialog";

// This component bears the responsibility of listing User Repositories.
export default function Repos(props){
    const [seeDetail,setSeeDetail] = useState(false);
    const [detail,setDetail] = useState()
    return (
        <>
        {seeDetail && (
            <DetailDialog
                isOpen={seeDetail}
                detailData={detail}
                onClose={()=>setSeeDetail(false)}
            />
        )}
        <ul className="repo-list">
            {props.repos.map(repo => (
                <li key={repo.id} onClick={()=>{setSeeDetail(true); setDetail(repo)}}>
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                </li>
            ))}
        </ul>
        </>
        
    );
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
};
