/**
 * Utilitaire de tracking Umami Analytics
 * 
 * Usage:
 * - track('event-name', { prop: 'value' }) → umami.track()
 * - <button data-umami-event="click-cta" data-umami-event-label="Mon CTA"> → tracking auto
 * 
 * La fonction vérifie la présence d'umami avant d'appeler pour éviter les erreurs.
 */

const TRACKING_PREFIX = 'kl_';

export function track(eventName, data = {}) {
  if (typeof window !== 'undefined' && window.umami) {
    try {
      window.umami.track(TRACKING_PREFIX + eventName, data);
    } catch (e) {
      // Silencieux : ne pas casser l'UX si Umami n'est pas chargé
    }
  }
}

/**
 * Raccourcis pour les événements métier
 */

export function trackModalOpen(source, formType) {
  track('modal_open', { source, form_type: formType });
}

export function trackFormSubmit(formType, status) {
  track('form_submit', { form_type: formType, status });
}

export function trackCTAClick(label, page, extra = {}) {
  track('cta_click', { label, page, ...extra });
}

export function trackPricingClick(offerName, formType) {
  track('pricing_click', { offer: offerName, form_type: formType });
}

export function trackROIInteraction(action, page, values = {}) {
  track('roi_interact', { action, page, ...values });
}

export function trackFAQToggle(question, page, opened) {
  track('faq_toggle', { question, page, opened });
}

export function trackBlogSearch(query) {
  track('blog_search', { has_query: !!query });
}

export function trackBlogFilter(type, value) {
  track('blog_filter', { type, value });
}

export function trackBlogShare(platform, articleSlug) {
  track('blog_share', { platform, article_slug: articleSlug });
}

export function trackExternalClick(platform, url) {
  track('external_click', { platform, url: url.substring(0, 80) });
}

export function trackNavClick(section, target) {
  track('nav_click', { section, target });
}

export function trackCarouselClick(clientName) {
  track('carousel_click', { client: clientName });
}
