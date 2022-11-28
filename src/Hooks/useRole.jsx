import { useEffect, useState } from "react";

export const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_API}/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data.isAdmin);
        });
    }
  }, [email]);
  return [isAdmin];
};

export const useSeller = (email) => {
  const [isSeller, setSeller] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_API}/users/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSeller(data.isSeller);
        });
    }
  }, [email]);
  return [isSeller];
};

export const useUser = (email) => {
  const [isUser, setUser] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_API}/users/user/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUser(data.isUser);
        });
    }
  }, [email]);
  return [isUser];
};
