import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
export default function AuthoRoute({ children }) {
  const { userInfo } = useSelector((state) => state?.users?.userAuth);
  if (!userInfo.token) {
    window.location.href = "/login";
    return null;
  }
  return <div>{children}</div>;
}
