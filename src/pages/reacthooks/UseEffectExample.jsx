import { useState, useEffect } from 'react';
import Card from './components/card/card.component';

const UseEffectExample = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(
    () => {
        /**
         * Hooks Rule
         * > Don’t call Hooks inside loops, conditions, or nested functions.
         * > Don’t call Hooks from regular JavaScript functions.
         */
        if (searchQuery.length > 0) {
            const fetchFunc = async () => {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`);
                const resJson = await response.json();
                console.log(resJson[0]);
                setUser(resJson[0])
            }
            fetchFunc();
        }
    },[searchQuery]);
  

  return (
    <Card>
      <input
        type="search"
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      {
          user ? (
              <div>
                  <h3>{user.name}</h3>
                  <h3>{user.username}</h3>
                  <h3>{user.email}</h3>
              </div>
          ) : (
              <p>No user found</p>
          )
      }
    </Card>
  );
};

export default UseEffectExample;
