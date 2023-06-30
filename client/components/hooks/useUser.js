import { useState, useEffect, useContext } from 'react';
import { onAuthStateChanged } from '../firebase/client';
import { getUserByID } from '../../redux/actions/users';
import { useSelector } from 'react-redux'

export const USER_STATES = {
    NOT_LOGGED: null,
    NOT_KNOWN: undefined
};

export default function useUser() {
    const [user, setUser] = useState(USER_STATES.NOT_KNOWN);
    const localUser = useSelector((state) => state.user);
  
    useEffect(() => {
      if (localUser?.id) {
        setUser(localUser);
      }
      onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
          dispatchEvent(getUserByID(user.id));
        } else {
          setUser(USER_STATES.NOT_LOGGED);
        }
      });
    }, []);
  
    return user;
  }