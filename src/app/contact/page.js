import ContactHero from "@/components/Contactpage/ContactHero";
import Contactf from "@/components/Contactpage/Contactf";
import React from "react";
import ContactLayout from "./layout";

const page = () => {
  return (
    <>
      <ContactLayout>
        <Contactf />
        <ContactHero />
      </ContactLayout>
    </>
  );
};

export default page;
