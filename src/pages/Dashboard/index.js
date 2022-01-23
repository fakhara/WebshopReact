
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';

const mapState = ({ user}) => ({
  currentUser: user.currentUser,

});

const Dashboard = props => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  return (
    <div>
      <h1>
        Order History of{ currentUser}
      </h1>

    </div>
  );
};

export default Dashboard;