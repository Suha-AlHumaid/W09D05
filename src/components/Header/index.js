import React ,{ useEffect}from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Header = ({check}) => {
  useEffect(() => {
    check()
  }, [])
  return (
    <div className="flexRow stk">
      <div className="fixedheader">
        <Link to="/" className="logo">πΌππππΆπππΆππΎ</Link>
      </div>
    </div>
  );
};

export default Header;
