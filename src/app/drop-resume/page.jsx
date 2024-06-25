import MyFormComponent from "@/components/resume-drop/MyFormComponent";
import Resume from "@/components/resume-drop/Resume";
import React from "react";
import ResumeLayout from "./layout";

const page = () => {
  return (
    <>
      <ResumeLayout>
        {/* <Resume /> */}
        <MyFormComponent />
      </ResumeLayout>
    </>
  );
};

export default page;
