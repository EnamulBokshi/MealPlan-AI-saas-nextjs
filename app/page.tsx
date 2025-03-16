import PrimaryNav from "@/components/navs/PrimaryNav";
import Image from "next/image";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdSettingsSuggest } from "react-icons/md";
import { BsFillSignRailroadFill } from "react-icons/bs";
import { ArrowBigRight } from "lucide-react";
export default function Home() {
  return (
    <>
      <main>
        {/* <PrimaryNav /> */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">

            <div className="flex items-center justify-center">
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-gray-900">Welcome to MealPlanner AI</h1>
                <p className="mt-4 text-gray-600 text-center">The best place to find the best logo for your business</p>
                <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">Get Started</button>
              </div>
            </div>
            <div>
              {/* <Image src="/logo.svg" alt="logo" width={500} height={500} /> */}

            </div>
          </div>
        </section>
        <section className="py-10 container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <h1 className="text-3xl font-bold "> User Manuals </h1>
            <p className="">Follow these simple steps to get you personalized meal plan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-green-200 p-6 relative  space-y-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center">
                <span className="absolute top-0 left-0  p-5 "> <ArrowBigRight className="inline text-purple-600"  size={50}/> Step 1</span>
                <BsFillSignRailroadFill size={50} color="green" />                
                <h3>Sign-up</h3>
                <p>Sign up for an account</p>
              </div>
              <div className="bg-green-300 p-6 space-y-3  relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center">
              <span className="absolute top-0 left-0  p-5 "> <ArrowBigRight className="inline text-purple-600"  size={50}/> Step 2</span>
                
                <MdSettingsSuggest size={50} color="green" />
                <h3>Set Preferences</h3>
                <p>Fill in your details and input your preferences</p>
                </div>
                <div className="bg-green-400  space-y-3 p-6 relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center">
                <span className="absolute top-0 left-0  p-5 "> <ArrowBigRight className="inline text-purple-600"  size={50}/> Step 3</span>
                  
                  <IoCheckmarkDoneCircleSharp size={50} color="green" />
                <h3>Get the Result</h3>
                <p>Get your personalized meal plan</p>
                </div>
          </div>
        </section>
      </main>
    </>
  );
}
