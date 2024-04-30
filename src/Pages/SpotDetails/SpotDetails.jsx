import { useLoaderData } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { PiMoneyLight } from "react-icons/pi";
import { MdOutlineSentimentVerySatisfied } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";

const SpotDetails = () => {
    const details = useLoaderData();
    return (
      <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
      {/* Themes: blue, purple and teal */}
      <div data-theme="teal" className="mx-auto max-w-6xl">
        <h2 className="sr-only">Featured case study</h2>
        <section className="font-sans text-black">
          <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
            <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
              <div className="h-full">
                <article className="h-full">
                  <div className="h-full">
                    <img className="w-full h-[350px] object-cover" src={details.img}  />
                  </div>
                </article>
              </div>
            </div>
            <div className="p-6 bg-grey">
              <div className="leading-relaxed">

                <h2 className="leading-tight text-4xl font-bold">{details.country}</h2>

                <h2 className="leading-tight text-2xl mt-2 text-gray-600 font-semibold">{details.spotName}</h2>

                <div className="flex gap-1 mt-4 mb-2 justify-center">
  <SlLocationPin className="text-2xl text-red-600"></SlLocationPin>
  <p className="text-xl">{details.location}</p>
 </div>

 <div className="flex justify-around">
 <div className="flex gap-2 mt-4 mb-2">
  <PiMoneyLight className="text-2xl text-green-600"></PiMoneyLight>
  <p className="text-xl">{details.cost} Thousands</p>
 </div>

 <div className="flex gap-2 mt-4 mb-2">
  <CiCircleList className="text-2xl text-black"></CiCircleList>
  <p className="text-xl">{details.visitors}M</p>
 </div>
 </div>

 <div className="flex justify-around">
 <div className="flex gap-2 mt-4 mb-2">
  <MdOutlineSentimentVerySatisfied className="text-2xl text-yellow-600"></MdOutlineSentimentVerySatisfied>
  <p className="text-xl">{details.season}</p>
 </div>
 <div className="flex gap-2 mt-4 mb-2">
  <MdAccessTime className="text-2xl text-slate-800"></MdAccessTime>
  <p className="text-xl">{details.travelTime} Days</p>
 </div>
 </div>

                <p className="mt-4 italic text-slate-600">{details.description}</p>
                
               
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    );
};

export default SpotDetails;