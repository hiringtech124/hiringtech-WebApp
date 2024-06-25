import InHero from "@/components/Industries/InHero";
import Serve from "@/components/Industries/Serve";
import React from "react";
import IndustryLayout from "./layout";

const page = () => {
  return (
    <>
      <IndustryLayout>
        <InHero />
        <Serve />
      </IndustryLayout>
    </>
  );
};

export default page;
