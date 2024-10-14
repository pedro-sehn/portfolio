import mailImg from "./assets/mail.svg";
import githubImg from "./assets/github.svg";
import linkedinImg from "./assets/linkedin.svg";

function App() {
  return (
    <>
      <div className=" bg-slate-800 text-zinc-50 h-screen flex flex-col items-center justify-center">
        <div className=" transition-all">
          <a href="#">
            <h1 className=" text-4xl">Pedro Sehn</h1>
            <h2 className=" text-sky-400">Desenvolvedor fullstack</h2>
          </a>
        </div>
        <div className="mt-8">
          <ul className=" bg-sky-500 py-2 px-3 rounded-xl flex">
            <li className=" mx-4">
              <a href="mailto:pedroarthursehn@gmail.com">
              <img className=" w-12 h-12 rounded-md hover:scale-110 transition-transform" src={mailImg} alt="E-mail" />
              </a>
            </li>
            <li className=" mx-4">
              <a href="https://github.com/pedro-sehn">
              <img className=" w-12 h-12 rounded-md hover:scale-110 transition-transform" src={githubImg} alt="Github" />
              </a>
            </li>
            <li className=" mx-4">
              <a href="https://www.linkedin.com/in/pedro-sehn-546848264/">
              <img className=" w-12 h-12 rounded-md hover:scale-110 transition-transform" src={linkedinImg} alt="Linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
