import React, { useState } from 'react';
import { 
  NoiseOverlay, 
  Navbar, 
  HeroInteractive, 
  InfiniteFeedGallery, 
  StoriesSection,
  CatalogSection, 
  PhilosophySection, 
  ProductDetailModal, 
  CheckoutModal, 
  DigitalCatalogModal,
  FlipbookMagazineModal,
  Footer 
} from './components';
import { 
  CAROUSEL_GALLERY_ROW_1, 
  CAROUSEL_GALLERY_ROW_2, 
  PRODUCTS_CATALOG, 
  REVIEWS, 
  STORE_CONFIG 
} from './data';
import { 
  Star, 
  Heart, 
  MessageCircle, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  CalendarDays, 
  ChevronRight,
  ArrowRight,
  Sparkles,
  BookOpen,
  Download,
  FileText
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'catalog'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const [isFlipbookOpen, setIsFlipbookOpen] = useState(false);

  // Abrir modal de detalhes
  const handleSelectProduct = (product) => {
    // Se o item tiver um ID cadastrado no catálogo completo, pega seus dados ricos preservando a imagem exata
    const match = PRODUCTS_CATALOG.find(p => p.id === product.id);
    if (match) {
      setSelectedProduct(match);
    } else {
      setSelectedProduct(product);
    }
  };

  // Avançar diretamente para o Checkout
  const handleBuyNow = (product) => {
    setSelectedProduct(null);
    setCheckoutProduct(product);
  };

  // Abrir a página inteira de catálogo
  const handleOpenFullCatalog = () => {
    setCurrentView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Voltar para a Home
  const handleOpenHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#FBF9F5] text-[#1C1D1B] selection:bg-[#4E6B56] selection:text-white">
      {/* TEXTURA NOISE ANALÓGICA */}
      <NoiseOverlay />

      {/* NAVBAR FLUTUANTE COM CONTROLE DE VIEW */}
      <Navbar 
        onOpenHome={handleOpenHome}
        onOpenCatalog={handleOpenFullCatalog}
        onOpenDigitalCatalog={() => setIsCatalogModalOpen(true)}
        currentView={currentView}
      />

      {currentView === 'home' ? (
        <main>
          {/* 1. HERO INTERATIVA COM LOOP INFINITO EM 2 COLUNAS VERTICAIS */}
          <HeroInteractive 
            onSelectCesta={handleSelectProduct}
          />

          {/* 2. BARRA DE DIFERENCIAIS INTERATIVA / AUTORIDADE */}
          <section className="border-y border-[#4E6B56]/15 bg-white/90 py-5 px-4 backdrop-blur-md shadow-sm">
            <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-around gap-4 sm:gap-6 text-xs text-[#4D4E4B] font-mono">
              <div className="flex items-center gap-2 p-2 rounded-xl hover:bg-[#FBF9F5] transition-colors cursor-default group">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-bold text-[#1C1D1B] group-hover:text-[#4E6B56] transition-colors">+120 Cestas Entregues com Amor</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl hover:bg-[#FBF9F5] transition-colors cursor-default group">
                <Sparkles className="w-4 h-4 text-[#D48C80] group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-[#1C1D1B] transition-colors">100% Produção Artesanal e Afetiva</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl hover:bg-[#FAF7F2] transition-colors cursor-default group">
                <Clock className="w-4 h-4 text-[#C59B27] group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-[#2B0812] transition-colors">Entregas Pontuais no Horário Marcado</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl hover:bg-[#FAF7F2] transition-colors cursor-default group">
                <Heart className="w-4 h-4 text-[#8E1836] group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-[#2B0812] transition-colors">Cartão Personalizado com Sua Dedicatória</span>
              </div>
            </div>
          </section>

          {/* 3. CARROSSÉIS INFINITOS 4:5 (FEED DO INSTAGRAM INTERATIVO) */}
          <InfiniteFeedGallery 
            itemsRow1={CAROUSEL_GALLERY_ROW_1}
            itemsRow2={CAROUSEL_GALLERY_ROW_2}
            onSelectProduct={handleSelectProduct}
          />

          {/* 3.5 SEÇÃO INSTAGRAM STORIES (VÍDEOS CURTOS & BASTIDORES DA LU) */}
          <StoriesSection 
            onSelectProduct={handleSelectProduct}
          />

          {/* 3.8 BANNER DE DESTAQUE: CATÁLOGO DIGITAL EM PDF PARA BAIXAR */}
          <section className="px-4 sm:px-6 max-w-6xl mx-auto -mb-10 relative z-10">
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#4E6B56] to-[#374E3E] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/15">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                  <FileText className="w-7 h-7 text-[#D48C80]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#A3C4AC] font-bold">
                    Material Completo em PDF
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FBF9F5]">
                    Quer o Catálogo Completo para Ver no Celular ou Compartilhar?
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 max-w-xl font-light">
                    Baixe o folheto oficial em PDF com todas as opções, itens inclusos e valores atualizados para você consultar quando quiser.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <button
                  onClick={() => setIsFlipbookOpen(true)}
                  className="btn-scan btn-spotlight px-6 py-3.5 rounded-2xl bg-white text-[#1C1D1B] hover:bg-[#FBF9F5] text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <div className="spotlight-beam" />
                  <div className="scan-line scan-line-blush" />
                  <BookOpen className="w-4 h-4 text-[#4E6B56] relative z-10" />
                  <span className="relative z-10">Folhear Revista Digital</span>
                </button>

                <button
                  onClick={() => setIsCatalogModalOpen(true)}
                  className="btn-scan btn-spotlight px-6 py-3.5 rounded-2xl bg-[#1C1D1B] text-white hover:bg-black text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 w-full sm:w-auto border border-white/20"
                >
                  <div className="spotlight-beam" />
                  <div className="scan-line" />
                  <Download className="w-4 h-4 text-[#D48C80] relative z-10" />
                  <span className="relative z-10">Baixar Catálogo (PDF)</span>
                </button>
              </div>
            </div>
          </section>

          {/* 4. VITRINE INICIAL DA HOME COM 9 PRODUTOS */}
          <CatalogSection 
            products={PRODUCTS_CATALOG}
            onSelectProduct={handleSelectProduct}
            onBuyNow={handleBuyNow}
            isFullCatalogView={false}
            onToggleFullCatalog={handleOpenFullCatalog}
          />

        {/* 5. PROTOCOL DE PEDIDO / COMO FUNCIONA (PASSO A PASSO TRANSPARENTE) */}
        <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#4E6B56] font-bold">
              Tudo Muito Fácil e Rápido
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1D1B] tracking-tight">
              Como Funciona o Seu Pedido
            </h2>
            <p className="text-[#4D4E4B] text-sm max-w-md mx-auto leading-relaxed">
              Sem burocracia ou demora. Você escolhe o presente ideal, escreve o seu recado especial e a Lu cuida de cada detalhe com carinho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* ETAPA 1 */}
            <div className="p-8 rounded-3xl bg-white border border-[#4E6B56]/15 space-y-4 hover:border-[#4E6B56] transition-all shadow-sm hover:shadow-md">
              <span className="font-mono text-3xl font-extrabold text-[#4E6B56]/30">01</span>
              <h3 className="text-xl font-bold text-[#1C1D1B]">Escolha a Cesta & Mensagem</h3>
              <p className="text-sm text-[#4D4E4B] leading-relaxed font-light">
                Selecione o modelo desejado no catálogo, informe o endereço de entrega, a data e a mensagem do cartão.
              </p>
            </div>

            {/* ETAPA 2 */}
            <div className="p-8 rounded-3xl bg-white border border-[#4E6B56]/15 space-y-4 hover:border-[#4E6B56] transition-all shadow-sm hover:shadow-md">
              <span className="font-mono text-3xl font-extrabold text-[#4E6B56]/30">02</span>
              <h3 className="text-xl font-bold text-[#1C1D1B]">Pagamento Pix Imediato</h3>
              <p className="text-sm text-[#4D4E4B] leading-relaxed font-light">
                Copie a chave Pix da Lu diretamente na tela com cálculo instantâneo. O valor é fixo e transparente.
              </p>
            </div>

            {/* ETAPA 3 */}
            <div className="p-8 rounded-3xl bg-white border border-[#4E6B56]/15 space-y-4 hover:border-[#4E6B56] transition-all shadow-sm hover:shadow-md">
              <span className="font-mono text-3xl font-extrabold text-[#4E6B56]/30">03</span>
              <h3 className="text-xl font-bold text-[#1C1D1B]">Confirmação e Fotos no WhatsApp</h3>
              <p className="text-sm text-[#4D4E4B] leading-relaxed font-light">
                O pedido chega pronto no WhatsApp da Lu. Ela confirma tudo com você e manda fotos da cesta prontinha antes de sair para entrega!
              </p>
            </div>
          </div>
        </section>

        {/* 6. MANIFESTO & VALOR AFETIVO */}
        <PhilosophySection />

        {/* 6.5 SOUVENIRS E KITS CORPORATIVOS PARA FIM DE ANO */}
        <section id="corporativo" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="rounded-[3rem] p-8 sm:p-12 bg-[#E8F0EA]/70 border border-[#4E6B56]/20 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#4E6B56] font-bold">
                  Pequenas Empresas & Parcerias
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1D1B] tracking-tight">
                  Lembranças de Fim de Ano & Presentes Corporativos
                </h2>
                <p className="text-sm text-[#4D4E4B] leading-relaxed">
                  Surpreenda seus colaboradores, clientes VIP e parceiros com kits e souvenirs artesanais montados com a identidade da sua marca. Condições especiais para pedidos em lote.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={`https://wa.me/55${STORE_CONFIG.phone}?text=Ol%C3%A1%20Lu!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20lembran%C3%A7as%20corporativas%20de%20fim%20de%20ano.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-scan btn-spotlight px-6 py-3.5 rounded-2xl bg-[#4E6B56] hover:bg-[#3D5443] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 border border-white/20"
                  >
                    <div className="spotlight-beam" />
                    <div className="scan-line" />
                    <MessageCircle className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Solicitar Orçamento no WhatsApp</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <div className="relative group rounded-2xl overflow-hidden shadow-sm border border-white">
                  <img 
                    src="/lu_real_chandon_petiscos.jpg" 
                    alt="Bolsa Chandon Luxo" 
                    className="object-cover h-32 sm:h-36 w-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[9px] text-white font-medium">
                    Bolsa Chandon Luxo
                  </span>
                </div>
                <div className="relative group rounded-2xl overflow-hidden shadow-sm border border-white">
                  <img 
                    src="/lu_real_lote_corporativo_natal.jpg" 
                    alt="Cestas em Lote para Empresas" 
                    className="object-cover h-32 sm:h-36 w-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[9px] text-white font-medium">
                    Lotes em Atacado
                  </span>
                </div>
                <div className="relative group rounded-2xl overflow-hidden shadow-sm border border-white col-span-2 sm:col-span-1">
                  <img 
                    src="/lu_real_caneca_papainoel_box.jpg" 
                    alt="Box Papai Noel e Bombons" 
                    className="object-cover h-32 sm:h-36 w-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[9px] text-white font-medium">
                    Canecas em Box
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. DEPOIMENTOS REAIS / PROVA SOCIAL */}
        <section id="depoimentos" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#4E6B56] font-bold">
              Depoimentos de Clientes
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1D1B] tracking-tight">
              O Que Diz Quem Já Se Emocionou
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div 
                key={rev.id}
                className="p-7 rounded-3xl bg-white border border-[#4E6B56]/15 flex flex-col justify-between space-y-4 hover:border-[#4E6B56] transition-all shadow-sm hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-[#4D4E4B] italic font-serif leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#4E6B56]/10 flex items-center justify-between text-xs">
                  <div>
                    <h5 className="font-bold text-[#1C1D1B]">{rev.name}</h5>
                    <span className="text-[11px] text-[#78716C]">{rev.city}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#4E6B56] px-2.5 py-1 rounded-full bg-[#E8F0EA] font-semibold border border-[#4E6B56]/15">
                    {rev.cesta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. BANNER CTA FINAL COM WHATSAPP DIRETO */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto rounded-[3rem] p-8 sm:p-14 bg-[#1C1D1B] border border-[#4E6B56]/30 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#4E6B56]/20 blur-3xl pointer-events-none" />
            
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3C4AC] block mb-3 font-bold">
              Surpreenda Hoje Mesmo
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#FBF9F5] tracking-tight max-w-2xl mx-auto leading-tight">
              Tem uma data especial chegando? <br />
              <span className="italic text-[#A3C4AC]">Deixe o afeto por nossa conta.</span>
            </h2>
            <p className="text-white/80 text-sm max-w-md mx-auto mt-4 font-light">
              Escolha uma cesta no catálogo ou chame a Lu agora no WhatsApp para uma cesta 100% personalizada com os itens que você quiser.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <button
                onClick={handleOpenFullCatalog}
                className="btn-scan btn-spotlight px-8 py-4 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1C1D1B] bg-[#FBF9F5] hover:bg-white active:scale-95 transition-all shadow-xl shadow-black/20 flex items-center gap-2 border border-white"
              >
                <div className="spotlight-beam" />
                <div className="scan-line scan-line-blush" />
                <span className="relative z-10">Explorar Catálogo Agora</span>
                <ArrowRight className="w-4 h-4 text-[#4E6B56] relative z-10" />
              </button>

              <a
                href={`https://wa.me/55${STORE_CONFIG.phone}?text=Ol%C3%A1%20Lu!%20Gostaria%20de%20montar%20uma%20cesta%20personalizada%20do%20meu%20jeito.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-scan btn-spotlight px-8 py-4 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 active:scale-95 transition-all flex items-center gap-2"
              >
                <div className="spotlight-beam" />
                <div className="scan-line" />
                <MessageCircle className="w-4 h-4 text-[#D48C80] relative z-10" />
                <span className="relative z-10">Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      ) : (
        /* TELA DEDICADA: CATÁLOGO COMPLETO */
        <main className="pt-28 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
            <button
              onClick={handleOpenHome}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#4E6B56] hover:text-[#1C1D1B] transition-colors py-2 px-4 rounded-full bg-white border border-[#4E6B56]/20 shadow-sm"
            >
              ← Voltar para o Início
            </button>
          </div>

          <CatalogSection 
            products={PRODUCTS_CATALOG}
            onSelectProduct={handleSelectProduct}
            onBuyNow={handleBuyNow}
            isFullCatalogView={true}
            onToggleFullCatalog={handleOpenHome}
          />
        </main>
      )}

      {/* FOOTER */}
      <Footer />

      {/* MODAL DE DETALHES DA CESTA */}
      <ProductDetailModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAdvanceToCheckout={handleBuyNow}
      />

      {/* MODAL DE CHECKOUT & PIX */}
      {checkoutProduct && (
        <CheckoutModal 
          product={checkoutProduct}
          onClose={() => setCheckoutProduct(null)}
        />
      )}

      {/* MODAL DE CAPTURA DO PDF */}
      <DigitalCatalogModal 
        isOpen={isCatalogModalOpen}
        onClose={() => setIsCatalogModalOpen(false)}
        products={PRODUCTS_CATALOG}
        onSelectProduct={handleSelectProduct}
      />

      {/* MODAL / FLIPBOOK DE REVISTA DIGITAL INTERATIVA */}
      <FlipbookMagazineModal 
        isOpen={isFlipbookOpen}
        onClose={() => setIsFlipbookOpen(false)}
        onOpenPdfCapture={() => setIsCatalogModalOpen(true)}
        products={PRODUCTS_CATALOG}
      />
    </div>
  );
}

