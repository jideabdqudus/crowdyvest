import React, { useState } from "react";

import { Menu } from "antd";

import Logo from "../assets/crowdyvest-logo.svg";

const Header = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({ current: e.key });
  };

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="logo">
          <img src={Logo} alt="Logo" height="30" />
        </Menu.Item>
        <Menu.Item key="home" style={{ color: "#54AB68" }}>
          Home
        </Menu.Item>
        <Menu.Item key="save">Save</Menu.Item>
        <Menu.Item key="sponsor">Sponsor</Menu.Item>
        <Menu.Item key="faq">FAQs</Menu.Item>
        <Menu.Item key="sign">Sign In</Menu.Item>
        <Menu.Item
          key="create"
          style={{ fontSize: "16px", fontWeight: "bold" }}
        >
          Create a free account
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
