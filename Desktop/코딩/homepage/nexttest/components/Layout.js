import React from "react";
import PropTypes from "prop-types";
import Link from "next/Link";
import AppNavbar from "./AppNavbar";

export default function Layout({ children }) {
  return (
    <div>
      <AppNavbar />
      <div>{children}</div>
    </div>
  );
}

AppLayout.PropTypes = {
  children: PropTypes.node.isRequired,
};

//아무튼 이 AppLayout에다가 전역적인 AppNavbar같은걸 넣어주는건 확실한데
// 뭘 어떻게 넣어야 하는건지 아직 감이 잡히지 않음... - 이상 11.2일자 고민
