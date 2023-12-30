import React, { useEffect } from "react";
import AccountList from "./AccountList";
import AccountSummary from "./AccountSummary";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../redux/slice/users/usersSlice";
const MainDashBoard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);
  const { profile, error, loading } = useSelector((state) => state.users);
  console.log("user", profile);
  return (
    <>
      {loading ? (
        <h2 className="text-center text-green-500 text-lg mt-5">Loading...</h2>
      ) : error ? (
        <h2 className="text-red-600 text-center mt-5 text-lg">Error...</h2>
      ) : (
        <>
          <AccountSummary profile={profile} />
          <AccountList profile={profile} />
        </>
      )}
    </>
  );
};

export default MainDashBoard;
