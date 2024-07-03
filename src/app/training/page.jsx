// import React from "react";
// import {
//   CardHeader,
//   CardContent,
//   CardFooter,
//   Card,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
/**
 * v0 by Vercel.
//  * @see https://v0.dev/t/2RKma4mXDYG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Choose from '@/components/trainingpage/Choose';
import Chose from '@/components/trainingpage/Chose';
import Meeting from '@/components/trainingpage/Meeting';
import Trainig from '@/components/trainingpage/Trainig';
import TrainingHero from '@/components/trainingpage/TrainingHero';
import TrainingLayout from './layout';
import Courses from '@/components/trainingpage/Courses';
import AllCourses from '@/components/trainingpage/allCourses';
import Enjoyable from '@/components/trainingpage/Enjoyable';
import Herotrain from '@/components/trainingpage/Herotrain';
import Choose2 from '@/components/trainingpage/Choose2';
import Institute from '@/components/trainingpage/Institute';
import Testimonials from '@/components/homepage/Testimonials';
import Review from '@/components/placementPage/reviews/Review';


// export default function Component() {
//   return (

const Page = () => {
  return (
    <>
      <TrainingLayout>
        <div className='max-w-8xl mx-auto'>
          {/* <TrainingHero /> */}
          <Herotrain />
          {/* <Choose /> */}
          {/* <Courses /> */}
          <AllCourses />
          <Choose2 />
          <Institute />
          <Testimonials />
          {/* <Enjoyable /> */}
          <Review />
        </div>
      </TrainingLayout>
    </>
  );
};

export default Page;

