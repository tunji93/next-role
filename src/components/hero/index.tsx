import React from "react";
// import styles from "./hero.module.scss"
import User from "../../assets/users.png";

export const Hero: React.FC = () => {
  return (
    <main
      style={{
        margin: "160px 40px 0 50px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "700px" }}>
        <h2
          style={{
            color: "#09074C",
            fontSize: "50px",
          }}
        >
          The Future of <br></br>
          <span
            style={{
              background: "-webkit-linear-gradient(#0084FF, #F75ED7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            hassle-free
          </span>{" "}
          recruitment
        </h2>
        <div
          style={{
            fontSize: "20px",
            fontFamily: "sans-serif",
          }}
        >
          Experience the power of artificial intelligence in redefining{" "}
          <br></br>
          how you apply to your dream role.
        </div>
        <div
          style={{
            fontSize: "20px",
            fontFamily: "sans-serif",
            marginTop: "40px",
          }}
        >
          Our system trims out the bloats in the recruitment by helping<br></br>{" "}
          you focus on only applications with poisitive feedbacks.
        </div>

        <div
          style={{
            display: "flex",
            width: "fit-content",
            marginTop: "60px",
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
              borderRadius: "5px",
              width: "150px",
              marginRight: "20px",
              fontFamily: "sans-serif",

              letterSpacing: "1px",
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
              background: "blue",
              color: "white",
              width: "150px",
              fontFamily: "sans-serif",

              letterSpacing: "1px",
            }}
          >
            Login
          </button>
        </div>
      </div>

      <div>
        <img src={User} style={{ height: "600px" }} alt="img" />
      </div>
    </main>
  );
};
