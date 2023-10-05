import React from "react";
// import styles from "./header.module.scss";
import Logo from "../../assets/logo.png";
// import { Button } from "../button";
// className={styles.header}

export const Header: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "70px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "43%",
        }}
      >
        <a href="#" target="_blank" style={{ display: "block" }}>
          <img
            height={"80px"}
            src={Logo}
            className="logo"
            alt="NextRole logo"
          />
        </a>

        <nav>
          <a
            href="#"
            style={{
              margin: "0 40px 0 5px",
              color: "#09074C",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
            }}
          >
            Jobs
          </a>
          <a
            href="#"
            style={{
                margin: "0 40px 0 5px",
                color: "#09074C",
                fontFamily: "sans-serif",
                letterSpacing: "1px",
               
            }}
          >
            About
          </a>
          <a
            href="#"
            style={{
                margin: "0 40px 0 5px",
                color: "#09074C",
                fontFamily: "sans-serif",
                letterSpacing: "1px",
                
            }}
          >
            Products
          </a>
          <a
            href="#"
            style={{
                margin: "0 40px 0 5px",
                color: "#09074C",
                fontFamily: "sans-serif",
            
            }}
          >
            Contact
          </a>
        </nav>
      </div>

      <div
        style={{
          display: "flex",
          width: "fit-content",
        }}
      >
        {/* <Button label={"Try Demo Login"}/>
        <Button label={"Login"}/> */}
        <button
          style={{
            padding: "2px 5px",
            height: "40px",
            border: "1px solid",
            borderImageSource: "linear-gradient(to left, #F75ED7, #0084FF)",
            background: "white",
            borderImageSlice: "1",
            letterSpacing: "1px",
            borderRadius: "5px",
            fontFamily: "sans-serif",
            width: "150px",
            marginRight: "20px",
          }}
        >
          Try Demo Login
        </button>
        <button
          style={{
            height: "40px",
            padding: "5px 10px",
            border: "1px solid blue",
            borderRadius: "5px",
            fontFamily: "sans-serif",
            background: "blue",
            letterSpacing: "1px",
            color: "white",
            width: "150px",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};
