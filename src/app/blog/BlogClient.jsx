"use client";

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import Link from 'next/link';
import { 
  Search, Calendar, Clock, User, 
  ArrowRight, BookOpen, TrendingUp, Shield, Zap, Building, 
  X, Hash, Folder, ChevronDown, ChevronUp
} from 'lucide-react';
import { trackCTAClick, trackBlogSearch, trackBlogFilter } from '@/lib/tracking';
import { Reveal, RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { Particles } from "@/components/ui/Particles";

const EASE = [0.22, 1, 0.36, 1];

export default function BlogClient({ initialArticles, initialCategories, initialTags }) {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const formType = 'general';

  const [articles] = useState(initialArticles);
  const [categories] = useState(initialCategories);
  const [tags] = useState(initialTags);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [selectedTag, setSelectedTag] = useState('tous');
  const [sortBy, setSortBy] = useState('date-desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6);
  const [expandedTags, setExpandedTags] = useState(false);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const filteredArticles = useMemo(() => {
    let filtered = [...articles];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        (article.tags && article.tags.some(tag => tag.toLowerCase().includes(query))) ||
        article.category.toLowerCase().includes(query)
      );
    }

    if (selectedCategory !== 'tous') {
      filtered = filtered.filter(article => 
        article.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedTag !== 'tous') {
      filtered = filtered.filter(article => 
        article.tags?.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      );
    }

    switch (sortBy) {
      case 'date-asc':
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'popular':
      case 'date-desc':
      default:
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
    }

    return filtered;
  }, [articles, searchQuery, selectedCategory, selectedTag, sortBy]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const getCategoryIcon = (category) => {
    switch (category?.toLowerCase()) {
      case 'conformité':
        return <Shield className="w-4 h-4" />;
      case 'seo':
        return <TrendingUp className="w-4 h-4" />;
      case 'technique':
        return <Zap className="w-4 h-4" />;
      case 'stratégie':
        return <Building className="w-4 h-4" />;
      default:
        return <Folder className="w-4 h-4" />;
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const resetFilters = () => {
    trackBlogFilter('reset', 'all');
    setSearchQuery('');
    setSelectedCategory('tous');
    setSelectedTag('tous');
    setSortBy('date-desc');
  };

  const hasFilters = searchQuery || selectedCategory !== 'tous' || selectedTag !== 'tous';

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        {/* HERO */}
        <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#FAFAFA] dark:bg-[#0A0A0A] px-4 py-24">
          <motion.div
            style={{ y: gridY }}
            className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-20"
          />
          <Particles />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A]"
            >
              <BookOpen size={14} className="text-[#0066FF]" />
              <span className="text-xs font-medium text-[#666666] dark:text-[#999999] uppercase tracking-[0.2em]">
                Ressources Expertes
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-8 leading-[1.05]">
              <span className="block overflow-hidden pb-1 -mb-1">
                <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.3, duration: 0.9, ease: EASE }} className="block">
                  Le Blog{' '}
                  <span className="text-[#0066FF]">Killian Lecrut</span>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: EASE }}
              className="text-xl sm:text-2xl text-[#666666] dark:text-[#999999] max-w-3xl mx-auto leading-relaxed mb-12 font-light"
            >
              Articles experts sur la création de sites web pour professions libérales et artisans. 
              SEO local, conformité RGPD/CNB, automatisation, développement sur-mesure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7, ease: EASE }}
              className="max-w-2xl mx-auto mb-16"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#666666] dark:text-[#999999]" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => { trackBlogSearch(e.target.value); setSearchQuery(e.target.value); }}
                  placeholder="Rechercher un article, un mot-clé, une thématique..."
                  className="w-full pl-12 pr-12 py-4 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] text-[#2A2A2A] dark:text-[#FAFAFA] font-light placeholder:text-[#999999] dark:placeholder:text-[#666666] focus:outline-none focus:border-[#0066FF] transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#666666] dark:text-[#999999] hover:text-[#2A2A2A] dark:hover:text-[#FAFAFA]"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E5E5E5] dark:bg-[#2A2A2A] max-w-3xl mx-auto"
            >
              {[
                { label: "Articles", value: articles.length, icon: BookOpen },
                { label: "Catégories", value: categories.length, icon: Folder },
                { label: "Mots-clés", value: tags.length, icon: Hash },
                { label: "Experts", value: "1", icon: User }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div key={index} variants={staggerItem} className="bg-white dark:bg-[#1A1A1A] p-6 text-center">
                    <div className="text-3xl font-light text-[#0066FF] mb-2">{stat.value}</div>
                    <div className="flex items-center justify-center gap-2 text-sm text-[#666666] dark:text-[#999999] font-light">
                      <Icon size={16} />
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#999999] dark:text-[#666666]">Découvrir</span>
            <div className="relative w-px h-12 bg-[#E5E5E5] dark:bg-[#2A2A2A] overflow-hidden">
              <motion.div className="absolute top-0 left-0 w-full h-5 bg-[#0066FF]" animate={{ y: [-20, 48] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} />
            </div>
          </motion.div>
        </section>

        {/* Section Filtres & Articles */}
        <section className="relative py-20 px-4 bg-white dark:bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Filtres - barre horizontale */}
            <Reveal className="mb-16">
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => { trackBlogFilter('category', 'tous'); setSelectedCategory('tous'); }}
                  className={`px-4 py-2 text-sm border transition-colors ${selectedCategory === 'tous' ? 'border-[#0066FF] bg-[#0066FF] text-white' : 'border-[#E5E5E5] dark:border-[#2A2A2A] text-[#666666] dark:text-[#999999] hover:border-[#0066FF] hover:text-[#0066FF]'}`}
                >
                  Tous ({articles.length})
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => { trackBlogFilter('category', category); setSelectedCategory(category); }}
                    className={`px-4 py-2 text-sm border transition-colors flex items-center gap-2 ${selectedCategory === category ? 'border-[#0066FF] bg-[#0066FF] text-white' : 'border-[#E5E5E5] dark:border-[#2A2A2A] text-[#666666] dark:text-[#999999] hover:border-[#0066FF] hover:text-[#0066FF]'}`}
                  >
                    {getCategoryIcon(category)}
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-y border-[#E5E5E5] dark:border-[#2A2A2A] py-4">
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setExpandedTags(!expandedTags)}
                    className="flex items-center gap-2 text-sm text-[#666666] dark:text-[#999999] hover:text-[#0066FF] transition-colors"
                  >
                    <Hash size={16} />
                    Mots-clés
                    {expandedTags ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {expandedTags && (
                    <div className="flex flex-wrap gap-2 w-full mt-2">
                      <button
                        onClick={() => { trackBlogFilter('tag', 'tous'); setSelectedTag('tous'); }}
                        className={`px-3 py-1 text-xs border transition-colors ${selectedTag === 'tous' ? 'border-[#0066FF] text-[#0066FF]' : 'border-[#E5E5E5] dark:border-[#2A2A2A] text-[#666666] dark:text-[#999999] hover:border-[#0066FF]'}`}
                      >
                        Tous
                      </button>
                      {tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => { trackBlogFilter('tag', tag); setSelectedTag(tag); }}
                          className={`px-3 py-1 text-xs border transition-colors ${selectedTag === tag ? 'border-[#0066FF] text-[#0066FF]' : 'border-[#E5E5E5] dark:border-[#2A2A2A] text-[#666666] dark:text-[#999999] hover:border-[#0066FF]'}`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tri + reset */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {[
                      { value: 'date-desc', label: 'Récents' },
                      { value: 'date-asc', label: 'Anciens' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => { trackBlogFilter('sort', option.value); setSortBy(option.value); }}
                        className={`px-3 py-1 text-sm border transition-colors ${sortBy === option.value ? 'border-[#0066FF] text-[#0066FF]' : 'border-[#E5E5E5] dark:border-[#2A2A2A] text-[#666666] dark:text-[#999999] hover:border-[#0066FF]'}`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  {hasFilters && (
                    <button
                      onClick={resetFilters}
                      className="text-sm text-[#0066FF] hover:text-[#2A2A2A] dark:hover:text-[#FAFAFA] transition-colors font-medium"
                    >
                      Réinitialiser
                    </button>
                  )}
                </div>
              </div>

              <p className="mt-6 text-sm text-[#666666] dark:text-[#999999] font-light">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                {hasFilters && ' avec les filtres actuels'}
              </p>
            </Reveal>

            {/* Liste des articles */}
            {filteredArticles.length > 0 ? (
              <div>
                {/* Article à la une */}
                {currentArticles.length > 0 && (
                  <Reveal>
                    <Link href={`/blog/${currentArticles[0].slug}`} onClick={() => trackCTAClick(currentArticles[0].title, 'blog_list')} className="group block">
                      <article className="relative border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] p-8 md:p-16 hover:border-[#0066FF] transition-colors duration-300 overflow-hidden">
                        <div className="flex flex-wrap items-center gap-4 mb-8">
                          <span className="inline-block px-3 py-1 border border-[#0066FF] text-[#0066FF] text-xs uppercase tracking-[0.2em]">
                            À la une
                          </span>
                          <span className="flex items-center gap-2 text-sm text-[#666666] dark:text-[#999999] font-light">
                            {getCategoryIcon(currentArticles[0].category)}
                            {currentArticles[0].category}
                          </span>
                          <span className="flex items-center gap-2 text-sm text-[#666666] dark:text-[#999999] font-light">
                            <Calendar size={14} />
                            {formatDate(currentArticles[0].date)}
                          </span>
                          <span className="flex items-center gap-2 text-sm text-[#666666] dark:text-[#999999] font-light">
                            <Clock size={14} />
                            {currentArticles[0].readingTime || '5'} min
                          </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] text-[#2A2A2A] dark:text-[#FAFAFA] mb-6 leading-[1.15] group-hover:text-[#0066FF] transition-colors">
                          {currentArticles[0].title}
                        </h2>

                        <p className="text-lg text-[#666666] dark:text-[#999999] leading-relaxed mb-8 font-light max-w-3xl">
                          {currentArticles[0].excerpt}
                        </p>

                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 border border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-center">
                              <User size={18} className="text-[#666666] dark:text-[#999999]" />
                            </div>
                            <div>
                              <div className="text-sm font-light text-[#2A2A2A] dark:text-[#FAFAFA]">{currentArticles[0].author || 'Killian Lecrut'}</div>
                              <div className="text-xs text-[#666666] dark:text-[#999999] font-light">{currentArticles[0].authorRole || 'Expert Développement Web'}</div>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-2 text-[#0066FF] font-medium group-hover:gap-4 transition-all">
                            Lire l'article
                            <ArrowRight size={18} />
                          </span>
                        </div>
                      </article>
                    </Link>
                  </Reveal>
                )}

                {/* Articles suivants - liste numérotée */}
                {currentArticles.length > 1 && (
                  <div className="mt-16">
                    <Reveal className="flex items-center gap-4 mb-8">
                      <span className="text-xs uppercase tracking-[0.3em] text-[#666666] dark:text-[#999999]">Tous les articles</span>
                      <div className="flex-1 h-px bg-[#E5E5E5] dark:bg-[#2A2A2A]" />
                    </Reveal>

                    <RevealStagger className="border-t border-[#E5E5E5] dark:border-[#2A2A2A]">
                      {currentArticles.slice(1).map((article, i) => (
                        <motion.div key={article.slug} variants={staggerItem}>
                          <Link href={`/blog/${article.slug}`} onClick={() => trackCTAClick(article.title, 'blog_list')} className="group flex items-start gap-6 md:gap-10 py-8 md:py-10 border-b border-[#E5E5E5] dark:border-[#2A2A2A] hover:bg-[#FAFAFA] dark:hover:bg-[#1F1F1F] transition-colors">
                            <span className="text-3xl md:text-4xl font-light text-[#E5E5E5] dark:text-[#2A2A2A] tabular-nums leading-none pt-1">
                              {String(i + 2).padStart(2, '0')}
                            </span>
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-3 text-xs text-[#666666] dark:text-[#999999] font-light mb-3">
                                <span className="flex items-center gap-1.5">
                                  {getCategoryIcon(article.category)}
                                  {article.category}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <Calendar size={12} />
                                  {formatDate(article.date)}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <Clock size={12} />
                                  {article.readingTime || '5'} min
                                </span>
                              </div>
                              <h3 className="text-xl md:text-2xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-2 group-hover:text-[#0066FF] transition-colors">
                                {article.title}
                              </h3>
                              <p className="text-[#666666] dark:text-[#999999] font-light leading-relaxed line-clamp-2">
                                {article.excerpt}
                              </p>
                            </div>
                            <ArrowRight size={20} className="text-[#0066FF] flex-shrink-0 mt-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </Link>
                        </motion.div>
                      ))}
                    </RevealStagger>
                  </div>
                )}
              </div>
            ) : (
              <Reveal>
                <div className="border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] p-16 text-center">
                  <div className="w-16 h-16 border border-[#E5E5E5] dark:border-[#2A2A2A] flex items-center justify-center mx-auto mb-6">
                    <Search className="text-[#666666] dark:text-[#999999]" size={24} />
                  </div>
                  <h3 className="text-2xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-4">Aucun article trouvé</h3>
                  <p className="text-[#666666] dark:text-[#999999] max-w-md mx-auto mb-8 font-light">
                    {searchQuery 
                      ? `Aucun article ne correspond à votre recherche "${searchQuery}". Essayez avec d'autres mots-clés.`
                      : "Aucun article ne correspond aux filtres sélectionnés. Essayez de modifier vos critères."
                    }
                  </p>
                  <button
                    onClick={resetFilters}
                    className="px-6 py-3 bg-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] text-white hover:text-[#0066FF] border border-[#0066FF] font-medium transition-all duration-300"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              </Reveal>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16 pt-8 border-t border-[#E5E5E5] dark:border-[#2A2A2A] text-center">
                <p className="text-[#666666] dark:text-[#999999] font-light mb-4">
                  Articles {indexOfFirstArticle + 1}-{Math.min(indexOfLastArticle, filteredArticles.length)} sur {filteredArticles.length}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <button
                    onClick={() => { const targetPage = Math.max(currentPage - 1, 1); trackBlogFilter('pagination', String(targetPage)); setCurrentPage(targetPage); }}
                    disabled={currentPage === 1}
                    aria-label="Page précédente"
                    className="px-4 py-2 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] text-[#666666] dark:text-[#999999] hover:border-[#0066FF] hover:text-[#0066FF] transition-colors font-light disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← Précédent
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => { trackBlogFilter('pagination', String(page)); setCurrentPage(page); }}
                      aria-label={`Page ${page}`}
                      className={`px-4 py-2 border font-light transition-colors ${
                        currentPage === page
                          ? 'border-[#0066FF] bg-[#0066FF] text-white'
                          : 'border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] text-[#666666] dark:text-[#999999] hover:border-[#0066FF] hover:text-[#0066FF]'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => { const targetPage = Math.min(currentPage + 1, totalPages); trackBlogFilter('pagination', String(targetPage)); setCurrentPage(targetPage); }}
                    disabled={currentPage === totalPages}
                    aria-label="Page suivante"
                    className="px-4 py-2 border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] text-[#666666] dark:text-[#999999] hover:border-[#0066FF] hover:text-[#0066FF] transition-colors font-light disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Suivant →
                  </button>
                </div>
              </div>
            )}

            {/* CTA Bottom */}
            <Reveal className="mt-20">
              <div className="border border-[#E5E5E5] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] p-12 text-center">
                <h3 className="text-3xl font-light text-[#2A2A2A] dark:text-[#FAFAFA] mb-6">
                  Vous avez une question spécifique ?
                </h3>
                <p className="text-[#666666] dark:text-[#999999] max-w-2xl mx-auto mb-8 font-light">
                  Nos articles couvrent les sujets principaux, mais chaque situation est unique. 
                  Contactez-nous pour discuter de votre projet spécifique.
                </p>
                <Magnetic strength={0.25}>
                  <button
                    onClick={() => { trackCTAClick('Poser une question', 'blog'); openModal('general'); }}
                    className="group px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white dark:hover:bg-[#1A1A1A] hover:text-[#0066FF] transition-all duration-300"
                  >
                    <span className="flex items-center gap-3">
                      Poser une question à l'expert
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={getModalTitle(formType)}>
        <ContactForm formType={formType} onClose={closeModal} initialData={initialData} />
      </Modal>
    </>
  );
}
