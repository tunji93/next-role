import React from "react";
import Chart from "../../assets/chart.png";
import Profiles from "../../assets/profiles.png";
export const HIworks: React.FC = () => {
  return (
    <section
      style={{
        marginTop: "150px",
        margin: "20px 45px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          color: "#09074C",
          fontSize: "50px",
        }}
      >
        How it works
      </h2>
      <div
        style={{
          marginBottom: "30px",
          width: "69%",
          fontFamily: "sans-serif",
          fontSize: "17px"
        }}
      >
        On nextrole you can automatically apply for roles matching your profile
        depending on your permission and settings.
        <br></br>you have full control of the process
      </div>
      <div
        style={{
          marginBottom: "30px",
          width: "69%",
          fontFamily: "sans-serif",
          fontSize: "17px"
        }}
      >
        Once you set up your account and confirm necessary details(as populated
        by your resume/cv), you can set the roles
        <br></br>you want to apply to, and the system takes care of the rest.
      </div>
      <div
        style={{
          marginBottom: "30px",
          width: "69%",
          fontFamily: "sans-serif",
          fontSize: "17px"
        }}
      >
        You only get messeges once you progress to the next stage. we understand
        how draining rejections can be,so the system
        <br></br>automatically discards unsuccessful application
      </div>
      <div className="">
        <img
          style={{ zIndex: 1, translate: "35px 0" }}
          height={350}
          src={Chart}
          alt="chart"
        />
        <img
          style={{ zIndex: -199, translate: "-35px -20px" }}
          height={350}
          src={Profiles}
          alt="chart"
        />
      </div>
    </section>
  );
};
