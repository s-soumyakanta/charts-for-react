import Link from "next/link";

const page = () => {
  const chartPageLinks = [
    {
      id: 1,
      name: "ApexChart - React",
      link: "/apexchart",
    }
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-1 mt-2 p-4">
        {chartPageLinks.map(({ id, name, link }) => {
          return (
            <div key={id} className="inline-block p-4 rounded-md bg-slate-900 text-center space-y-3">
              <div>
                <h2 className="text-lg">{name}</h2>
              </div>
              <div>
                <Link href={link}>
                  <button className="bg-slate-200 text-black px-3 py-1 rounded-md font-semibold">Explore</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
