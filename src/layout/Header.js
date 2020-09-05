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
        <Menu.Item key="logo" style={navStyle}>
          <img src={Logo} alt="Logo" height="30" />
        </Menu.Item>
        <Menu.Item key="home" style={myStyle}>
          Home
        </Menu.Item>
        <Menu.Item key="save" style={myStyle}>
          Save
        </Menu.Item>
        <Menu.Item key="sponsor" style={myStyle}>
          Sponsor
        </Menu.Item>
        <Menu.Item key="faq" style={myStyle}>
          FAQs
        </Menu.Item>
        <Menu.Item key="sign" style={{ color: "54ab68", float: "right" }}>
          Sign In
        </Menu.Item>
        <Menu.Item
          key="create"
          style={{ fontSize: "16px", fontWeight: "bold", float: "right" }}
        >
          Create a free account
        </Menu.Item>
      </Menu>
    </div>
  );
};

const myStyle = {
  color: "#54ab68",
};

const navStyle={
  paddingRight: "15px !important",
  paddingLeft: "15px!important",
  marginRight: "auto!important",
  marginLeft: "auto!important",
}

export default Header;
