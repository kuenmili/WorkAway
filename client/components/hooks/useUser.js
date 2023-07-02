import { useState, useEffect, useContext } from 'react';
import { onAuthStateChanged } from '../firebase/client';
import { getUserByID } from '../../redux/actions/users';
import { useDispatch, useSelector } from 'react-redux'

const USER_STATES = {
    NOT_LOGGED: null,
    NOT_KNOWN: undefined
};

export default function useUser() {
    const [user, setUser] = useState(USER_STATES.NOT_KNOWN);
    const localUser = useSelector((state) => state.userAuth);
  
    useEffect(() => {
      if (localUser?._id) {
        setUser(localUser);
      }
      onAuthStateChanged(user => {
        if (user) {
          console.log(user);
          setUser(user);
        } else {
          setUser(USER_STATES.NOT_LOGGED);
        }
      });
    }, []);
  
    return user;
  }