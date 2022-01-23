import React from 'react';
import './styles.scss';
import userIMG from './../../assets/user-img.png';

const UserProfile = props => {
    const { currentUser } = props;
    const { displayName } = props;
    return(
        <div className='userProfile'>
         <ul>
           <li>
              <div className='img'>
                 <img scr={userIMG} />
              </div>
           </li>
            <li>
               <span className='displayName'>{currentUser && displayName}</span>
            </li>
         </ul>
        </div>
    );
}
export default UserProfile;