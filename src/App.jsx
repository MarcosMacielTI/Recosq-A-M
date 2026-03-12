import React, { useState, useEffect } from 'react';
import { Heart, ArrowRight, Camera, Sparkles, MessageCircleHeart } from 'lucide-react';

export default function App() {
  const [step, setStep] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: null, y: null });
  const [isHoveringNo, setIsHoveringNo] = useState(false);

  // Textos e imagens (COLOQUE AS IMAGENS JPG NA PASTA: public/images/)
  const memories = [
    // ===== 2024: COMEÇO DA HISTÓRIA =====
    {
      id: 1,
      year: 2024,
      text: "Tudo começou quando você entrou na minha vida...",
      img: "/images/2024-01.png",
      rotation: "-rotate-3"
    },
    {
      id: 2,
      year: 2024,
      text: "Aquele primeiro sorriso que me fez perder a cabeça.",
      img: "/images/2024-02.png",
      rotation: "rotate-2"
    },
    {
      id: 3,
      year: 2024,
      text: "Lembra de como a gente sorria à toa?",
      img: "/images/2024-03.jpg",
      rotation: "-rotate-1"
    },
    {
      id: 4,
      year: 2024,
      text: "Conversas que duravam até o amanhecer.",
      img: "/images/2024-04.png",
      rotation: "rotate-3"
    },
    {
      id: 5,
      year: 2024,
      text: "Aquele abraço que foi o melhor de todos.",
      img: "/images/2024-05.png",
      rotation: "-rotate-2"
    },
    {
      id: 6,
      year: 2024,
      text: "Vocês ficam lindos juntos... disso todo mundo falava.",
      img: "/images/2024-06.png",
      rotation: "rotate-1"
    },
    {
      id: 7,
      year: 2024,
      text: "Aquele passeio que foi perfeito demais pra ser real.",
      img: "/images/2024-07.png",
      rotation: "-rotate-1"
    },
    {
      id: 8,
      year: 2024,
      text: "Seus olhos brilhando quando você me viu.",
      img: "/images/2024-08.png",
      rotation: "rotate-2"
    },
    {
      id: 9,
      year: 2024,
      text: "Risos que ecoavam por todos os lugares onde a gente ia.",
      img: "/images/2024-09.png",
      rotation: "-rotate-3"
    },
    {
      id: 10,
      year: 2024,
      text: "O moment em que soube que você era diferente de todos.",
      img: "/images/2024-10.png",
      rotation: "rotate-1"
    },
    // ===== 2025: CRESCIMENTO =====
    {
      id: 11,
      year: 2025,
      text: "Você se tornou meu melhor amigo nesse ano.",
      img: "/images/2025-01.jpg",
      rotation: "-rotate-2"
    },
    {
      id: 12,
      year: 2025,
      text: "Nossos segredos compartilhados só de vocês dois sabem.",
      img: "/images/2025-02.jpg",
      rotation: "rotate-3"
    },
    {
      id: 13,
      year: 2025,
      text: "Playlist especial que a gente criou juntos.",
      img: "/images/2025-03.jpg",
      rotation: "-rotate-1"
    },
    {
      id: 14,
      year: 2025,
      text: "Você cuidando de mim quando eu estava mal.",
      img: "/images/2025-04.jpg",
      rotation: "rotate-2"
    },
    {
      id: 15,
      year: 2025,
      text: "Aquele passeio que a gente fez e não quereria voltar.",
      img: "/images/2025-05.jpg",
      rotation: "-rotate-2"
    },
    {
      id: 16,
      year: 2025,
      text: "Momentos que viraram nossas piadas internas.",
      img: "/images/2025-06.jpg",
      rotation: "rotate-1"
    },
    {
      id: 17,
      year: 2025,
      text: "Você me fazendo ver a vida com outros olhos.",
      img: "/images/2025-07.jpg",
      rotation: "-rotate-3"
    },
    {
      id: 18,
      year: 2025,
      text: "Aquele dia especial que completa nosso ano juntos.",
      img: "/images/2025-08.jpg",
      rotation: "rotate-2"
    },
    {
      id: 19,
      year: 2025,
      text: "Você sempre ali, nos melhores e piores momentos.",
      img: "/images/2025-09.jpg",
      rotation: "-rotate-1"
    },
    {
      id: 20,
      year: 2025,
      text: "O ano em que você virou meu tudo.",
      img: "/images/2025-10.jpg",
      rotation: "rotate-3"
    },
    // ===== 2026: PRESENTE =====
    {
      id: 21,
      year: 2026,
      text: "Sinceramente? Eu sinto falta de cada detalhe seu.",
      img: "/images/2026-01.jpg",
      rotation: "-rotate-1"
    },
    {
      id: 22,
      year: 2026,
      text: "Aquele último abraço que não devia ter terminado.",
      img: "/images/2026-02.jpg",
      rotation: "rotate-2"
    },
    {
      id: 23,
      year: 2026,
      text: "Dos nossos momentos que pareciam cenas de filme...",
      img: "/images/2026-03.jpg",
      rotation: "-rotate-2"
    },
    {
      id: 24,
      year: 2026,
      text: "Você me ensinando que o amor é vulnerabilidade.",
      img: "/images/2026-04.jpg",
      rotation: "rotate-1"
    },
    {
      id: 25,
      year: 2026,
      text: "Cada detalhe seu ocupando espaço permanente no meu coração.",
      img: "/images/2026-05.jpg",
      rotation: "-rotate-3"
    },
    {
      id: 26,
      year: 2026,
      text: "Você é a pessoa que eu queria ser quando crescer.",
      img: "/images/2026-06.jpg",
      rotation: "rotate-2"
    },
    {
      id: 27,
      year: 2026,
      text: "Aquele pôr do sol que ficará pra sempre na memória.",
      img: "/images/2026-07.jpg",
      rotation: "-rotate-1"
    },
    {
      id: 28,
      year: 2026,
      text: "O silêncio confortável que só a gente entendia.",
      img: "/images/2026-08.jpg",
      rotation: "rotate-3"
    },
    {
      id: 29,
      year: 2026,
      text: "Você deixou muitas pegadas no meu caminho.",
      img: "/images/2026-09.jpg",
      rotation: "-rotate-2"
    },
    {
      id: 30,
      year: 2026,
      text: "E mesmo tudo diferente agora, nada disso desaparece.",
      img: "/images/2026-10.jpg",
      rotation: "rotate-1"
    }
  ];

  // Função para fazer o botão "Não" fugir
  const moveNoButton = () => {
    const maxX = window.innerWidth - 100; // largura da tela menos o botão
    const maxY = window.innerHeight - 50; // altura da tela menos o botão
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    setNoPosition({ x: randomX, y: randomY });
    setIsHoveringNo(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-purple-100 flex flex-col items-center justify-center p-4 font-sans text-gray-800 overflow-hidden relative">
      
      {/* DECORAÇÃO DE FUNDO */}
      <div className="absolute top-10 left-10 text-pink-300 opacity-50 animate-pulse"><Heart size={40} /></div>
      <div className="absolute bottom-20 right-10 text-red-300 opacity-50 animate-bounce"><Heart size={30} /></div>
      <div className="absolute top-40 right-20 text-purple-300 opacity-50"><Sparkles size={25} /></div>

      {/* PASSO 0: INÍCIO */}
      {step === 0 && (
        <div className="text-center animate-fade-in flex flex-col items-center max-w-md bg-white/60 p-8 rounded-3xl shadow-xl backdrop-blur-sm">
          <Heart className="text-red-500 mb-6 animate-pulse" size={60} fill="#ef4444" />
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Oi...</h1>
          <p className="text-lg mb-8 text-gray-600">
            Eu sei que as coisas estão um pouco diferentes agora, mas eu fiz uma coisinha pra você. Prometo que é rápido.
          </p>
          <button 
            onClick={() => setStep(1)}
            className="group flex items-center gap-2 bg-gradient-to-r from-red-400 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-pink-300/50"
          >
            Ver surpresa <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      )}

      {/* PASSOS 1 a 30: GALERIA DE FOTOS (POLAROIDS) */}
      {step > 0 && step <= memories.length && (
        <div className="text-center flex flex-col items-center w-full max-w-sm">
          {/* Indicador do Ano */}
          <div className="mb-4 text-sm font-bold text-gray-600 bg-white/60 px-4 py-2 rounded-full backdrop-blur">
            {memories[step-1].year}
          </div>

          <div className={`bg-white p-4 pb-12 rounded-lg shadow-2xl mb-8 transform transition-all duration-700 ${memories[step-1].rotation} hover:rotate-0 hover:scale-105 relative`}>
            {/* Fita adesiva decorativa */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-white/40 backdrop-blur-md rotate-2 border border-white/20 shadow-sm z-10"></div>
            
            <div className="w-full h-64 bg-gray-200 rounded overflow-hidden relative group">
              <img 
                src={memories[step-1].img} 
                alt="Nossa foto" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <p className="font-handwriting text-xl mt-6 text-gray-700 italic px-2 font-medium">
              "{memories[step-1].text}"
            </p>
          </div>

          {/* Indicador de Progresso */}
          <div className="mb-6 text-sm text-gray-600 font-medium">
            {step} de {memories.length}
          </div>
          
          {/* Botões de Navegação */}
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className="flex items-center gap-2 bg-white/80 backdrop-blur text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-white hover:scale-105 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
            </button>
            <button 
              onClick={() => setStep(step + 1)}
              className="flex items-center gap-2 bg-white/80 backdrop-blur text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-white hover:scale-105 transition-all shadow-md"
            >
              Próximo <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* PASSO 31: A GRANDE PERGUNTA */}
      {step === memories.length + 1 && (
        <div className="text-center animate-fade-in flex flex-col items-center max-w-lg bg-white/80 p-10 rounded-3xl shadow-2xl backdrop-blur-md border border-pink-100">
          <MessageCircleHeart className="text-pink-500 mb-4" size={50} />
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Eu não queria que a nossa história terminasse assim.
          </h2>
          <p className="text-lg mb-10 text-gray-600">
            Aceita sair comigo para tomar um café, conversar e me dar a chance de te fazer sorrir de novo?
          </p>
          
          <div className="flex gap-4 justify-center items-center relative w-full h-20">
            {/* Botão SIM */}
            <button 
              onClick={() => setStep(step + 1)}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:scale-110 transition-all shadow-lg shadow-green-300/50 z-10"
            >
              Sim! ❤️
            </button>

            {/* Botão NÃO (Fugitivo) */}
            <button 
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              style={isHoveringNo ? { 
                position: 'fixed', 
                left: `${noPosition.x}px`, 
                top: `${noPosition.y}px`,
                transition: 'all 0.2s ease-out'
              } : {}}
              className="bg-gray-400 text-white px-8 py-3 rounded-full font-bold text-lg relative"
            >
              Não
            </button>
          </div>
        </div>
      )}

      {/* PASSO 32: FINAL FELIZ */}
      {step === memories.length + 2 && (
        <div className="text-center animate-fade-in flex flex-col items-center max-w-md">
          <div className="relative">
            <Heart className="text-red-500 animate-pulse drop-shadow-2xl" size={120} fill="#ef4444" />
            <Sparkles className="absolute -top-4 -right-4 text-yellow-400" size={40} />
          </div>
          <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-800">Sabia que você ia aceitar! 😍</h1>
          <p className="text-xl mb-8 text-gray-600">
            Já tô com a roupa de ir. Me manda uma mensagem pra gente marcar o dia!
          </p>
          <a 
            // Substitua os zeros pelo SEU NÚMERO DE WHATSAPP com DDD (ex: 5511999999999)
            href="https://wa.me/5592984281607?text=Oi!%20Eu%20vi%20o%20site%20e...%20eu%20aceito%20o%20café!%20❤️" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-green-300/50 flex items-center gap-2"
          >
            Mandar mensagem <ArrowRight size={20} />
          </a>
        </div>
      )}
      
      {/* Estilos customizados para animações */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}} />
    </div>
  );
}