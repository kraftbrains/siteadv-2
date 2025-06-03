"use client";

import { useState } from "react";
import {
  FaBalanceScale,
  FaEye,
  FaHeart,
  FaGavel,
  FaUserTie,
  FaBuilding,
  FaUserShield,
  FaUsers,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navegação */}
      <header className="fixed top-0 left-0 w-full bg- backdrop-blur shadow z-50 flex justify-between items-center px-8 h-20 border-b-2 border-[#bfa46b]">
        <div className="flex flex-col justify-center h-full relative group">
          <span className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#bfa46b] via-[#fff2d6] to-[#bfa46b] animate-gradient-move drop-shadow-lg transition-all duration-500 group-hover:scale-105">
            Marina Fox
          </span>
          <span className="text-xs md:text-base font-bold text-white tracking-widest text-right w-full pr-1">
            Advogados
          </span>
        </div>
        {/* Menu Desktop */}
        <div className="flex items-center gap-4">
          <nav className="space-x-4 text-sm font-medium text-gray-400 hidden sm:inline">
            <a href="#sobre" className="hover:text-[#bfa46b] transition">
              Sobre
            </a>
            <a href="#areas" className="hover:text-[#bfa46b] transition">
              Áreas
            </a>
            <a href="#equipe" className="hover:text-[#bfa46b] transition">
              Equipe
            </a>
            <a href="#contato" className="hover:text-[#bfa46b] transition">
              Contato
            </a>
          </nav>
          <div className="items-center gap-2 ml-4 hidden sm:flex">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bfa46b] hover:text-[#a38c4e] transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bfa46b] hover:text-[#a38c4e] transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bfa46b] hover:text-[#a38c4e] transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
          {/* Botão menu mobile */}
          <button
            className="sm:hidden flex items-center text-[#bfa46b] ml-4"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <FaBars size={28} />
          </button>
        </div>
        {/* Menu Mobile Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay preto opaco cobrindo toda a tela */}
            <div
              className="absolute inset-0 bg-black opacity-100 transition-opacity duration-300"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
            />
            {/* Menu lateral */}
            <div className="relative bg-black rounded-r-lg p-8 flex flex-col items-center w-4/5 max-w-xs h-full shadow-lg animate-slideInLeft z-10">
              <button
                className="self-end mb-8 text-[#bfa46b]"
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <FaTimes size={28} />
              </button>
              <nav className="flex flex-col gap-6 text-lg font-medium w-full items-center bg-black rounded-md p-4">
                <a
                  href="#sobre"
                  className="text-[#bfa46b] hover:text-[#fff2d6] transition w-full text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Sobre
                </a>
                <a
                  href="#areas"
                  className="text-[#bfa46b] hover:text-[#fff2d6] transition w-full text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Áreas
                </a>
                <a
                  href="#equipe"
                  className="text-[#bfa46b] hover:text-[#fff2d6] transition w-full text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Equipe
                </a>
                <a
                  href="#contato"
                  className="text-[#bfa46b] hover:text-[#fff2d6] transition w-full text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Contato
                </a>
              </nav>
              <div className="flex gap-4 mt-8">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bfa46b] hover:text-[#fff2d6] transition"
                >
                  <FaInstagram size={22} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bfa46b] hover:text-[#fff2d6] transition"
                >
                  <FaFacebookF size={22} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bfa46b] hover:text-[#fff2d6] transition"
                >
                  <FaLinkedinIn size={22} />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[50vh] w-full mt-20 overflow-hidden p-0">
        <div className="absolute inset-0 w-full h-full -z-10 flex">
          <img
            src="/siteadv-2/law1.jpg"
            alt="Fundo escritório"
            className="w-full h-full object-cover object-top opacity-80"
          />
        </div>
        <div className="py-32 px-4 flex flex-col items-center text-center bg-black/60 rounded-xl max-w-2xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Marina Fox Advogados
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-white drop-shadow">
            Excelência, ética e compromisso com o seu direito.
          </p>
          <a
            href="#contato"
            className="bg-[#bfa46b] hover:bg-[#a38c4e] text-white font-semibold py-3 px-8 rounded-full transition shadow-lg"
          >
            Fale Conosco
          </a>
        </div>
      </section>

      {/* Sobre Section */}
      <section
        id="sobre"
        className="py-20 px-4 bg-white text-gray-900 flex flex-col items-center text-center relative"
      >
        <div className="absolute inset-0 -z-10 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
            alt="Sobre"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Sobre o Escritório
        </h2>
        <p className="max-w-2xl text-lg mb-6">
          O escritório Marina Fox Advogados atua com excelência, ética e
          dedicação, oferecendo soluções jurídicas personalizadas para cada
          cliente. Nossa equipe é formada por profissionais experientes e
          comprometidos com a defesa dos seus direitos. Atendemos presencialmente
          e online, com foco em resultados e atendimento humanizado.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="flex flex-col items-center">
            <FaBalanceScale size={60} className="text-[#bfa46b]" />
            <h3 className="font-semibold mt-2">Missão</h3>
            <p className="text-sm max-w-xs">
              Defender os interesses dos clientes com ética, transparência e
              excelência técnica.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaEye size={60} className="text-[#bfa46b]" />
            <h3 className="font-semibold mt-2">Visão</h3>
            <p className="text-sm max-w-xs">
              Ser referência em advocacia personalizada e inovadora no Brasil.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaHeart size={60} className="text-[#bfa46b]" />
            <h3 className="font-semibold mt-2">Valores</h3>
            <p className="text-sm max-w-xs">
              Ética, respeito, comprometimento, inovação e empatia.
            </p>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section
        id="areas"
        className="py-20 px-4 bg-gray-50 text-gray-900 flex flex-col items-center text-center relative"
      >
        <div className="absolute inset-0 -z-10 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80"
            alt="Áreas"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Áreas de Atuação
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <FaGavel size={48} className="text-[#bfa46b]" />
            <h3 className="text-xl font-semibold mb-2 mt-2">Direito Civil</h3>
            <p className="text-gray-700">
              Contratos, responsabilidade civil, família e sucessões.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <FaUserTie size={48} className="text-[#bfa46b]" />
            <h3 className="text-xl font-semibold mb-2 mt-2">
              Direito Trabalhista
            </h3>
            <p className="text-gray-700">
              Defesa dos direitos de trabalhadores e empregadores.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <FaBuilding size={48} className="text-[#bfa46b]" />
            <h3 className="text-xl font-semibold mb-2 mt-2">
              Direito Empresarial
            </h3>
            <p className="text-gray-700">
              Consultoria e assessoria para empresas de todos os portes.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <FaUserShield size={48} className="text-[#bfa46b]" />
            <h3 className="text-xl font-semibold mb-2 mt-2">
              Direito Previdenciário
            </h3>
            <p className="text-gray-700">
              Aposentadorias, pensões e benefícios do INSS.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <FaUsers size={48} className="text-[#bfa46b]" />
            <h3 className="text-xl font-semibold mb-2 mt-2">
              Direito do Consumidor
            </h3>
            <p className="text-gray-700">
              Proteção e defesa dos direitos do consumidor.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <FaBalanceScale size={48} className="text-[#bfa46b]" />
            <h3 className="text-xl font-semibold mb-2 mt-2">Outras Áreas</h3>
            <p className="text-gray-700">
              Atuação em diversas áreas do Direito, consulte-nos.
            </p>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section
        id="equipe"
        className="py-20 px-4 bg-white text-gray-900 flex flex-col items-center text-center relative"
      >
        <div className="absolute inset-0 -z-10 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
            alt="Equipe"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Nossa Equipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          <div className="bg-gray-50 rounded-lg shadow-lg p-8 flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Dra. Marina Fox"
              width={96}
              height={96}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">Dra. Marina Fox</h3>
            <p className="text-[#bfa46b] font-medium mb-2">OAB/SP 123456</p>
            <p className="text-gray-700 text-sm">
              Especialista em Direito Civil e Empresarial. Fundadora do
              escritório.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-lg p-8 flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Dr. João Silva"
              width={96}
              height={96}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">Dr. João Silva</h3>
            <p className="text-[#bfa46b] font-medium mb-2">OAB/SP 654321</p>
            <p className="text-gray-700 text-sm">
              Atuação em Direito Trabalhista e Previdenciário.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-lg p-8 flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Dra. Maria Souza"
              width={96}
              height={96}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">Dra. Maria Souza</h3>
            <p className="text-[#bfa46b] font-medium mb-2">OAB/SP 789012</p>
            <p className="text-gray-700 text-sm">
              Especialista em Direito do Consumidor e Família.
            </p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="py-20 px-4 bg-gray-50 text-gray-900 flex flex-col items-center text-center relative"
      >
        <div className="absolute inset-0 -z-10 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=1200&q=80"
            alt="Contato"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Fale Conosco</h2>
        <p className="max-w-xl mb-8 text-lg">
          Entre em contato para agendar uma consulta ou tirar dúvidas.
          Atendimento presencial e online.
        </p>
        <form className="bg-white rounded-lg shadow-lg p-8 flex flex-col gap-4 max-w-md w-full mx-auto">
          <input
            type="text"
            placeholder="Nome"
            className="border rounded px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            className="border rounded px-4 py-2"
            required
          />
          <textarea
            placeholder="Mensagem"
            className="border rounded px-4 py-2"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-[#bfa46b] hover:bg-[#a38c4e] text-white font-semibold py-3 px-8 rounded-full transition shadow-lg"
          >
            Enviar
          </button>
        </form>
        <div className="mt-8 text-gray-700">
          <p>
            <strong>Endereço:</strong> Av. Exemplo, 123 - Centro, São Paulo/SP
          </p>
          <p>
            <strong>Telefone:</strong> (11) 99999-9999
          </p>
          <p>
            <strong>E-mail:</strong> contato@laramartinsadvogados.com.br
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-700 py-6 text-center mt-auto shadow-inner relative">
        <p>
          &copy; {new Date().getFullYear()} Marina Fox Advogados. Todos os
          direitos reservados.
        </p>
      </footer>

      {/* WhatsApp Fixo quadrado com border radius discreto */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#618200] rounded-md p-3 shadow-lg hover:bg-[#1ebe57] transition"
        aria-label="Fale conosco no WhatsApp"
      >
        <FaWhatsapp size={32} className="text-white" />
      </a>
    </div>
  );
}

