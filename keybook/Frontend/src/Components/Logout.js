import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBell,
  faUser,
  faCog,
  faInfinity,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
const Logout = () => {
  const logout = () => {
    localStorage.removeItem("userId");
    alert("Ha cerrado sesión. Volviendo a página de inicio");
    window.location.href = "formLogin.html";
  };
  <FontAwesomeIcon
    icon={faSignOutAlt}
    className="icon"
    title="Desconectarse"
    onClick={logout}
  />;
  return (
    <FontAwesomeIcon
      icon={faSignOutAlt}
      className="icon"
      title="Desconectarse"
      onClick={logout}
    />
  );
};
export default Logout;
