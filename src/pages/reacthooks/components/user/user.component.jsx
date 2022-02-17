// import {useState, useEffect} from 'react';

import Card from '../card/card.component';

import useFetch from '../../../../effects/useFetch.effect';

const User = ({ userId }) => {
  // const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     const fetchUser = async () => {
  //       const res = await fetch(
  //         `https://jsonplaceholder.typicode.com/users?id=${userId}`
  //       );
  //       const users = await res.json();
  //       setUser(users[0]);
  //     };
  //     fetchUser();
  //   }, []);

  // customize hooks effect
  const user = useFetch(
    `https://jsonplaceholder.typicode.com/users?id=${userId}`
  );
  
  return (
    <Card>
      {user ? (
        <div>
          <h3>{user.username}</h3>
          <h3>{user.name}</h3>
        </div>
      ) : (
        <p>User Not Found</p>
      )}
    </Card>
  );
};

export default User;
