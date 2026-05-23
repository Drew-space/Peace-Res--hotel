import React from "react";

const About = () => {
  const stats = [
    {
      number: "98%",
      plus: "+",
      title: "Positive Feedback",
      description:
        "Over 98% positive feedback from satisfied guests, reflecting our commitment to exceptional service and memorable stays.",
    },
    {
      number: "15",
      plus: "+",
      title: "Years of Expertise",
      description:
        "Backed by 15 years of industry expertise, we turn every stay into a seamless experience",
    },
    {
      number: "25K",
      plus: "+",
      title: "Happy Clients",
      description:
        "Proudly serving 25K+ happy travelers who’ve trusted us to find their perfect stay.",
    },
  ];
  return (
    <section className="w-full pb-20">
      <div className="mx-auto container pt-10">
        <div className="flex items-start justify-between w-full">
          <div className="flex mb-2 items-center gap-1.5">
            <div className="w-3 h-3 rounded-full ring ring-black flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-black" />
            </div>
            <h1 className="mb">ABOUT US</h1>
          </div>
          <p className="max-w-2xl ">
            <span className="pl-8">Since</span> 2016, we&lsquo;ve been helping
            travelers find, stay, they love effortlessly. We are about curating
            unforgettable journeys since 2016. Our passionate team have been
            helping travelers find the perfect stay, blending seamless
            technology with a love for discovery. From cozy hideaways to grand
            escapes, we turn your travel dreams into real-world ventures.
          </p>
        </div>

        <div className="flex mt-4 flex-col items-start justify-between w-full">
          <div className="flex mb-2 items-center gap-1.5">
            <div className="w-3 h-3 rounded-full ring ring-black flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-black" />
            </div>
            <h1 className="mb">BY THE NUMBER</h1>
          </div>
          <div className="grid grid-cols-3 gap-2 ">
            {stats.map((stat, index) => (
              <div key={index}>
                <StatsCard {...stat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

type StatsCardProps = {
  number: string;
  plus: string;
  title: string;
  description: string;
};

function StatsCard({ number, plus, title, description }: StatsCardProps) {
  return (
    <div className="h-[250px] w-[330px] px-6 bg-[#f7f7f5] rounded-lg flex flex-col justify-center">
      <div className="text-left">
        {/* Number section */}
        <div className="text-7xl flex items-center font-bold leading-none">
          <h1>{number}</h1>
          <span className="text-5xl text-[#d1b478] ml-1">{plus}</span>
        </div>

        {/* spacing between number and text */}
        <div className="pt-7">
          <div className="font-semibold">{title}</div>
          <p className="text-xs mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}
