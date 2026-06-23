"use client";

import { useState, useMemo, useEffect } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, Filter, Calendar, Clock, Tag, User, ChevronRight, 
  ArrowRight, BookOpen, TrendingUp, Shield, Zap, Building, 
  X, Hash, Folder,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { trackCTAClick, trackBlogSearch, trackBlogFilter } from '@/lib/tracking';

export default function BlogClient({ initialArticles, initialCategories, initialTags }) {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const formType = 'general';

  // États pour les filtres et recherche
  const [articles, setArticles] = useState(initialArticles);
  const [categories] = useState(initialCategories);
  const [tags] = useState(initialTags);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [selectedTag, setSelectedTag] = useState('tous');
  const [sortBy, setSortBy] = useState('date-desc'); // 'date-desc', 'date-asc', 'popular'
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6);

  // Filtrer et trier les articles
  const filteredArticles = useMemo(() => {
    let filtered = [...articles];

    // Filtre par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        (article.tags && article.tags.some(tag => tag.toLowerCase().includes(query))) ||
        article.category.toLowerCase().includes(query)
      );
    }

    // Filtre par catégorie
    if (selectedCategory !== 'tous') {
      filtered = filtered.filter(article => 
        article.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filtre par tag
    if (selectedTag !== 'tous') {
      filtered = filtered.filter(article => 
        article.tags?.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      );
    }

    // Trier
    switch (sortBy) {
      case 'date-asc':
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'popular':
        // Pour l'instant, tri par date desc (à remplacer par vues plus tard)
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'date-desc':
      default:
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
    }

    return filtered;
  }, [articles, searchQuery, selectedCategory, selectedTag, sortBy]);

  // Réinitialiser la page courante quand les filtres changent
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

  // Calculs de pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Gestion des catégories étendues sur mobile
  const [expandedCategories, setExpandedCategories] = useState(false);
  const [expandedTags, setExpandedTags] = useState(false);

  // Icone par catégorie
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

  // Reset filters
  const resetFilters = () => {
    trackBlogFilter('reset', 'all');
    setSearchQuery('');
    setSelectedCategory('tous');
    setSelectedTag('tous');
    setSortBy('date-desc');
  };

  // Articles vides ?
  const hasFilters = searchQuery || selectedCategory !== 'tous' || selectedTag !== 'tous';

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        {/* HERO - Swiss Minimal */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#FAFAFA] px-4 py-24">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
          
          {/* Blue accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block px-4 py-2 mb-8 border border-[#E5E5E5] bg-white">
              <span className="flex items-center gap-2 text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                <BookOpen size={14} />
                Ressources Expertes
              </span>
            </div>

            {/* Titre */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.05]">
              Le Blog{' '}
              <span className="text-[#0066FF]">Killian Lecrut</span>
            </h1>

            <p className="text-xl sm:text-2xl text-[#666666] max-w-3xl mx-auto leading-relaxed mb-12 font-light">
              Articles experts sur la création de sites web pour professions libérales et artisans. 
              SEO local, conformité RGPD/CNB, automatisation, développement sur-mesure.
            </p>

            {/* Barre de recherche */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#666666]" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => { trackBlogSearch(e.target.value); setSearchQuery(e.target.value); }}
                  placeholder="Rechercher un article, un mot-clé, une thématique..."
                  className="w-full pl-12 pr-4 py-4 border border-[#E5E5E5] bg-white text-[#2A2A2A] font-light placeholder:text-[#999999] focus:outline-none focus:border-[#0066FF] transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#666666] hover:text-[#2A2A2A]"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E5E5E5] max-w-3xl mx-auto">
              {[
                { label: "Articles", value: articles.length, icon: BookOpen },
                { label: "Catégories", value: categories.length, icon: Folder },
                { label: "Mots-clés", value: tags.length, icon: Hash },
                { label: "Experts", value: "1", icon: User }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white p-6 text-center">
                    <div className="text-3xl font-light text-[#0066FF] mb-2">{stat.value}</div>
                    <div className="flex items-center justify-center gap-2 text-sm text-[#666666] font-light">
                      <Icon size={16} />
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section Filtres & Articles */}
        <section className="relative py-20 px-4 bg-white">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />
          
          {/* Blue accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar - Filtres */}
              <aside className="lg:w-1/4">
                <div className="sticky top-24 space-y-8">
                  {/* Filtres actifs */}
                  {hasFilters && (
                    <div className="border border-[#E5E5E5] bg-white p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-light text-[#2A2A2A]">Filtres actifs</h3>
                        <button
                          onClick={resetFilters}
                          className="text-sm text-[#0066FF] hover:text-[#2A2A2A] transition-colors font-medium"
                        >
                          Tout effacer
                        </button>
                      </div>
                      <div className="space-y-2">
                        {searchQuery && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-[#666666]">Recherche :</span>
                            <span className="font-light text-[#2A2A2A]">"{searchQuery}"</span>
                          </div>
                        )}
                        {selectedCategory !== 'tous' && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-[#666666]">Catégorie :</span>
                            <span className="font-light text-[#2A2A2A]">{selectedCategory}</span>
                          </div>
                        )}
                        {selectedTag !== 'tous' && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-[#666666]">Tag :</span>
                            <span className="font-light text-[#2A2A2A]">{selectedTag}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Catégories */}
                  <div className="border border-[#E5E5E5] bg-white p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-light text-[#2A2A2A] flex items-center gap-2">
                        <Folder size={18} />
                        Catégories
                      </h3>
                      <button
                        onClick={() => setExpandedCategories(!expandedCategories)}
                        className="lg:hidden text-[#666666]"
                      >
                        {expandedCategories ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>
                    <div className={`space-y-2 ${!expandedCategories ? 'lg:block hidden' : 'block'}`}>
                      <button
                        onClick={() => { trackBlogFilter('category', 'tous'); setSelectedCategory('tous'); }}
                        className={`w-full text-left px-3 py-2 text-sm transition-colors ${selectedCategory === 'tous' ? 'bg-[#FAFAFA] text-[#0066FF]' : 'text-[#666666] hover:bg-[#FAFAFA]'}`}
                      >
                        Toutes les catégories ({articles.length})
                      </button>
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => { trackBlogFilter('category', category); setSelectedCategory(category); }}
                          className={`w-full text-left px-3 py-2 text-sm transition-colors flex items-center gap-2 ${selectedCategory === category ? 'bg-[#FAFAFA] text-[#0066FF]' : 'text-[#666666] hover:bg-[#FAFAFA]'}`}
                        >
                          {getCategoryIcon(category)}
                          {category} ({articles.filter(a => a.category === category).length})
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tags populaires */}
                  <div className="border border-[#E5E5E5] bg-white p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-light text-[#2A2A2A] flex items-center gap-2">
                        <Hash size={18} />
                        Mots-clés populaires
                      </h3>
                      <button
                        onClick={() => setExpandedTags(!expandedTags)}
                        className="lg:hidden text-[#666666]"
                      >
                        {expandedTags ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>
                    <div className={`flex flex-wrap gap-2 ${!expandedTags ? 'lg:flex hidden' : 'flex'}`}>
                      <button
                        onClick={() => { trackBlogFilter('tag', 'tous'); setSelectedTag('tous'); }}
                        className={`px-3 py-1 text-xs border transition-colors ${selectedTag === 'tous' ? 'border-[#0066FF] text-[#0066FF]' : 'border-[#E5E5E5] text-[#666666] hover:border-[#0066FF]'}`}
                      >
                        Tous
                      </button>
                      {tags.slice(0, expandedTags ? tags.length : 15).map((tag) => (
                        <button
                          key={tag}
                          onClick={() => { trackBlogFilter('tag', tag); setSelectedTag(tag); }}
                          className={`px-3 py-1 text-xs border transition-colors ${selectedTag === tag ? 'border-[#0066FF] text-[#0066FF]' : 'border-[#E5E5E5] text-[#666666] hover:border-[#0066FF]'}`}
                        >
                          {tag}
                        </button>
                      ))}
                      {tags.length > 15 && !expandedTags && (
                        <button
                          onClick={() => setExpandedTags(true)}
                          className="px-3 py-1 text-xs text-[#0066FF] hover:text-[#2A2A2A] transition-colors"
                        >
                          +{tags.length - 15} plus
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Tri */}
                  <div className="border border-[#E5E5E5] bg-white p-6">
                    <h3 className="font-light text-[#2A2A2A] mb-4 flex items-center gap-2">
                      <Filter size={18} />
                      Trier par
                    </h3>
                    <div className="space-y-2">
                      {[
                        { value: 'date-desc', label: 'Plus récent' },
                        { value: 'date-asc', label: 'Plus ancien' },
                        { value: 'popular', label: 'Populaire' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => { trackBlogFilter('sort', option.value); setSortBy(option.value); }}
                          className={`w-full text-left px-3 py-2 text-sm transition-colors ${sortBy === option.value ? 'bg-[#FAFAFA] text-[#0066FF]' : 'text-[#666666] hover:bg-[#FAFAFA]'}`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              {/* Contenu principal - Articles */}
              <div className="lg:w-3/4">
                {/* En-tête résultats */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
                  <div>
                    <h2 className="text-3xl font-light text-[#2A2A2A]">
                      {hasFilters ? 'Articles filtrés' : 'Tous les articles'}
                    </h2>
                    <p className="text-[#666666] font-light mt-2">
                      {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} trouvé{filteredArticles.length !== 1 ? 's' : ''}
                      {hasFilters && ' avec les filtres actuels'}
                    </p>
                  </div>
                  
                  {filteredArticles.length === 0 && hasFilters && (
                    <button
                      onClick={resetFilters}
                      className="px-4 py-2 border border-[#E5E5E5] bg-white text-[#666666] hover:border-[#0066FF] hover:text-[#0066FF] transition-colors text-sm font-light"
                    >
                      Voir tous les articles
                    </button>
                  )}
                </div>

                {/* Liste des articles */}
                {filteredArticles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E5]">
                    {currentArticles.map((article, index) => (
                      <article
                        key={article.slug}
                        className="group bg-white p-8 hover:bg-[#FAFAFA] transition-colors duration-300"
                      >
                        {/* En-tête article */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 text-xs text-[#666666] font-light">
                              {getCategoryIcon(article.category)}
                              <span>{article.category}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-[#666666] font-light">
                              <Calendar size={12} />
                              <time dateTime={article.date}>
                                {new Date(article.date).toLocaleDateString('fr-FR', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric'
                                })}
                              </time>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-[#666666] font-light">
                            <Clock size={12} />
                            <span>{article.readingTime || '5'} min</span>
                          </div>
                        </div>

                        {/* Titre */}
                        <h3 className="text-2xl font-light text-[#2A2A2A] mb-4 group-hover:text-[#0066FF] transition-colors">
                          <Link href={`/blog/${article.slug}`} onClick={() => trackCTAClick(article.title, 'blog_list')}>
                            {article.title}
                          </Link>
                        </h3>

                        {/* Extrait */}
                        <p className="text-[#666666] mb-6 leading-relaxed font-light">
                          {article.excerpt}
                        </p>

                        {/* Auteur */}
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 border border-[#E5E5E5] flex items-center justify-center">
                            <User size={16} className="text-[#666666]" />
                          </div>
                          <div>
                            <div className="text-sm font-light text-[#2A2A2A]">{article.author || 'Killian Lecrut'}</div>
                            <div className="text-xs text-[#666666] font-light">{article.authorRole || 'Expert Développement Web'}</div>
                          </div>
                        </div>

                        {/* Tags */}
                        {article.tags && article.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {article.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 border border-[#E5E5E5] text-xs text-[#666666] font-light"
                              >
                                {tag}
                              </span>
                            ))}
                            {article.tags.length > 3 && (
                              <span className="px-3 py-1 border border-[#E5E5E5] text-xs text-[#666666] font-light">
                                +{article.tags.length - 3}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Lire la suite */}
                        <Link
                          href={`/blog/${article.slug}`}
                          onClick={() => trackCTAClick(article.title, 'blog_list')}
                          className="inline-flex items-center gap-2 text-[#0066FF] font-medium hover:text-[#2A2A2A] transition-colors group/link"
                        >
                          Lire l'article complet
                          <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </article>
                    ))}
                  </div>
                ) : (
                  // Aucun résultat
                  <div className="border border-[#E5E5E5] bg-white p-16 text-center">
                    <div className="w-16 h-16 border border-[#E5E5E5] flex items-center justify-center mx-auto mb-6">
                      <Search className="text-[#666666]" size={24} />
                    </div>
                    <h3 className="text-2xl font-light text-[#2A2A2A] mb-4">
                      Aucun article trouvé
                    </h3>
                    <p className="text-[#666666] max-w-md mx-auto mb-8 font-light">
                      {searchQuery 
                        ? `Aucun article ne correspond à votre recherche "${searchQuery}". Essayez avec d'autres mots-clés.`
                        : "Aucun article ne correspond aux filtres sélectionnés. Essayez de modifier vos critères."
                      }
                    </p>
                    <button
                      onClick={resetFilters}
                      className="px-6 py-3 bg-[#0066FF] hover:bg-white text-white hover:text-[#0066FF] border border-[#0066FF] font-medium transition-all duration-300"
                    >
                      Réinitialiser les filtres
                    </button>
                  </div>
                )}

                {/* Pagination fonctionnelle */}
                {totalPages > 1 && (
                  <div className="mt-16 pt-8 border-t border-[#E5E5E5] text-center">
                    <p className="text-[#666666] font-light mb-4">
                      Articles {indexOfFirstArticle + 1}-{Math.min(indexOfLastArticle, filteredArticles.length)} sur {filteredArticles.length}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      <button
                        onClick={() => { const targetPage = Math.max(currentPage - 1, 1); trackBlogFilter('pagination', String(targetPage)); setCurrentPage(targetPage); }}
                        disabled={currentPage === 1}
                        aria-label="Page précédente"
                        className="px-4 py-2 border border-[#E5E5E5] bg-white text-[#666666] hover:border-[#0066FF] hover:text-[#0066FF] transition-colors font-light disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-[#E5E5E5] disabled:hover:text-[#666666]"
                      >
                        ← Précédent
                      </button>
                      
                      {/* Numéros de page */}
                       {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => { trackBlogFilter('pagination', String(page)); setCurrentPage(page); }}
                          aria-label={`Page ${page}`}
                          className={`px-4 py-2 border font-light transition-colors ${
                            currentPage === page
                              ? 'border-[#0066FF] bg-[#0066FF] text-white'
                              : 'border-[#E5E5E5] bg-white text-[#666666] hover:border-[#0066FF] hover:text-[#0066FF]'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                      
                       <button
                        onClick={() => { const targetPage = Math.min(currentPage + 1, totalPages); trackBlogFilter('pagination', String(targetPage)); setCurrentPage(targetPage); }}
                        disabled={currentPage === totalPages}
                        aria-label="Page suivante"
                        className="px-4 py-2 border border-[#E5E5E5] bg-white text-[#666666] hover:border-[#0066FF] hover:text-[#0066FF] transition-colors font-light disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-[#E5E5E5] disabled:hover:text-[#666666]"
                      >
                        Suivant →
                      </button>
                    </div>
                  </div>
                )}

                {/* CTA Bottom */}
                <div className="mt-20 border border-[#E5E5E5] bg-white p-12 text-center">
                  <h3 className="text-3xl font-light text-[#2A2A2A] mb-6">
                    Vous avez une question spécifique ?
                  </h3>
                  <p className="text-[#666666] max-w-2xl mx-auto mb-8 font-light">
                    Nos articles couvrent les sujets principaux, mais chaque situation est unique. 
                    Contactez-nous pour discuter de votre projet spécifique.
                  </p>
                  <button
                    onClick={() => { trackCTAClick('Poser une question', 'blog'); openModal('general'); }}
                    className="group px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all duration-300"
                  >
                    <span className="flex items-center gap-3">
                      Poser une question à l'expert
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
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