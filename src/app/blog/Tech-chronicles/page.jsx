import Techf from "@/components/bloginner/Techf";
import React from "react";
import Blog4Layout from "./layout";
import BlogContact from "@/components/bloginner/BlogContact";

const page = () => {
  return (
    <>
      <Blog4Layout>
        <Techf />
        <BlogContact />
      </Blog4Layout>
    </>
  );
};

export default page;
