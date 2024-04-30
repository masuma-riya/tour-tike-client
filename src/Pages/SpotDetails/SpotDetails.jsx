import { useLoaderData } from "react-router-dom";

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
                    <img className="w-full h-[450px] object-cover" src={details.img}  />
                  </div>
                </article>
              </div>
            </div>
            <div className="p-6 bg-grey">
              <div className="leading-relaxed">
                <h2 className="leading-tight text-4xl font-bold">{details.country}</h2>
                <p className="mt-4">{details.description}</p>
                
               
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    );
};

export default SpotDetails;