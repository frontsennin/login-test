"use client";
import UserService from "@/services/users";
import UserCard from "../UserCard/UserCard";
import { useRouter } from "next/router";

const { useEffect, useState } = require("react");

const UserDetails = () => {
  const userService = new UserService();
  const router = new useRouter();
  const [user, setUser] = useState();
  const [listOfUsers, setListOfUsers] = useState();

  const getUsers = () => {
    userService.getAll().then((res) => {
      if (res) {
        setListOfUsers(res.users);
        console.log(res.users);
      }
    });
  };

  const getUserDetail = () => {
    const usr = JSON.parse(localStorage["user"]);

    if (usr) {
      userService.getById(usr.id).then((res) => {
        if (res) {
          setUser(res);
        }
      });
    }
  };

  const logout =() => {
    localStorage.clear()
    router.push('/login')
  } 

  useEffect(() => {
    !user && getUserDetail();
  });

  useEffect(() => {
    !listOfUsers && getUsers();
  });

  return (
    user && (
      <div className="container">
        <div className="row pt-4">
          <div className="col">
            <strong className="user-title">Welcome {user.firstName}</strong>
          </div>
          <div className="col-2 text-end">
            <a  onClick={logout}>Logout</a>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <UserCard user={user} />
          </div>
        </div>
        <div className="list-of-users">
          <div className="row">
            {listOfUsers &&
              listOfUsers.map((user, index) => (
                <div key={index} className="col-sm-12 col-md-6">
                  <UserCard user={user} />
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  );
};

export default UserDetails;
