export function trackCTA(action: string) {
  console.log(`CTA clicked: ${action}`);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cta-click', { detail: { action } }));
  }
}
