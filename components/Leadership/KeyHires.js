import Image from "next/image";

const KeyHires = () => {
  const teamMembers = [
    {
      name: "Cole Wu Seipel",
      title: "Head of Automation",
      image: "/images/Cole.jpg", // Replace with actual path
      description:
        "Cole Wu Seipel, Led a 7M dollars factory automation project.",
    },
    {
      name: "Melvin Liu",
      title: "Senior Mechanical Engineer",
      image: "/images/Melvin.jpeg", // No image for this member
      description:
        "Melvin Liu, 6 years of experience in mechanical design.",
    },
    {
      name: "Larry Huang",
      title: "Senior Software Engineer",
      image: "/images/Larry.jpg", // No image for this member
      description:
        "Larry Huang, an experienced cloud-native software engineer on building SaaS platform.",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center mt-10 mb-6">
        <h1 className="text-3xl font-bold md:text-6xl">Core Team Members</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 p-8 bg-white">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center w-80 h-80 rounded-3xl overflow-hidden bg-[#f7f7f7] p-8 text-center group"
          >
            {member.image && (
              <div className="w-64 h-64 rounded-3xl overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={256}
                  height={256}
                  className="object-cover"
                />
              </div>
            )}
            <h4 className="font-bold text-2xl">{member.name}</h4>
            <p className="text-indigo-600 text-lg">{member.title}</p>
            {/* Hover effect */}
            <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
              <p className="text-gray-700 text-2xl">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default KeyHires;
