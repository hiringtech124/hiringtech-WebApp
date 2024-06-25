import Abhi from "@/components/Expert/Abhi";
import Heroexpert from "@/components/Expert/Heroexpert";
import Shruti from "@/components/Expert/Shruti";
import React from "react";
import ExpertLayout from "./layout";

const page = () => {
  return (
    <>
      <ExpertLayout>
        <Heroexpert />
        {/* <Abhi />
      <Shruti /> */}
      </ExpertLayout>
    </>
  );
};

export default page;
