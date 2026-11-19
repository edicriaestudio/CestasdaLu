import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, 
  ShoppingBag, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft, 
  ArrowRight, 
  MessageCircle, 
  Copy, 
  Check, 
  X, 
  Calendar, 
  MapPin, 
  Star, 
  Gift, 
  Truck, 
  Send,
  Coffee,
  Play,
  Pause,
  Volume2,
  VolumeX,
  FileText,
  Download,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { STORE_CONFIG, HERO_CAMPAIGNS, STORIES_VIDEOS } from './data';

// Ícone do Instagram customizado em SVG
export function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}


// --- NOISE OVERLAY SVG ---
export function NoiseOverlay() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50 opacity-[0.035]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}
    />
  );
}

// --- NAVBAR FLUTUANTE (A ILHA) ---
export function Navbar({ onOpenHome, onOpenCatalog, onOpenDigitalCatalog, currentView = 'home' }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center p-2.5 sm:p-4 transition-all duration-500">
      <nav className={`w-full max-w-6xl flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border border-[#4E6B56]/15' 
          : 'bg-[#FBF9F5]/90 backdrop-blur-md shadow-sm border border-[#4E6B56]/10'
      }`}>
        {/* LOGO OFICIAL COM ÍCONE DA CESTA & LAÇO (CLICAR VOLTA PARA A HOME) */}
        <button onClick={onOpenHome} className="flex items-center gap-2 sm:gap-2.5 group text-left cursor-pointer">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden shadow-sm border border-[#4E6B56]/25 group-hover:scale-105 transition-transform bg-[#FBF9F5] flex items-center justify-center p-0.5 shrink-0">
            <img 
              src="/icone_cesta.png" 
              alt="Cestas da Lu Ícone" 
              className="w-full h-full object-contain" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm sm:text-base tracking-tight font-bold text-[#1C1D1B] leading-none group-hover:text-[#4E6B56] transition-colors">
              Cestas da Lu
            </span>
            <span className="text-[9px] sm:text-[10px] font-sans tracking-wider uppercase text-[#4E6B56] font-semibold mt-0.5">
              Ateliê de Presentes
            </span>
          </div>
        </button>

        {/* LINKS (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase font-semibold text-[#1C1D1B]/80">
          <button 
            onClick={onOpenHome} 
            className={`transition-colors ${currentView === 'home' ? 'text-[#4E6B56] font-bold' : 'hover:text-[#4E6B56]'}`}
          >
            Início
          </button>
          <button 
            onClick={onOpenCatalog} 
            className={`transition-colors ${currentView === 'catalog' ? 'text-[#4E6B56] font-bold' : 'hover:text-[#4E6B56]'}`}
          >
            Catálogo Completo
          </button>
          <a href="#corporativo" onClick={currentView !== 'home' ? onOpenHome : undefined} className="hover:text-[#4E6B56] transition-colors">
            Kits Corporativos
          </a>
          <a href="#depoimentos" onClick={currentView !== 'home' ? onOpenHome : undefined} className="hover:text-[#4E6B56] transition-colors">
            Avaliações
          </a>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
          {currentView === 'home' ? (
            <button
              onClick={onOpenCatalog}
              className="btn-scan btn-spotlight inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white bg-[#1C1D1B] hover:bg-[#374E3E] active:scale-95 transition-all shadow-sm border border-[#4E6B56]/30"
            >
              <div className="spotlight-beam" />
              <div className="scan-line" />
              <ShoppingBag className="w-3.5 h-3.5 text-[#D48C80] relative z-10" />
              <span className="relative z-10 hidden sm:inline">Ver Catálogo Completo</span>
              <span className="relative z-10 sm:hidden">Catálogo</span>
            </button>
          ) : (
            <button
              onClick={onOpenHome}
              className="btn-scan btn-spotlight inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white bg-[#4E6B56] hover:bg-[#374E3E] active:scale-95 transition-all shadow-sm border border-white/20"
            >
              <div className="spotlight-beam" />
              <div className="scan-line" />
              <span className="relative z-10">← Voltar</span>
            </button>
          )}
        </div>

      </nav>
    </header>
  );
}

// --- HERO MODERNA D2C COM 2 COLUNAS VERTICAIS INFINITAS (BASEADA NO PRINT DE REFERÊNCIA) ---
export function HeroInteractive({ onSelectCesta }) {
  // Fotos reais da Lu para as duas colunas verticais
  const col1Images = [
    {
      id: "h-cafe-coroa",
      name: "Cesta Real Café Coroa",
      price: "R$ 199",
      tag: "Café Colonial • Real",
      image: "/lu_real_cafe_coroa.jpg"
    },
    {
      id: "h-coracao",
      name: "Cesta Coração Stitch & Angel",
      price: "R$ 249",
      tag: "Super Luxo • Casal",
      image: "/lu_real_coracao_teamo.webp"
    },
    {
      id: "h-papainoel",
      name: "Caneca Papai Noel & Chocottone",
      price: "R$ 79",
      tag: "Natal & Lembranças",
      image: "/lu_real_papainoel_chocottone.webp"
    },
    {
      id: "h1",
      name: "Box Freixenet & Ferrero",
      price: "R$ 199",
      tag: "Ouro & Espumante",
      image: "/lu_real_freixenet.jpg"
    }
  ];

  const col2Images = [
    {
      id: "h-cafe-madrinha",
      name: "Cesta Café Gourmet & Nutella",
      price: "R$ 179",
      tag: "Café Artesanal • Real",
      image: "/lu_real_cafe_madrinha.jpg"
    },
    {
      id: "h-stitch-azul",
      name: "Box Balão Stitch & Lacta",
      price: "R$ 129",
      tag: "Pelúcia & Balão",
      image: "/lu_real_stitch_box_azul.webp"
    },
    {
      id: "h-panettone",
      name: "Box Panettone & Vinho Aurora",
      price: "R$ 169",
      tag: "Corporativo & Festas",
      image: "/lu_real_panettone_vinho.webp"
    },
    {
      id: "h-stitch",
      name: "Cesta Mimo Stitch Pelúcia",
      price: "R$ 99",
      tag: "Mimos & Afeto",
      image: "/lu_real_stitch_mimo.webp"
    }
  ];

  return (
    <section 
      id="campanhas"
      className="relative min-h-[100dvh] pt-28 sm:pt-32 pb-16 px-4 sm:px-8 overflow-hidden bg-[#FBF9F5] flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* LADO ESQUERDO: CONTEÚDO E AUTORIDADE (ESTILO RO / WELLNESS D2C DO PRINT) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
          
          {/* BADGE DE AVALIAÇÃO (IGUAL AO PRINT: ⭐ 5.0 Average Rating • Google Avaliações) */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#4E6B56]/15 text-xs font-sans text-[#1C1D1B] shadow-sm">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span className="font-bold text-[#1C1D1B]">5.0 Avaliação Média</span>
            <span className="text-[#4E6B56] font-medium">• Cestas da Lu</span>
          </div>

          {/* HEADLINE PRINCIPAL (MODERNA, LIMPA E COMERCIAL) */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-sans text-[#1C1D1B] tracking-tight leading-[1.12]">
              Cestas Exclusivas & <br />
              <span className="font-serif italic font-normal text-[#4E6B56]">Presentes que Emocionam</span>
            </h1>
            <p className="text-[#4D4E4B] text-sm sm:text-base max-w-xl font-normal leading-relaxed pt-1">
              Do café da manhã especial aos kits corporativos e lembranças de final de ano. Montagem 100% artesanal com flores, guloseimas finas e cartão personalizado.
            </p>
          </div>

          {/* BULLETS / BENEFÍCIOS (ESTILO DO PRINT COM ÍCONES MINIMALISTAS) */}
          <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#1C1D1B]/85 font-medium">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#E8F0EA] flex items-center justify-center text-[#4E6B56] shrink-0">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span>Produção artesanal com foto enviada antes da entrega</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#E8F0EA] flex items-center justify-center text-[#4E6B56] shrink-0">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span>Atendimento a empresas para brindes e souvenirs de fim de ano</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#E8F0EA] flex items-center justify-center text-[#4E6B56] shrink-0">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span>Entrega agendada no horário marcado no Rio de Janeiro</span>
            </div>
          </div>

          {/* BOX DE PREÇO + BOTÃO CTA PÍLULA PRETO (IGUAL AO PRINT: $299 / Get Started) */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#1C1D1B] tracking-tight">R$ 89</span>
                <span className="text-xs text-[#4D4E4B] font-mono">/ a partir de</span>
              </div>
              <span className="text-[11px] text-[#4E6B56] font-medium">Opções individuais e corporativas</span>
            </div>

            <button
              onClick={() => onSelectCesta(col1Images[0])}
              className="btn-scan btn-spotlight px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm tracking-wide text-white uppercase bg-[#1C1D1B] hover:bg-[#374E3E] active:scale-95 transition-all shadow-xl shadow-black/15 flex items-center gap-2 border border-[#4E6B56]/30"
            >
              <div className="spotlight-beam" />
              <div className="scan-line" />
              <span className="relative z-10">Fazer Pedido</span>
              <ArrowRight className="w-4 h-4 text-[#D48C80] relative z-10" />
            </button>
          </div>

          {/* CARD DE CONSULTA CORPORATIVA / SOUVENIRS */}
          <div className="w-full max-w-md p-3.5 rounded-2xl bg-white border border-[#4E6B56]/15 shadow-sm flex items-center justify-between gap-3 mt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8F0EA] flex items-center justify-center text-[#4E6B56] shrink-0">
                <Gift className="w-5 h-5 text-[#4E6B56]" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-[#1C1D1B] block">Empresas & Fim de Ano?</span>
                <span className="text-[11px] text-[#4D4E4B]">Kits e souvenirs personalizados em lote</span>
              </div>
            </div>
            <a
              href={`https://wa.me/55${STORE_CONFIG.phone}?text=Ol%C3%A1%20Lu!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20cestas%20corporativas%20para%20minha%20empresa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-scan btn-spotlight px-3.5 py-1.5 rounded-full text-[11px] font-bold text-[#4E6B56] bg-[#E8F0EA] hover:bg-[#4E6B56] hover:text-white transition-all shrink-0 border border-[#4E6B56]/20"
            >
              <div className="spotlight-beam" />
              <div className="scan-line scan-line-blush" />
              <span className="relative z-10">Consultar Lu</span>
            </a>
          </div>

        </div>

        {/* LADO DIREITO: AS 2 COLUNAS VERTICAIS EM CARROSSEL INFINITO (EXATAMENTE COMO O PRINT) */}
        <div className="lg:col-span-5 relative h-[440px] sm:h-[540px] overflow-hidden rounded-3xl bg-transparent">
          
          {/* MÁSCARAS DE DESFOCAGEM NO TOPO E NA BASE PARA O EFEITO INFINITO SUAVE */}
          <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-[#FBF9F5] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#FBF9F5] to-transparent z-10 pointer-events-none" />

          {/* GRADE DAS 2 COLUNAS */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full">
            
            {/* COLUNA 1: ROLA PARA CIMA (UP) */}
            <div className="overflow-hidden h-full">
              <div className="animate-marquee-up space-y-3 sm:space-y-4">
                {[...col1Images, ...col1Images, ...col1Images].map((item, idx) => (
                  <div
                    key={`c1-${idx}`}
                    onClick={() => onSelectCesta(item)}
                    className="w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden relative group cursor-pointer shadow-md hover:shadow-xl transition-all border border-[#4E6B56]/15 bg-white"
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                    
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left text-white">
                      <span className="text-[9px] font-mono text-[#E8F0EA] uppercase font-bold block">{item.tag}</span>
                      <h4 className="text-xs font-bold truncate">{item.name}</h4>
                      <span className="text-[11px] font-extrabold text-[#FBEFEF]">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUNA 2: ROLA PARA BAIXO (DOWN) */}
            <div className="overflow-hidden h-full pt-6">
              <div className="animate-marquee-down space-y-3 sm:space-y-4">
                {[...col2Images, ...col2Images, ...col2Images].map((item, idx) => (
                  <div
                    key={`c2-${idx}`}
                    onClick={() => onSelectCesta(item)}
                    className="w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden relative group cursor-pointer shadow-md hover:shadow-xl transition-all border border-[#4E6B56]/15 bg-white"
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                    
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left text-white">
                      <span className="text-[9px] font-mono text-[#E8F0EA] uppercase font-bold block">{item.tag}</span>
                      <h4 className="text-xs font-bold truncate">{item.name}</h4>
                      <span className="text-[11px] font-extrabold text-[#FBEFEF]">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}



// --- SEÇÃO DE CARROSSÉIS INFINITOS (FEED 4:5 DO INSTAGRAM) ---
export function InfiniteFeedGallery({ itemsRow1, itemsRow2, onSelectProduct }) {
  return (
    <section id="galeria-feed" className="py-20 bg-[#FBF9F5] relative overflow-hidden border-t border-[#4E6B56]/15">
      
      {/* CABEÇALHO DA SEÇÃO */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-[#4E6B56] font-bold">
          Galeria & Entregas Reais
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1D1B] tracking-tight mt-1">
          Momentos Reais que <span className="italic text-[#4E6B56]">Marcam Vidas</span>
        </h2>
        <p className="text-[#4D4E4B] text-sm sm:text-base max-w-xl mx-auto mt-3 font-normal leading-relaxed">
          Cada laço, cada flor e cada mimo feitos com carinho artesanal para surpreender quem você ama. Veja um pouco das nossas entregas recentes.
        </p>
      </div>

      {/* LINHA 1: ROLA PARA A ESQUERDA */}
      <div className="overflow-hidden w-full py-2 sm:py-3 touch-pan-y">
        <div className="animate-marquee-left flex gap-3.5 sm:gap-6">
          {[...itemsRow1, ...itemsRow1, ...itemsRow1].map((item, index) => (
            <div 
              key={`r1-${index}`}
              onClick={() => onSelectProduct(item)}
              className="flex-shrink-0 w-48 sm:w-64 aspect-[4/5] rounded-2xl overflow-hidden relative group cursor-pointer border border-[#4E6B56]/20 bg-white transition-all duration-300 hover:scale-102 hover:border-[#4E6B56] shadow-sm hover:shadow-xl active:scale-98"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              
              {/* TAG TOPO */}
              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#4E6B56]/20 text-[9px] sm:text-[10px] font-mono text-[#374E3E] font-bold shadow-sm">
                {item.tag}
              </div>

              {/* INFORMAÇÕES DO PRODUTO */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-left">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#A3C4AC] font-bold">
                  {item.category}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                  {item.name}
                </h4>
                <div className="flex items-center justify-between mt-1 pt-1 border-t border-white/20">
                  <span className="text-[11px] sm:text-xs font-bold text-[#FBF9F5]">{item.price}</span>
                  <span className="text-[9px] sm:text-[10px] text-[#A3C4AC] group-hover:text-white flex items-center gap-0.5 font-medium">
                    Ver detalhes <ChevronRight className="w-3 h-3 text-[#D48C80]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LINHA 2: ROLA PARA A DIREITA (INVERTIDO) */}
      <div className="overflow-hidden w-full py-2 sm:py-3 mt-1 sm:mt-2 touch-pan-y">
        <div className="animate-marquee-right flex gap-3.5 sm:gap-6">
          {[...itemsRow2, ...itemsRow2, ...itemsRow2].map((item, index) => (
            <div 
              key={`r2-${index}`}
              onClick={() => onSelectProduct(item)}
              className="flex-shrink-0 w-48 sm:w-64 aspect-[4/5] rounded-2xl overflow-hidden relative group cursor-pointer border border-[#4E6B56]/20 bg-white transition-all duration-300 hover:scale-102 hover:border-[#4E6B56] shadow-sm hover:shadow-xl active:scale-98"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#4E6B56]/20 text-[9px] sm:text-[10px] font-mono text-[#374E3E] font-bold shadow-sm">
                {item.tag}
              </div>

              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-left">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#A3C4AC] font-bold">
                  {item.category}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                  {item.name}
                </h4>
                <div className="flex items-center justify-between mt-1 pt-1 border-t border-white/20">
                  <span className="text-[11px] sm:text-xs font-bold text-[#FBF9F5]">{item.price}</span>
                  <span className="text-[9px] sm:text-[10px] text-[#A3C4AC] group-hover:text-white flex items-center gap-0.5 font-medium">
                    Ver detalhes <ChevronRight className="w-3 h-3 text-[#D48C80]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-6 px-4">
        <p className="text-xs font-mono text-[#4D4E4B]">
          💡 Dica: Toque sobre qualquer cesta para conferir os itens completos ou encomendar
        </p>
      </div>
    </section>
  );
}

// --- SEÇÃO INSTAGRAM STORIES (AUTO-PLAYING STORIES CAROUSEL & BASTIDORES DA LU) ---
export function StoriesSection({ onSelectProduct }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const STORY_DURATION = 3200; // 3.2s por story (avança mais rápido e dinâmico)

  const currentStory = STORIES_VIDEOS[currentIndex] || STORIES_VIDEOS[0];

  // Auto-avanço com barra de progresso suave
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50;
    const increment = (intervalTime / STORY_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % STORIES_VIDEOS.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  // Resetar progresso quando mudar de story
  const handleSelectStory = (index) => {
    setCurrentIndex(index);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleNextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % STORIES_VIDEOS.length);
    setProgress(0);
  };

  const handlePrevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + STORIES_VIDEOS.length) % STORIES_VIDEOS.length);
    setProgress(0);
  };

  const handleToggleMute = (e) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  return (
    <section id="stories" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF7F2] border-t border-[#4E6B56]/15 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* CABEÇALHO COM ESTÉTICA INSTAGRAM STORIES */}
        <div className="text-center mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#4E6B56]/20 shadow-sm text-xs font-mono font-bold text-[#4E6B56]">
            <InstagramIcon className="w-3.5 h-3.5 text-[#D48C80]" />
            <span>{STORE_CONFIG.instagramHandle} • Stories em Tempo Real</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1D1B] tracking-tight">
            Bastidores da Lu <span className="italic text-[#4E6B56]">& Produção com Afeto</span>
          </h2>
          <p className="text-[#4D4E4B] text-xs sm:text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Acompanhe a montagem dos laços, arranjos e mimos em tempo real como se estivesse nos Stories do nosso Instagram.
          </p>
        </div>

        {/* CONTAINER PRINCIPAL DO PLAYER DE STORIES (CENTRALIZADO & MOBILE FIRST) */}
        <div className="max-w-md mx-auto relative">
          
          {/* CARROSSEL DOS AVATARES DOS STORIES NO TOPO (PODE CLICAR PARA TROCAR) */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5 overflow-x-auto py-2 scrollbar-none">
            {STORIES_VIDEOS.map((story, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={story.id}
                  onClick={() => handleSelectStory(idx)}
                  className="flex flex-col items-center gap-1.5 group transition-transform active:scale-95 shrink-0"
                >
                  <div className={`p-0.5 rounded-full transition-all ${
                    isActive 
                      ? 'bg-gradient-to-tr from-[#D48C80] via-[#4E6B56] to-[#E8F0EA] scale-105 shadow-md' 
                      : 'bg-black/10 hover:bg-[#4E6B56]/40'
                  }`}>
                    <img 
                      src={story.poster} 
                      alt={story.title} 
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white transition-opacity ${
                        isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                      }`}
                    />
                  </div>
                  <span className={`text-[10px] sm:text-[11px] font-sans font-medium max-w-[68px] truncate ${
                    isActive ? 'font-bold text-[#4E6B56]' : 'text-[#4D4E4B]'
                  }`}>
                    {story.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* CARD PRINCIPAL DO STORY (FORMATO VERTICAL 9:16) */}
          <div 
            className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#4E6B56]/20 bg-black select-none group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* FOTO REAL DO PRODUTO NO STORY COM ANIMAÇÃO CINEMATOGRÁFICA */}
            <div className="w-full h-full overflow-hidden relative">
              <img 
                key={currentStory.id}
                src={currentStory.poster || currentStory.image} 
                alt={currentStory.title}
                className="w-full h-full object-cover animate-pulse-slow transition-transform duration-700 ease-out scale-105"
              />
            </div>

            {/* OVERLAY DE SOMBRA SUAVE (TOPO E BASE) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/70 pointer-events-none" />

            {/* BARRA DE PROGRESSO MULTI-SEGMENTO DO INSTAGRAM */}
            <div className="absolute top-4 inset-x-4 z-20 flex gap-1.5">
              {STORIES_VIDEOS.map((_, idx) => {
                let fillWidth = '0%';
                if (idx < currentIndex) fillWidth = '100%';
                else if (idx === currentIndex) fillWidth = `${progress}%`;

                return (
                  <div 
                    key={idx} 
                    className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectStory(idx);
                    }}
                  >
                    <div 
                      className="h-full bg-white transition-[width] duration-75 ease-linear"
                      style={{ width: fillWidth }}
                    />
                  </div>
                );
              })}
            </div>

            {/* CABEÇALHO DO STORY: AVATAR DA LU, NOME E BOTÃO DE ÁUDIO */}
            <div className="absolute top-8 inset-x-4 z-20 flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5">
                <div className="p-0.5 rounded-full bg-gradient-to-tr from-[#D48C80] to-[#4E6B56]">
                  <img 
                    src="/logo_cestas_lu.png" 
                    alt="Lu" 
                    className="w-8 h-8 rounded-full object-cover border border-white"
                  />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold block leading-tight text-white drop-shadow">
                    {currentStory.authorName}
                  </span>
                  <span className="text-[10px] text-white/75 font-mono">
                    {currentStory.timeAgo} • Stories
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={handleToggleMute}
                  className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-black/60 transition-all active:scale-95"
                  aria-label={isMuted ? "Ativar som" : "Desativar som"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* ÁREAS DE TOQUE LATERAIS PARA AVANÇAR / VOLTAR */}
            <div 
              className="absolute inset-y-20 left-0 w-1/3 z-10 cursor-pointer" 
              onClick={handlePrevStory}
              title="Story anterior"
            />
            <div 
              className="absolute inset-y-20 right-0 w-1/3 z-10 cursor-pointer" 
              onClick={handleNextStory}
              title="Próximo story"
            />

            {/* SETAS DE NAVEGAÇÃO VISÍVEIS EM HOVER */}
            <button 
              onClick={handlePrevStory}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNextStory}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* RODAPÉ DO STORY: INFORMAÇÕES DETALHADAS & BOTÃO DE PEDIDO */}
            <div className="absolute bottom-5 inset-x-4 z-20 text-left space-y-2.5">
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D48C80]/90 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                    {currentStory.tag}
                  </span>
                  <span className="text-[10px] font-mono text-white/70">
                    ❤️ {currentStory.likes} curtidas
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white drop-shadow leading-snug">
                  {currentStory.title}
                </h3>
                <p className="text-xs text-white/90 font-light leading-relaxed drop-shadow">
                  {currentStory.subtitle}
                </p>
              </div>

              {/* BOTÃO SCANNER ESTILO STORIES PARA PEDIDO DIRETO */}
              <div className="pt-1">
                <a
                  href={`https://wa.me/55${STORE_CONFIG.phone}?text=Ol%C3%A1%20Lu!%20Vi%20o%20Story%20"${currentStory.title}"%20e%20gostaria%20de%20encomendar.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-scan btn-spotlight w-full py-3 px-4 rounded-2xl bg-[#4E6B56] hover:bg-[#3D5443] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl border border-white/30"
                >
                  <div className="spotlight-beam" />
                  <div className="scan-line" />
                  <MessageCircle className="w-4 h-4 text-[#D48C80] relative z-10" />
                  <span className="relative z-10">Quero Essa no WhatsApp</span>
                </a>
              </div>

              <div className="text-center pt-0.5">
                <span className="text-[10px] font-mono text-white/50">
                  Toque nas laterais para avançar • Segure para pausar
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* LINK PARA O PERFIL COMPLETO */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            href={STORE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-scan btn-spotlight inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#4E6B56]/30 text-[#1C1D1B] hover:text-[#4E6B56] text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all"
          >
            <div className="spotlight-beam" />
            <div className="scan-line scan-line-blush" />
            <InstagramIcon className="w-4 h-4 text-[#D48C80] relative z-10" />
            <span className="relative z-10">Ver Todos os Stories no Instagram {STORE_CONFIG.instagramHandle}</span>
          </a>
        </div>

      </div>
    </section>
  );
}

// --- CATÁLOGO PRINCIPAL & FUNIL DE COMPRA ---
export function CatalogSection({ products, onSelectProduct, onBuyNow, isFullCatalogView, onToggleFullCatalog }) {
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const categories = [
    { id: "Todas", label: "Todas as Cestas" },
    { id: "Café da Manhã", label: "Café da Manhã" },
    { id: "Romance", label: "Romance & Aniversário" },
    { id: "Vinhos", label: "Vinhos, Queijos & Bebidas" },
    { id: "Mimos", label: "Mimos & Afeto" }
  ];

  const filteredProducts = selectedCategory === "Todas" 
    ? products 
    : products.filter(p => {
        const cat = p.category.toLowerCase();
        if (selectedCategory === "Café da Manhã") return cat.includes("café");
        if (selectedCategory === "Romance") return cat.includes("romance") || cat.includes("aniversário") || cat.includes("espumante") || cat.includes("rosé");
        if (selectedCategory === "Vinhos") return cat.includes("vinho") || cat.includes("queijo") || cat.includes("ouro") || cat.includes("happy");
        if (selectedCategory === "Mimos") return cat.includes("caneca") || cat.includes("doce") || cat.includes("maternidade") || cat.includes("mimo");
        return true;
      });

  // Na vitrine inicial da página, mostra os 9 primeiros produtos. Se for a tela de catálogo completo, exibe todos.
  const displayedProducts = isFullCatalogView ? filteredProducts : filteredProducts.slice(0, 9);

  return (
    <section id="catalogo" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* TÍTULO E FILTROS */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#4E6B56] mb-2 font-bold">
            <Gift className="w-3.5 h-3.5 text-[#D48C80]" />
            {isFullCatalogView ? "Catálogo Completo Oficial" : "Vitrine de Destaques"}
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1D1B] tracking-tight">
            {isFullCatalogView ? "Todas as Nossas" : "Escolha a Cesta"} <span className="italic text-[#4E6B56]">{isFullCatalogView ? "Cestas & Presentes" : "Perfeita"}</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#4D4E4B] mt-1.5 max-w-xl">
            {isFullCatalogView 
              ? `Exibindo ${filteredProducts.length} opções exclusivas do Ateliê com produção 100% artesanal e cartão personalizado.` 
              : "Destaques mais pedidos pelos clientes para café da manhã, aniversários e datas especiais."}
          </p>
        </div>

        {/* BOTÕES DE FILTRO ORGANIZADOS */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`btn-scan btn-spotlight px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#4E6B56] text-white font-bold shadow-md border border-[#4E6B56]'
                  : 'bg-white hover:bg-[#F3EFE9] text-[#4D4E4B] border border-[#4E6B56]/20 shadow-sm'
              }`}
            >
              <div className="spotlight-beam" />
              <div className="scan-line scan-line-blush" />
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* GRADE DE PRODUTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayedProducts.map((product) => (
          <div 
            key={product.id}
            className="group rounded-3xl overflow-hidden bg-white border border-[#4E6B56]/15 flex flex-col justify-between hover:border-[#4E6B56] transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl"
          >
            {/* IMAGEM COM PROPORÇÃO 4:5 E BADGES */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#F3ECE2] cursor-pointer" onClick={() => onSelectProduct(product)}>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#4E6B56]/15 text-[11px] font-mono text-[#374E3E] font-bold shadow-sm">
                {product.badge}
              </div>

              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-1 text-xs text-white">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold">{product.rating}</span>
                <span className="text-white/80 text-[10px]">({product.reviewsCount})</span>
              </div>
            </div>

            {/* CONTEÚDO */}
            <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#4E6B56] font-bold">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-[#1C1D1B] mt-1 group-hover:text-[#4E6B56] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#4D4E4B] text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* ITENS INCLUSOS PREVIEW */}
              <div className="bg-[#FBF9F5] rounded-2xl p-3 border border-[#4E6B56]/10">
                <div className="text-[10px] font-mono uppercase text-[#4E6B56] mb-1 flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3 h-3 text-[#4E6B56]" /> Destaques inclusos:
                </div>
                <div className="text-xs text-[#1C1D1B] line-clamp-2">
                  {product.items.slice(0, 3).join(" • ")}...
                </div>
              </div>

              {/* PREÇO E AÇÕES */}
              <div className="pt-2 flex items-center justify-between border-t border-[#4E6B56]/10">
                <div>
                  <span className="text-[10px] font-mono text-[#4D4E4B] block">Valor final</span>
                  <span className="text-xl font-extrabold text-[#1C1D1B]">
                    {product.priceFormatted}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="btn-scan btn-spotlight px-3.5 py-2 rounded-xl text-xs font-semibold text-[#1C1D1B] hover:bg-[#F3EFE9] border border-black/10 transition-colors"
                  >
                    <div className="spotlight-beam" />
                    <div className="scan-line scan-line-sage" />
                    <span className="relative z-10">Detalhes</span>
                  </button>
                  <button
                    onClick={() => onBuyNow(product)}
                    className="btn-scan btn-spotlight px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#1C1D1B] hover:bg-[#374E3E] active:scale-95 transition-all shadow-md flex items-center gap-1.5 border border-[#4E6B56]/30"
                  >
                    <div className="spotlight-beam" />
                    <div className="scan-line" />
                    <span className="relative z-10">Comprar</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D48C80] relative z-10" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* BOTÃO PARA EXPANDIR E VER O CATÁLOGO COMPLETO OU VOLTAR */}
      <div className="mt-12 text-center">
        <button
          onClick={onToggleFullCatalog}
          className="btn-scan btn-spotlight inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#1C1D1B] hover:bg-[#374E3E] active:scale-95 transition-all shadow-xl border border-[#4E6B56]/30"
        >
          <div className="spotlight-beam" />
          <div className="scan-line" />
          <ShoppingBag className="w-4 h-4 text-[#D48C80] relative z-10" />
          <span className="relative z-10">
            {isFullCatalogView 
              ? "Exibir Apenas Destaques Principais" 
              : `Ver Catálogo Completo com Todas as Opções (${products.length} Cestas)`}
          </span>
          <ArrowRight className={`w-4 h-4 text-[#D48C80] relative z-10 transition-transform ${isFullCatalogView ? 'rotate-180' : ''}`} />
        </button>
      </div>

    </section>
  );
}


// --- MANIFESTO AFETIVO & DIFERENCIAIS ---
export function PhilosophySection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#F8F6F2] border-y border-[#4E6B56]/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#4E6B56]/15 text-xs font-mono uppercase tracking-widest text-[#4E6B56] font-bold shadow-sm">
          <Heart className="w-3.5 h-3.5 text-[#D48C80]" />
          O Cuidado da Lu em Cada Detalhe
        </div>

        <div className="space-y-3">
          <p className="text-[#4D4E4B] text-base sm:text-xl font-sans uppercase tracking-widest font-medium">
            Muito mais do que apenas uma cesta de presente
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1D1B] max-w-3xl mx-auto leading-tight">
            Criamos momentos de <span className="italic text-[#4E6B56]">puro carinho</span> para quem é especial para você.
          </h2>
        </div>

        {/* TRÊS PILARES FUNCIONAIS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
          <div className="p-7 rounded-3xl bg-white border border-[#4E6B56]/10 space-y-3 shadow-sm hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-2xl bg-[#E8F0EA] flex items-center justify-center text-[#4E6B56]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1C1D1B]">Cartas e Mimos Feitos à Mão</h3>
            <p className="text-xs sm:text-sm text-[#4D4E4B] leading-relaxed">
              Você escreve a mensagem no checkout e nós caligrafamos ou imprimimos em papel nobre com fita aveludada.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#4E6B56]/10 space-y-3 shadow-sm hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-2xl bg-[#E8F0EA] flex items-center justify-center text-[#4E6B56]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1C1D1B]">Entrega Pontual no Horário Marcado</h3>
            <p className="text-xs sm:text-sm text-[#4D4E4B] leading-relaxed">
              Escolha se a surpresa será no despertar matinal ou em um almoço/jantar inesquecível. Cuidamos do trajeto com segurança.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#4E6B56]/10 space-y-3 shadow-sm hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-2xl bg-[#E8F0EA] flex items-center justify-center text-[#4E6B56]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1C1D1B]">Acompanhamento ao Vivo</h3>
            <p className="text-xs sm:text-sm text-[#4D4E4B] leading-relaxed">
              Assim que o pedido é feito, você recebe atualizações no WhatsApp com fotos da cesta antes do envio.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// --- MODAL DE DETALHES DA CESTA ---
export function ProductDetailModal({ product, onClose, onAdvanceToCheckout }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl rounded-3xl bg-white border border-[#4E6B56]/20 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        {/* BOTÃO FECHAR */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 border border-[#4E6B56]/20 flex items-center justify-center text-[#1C1D1B] hover:bg-white shadow-md transition-transform active:scale-95"
        >
          <X className="w-4 h-4" />
        </button>

        {/* FOTO 4:5 */}
        <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-auto relative bg-[#F5EFE6]">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden" />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#4E6B56]/15 text-[10px] font-mono font-bold text-[#374E3E] shadow-sm">
            {product.badge || "Exclusivo"}
          </div>
        </div>

        {/* INFOS E CONTEÚDO */}
        <div className="p-6 md:p-8 flex-1 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#4E6B56] font-bold">
                {product.category}
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#1C1D1B] mt-1">
                {product.name}
              </h3>
              <p className="text-sm text-[#4D4E4B] mt-2 font-light leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* ITENS INCLUSOS */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#4D4E4B] mb-3 flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4E6B56]" />
                Itens Inclusos na Montagem:
              </h4>
              <ul className="space-y-2 bg-[#FBF9F5] p-4 rounded-2xl border border-[#4E6B56]/15">
                {product.items?.map((item, idx) => (
                  <li key={idx} className="text-xs text-[#1C1D1B] flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D48C80] mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RODAPÉ DO MODAL */}
          <div className="pt-6 mt-6 border-t border-[#4E6B56]/15 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#4D4E4B] block">Preço final</span>
              <span className="text-2xl font-extrabold text-[#1C1D1B]">
                {product.priceFormatted || product.price}
              </span>
            </div>

            <button
              onClick={() => onAdvanceToCheckout(product)}
              className="btn-scan btn-spotlight px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-[#4E6B56] hover:bg-[#374E3E] active:scale-95 transition-all shadow-lg flex items-center gap-2 border border-white/20"
            >
              <div className="spotlight-beam" />
              <div className="scan-line" />
              <span className="relative z-10">Personalizar & Comprar</span>
              <ArrowRight className="w-4 h-4 text-[#D48C80] relative z-10" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

// --- MODAL DE CHECKOUT PRÓPRIO (COM PIX, UPSELLS E INTEGRAÇÃO WHATSAPP) ---
export function CheckoutModal({ product, onClose }) {
  const [step, setStep] = useState(1); // 1: Formulário | 2: Pagamento Pix & Conclusão
  const [copiedPix, setCopiedPix] = useState(false);
  const [orderId, setOrderId] = useState('');

  const [formData, setFormData] = useState({
    senderName: '',
    senderPhone: '',
    receiverName: '',
    deliveryDate: '',
    deliveryPeriod: 'Manhã (07h às 10h)',
    address: '',
    neighborhood: '',
    city: 'Rio de Janeiro',
    customMessage: '',
    includePolaroid: false,
    includePelucia: false,
    includeCaneca: false,
    includeBalao: false,
  });

  useEffect(() => {
    // Gera ID único do pedido
    const randomId = 'LU-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomId);
  }, []);

  // Preço base numérico robusto
  const basePriceNumber = typeof product.price === 'number'
    ? product.price
    : typeof product.priceFormatted === 'string'
      ? parseFloat(product.priceFormatted.replace(/[^\d,]/g, '').replace(',', '.')) || 160
      : typeof product.price === 'string'
        ? parseFloat(product.price.replace(/[^\d,]/g, '').replace(',', '.')) || 160
        : 160;

  // Cálculo de adicionais (Upsells)
  const extrasTotal = 
    (formData.includePolaroid ? 15 : 0) +
    (formData.includePelucia ? 39 : 0) +
    (formData.includeCaneca ? 29 : 0) +
    (formData.includeBalao ? 25 : 0);

  const totalPrice = basePriceNumber + extrasTotal;
  const totalPriceFormatted = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (!formData.senderName || !formData.receiverName || !formData.address || !formData.deliveryDate) {
      alert("Por favor, preencha todos os campos obrigatórios para a entrega.");
      return;
    }
    setStep(2);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(STORE_CONFIG.pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  // Enviar pedido completo formatado para o WhatsApp da Lu
  const handleFinishToWhatsapp = () => {
    const extrasList = [];
    if (formData.includePolaroid) extrasList.push('• Foto Polaroid impressa (+R$ 15)');
    if (formData.includePelucia) extrasList.push('• Pelúcia com laço (+R$ 39)');
    if (formData.includeCaneca) extrasList.push('• Caneca temática com frase (+R$ 29)');
    if (formData.includeBalao) extrasList.push('• Balão personalizado (+R$ 25)');

    const message = `🌸 *NOVO PEDIDO PELO SITE — CESTAS DA LU* 🌸\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `🔖 *Código do Pedido:* #${orderId}\n` +
      `🎁 *Cesta:* ${product.name}\n` +
      `💰 *Valor Total:* ${totalPriceFormatted}\n\n` +
      `👤 *Quem Envia:* ${formData.senderName} (${formData.senderPhone || 'Não informado'})\n` +
      `💝 *Presenteado(a):* ${formData.receiverName}\n` +
      `📅 *Data da Entrega:* ${formData.deliveryDate}\n` +
      `⏰ *Turno:* ${formData.deliveryPeriod}\n` +
      `📍 *Endereço:* ${formData.address} - ${formData.neighborhood}, ${formData.city}\n\n` +
      `💌 *Dedicatória do Cartão:*\n"${formData.customMessage || 'Sem mensagem adicional'}"\n\n` +
      (extrasList.length > 0 
        ? `✨ *Mimos Extras Selecionados:*\n${extrasList.join('\n')}\n\n` 
        : '') +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `💳 *Pagamento via Chave Pix:* ${STORE_CONFIG.pixKey}\n` +
      `✅ *Segue em anexo o comprovante do Pix!*`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/55${STORE_CONFIG.phone}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-[#4E6B56]/20 overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
        
        {/* TOPO DO MODAL */}
        <div className="px-6 py-4 border-b border-[#4E6B56]/15 flex items-center justify-between bg-[#FBF9F5]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#4E6B56] flex items-center justify-center text-white text-xs font-bold shadow-sm">
              {step === 1 ? '1' : '2'}
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1C1D1B]">
                {step === 1 ? 'Dados da Entrega, Mimos & Dedicatória' : 'Pagamento Pix & Confirmação'}
              </h3>
              <p className="text-[11px] font-mono text-[#4D4E4B]">
                Pedido #{orderId} • {product.name}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-[#4D4E4B] hover:text-[#1C1D1B] transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ETAPA 1: FORMULÁRIO COMPLETO */}
        {step === 1 && (
          <form onSubmit={handleNextStep} className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
            
            {/* RESUMO DO ITEM COM PREÇO DINÂMICO */}
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#FBF9F5] border border-[#4E6B56]/15">
              <img src={product.image} alt="" className="w-16 h-16 rounded-xl object-cover shadow-sm" />
              <div className="flex-1">
                <h4 className="text-sm font-bold text-[#1C1D1B]">{product.name}</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-[#4E6B56] font-bold">
                    Total: {totalPriceFormatted}
                  </span>
                  {extrasTotal > 0 && (
                    <span className="text-[10px] font-mono text-[#D48C80] bg-[#D48C80]/10 px-2 py-0.5 rounded-full border border-[#D48C80]/30 font-semibold">
                      (+R$ {extrasTotal} em adicionais)
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* QUEM ESTÁ ENVIANDO */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#4E6B56] font-bold">1. Seus Dados (Quem Envia)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-[#4D4E4B] block mb-1 font-medium">Seu Nome Completo *</label>
                  <input 
                    type="text" 
                    name="senderName"
                    required
                    value={formData.senderName}
                    onChange={handleChange}
                    placeholder="Ex: Carlos Oliveira"
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#4E6B56]/20 text-[#1C1D1B] text-xs focus:border-[#4E6B56] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#57534E] block mb-1 font-medium">Seu WhatsApp *</label>
                  <input 
                    type="tel" 
                    name="senderPhone"
                    required
                    value={formData.senderPhone}
                    onChange={handleChange}
                    placeholder="Ex: (21) 98888-7777"
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#6B1128]/15 text-[#2B0812] text-xs focus:border-[#6B1128] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* DADOS DA ENTREGA */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B1128] font-bold">2. Para Quem & Onde Entregar</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <label className="text-[11px] text-[#57534E] block mb-1 font-medium">Nome do(a) Presenteado(a) *</label>
                  <input 
                    type="text" 
                    name="receiverName"
                    required
                    value={formData.receiverName}
                    onChange={handleChange}
                    placeholder="Ex: Amanda Silva"
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#6B1128]/15 text-[#2B0812] text-xs focus:border-[#6B1128] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#57534E] block mb-1 font-medium">Data da Entrega *</label>
                  <input 
                    type="date" 
                    name="deliveryDate"
                    required
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#6B1128]/15 text-[#2B0812] text-xs focus:border-[#6B1128] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#57534E] block mb-1 font-medium">Turno Preferido *</label>
                  <select 
                    name="deliveryPeriod"
                    value={formData.deliveryPeriod}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#6B1128]/15 text-[#2B0812] text-xs focus:border-[#6B1128] outline-none"
                  >
                    <option value="Manhã (07h às 10h)">Manhã (07h às 10h)</option>
                    <option value="Meio-dia (11h às 13h)">Meio-dia (11h às 13h)</option>
                    <option value="Tarde (14h às 17h)">Tarde (14h às 17h)</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-[11px] text-[#57534E] block mb-1 font-medium">Endereço Completo com Número e Complemento *</label>
                  <input 
                    type="text" 
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Ex: Rua das Flores, 120, Apto 302"
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#6B1128]/15 text-[#2B0812] text-xs focus:border-[#6B1128] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#57534E] block mb-1 font-medium">Bairro *</label>
                  <input 
                    type="text" 
                    name="neighborhood"
                    required
                    value={formData.neighborhood}
                    onChange={handleChange}
                    placeholder="Ex: Barra da Tijuca / Centro"
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#6B1128]/15 text-[#2B0812] text-xs focus:border-[#6B1128] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#57534E] block mb-1 font-medium">Cidade</label>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#6B1128]/15 text-[#2B0812] text-xs focus:border-[#6B1128] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* DEDICATÓRIA DO CARTÃO */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B1128] font-bold">3. Mensagem para o Cartão Artesanal</h4>
              <textarea 
                rows="3"
                name="customMessage"
                value={formData.customMessage}
                onChange={handleChange}
                placeholder="Escreva aqui a declaração ou recado que irá escrito no cartão da Lu..."
                className="w-full p-3 rounded-xl bg-[#FAF7F2] border border-[#6B1128]/15 text-[#2B0812] text-xs focus:border-[#6B1128] outline-none resize-none leading-relaxed"
              />
            </div>

            {/* 4. UPSELLS / MIMOS EXTRAS OPCIONAIS PARA PERSONALIZAR */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B1128] font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                  Deseja tornar o presente ainda mais especial?
                </h4>
                <span className="text-[10px] font-mono text-[#78716C]">Opcional</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* UPSELL 1: POLAROID */}
                <label className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                  formData.includePolaroid 
                    ? 'bg-[#FAF7F2] border-[#6B1128] shadow-sm' 
                    : 'bg-white border-[#6B1128]/15 hover:border-[#6B1128]/30'
                }`}>
                  <div className="flex items-center gap-2.5">
                    <input 
                      type="checkbox"
                      name="includePolaroid"
                      checked={formData.includePolaroid}
                      onChange={handleChange}
                      className="w-4 h-4 rounded text-[#6B1128] accent-[#6B1128]"
                    />
                    <div className="text-left">
                      <span className="text-xs font-bold text-[#2B0812] block">Foto Polaroid</span>
                      <span className="text-[10px] text-[#78716C]">Envie sua foto no WhatsApp</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#6B1128]">+R$ 15</span>
                </label>

                {/* UPSELL 2: PELÚCIA */}
                <label className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                  formData.includePelucia 
                    ? 'bg-[#FAF7F2] border-[#6B1128] shadow-sm' 
                    : 'bg-white border-[#6B1128]/15 hover:border-[#6B1128]/30'
                }`}>
                  <div className="flex items-center gap-2.5">
                    <input 
                      type="checkbox"
                      name="includePelucia"
                      checked={formData.includePelucia}
                      onChange={handleChange}
                      className="w-4 h-4 rounded text-[#6B1128] accent-[#6B1128]"
                    />
                    <div className="text-left">
                      <span className="text-xs font-bold text-[#2B0812] block">Pelúcia com Laço</span>
                      <span className="text-[10px] text-[#78716C]">Ursinho macio antialérgico</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#6B1128]">+R$ 39</span>
                </label>

                {/* UPSELL 3: CANECA AFETIVA */}
                <label className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                  formData.includeCaneca 
                    ? 'bg-[#FAF7F2] border-[#6B1128] shadow-sm' 
                    : 'bg-white border-[#6B1128]/15 hover:border-[#6B1128]/30'
                }`}>
                  <div className="flex items-center gap-2.5">
                    <input 
                      type="checkbox"
                      name="includeCaneca"
                      checked={formData.includeCaneca}
                      onChange={handleChange}
                      className="w-4 h-4 rounded text-[#6B1128] accent-[#6B1128]"
                    />
                    <div className="text-left">
                      <span className="text-xs font-bold text-[#2B0812] block">Caneca com Frase</span>
                      <span className="text-[10px] text-[#78716C]">Cerâmica decorada com laço</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#6B1128]">+R$ 29</span>
                </label>

                {/* UPSELL 4: BALÃO PERSONALIZADO */}
                <label className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                  formData.includeBalao 
                    ? 'bg-[#FAF7F2] border-[#6B1128] shadow-sm' 
                    : 'bg-white border-[#6B1128]/15 hover:border-[#6B1128]/30'
                }`}>
                  <div className="flex items-center gap-2.5">
                    <input 
                      type="checkbox"
                      name="includeBalao"
                      checked={formData.includeBalao}
                      onChange={handleChange}
                      className="w-4 h-4 rounded text-[#6B1128] accent-[#6B1128]"
                    />
                    <div className="text-left">
                      <span className="text-xs font-bold text-[#2B0812] block">Balão Personalizado</span>
                      <span className="text-[10px] text-[#78716C]">Balão metalizado com nome</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#6B1128]">+R$ 25</span>
                </label>
              </div>
            </div>

            {/* BOTÃO PROSSEGUIR */}
            <button
              type="submit"
              className="btn-scan btn-spotlight w-full py-4 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-[#4E6B56] hover:bg-[#374E3E] active:scale-98 transition-all shadow-xl flex items-center justify-center gap-2 border border-white/20"
            >
              <div className="spotlight-beam" />
              <div className="scan-line" />
              <span className="relative z-10">Prosseguir para o Pagamento Pix ({totalPriceFormatted})</span>
              <ArrowRight className="w-4 h-4 text-[#D48C80] relative z-10" />
            </button>
          </form>
        )}

        {/* ETAPA 2: CHAVE PIX & ENVIO PARA O WHATSAPP */}
        {step === 2 && (
          <div className="p-6 overflow-y-auto space-y-6 flex-1 text-center">
            
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#2B0812]">Quase lá! Realize o Pix</h3>
              <p className="text-xs text-[#57534E] mt-1 max-w-sm mx-auto">
                Chave oficial da Lu. Copie o número abaixo e faça a transferência no seu banco.
              </p>
            </div>

            {/* BOX DA CHAVE PIX */}
            <div className="p-5 rounded-2xl bg-[#FBF9F5] border border-[#4E6B56]/20 max-w-md mx-auto space-y-3 shadow-inner">
              <div className="flex items-center justify-between text-xs text-[#4D4E4B] font-mono">
                <span>Chave Pix (Celular):</span>
                <span>Favorecido: {STORE_CONFIG.pixReceiver}</span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#4E6B56]/25 shadow-sm">
                <span className="font-mono text-base font-bold text-emerald-700 tracking-wider">
                  {STORE_CONFIG.pixKey}
                </span>
                <button
                  onClick={handleCopyPix}
                  className="btn-scan btn-spotlight flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#4E6B56] hover:bg-[#374E3E] text-xs font-medium text-white transition-colors border border-white/20"
                >
                  <div className="spotlight-beam" />
                  <div className="scan-line scan-line-blush" />
                  {copiedPix ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300 relative z-10" />
                      <span className="text-emerald-200 relative z-10">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 relative z-10" />
                      <span className="relative z-10">Copiar Chave</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-left text-[11px] text-[#4D4E4B] space-y-1 pt-1">
                <p>• <strong>Valor a pagar:</strong> <span className="text-[#4E6B56] font-bold text-base">{totalPriceFormatted}</span></p>
                <p>• <strong>Identificador:</strong> Pedido #{orderId}</p>
              </div>
            </div>

            {/* BOTÃO WHATSAPP AUTO FOLLOW-UP */}
            <div className="space-y-3 max-w-md mx-auto pt-2">
              <button
                onClick={handleFinishToWhatsapp}
                className="btn-scan btn-spotlight w-full py-4 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:brightness-110 active:scale-98 transition-all shadow-xl shadow-emerald-900/25 flex items-center justify-center gap-2 border border-white/20"
              >
                <div className="spotlight-beam" />
                <div className="scan-line" />
                <Send className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Enviar Pedido & Comprovante no WhatsApp</span>
              </button>
              <p className="text-[11px] font-mono text-[#4D4E4B]">
                Ao clicar, o WhatsApp da Lu abrirá já com todas as informações, endereço e mimos adicionais prontos para produção.
              </p>
            </div>

            <button
              onClick={() => setStep(1)}
              className="text-xs text-[#4D4E4B] hover:text-[#1C1D1B] underline transition-colors"
            >
              ← Voltar e revisar dados
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

// --- MODAL DE CAPTURA DE LEAD PARA BAIXAR O CATÁLOGO EM PDF ---
export function DigitalCatalogModal({ isOpen, onClose, products }) {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    interesse: 'Café da Manhã & Aniversários'
  });
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownload = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.whatsapp) return;

    // Salva o lead no localStorage para histórico da loja
    try {
      const existingLeads = JSON.parse(localStorage.getItem('cestas_lu_leads') || '[]');
      existingLeads.push({
        ...formData,
        date: new Date().toISOString()
      });
      localStorage.setItem('cestas_lu_leads', JSON.stringify(existingLeads));
    } catch (err) {
      console.log('Lead salvo localmente');
    }

    setDownloaded(true);
    
    // Dispara o download direto do arquivo PDF oficial gerado
    try {
      const link = document.createElement('a');
      link.href = '/catalogo_cestas_da_lu.pdf';
      link.download = 'Catalogo-Oficial-Cestas-da-Lu.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      window.open('/catalogo_cestas_da_lu.pdf', '_blank');
    }
  };

  const handleOpenWhatsappWithLead = () => {
    const text = encodeURIComponent(
      `Olá Lu! Acabei de baixar o *Catálogo Digital Oficial* no site!\n\n` +
      `👤 *Nome:* ${formData.nome}\n` +
      `📱 *WhatsApp:* ${formData.whatsapp}\n` +
      (formData.email ? `✉️ *Email:* ${formData.email}\n` : '') +
      `🎯 *Interesse principal:* ${formData.interesse}\n\n` +
      `Gostaria de tirar umas dúvidas e ver a disponibilidade de datas para entrega.`
    );
    window.open(`https://wa.me/55${STORE_CONFIG.phone}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#FBF9F5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#4E6B56]/30 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="px-6 py-5 bg-white border-b border-[#4E6B56]/15 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E8F0EA] flex items-center justify-center text-[#4E6B56]">
              <FileText className="w-5 h-5 text-[#4E6B56]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1C1D1B] leading-none">
                Baixar Catálogo Oficial
              </h3>
              <span className="text-[11px] font-mono text-[#4E6B56] font-semibold mt-0.5 block">
                Edição Completa em PDF com Todas as Cestas & Preços
              </span>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#1C1D1B] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* CORPO / FORMULÁRIO DE CAPTURA */}
        <div className="p-6 overflow-y-auto space-y-5">
          
          {!downloaded ? (
            <>
              {/* BENEFÍCIOS */}
              <div className="p-4 rounded-2xl bg-[#E8F0EA]/60 border border-[#4E6B56]/20 flex items-center gap-3.5">
                <Sparkles className="w-6 h-6 text-[#D48C80] shrink-0" />
                <p className="text-xs text-[#2C4132] font-medium leading-relaxed">
                  Preencha abaixo para receber o <strong>Catálogo em Alta Definição (PDF)</strong> com fotos reais de cada cesta, opções de personalização e tabela completa de valores.
                </p>
              </div>

              <form onSubmit={handleDownload} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#4E6B56] mb-1.5">
                    Seu Nome Completo *
                  </label>
                  <input 
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Ex: Mariana Silveira"
                    className="w-full px-4 py-3 rounded-xl border border-[#4E6B56]/25 bg-white text-sm text-[#1C1D1B] focus:outline-none focus:border-[#4E6B56] focus:ring-1 focus:ring-[#4E6B56]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#4E6B56] mb-1.5">
                    WhatsApp (com DDD) *
                  </label>
                  <input 
                    type="tel"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="Ex: (21) 98765-4321"
                    className="w-full px-4 py-3 rounded-xl border border-[#4E6B56]/25 bg-white text-sm text-[#1C1D1B] focus:outline-none focus:border-[#4E6B56] focus:ring-1 focus:ring-[#4E6B56]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#4E6B56] mb-1.5">
                    Seu E-mail *
                  </label>
                  <input 
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ex: seuemail@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#4E6B56]/25 bg-white text-sm text-[#1C1D1B] focus:outline-none focus:border-[#4E6B56] focus:ring-1 focus:ring-[#4E6B56]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#4E6B56] mb-1.5">
                    Ocasião de Interesse
                  </label>
                  <select
                    name="interesse"
                    value={formData.interesse}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#4E6B56]/25 bg-white text-sm text-[#1C1D1B] focus:outline-none focus:border-[#4E6B56]"
                  >
                    <option>Café da Manhã & Amanhecer Especial</option>
                    <option>Aniversário & Romance com Flores/Pelúcia</option>
                    <option>Vinhos Nobres, Queijos & Linha Imperial</option>
                    <option>Espumante & Celebrações</option>
                    <option>Lembranças Corporativas / Kits em Lote</option>
                    <option>Maternidade & Família</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn-scan btn-spotlight w-full py-4 rounded-2xl bg-[#4E6B56] hover:bg-[#374E3E] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 border border-white/20 mt-2"
                >
                  <div className="spotlight-beam" />
                  <div className="scan-line" />
                  <Download className="w-4 h-4 text-emerald-300 relative z-10" />
                  <span className="relative z-10">Liberar & Baixar Catálogo em PDF Agora</span>
                </button>
              </form>
            </>
          ) : (
            /* TELA APÓS BAIXAR: BOTÃO DE FALAR NO WHATSAPP */
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-[#1C1D1B]">
                  Catálogo Liberado com Sucesso!
                </h4>
                <p className="text-xs text-[#4D4E4B] max-w-sm mx-auto mt-1">
                  Seu download foi iniciado. Já quer consultar a disponibilidade da Lu para a data que você precisa?
                </p>
              </div>

              <div className="pt-2 space-y-2.5">
                <a
                  href="/catalogo_cestas_da_lu.pdf"
                  download="Catalogo-Oficial-Cestas-da-Lu.pdf"
                  className="btn-scan btn-spotlight w-full py-3.5 rounded-2xl bg-[#4E6B56] hover:bg-[#374E3E] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 border border-white/20"
                >
                  <Download className="w-4 h-4 text-emerald-300" />
                  <span>Clique Aqui se o Download não Iniciou</span>
                </a>

                <button
                  onClick={handleOpenWhatsappWithLead}
                  className="btn-scan btn-spotlight w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 border border-white/20"
                >
                  <div className="spotlight-beam" />
                  <div className="scan-line" />
                  <MessageCircle className="w-4 h-4 text-white relative z-10" />
                  <span className="relative z-10">Falar com a Lu no WhatsApp Agora</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

// --- MODAL DE REVISTA DIGITAL / FLIPBOOK EM ESTILO CATÁLOGO REAL ---
export function FlipbookMagazineModal({ isOpen, onClose, onOpenPdfCapture, products = [] }) {
  const [currentPage, setCurrentPage] = useState(0);

  // Usa a lista completa de produtos do catálogo oficial
  const magazinePages = (products && products.length > 0) ? products : [
    {
      id: "p1",
      name: "Cesta Doce Natal",
      priceFormatted: "R$ 140,00",
      image: "/catalogo_doce_natal_140.jpg",
      badge: "Edição Especial de Natal",
      description: "Pães de mel artesanais, chocolate Alpino, suco integral e biscoitos amanteigados na caixa decorada."
    }
  ];

  if (!isOpen) return null;

  const current = magazinePages[currentPage];

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % magazinePages.length);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + magazinePages.length) % magazinePages.length);
  };

  const handleOrderWhatsapp = () => {
    const itemName = current.title || current.name;
    const itemPrice = current.priceFormatted || current.price;
    const text = encodeURIComponent(
      `Olá Lu! Estava folheando a *Revista Digital / Catálogo* no site e amei a *${itemName}* (${itemPrice})!\n\nGostaria de encomendar.`
    );
    window.open(`https://wa.me/55${STORE_CONFIG.phone}?text=${text}`, '_blank');
  };

  const itemName = current.title || current.name;
  const itemPrice = current.priceFormatted || current.price;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn select-none">
      <div 
        className="relative w-full max-w-4xl bg-[#FBF9F5] rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#4E6B56]/30 flex flex-col max-h-[96vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER DA REVISTA */}
        <div className="px-4 sm:px-6 py-3.5 bg-white border-b border-[#4E6B56]/15 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E8F0EA] flex items-center justify-center text-[#4E6B56]">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#4E6B56]" />
            </div>
            <div>
              <h3 className="font-serif text-sm sm:text-base font-bold text-[#1C1D1B] leading-none">
                Revista Digital • Cestas da Lu
              </h3>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#4E6B56] font-semibold mt-0.5 block">
                Página {currentPage + 1} de {magazinePages.length}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                if (onOpenPdfCapture) onOpenPdfCapture();
              }}
              className="btn-scan btn-spotlight hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#1C1D1B] bg-[#E8F0EA] hover:bg-[#d5e5d8] transition-all border border-[#4E6B56]/20"
            >
              <Download className="w-3.5 h-3.5 text-[#4E6B56]" />
              <span>Baixar em PDF</span>
            </button>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#1C1D1B] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CORPO DA LÂMINA ESTILO REVISTA */}
        <div className="p-3 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-4 shadow-md border border-[#4E6B56]/15 relative">
            
            {/* FOTO EM PROPORÇÃO AMPLA & DESTACADA */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#4E6B56]/10 flex items-center justify-center min-h-[300px]">
              <img 
                src={current.image} 
                alt={itemName}
                className="w-full max-h-[50vh] sm:max-h-[62vh] object-contain mx-auto"
              />

              {/* BADGE DE PREÇO FLUTUANTE */}
              <div className="absolute top-2.5 right-2.5 px-3 py-1 rounded-full bg-[#1C1D1B]/90 backdrop-blur-md border border-white/20 text-white shadow-lg flex items-center gap-1.5">
                <span className="text-[10px] font-mono uppercase text-[#A3C4AC] font-bold">Valor:</span>
                <span className="text-xs sm:text-base font-bold text-amber-300 font-mono">{itemPrice}</span>
              </div>
            </div>

            {/* BOTÕES DE FOLHEAR NA LATERAL (SETA ESQUERDA E DIREITA) */}
            <button 
              onClick={handlePrev}
              className="absolute -left-2.5 sm:-left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1C1D1B] text-white shadow-xl flex items-center justify-center hover:bg-[#4E6B56] active:scale-90 transition-all border-2 border-white z-10"
              title="Página anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute -right-2.5 sm:-right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1C1D1B] text-white shadow-xl flex items-center justify-center hover:bg-[#4E6B56] active:scale-90 transition-all border-2 border-white z-10"
              title="Próxima página"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

          </div>

          {/* MINIATURAS DAS PÁGINAS NO RODAPÉ */}
          <div className="flex items-center gap-2 mt-3 overflow-x-auto py-1 max-w-full scrollbar-none px-2">
            {magazinePages.map((page, idx) => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(idx)}
                className={`relative rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                  idx === currentPage 
                    ? 'border-[#4E6B56] scale-105 shadow-md' 
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={page.image} 
                  alt="" 
                  className="w-10 h-12 sm:w-12 sm:h-14 object-cover"
                />
              </button>
            ))}
          </div>

        </div>

        {/* RODAPÉ DE AÇÃO COM WHATSAPP DIRETO */}
        <div className="px-4 sm:px-6 py-3 bg-white border-t border-[#4E6B56]/15 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="text-center sm:text-left">
            <h4 className="text-xs sm:text-sm font-bold text-[#1C1D1B] truncate max-w-sm">
              {itemName}
            </h4>
            <p className="text-[11px] text-[#4D4E4B] hidden sm:block">
              {current.description ? current.description.slice(0, 75) + '...' : 'Reserve com antecedência antes que acabem os lotes!'}
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleOrderWhatsapp}
              className="btn-scan btn-spotlight w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-2xl bg-[#4E6B56] hover:bg-[#374E3E] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all border border-white/20"
            >
              <div className="spotlight-beam" />
              <div className="scan-line" />
              <MessageCircle className="w-4 h-4 text-[#D48C80] relative z-10" />
              <span className="relative z-10">Pedir no WhatsApp ({itemPrice})</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// --- FOOTER CINEMATOGRÁFICO ---
export function Footer() {
  return (
    <footer className="bg-[#1C1D1B] text-[#FBF9F5] rounded-t-[3rem] sm:rounded-t-[4rem] border-t border-[#4E6B56]/20 pt-16 pb-12 px-6 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
        
        {/* COLUNA 1: MARCA */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden shadow-sm border border-[#4E6B56]/30 bg-[#FBF9F5] flex items-center justify-center p-0.5">
              <img 
                src="/icone_cesta.png" 
                alt="Cestas da Lu Ícone" 
                className="w-full h-full object-contain" 
              />
            </div>
            <span className="font-serif text-2xl text-[#FBF9F5] font-medium tracking-tight">
              Cestas da Lu
            </span>
          </div>
          <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
            Cestas de café da manhã, chocolates finos, kits corporativos e presentes com afeto artesanal. Criando conexões memoráveis no Rio de Janeiro e região.
          </p>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4E6B56]/20 border border-[#4E6B56]/40 text-[11px] text-[#A3C4AC] font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Ateliê da Lu — Recebendo Pedidos Online
          </div>
        </div>

        {/* COLUNA 2: ATENDIMENTO DIRETO */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#A3C4AC] font-bold">Atendimento & Encomendas</h4>
          <p className="text-sm text-white/90">
            WhatsApp Oficial: <br />
            <a href={`https://wa.me/55${STORE_CONFIG.phone}`} className="text-lg font-bold text-[#FBF9F5] hover:text-[#A3C4AC] transition-colors">
              {STORE_CONFIG.phoneDisplay}
            </a>
          </p>
          <p className="text-xs text-white/70">
            Chave Pix: <strong className="font-mono text-white/95">{STORE_CONFIG.pixKey}</strong>
          </p>
          <p className="text-xs text-white/70">
            {STORE_CONFIG.location} • Entregas Agendadas
          </p>
        </div>

        {/* COLUNA 3: INSTAGRAM & GOOGLE MAPS */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#A3C4AC] font-bold">Redes & Localização</h4>
          
          <a 
            href={STORE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-2xl bg-white/10 border border-white/10 hover:border-[#4E6B56] text-white transition-all group"
          >
            <InstagramIcon className="w-5 h-5 text-[#D48C80] group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <span className="text-xs font-bold block">{STORE_CONFIG.instagramHandle}</span>
              <span className="text-[10px] text-white/60">Acompanhe no Instagram</span>
            </div>
          </a>

          <a 
            href={STORE_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-2xl bg-white/10 border border-white/10 hover:border-[#4E6B56] text-white transition-all group"
          >
            <MapPin className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <span className="text-xs font-bold block">Ver no Google Maps</span>
              <span className="text-[10px] text-white/60">Avaliação ⭐ 5.0 no Google</span>
            </div>
          </a>
        </div>

      </div>

      <div className="max-w-6xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/50 gap-4">
        <span>© {new Date().getFullYear()} Cestas da Lu. Todos os direitos reservados.</span>
        <span>Feito com amor artesanal & tecnologia de alta performance.</span>
      </div>
    </footer>
  );
}
