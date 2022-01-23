import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const useAuth = props => {
    const navigate = useNavigate();
    const { currentUser } = useSelector(mapState);
     useEffect(() => {
       if(!currentUser){
           navigate('/login')
       }
     },[currentUser])

    return currentUser;
};
export default useAuth;