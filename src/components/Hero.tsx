"use client";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center space-y-6 bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4">
      <div className="flex flex-col items-center space-y-4">
        <img
          src="/images/profile.jpg"
          alt="Foto de Silvio Batista"
          className="w-32 h-32 rounded-full shadow-lg border-4 border-white object-cover animate-fade-in"
        />
        <h1 className="text-2xl uppercase font-semibold tracking-widest animate-fade-in-slow">
          Olá, meu nome é
        </h1>
        <h2 className="text-5xl font-bold text-blue-800 animate-gradient-text bg-gradient-to-r from-blue-800 via-blue-400 to-blue-800 bg-clip-text text-transparent">
          Silvio Batista
        </h2>
        <span className="text-base text-blue-600 font-medium animate-fade-in-slow">
          Desenvolvedor Web FullStack &bull; Belém, Pa
        </span>
        <p className="text-lg text-gray-700 max-w-md animate-fade-in">
          Sou desenvolvedor web apaixonado por tecnologia e aprendizado
          contínuo. Trabalho principalmente com back-end usando TypeScript,
          Laravel, PHP e bancos de dados, mas também gosto de criar interfaces
          modernas com React e Next.js. Estou sempre buscando novos desafios
          para evoluir e entregar soluções de qualidade.
        </p>
        <div className="flex space-x-4 justify-center animate-fade-in">
          <a
            href="https://github.com/Silvio-Batista"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-600 text-2xl transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/silviobatista"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-600 text-2xl transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
        <button
          onClick={() => scrollToSection("projects")}
          className="mt-6 bg-blue-800 px-8 py-3 rounded-full text-white font-semibold flex items-center gap-2 hover:bg-blue-700 transition duration-300 shadow-lg animate-bounce"
        >
          Conheça meu trabalho <FaArrowDown className="animate-bounce-slow" />
        </button>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in;
        }
        .animate-fade-in-slow {
          animation: fade-in 1.8s ease-in;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 1.5s infinite;
        }
        @keyframes gradient-text {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s linear infinite alternate;
        }
        @media (max-width: 640px) {
          h2 {
            font-size: 2.2rem;
          }
          img {
            width: 96px;
            height: 96px;
          }
        }
      `}</style>
    </section>
  );
}
