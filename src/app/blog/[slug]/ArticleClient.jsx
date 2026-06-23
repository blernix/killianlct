"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Modal from "@/components/Modal";
import ContactForm, { getModalTitle } from "@/components/ContactForm";
import { useContactModal } from "@/hooks/useContactModal";
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar, Clock, User, Tag, Folder, ChevronLeft, 
  Share2, MessageSquare, ArrowRight,
  Facebook, Twitter, Linkedin, Link as LinkIcon,
  ChevronRight, BookOpen, TrendingUp, Shield, Zap, Building
} from 'lucide-react';
import { trackCTAClick, trackBlogShare } from '@/lib/tracking';

export default function ArticleClient({ article, relatedArticles }) {
  const { isOpen: isModalOpen, initialData, openModal, closeModal } = useContactModal();
  const formType = 'general';

  // État pour le partage
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [copied, setCopied] = useState(false);

  // Formatage de la date
  const formattedDate = new Date(article.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedUpdated = article.updated 
    ? new Date(article.updated).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : null;

  // Fonctions de partage
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = article.title;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: article.excerpt,
          url: shareUrl,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      setShowShareTooltip(true);
    }
  };

  const handleCopyLink = () => {
    trackBlogShare('copy', article.slug);
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Icone par catégorie
  const getCategoryIcon = (category) => {
    switch (category?.toLowerCase()) {
      case 'conformité':
        return <Shield className="w-5 h-5" />;
      case 'seo':
        return <TrendingUp className="w-5 h-5" />;
      case 'technique':
        return <Zap className="w-5 h-5" />;
      case 'stratégie':
        return <Building className="w-5 h-5" />;
      default:
        return <Folder className="w-5 h-5" />;
    }
  };

  // Navigation breadcrumb
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: article.category, href: `/blog?category=${encodeURIComponent(article.category)}` },
    { label: article.title, href: `/blog/${article.slug}`, current: true }
  ];

  return (
    <>
      <main>
        <Header onOpenModal={openModal} />

        {/* Breadcrumb */}
        <nav className="border-b border-[#E5E5E5] bg-white py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm font-light">
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.label} className="flex items-center gap-2">
                  {index > 0 && <ChevronRight size={14} className="text-[#666666]" />}
                  {crumb.current ? (
                    <span className="text-[#2A2A2A]">{crumb.label}</span>
                  ) : (
                    <Link 
                      href={crumb.href} 
                      className="text-[#666666] hover:text-[#0066FF] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* HERO Article */}
        <section className="relative py-20 px-4 bg-[#FAFAFA]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />
          
          {/* Blue accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Bouton retour */}
            <div className="mb-8">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-[#666666] hover:text-[#0066FF] transition-colors font-light"
              >
                <ChevronLeft size={16} />
                Retour au blog
              </Link>
            </div>

            {/* Catégorie */}
            <div className="mb-6">
              <Link 
                href={`/blog?category=${encodeURIComponent(article.category)}`}
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] bg-white hover:border-[#0066FF] transition-colors"
              >
                {getCategoryIcon(article.category)}
                <span className="text-sm font-light text-[#2A2A2A]">
                  {article.category}
                </span>
              </Link>
            </div>

            {/* Titre */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-8 leading-[1.1]">
              {article.title}
            </h1>

            {/* Métadonnées */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              {/* Auteur */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-[#E5E5E5] flex items-center justify-center">
                  <User size={20} className="text-[#666666]" />
                </div>
                <div>
                  <div className="text-sm font-light text-[#2A2A2A]">{article.author || 'Killian Lecrut'}</div>
                  <div className="text-xs text-[#666666] font-light">{article.authorRole || 'Expert Développement Web'}</div>
                </div>
              </div>

              {/* Dates */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-sm text-[#666666] font-light">
                  <Calendar size={14} />
                  <time dateTime={article.date}>Publié le {formattedDate}</time>
                </div>
                {formattedUpdated && (
                  <div className="flex items-center gap-2 text-xs text-[#666666] font-light">
                    <Calendar size={12} />
                    <span>Mis à jour le {formattedUpdated}</span>
                  </div>
                )}
              </div>

              {/* Temps de lecture */}
              <div className="flex items-center gap-2 text-sm text-[#666666] font-light">
                <Clock size={14} />
                <span>{article.readingTime || '5'} min de lecture</span>
              </div>
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-12">
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="inline-flex items-center gap-1 px-3 py-1 border border-[#E5E5E5] text-xs text-[#666666] font-light hover:border-[#0066FF] hover:text-[#0066FF] transition-colors"
                  >
                    <Tag size={10} />
                    {tag}
                  </Link>
                ))}
              </div>
            )}

            {/* Image en vedette */}
            {article.featuredImage && (
              <div className="mb-12 border border-[#E5E5E5] bg-white p-4">
                <div className="relative w-full h-64 md:h-96">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-16">
              {/* Partager */}
              <div className="relative">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] bg-white text-[#666666] hover:border-[#0066FF] hover:text-[#0066FF] transition-colors font-light"
                >
                  <Share2 size={16} />
                  Partager
                </button>

                {/* Tooltip de partage (pour desktop) */}
                {showShareTooltip && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-[#E5E5E5] shadow-lg p-4 z-10 min-w-64">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-light text-[#2A2A2A]">Partager cet article</span>
                      <button 
                        onClick={() => setShowShareTooltip(false)}
                        className="text-[#666666] hover:text-[#2A2A2A]"
                      >
                        ×
                      </button>
                    </div>
                    <div className="flex gap-3 mb-3">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackBlogShare('facebook', article.slug)}
                        className="w-10 h-10 border border-[#E5E5E5] flex items-center justify-center text-[#4267B2] hover:border-[#4267B2] transition-colors"
                      >
                        <Facebook size={18} />
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackBlogShare('twitter', article.slug)}
                        className="w-10 h-10 border border-[#E5E5E5] flex items-center justify-center text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors"
                      >
                        <Twitter size={18} />
                      </a>
                      <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackBlogShare('linkedin', article.slug)}
                        className="w-10 h-10 border border-[#E5E5E5] flex items-center justify-center text-[#0077B5] hover:border-[#0077B5] transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                    <div className="flex">
                      <input
                        type="text"
                        value={shareUrl}
                        readOnly
                        className="flex-1 px-3 py-2 border border-[#E5E5E5] text-xs text-[#666666] font-light"
                      />
                      <button
                        onClick={handleCopyLink}
                        className="px-3 py-2 bg-[#FAFAFA] border border-[#E5E5E5] border-l-0 text-xs text-[#666666] hover:text-[#0066FF] transition-colors"
                      >
                        {copied ? 'Copié !' : 'Copier'}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions secondaires */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => openModal('comment')}
                  className="flex items-center gap-2 px-4 py-2 border border-[#E5E5E5] bg-white text-[#666666] hover:border-[#0066FF] hover:text-[#0066FF] transition-colors font-light"
                >
                  <MessageSquare size={16} />
                  Commenter
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu de l'article */}
        <section className="relative py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Contenu markdown */}
            <article 
              className="markdown-content font-light"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Signature */}
            <div className="mt-16 pt-8 border-t border-[#E5E5E5]">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 border border-[#E5E5E5] flex items-center justify-center flex-shrink-0">
                  <User size={24} className="text-[#666666]" />
                </div>
                <div>
                  <h4 className="text-xl font-light text-[#2A2A2A] mb-2">
                    {article.author || 'Killian Lecrut'}
                  </h4>
                  <p className="text-[#666666] mb-4 font-light">
                    {article.authorRole || 'Expert Développement Web chez Agence Killian Lecrut'}
                  </p>
                  <p className="text-[#666666] font-light">
                    Spécialisé dans la création de sites web pour professions libérales et artisans. 
                    Expert en conformité RGPD/CNB, SEO local et développement sur-mesure avec Next.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles connexes */}
        {relatedArticles.length > 0 && (
          <section className="relative py-20 px-4 bg-[#FAFAFA]">
            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />
            
            {/* Blue accent line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1 mb-6 border border-[#E5E5E5]">
                  <span className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
                    À lire ensuite
                  </span>
                </div>
                <h2 className="text-4xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-6">
                  Articles <span className="text-[#0066FF]">Connexes</span>
                </h2>
                <p className="text-lg text-[#666666] max-w-2xl mx-auto font-light">
                  Continuez votre lecture avec ces articles sur des sujets similaires
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5]">
                {relatedArticles.map((related) => (
                  <article
                    key={related.slug}
                    className="group bg-white p-8 hover:bg-[#FAFAFA] transition-colors duration-300"
                  >
                    {/* Catégorie */}
                    <div className="flex items-center gap-2 mb-4">
                      {getCategoryIcon(related.category)}
                      <span className="text-xs text-[#666666] font-light">
                        {related.category}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl font-light text-[#2A2A2A] mb-4 group-hover:text-[#0066FF] transition-colors">
                      <Link href={`/blog/${related.slug}`} onClick={() => trackCTAClick(related.title, 'blog_article')}>
                        {related.title}
                      </Link>
                    </h3>

                    {/* Extrait */}
                    <p className="text-[#666666] mb-6 text-sm leading-relaxed font-light line-clamp-3">
                      {related.excerpt}
                    </p>

                    {/* Métadonnées */}
                    <div className="flex items-center justify-between text-xs text-[#666666] font-light">
                      <div className="flex items-center gap-2">
                        <Calendar size={12} />
                        <time dateTime={related.date}>
                          {new Date(related.date).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={12} />
                        <span>{related.readingTime || '5'} min</span>
                      </div>
                    </div>

                    {/* Lire la suite */}
                    <Link
                      href={`/blog/${related.slug}`}
                      onClick={() => trackCTAClick(related.title, 'blog_article')}
                      className="mt-6 inline-flex items-center gap-2 text-[#0066FF] text-sm font-medium hover:text-[#2A2A2A] transition-colors group/link"
                    >
                      Lire l'article
                      <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </article>
                ))}
              </div>

              {/* CTA vers tous les articles */}
              <div className="mt-16 text-center">
                <Link
                  href="/blog"
                  onClick={() => trackCTAClick('Voir tous les articles', 'blog_article')}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all duration-300"
                >
                  <BookOpen size={20} />
                  Voir tous les articles du blog
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA Contact */}
        <section className="relative py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="border border-[#E5E5E5] bg-white p-16">
              <h3 className="text-4xl font-light tracking-[-0.02em] text-[#2A2A2A] mb-6">
                Cet article vous a plu ?
              </h3>
              <p className="text-lg text-[#666666] max-w-2xl mx-auto mb-8 font-light">
                Discutons de votre projet web, de votre stratégie SEO, ou de vos besoins en conformité. 
                Un premier échange gratuit pour définir ensemble la meilleure solution.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => { trackCTAClick('Demander un audit gratuit', 'blog_article'); openModal('general'); }}
                  className="group px-10 py-5 bg-[#0066FF] text-white font-medium border border-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    Demander un audit gratuit
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <Link
                  href="/blog"
                  className="px-10 py-5 border border-[#E5E5E5] text-[#2A2A2A] font-medium hover:border-[#0066FF] hover:text-[#0066FF] transition-all duration-300"
                >
                  Continuer à lire le blog
                </Link>
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