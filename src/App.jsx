import React, { useState, useEffect, useRef } from 'react';
import { Heart, ArrowRight, Camera, Sparkles, MessageCircleHeart } from 'lucide-react';

export default function App() {
  const [step, setStep] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: null, y: null });
  const [isHoveringNo, setIsHoveringNo] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const audioRef = useRef(null);

  const songs = ['/audio/perfect.mp3', '/audio/thousand-years.mp3'];

  useEffect(() => {
    if (step > 0 && audioRef.current) {
      audioRef.current.play();
    }
  }, [step, currentSong]);



  // Textos e imagens (COLOQUE AS IMAGENS JPG NA PASTA: public/images/)
  const memories = [
    // ===== 2023: COMEÇO DA HISTÓRIA =====
    {
      id: 1,
      year: 2023,
      text: "Só amigos: Tudo começou com uma simples amizade… sem saber que ali nascia algo muito maior.",
      img: "/images/2023-01.webp",
      rotation: "-rotate-3"
    },
    {
      id: 2,
      year: 2023,
      text: "Só amigos: No começo éramos só amigos, conversas simples e risadas sem imaginar o que o destino preparava.",
      img: "/images/2023-02.webp",
      rotation: "rotate-2"
    },
    {
      id: 3,
      year: 2023,
      text: "Entre mensagens, risadas e momentos juntos… algo diferente começou a nascer.",
      img: "/images/2023-03.webp",
      rotation: "-rotate-1"
    },
    {
      id: 4,
      year: 2023,
      text: "Quando percebi, você já era a pessoa que eu mais queria por perto. A amizade virou carinho… o carinho virou amor.",
      img: "/images/2023-04.webp",
      rotation: "rotate-3"
    },
    {
      id: 5,
      year: 2023,
      text: "E de repente, aquilo que começou como amizade virou a melhor história da minha vida.",
      img: "/images/2023-05.png",
      rotation: "-rotate-2"
    },
    {
      id: 6,
      year: 2023,
      text: "“E sem perceber, aquela amizade simples se transformou no amor mais bonito que eu já vivi.",
      img: "/images/2023-06.png",
      rotation: "rotate-1"
    },
    {
      id: 7,
      year: 2023,
      text: "E foi ali que percebi que nossa história estava mudando.",
      img: "/images/2023-07.png",
      rotation: "-rotate-1"
    },
    {
      id: 8,
      year: 2023,
      text: "Quem diria que duas pessoas que começaram como amigos acabariam construindo uma história tão linda juntos.",
      img: "/images/2023-08.png",
      rotation: "rotate-2"
    },
    {
      id: 9,
      year: 2023,
      text: "Quem diria que aquela amizade viraria algo tão especial.",
      img: "/images/2023-09.png",
      rotation: "-rotate-3"
    },
    // ===== 2024: CRESCIMENTO =====
    {
      id: 10,
      year: 2024,
      text: "2024 chegou e nossa história continuou.",
      img: "/images/2024-01.png",
      rotation: "-rotate-2"
    },
    {
      id: 11,
      year: 2024,
      text: "Agora não éramos mais só amigos. Você era a minha namorada.",
      img: "/images/2024-02.jpg",
      rotation: "rotate-3"
    },
    {
      id: 12,
      year: 2024,
      text: "Entre risadas e abraços fomos escrevendo nossa história.",
      img: "/images/2024-03.png",
      rotation: "-rotate-1"
    },
    {
      id: 13,
      year: 2024,
      text: "Cada momento ao seu lado ficou ainda mais especial.",
      img: "/images/2024-04.jpg",
      rotation: "rotate-2"
    },
    {
      id: 14,
      year: 2024,
      text: "Aquele passeio que a gente fez e você se tornou minha companhia favorita.",
      img: "/images/2024-05.jpg",
      rotation: "-rotate-2"
    },
    {
      id: 15,
      year: 2024,
      text: "Com você tudo ficou mais leve.",
      img: "/images/2024-06.jpg",
      rotation: "rotate-1"
    },
    {
      id: 16,
      year: 2024,
      text: "Cada momento juntos virou uma lembrança especial.",
      img: "/images/2024-07.png",
      rotation: "-rotate-3"
    },
    {
      id: 17,
      year: 2024,
      text: "Aquele dia especial que completa nosso ano juntos.",
      img: "/images/2024-08.png",
      rotation: "rotate-2"
    },
    {
      id: 18,
      year: 2024,
      text: "Você sempre ali, nos melhores e piores momentos.",
      img: "/images/2024-09.jpg",
      rotation: "-rotate-1"
    },
    {
      id: 19,
      year: 2024,
      text: "E cada dia ao seu lado fazia tudo valer a pena.",
      img: "/images/2024-10.png",
      rotation: "rotate-3"
    },
    {
      id: 20,
      year: 2024,
      text: "Nosso amor ficou mais forte e cada um apoiando um a outro.",
      img: "/images/2024-11.jpg",
      rotation: "-rotate-1"
    },
    {
      id: 21,
      year: 2024,
      text: "E nossa história continuou ficando cada vez mais bonita.",
      img: "/images/2024-12.jpg",
      rotation: "rotate-2"
    },
    {
      id: 22,
      year: 2024,
      text: "E eu tinha certeza de que queria você ao meu lado.",
      img: "/images/2024-13.jpg",
      rotation: "-rotate-2"
    },
    // ===== 2025: PRESENTE =====
    {
      id: 23,
      year: 2025,
      text: "2025 chegou… e a gente trabalhando e nossa história continuou forte.",
      img: "/images/2025-01.png",
      rotation: "rotate-1"
    },
    {
      id: 24,
      year: 2025,
      text: "Cada detalhe seu ocupando espaço permanente no meu coração.",
      img: "/images/2025-02.png",
      rotation: "-rotate-3"
    },
    {
      id: 25,
      year: 2025,
      text: "Cada momento ao seu lado era especial, em cada beijo e em cada abraço.",
      img: "/images/2025-03.jpg",
      rotation: "rotate-2"
    },
    {
      id: 26,
      year: 2025,
      text: "Os momentos que passamos lá em cima sempre vão ficar guardados na memória.",
      img: "/images/2025-04.jpg",
      rotation: "-rotate-1"
    },
    {
      id: 27,
      year: 2025,
      text: "O silêncio confortável que só a gente entendia, e os carinhos e beijos que trocávamos lá em cima.",
      img: "/images/2025-05.jpg",
      rotation: "rotate-3"
    },
    {
      id: 28,
      year: 2025,
      text: "E mesmo com o tempo passando, a felicidade de estar com você continua a mesma.",
      img: "/images/2025-06.jpg",
      rotation: "-rotate-2"
    },
    {
      id: 29,
      year: 2025,
      text: "Com o tempo, nosso amor amadureceu e ficou ainda mais bonito.",
      img: "/images/2025-07.png",
      rotation: "rotate-1"
    },
    {
      id: 30,
      year: 2025,
      text: "Cada dia com você virou uma lembrança que eu quero guardar para sempre.",
      img: "/images/2025-08.png",
      rotation: "rotate-1"
    },
    {
      id: 31,
      year: 2025,
      text: "Nosso amor cresceu com o tempo, e continua ficando cada vez mais bonito.",
      img: "/images/2025-09.jpg",
      rotation: "rotate-1"
    },
    {
      id: 32,
      year: 2025,
      title: "Quando meu coração te escolheu",
      text: `Me apaixonei por você, mas não foi pela sua aparência, nem por causa do seu corpo, nem por qualquer outra coisa fútil. Me apaixonei por você pela pessoa que você é. Não precisei te tocar, não precisei te sentir inteira. Desde o primeiro instante eu senti que seria você, e meu coração te escolheu.

A sua risada, seu jeitinho de falar, seu sorriso… tudo em você me completa. Eu só quero apenas você. Não preciso de mais nada além de você, e somente você. Saiba disso sempre. ❤️`,
      rotation: "rotate-2"
    },
    {
      id: 33,
      year: 2025,
      title: "Você nunca saiu dos meus pensamentos",
      text: `Eu ia falar que só sinto sua falta na madrugada, mas seria uma mentira muito mal contada. Eu penso em você toda hora, na hora do sol se pôr até o amanhecer. Eu só queria conseguir te esquecer, mentira, eu só queria poder te ver, te ter, te olhar, te abraçar, poder te amar. Eu sinto sua falta toda hora, todo dia, todo milésimo. Às vezes eu me deito pra te esquecer, mas você acaba aparecendo nos meus sonhos sem querer. Ninguém nunca vai ocupar o seu lugar, você faz falta no meu coração. Eu queria que fosse mais fácil te deixar pra trás, mas a cada passo que eu dou eu te quero mais. Não, não quero te esquecer. Eu não queria parar de falar com você, eu não quero te perder. E eu sei que você me ama igual eu amo você, e eu sei que você tenta me esquecer. No fundo a gente sabe que era pra ser, no fundo a gente sabe que um dia eu ainda vou me casar com você, e não importa quanto tempo demore pra te rever. ❤️`,
      rotation: "-rotate-2"
    },
    {
      id: 34,
      year: 2025,
      title: "Você lembrou dos meus erros, mas esqueceu do meu amor",
      text: `Você focou tanto nos meus erros, mas nem tudo que eu fiz por você você lembrou, e isso dói, porque eu me entreguei completamente. Amei sem reservas, fiz de tudo pra te ver feliz, mas no final tudo o que ficou registrado na sua memória foram os momentos em que eu falhei.

Às vezes eu não fui perfeito. Você se lembra de cada palavra que eu disse no calor de uma discussão, mas esquece de todas as vezes que eu engoli o orgulho pra fazer as pazes com você. Você guardou na memória todos os meus defeitos, mas não se lembrou dos incontáveis dias que eu cancelei tudo pra estar com você, de eu te ajudar mesmo sem você pedir ajuda.

Nos momentos de dificuldade sua eu estava lá, te apoiando em tudo. Mesmo nos momentos bons e ruins eu estava lá. Não importa o que eu estava fazendo, eu largava tudo só para estar com você. Porque, no momento mais difícil da sua vida (dia 20/08/2023, domingo, campeonato de xadrez, no dia em que você chorou e chorou muito e me ligou, ligou e ligou mais de 10 vezes e eu não atendi e não estava lá com você), desde então sempre eu coloquei você em primeiro lugar.

Você gravou cada momento em que eu não soube expressar o meu amor do jeito que você queria, mas apagou todas as vezes em que, de mil maneiras, tentei mostrar o quanto você era importante para mim. Eu te amava de verdade, te amava com todas as suas imperfeições e te aceitava do jeito que você era. Eu só queria ter conseguido te fazer feliz. 💔.`,
      rotation: "rotate-1"
    },
    {
      id: 35,
      year: 2025,
      title: "Amar também é deixar ir",
      text: `Quem diria que meu último gesto de amor por você seria me obrigar a não falar mais com você. Eu te amo tanto que agora eu preciso esconder que eu te amo. Olhar suas fotos, reler nossas conversas, seus gestos de carinho comigo, mas fechar e entender que não é pra ser.

Deixar quem a gente ama ir embora é a maior prova de amor que eu estou fazendo. Saber que eu amo você, mas deixando espaço aberto para que outras pessoas cuidem de você, entrem na sua vida, abracem, beijem, deem carinho — tudo que eu não vou poder mais dar, porque infelizmente eu tenho que abrir mão de você.

Só quem já se apaixonou de verdade sabe a dor de, de três em três minutos, ficar indo ver as mensagens pra ver se você mandou alguma coisa, e ver que não tem nada, e você não falou nada. Isso dói.

Quando a maior prova de amor é deixar de amar. 💔`,
      rotation: "-rotate-3"
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

  const current = step > 0 ? memories[step - 1] : null;

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
            onClick={() => {
              setStep(1);
              if (audioRef.current) {
                audioRef.current.play();
              }
            }}
            className="group flex items-center gap-2 bg-gradient-to-r from-red-400 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-pink-300/50"
          >
            Ver surpresa <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      )}

      {/* PASSOS 1 a N: GALERIA DE FOTOS (POLAROIDS) */}
      {step > 0 && step <= memories.length && (
        <div className="text-center flex flex-col items-center w-full max-w-sm">
          <div className={`bg-white p-4 pb-12 rounded-lg shadow-2xl mb-8 transform transition-all duration-700 ${current.rotation} hover:rotate-0 hover:scale-105 relative`}>
            {current.img && (
              <div className="absolute top-3 left-3 bg-white/90 text-sm font-bold text-gray-700 px-3 py-1 rounded-full shadow-sm z-10">
                {current.year}
              </div>
            )}

            {current.img && (
              <div className="w-full bg-gray-200 rounded overflow-hidden relative group z-0">
                <img 
                  src={current.img} 
                  alt="Nossa foto" 
                  className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            )}

            <div className="text-left mt-6 px-2">
              {current.title && (
                <h2 className="text-2xl font-bold mb-3 text-gray-800">{current.title}</h2>
              )}
              <p className="font-handwriting text-xl text-gray-700 italic whitespace-pre-wrap">
                {current.text}
              </p>
            </div>
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
            Aceita sair comigo para tomar um sorvete, conversar e me dar um dia para te fazer sorrir de novo?
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
            href="https://wa.me/5592984281607?text=Oi!%20Eu%20vi%20o%20site%20e...%20eu%20aceito%20o%20sorvete!%20❤️" 
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

      {/* Áudio de fundo */}
      <audio
        ref={audioRef}
        src={songs[currentSong]}
        onEnded={() => setCurrentSong((prev) => (prev + 1) % songs.length)}
        preload="auto"
      />
    </div>
  );
}