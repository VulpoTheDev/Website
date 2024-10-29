import Image from "next/image";

const certificates: { name: string, img: string }[] = [{
  name: "CompTIA ITF+",
  img: "/certificates/comptiaitf.png"
}, {
  name: "CIW Javascript Specialist",
  img: "/certificates/ciwjavascript.png"
}, {
  name: "CIW Advanced HTML5 & CSS3 Specialist",
  img: "/certificates/ciwhtml.jpg"
}]

const workExp: { name: string, img: string, startYear: string, endYear: string, position: string }[] = [{
  name: "Black Rifle Coffee Company",
  img: "/work/brcc.png",
  startYear: "2023",
  endYear: "Present",
  position: "Retail Associate"
}, {
  name: "Coffee Beanery",
  img: "/work/cbean.png",
  startYear: "2022",
  endYear: "2023",
  position: "Barista"
}]

export default function Home() {
  return (
    <div>
      <nav className="flex flex-row w-full py-3 px-8 justify-between">
        <h1 className="text-3xl font-bold">Jason Diaz Jimenez</h1>
        <div className="flex flex-row items-center gap-x-12 font-bold">
          <p>Home</p>
          <p>About</p>
          <p>Blogs</p>
          <p>Projects</p>
          <button className="p-2 bg-slate-800 rounded py-2 px-4">Resume</button>
        </div>
      </nav>
      <section className="flex flex-col items-center justify-center text-center py-32">
        <img src="/jason.jpeg" alt="Picture of Jason holding a dog" className="w-1/5 h-1/5 rounded" />
        <div className="my-4">
          <h1 className="text-5xl font-bold">Jason Diaz Jimenez</h1>
          <p className="text-2xl">University Student, Software Engineer & Cybersecurity</p>
          <div className="flex-row flex gap-x-4 my-3 items-center justify-center">
            <button className="py-2 px-4 text-xl bg-gray-900 rounded">Projects</button>
            <button className="py-2 px-4 text-xl bg-gray-900 rounded">Contact</button>
          </div>
        </div>
      </section>
      <section className="py-52 px-32 flex flex-col">
        <h2 className="text-4xl font-bold text-center mb-12">About me</h2>
        <div className="flex flex-row justify-evenly">
          <p className="text-2xl w-1/2">My name is Jason Diaz Jimenez. I'm a student at Western Governor University studing for my Bachelors Degree in Software Engineering and Masters Degree in Cybersecurity.</p>
          <div className="w-1/3 flex flex-col text-center gap-y-5">
            <div className="p-4 border-white border ">
              <h3 className="text-2xl font-bold">Certificates</h3>
              <div className="flex flex-row flex-wrap gap-x-3 mt-3">
                {certificates.map((cert, index) => (
                  <img className="w-1/4" src={cert.img} alt={cert.name} key={index} />
                ))}

              </div>
            </div>
            <div className="p-4 border-white border-2 rounded">
              <h3 className="text-2xl font-bold">Work Experience</h3>
              <div className="flex flex-col gap-3 mt-3">
                {workExp.map((work, index) => (
                  <div className="flex flex-row gap-x-3" key={index}>
                    <img className="w-1/6 border-white border bg-white rounded-full" src={work.img} alt={work.name} />
                    <div className="flex flex-col text-start gap-y-1">
                      <p className="text-lg font-bold">{work.name}</p>
                      <p>{work.position}</p>
                      {work.startYear}-{work.endYear}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
