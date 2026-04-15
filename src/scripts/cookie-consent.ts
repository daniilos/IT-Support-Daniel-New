(function () {
  const STORAGE_COOKIE = 'oit_cookie_consent';
  const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;
  const GTM_ID = 'GTM-5S8ZWBWH';
  const CLARITY_ID = 'wbyiwuk5ul';

  type ConsentState = 'accepted' | 'rejected' | 'unset';

  let baseAnalyticsLoaded = false;
  let clarityLoaded = false;

  function readConsent(): ConsentState {
    const match = document.cookie.match(new RegExp(`(?:^|; )${STORAGE_COOKIE}=([^;]*)`));
    if (!match) return 'unset';

    const value = decodeURIComponent(match[1]);
    if (value === 'accepted' || value === 'rejected') return value;
    return 'unset';
  }

  function writeConsent(value: Exclude<ConsentState, 'unset'>) {
    document.cookie = `${STORAGE_COOKIE}=${encodeURIComponent(value)}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
  }

  function clearConsentCookie() {
    document.cookie = `${STORAGE_COOKIE}=; Max-Age=0; Path=/; SameSite=Lax`;
  }

  function dispatchConsent(value: ConsentState) {
    window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: value }));
  }

  function loadGoogleTagManager() {
    if (document.querySelector('script[data-analytics-loader="gtm"]')) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    const firstScript = document.getElementsByTagName('script')[0];
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    script.setAttribute('data-analytics-loader', 'gtm');
    firstScript?.parentNode?.insertBefore(script, firstScript);
  }

  function loadClarity() {
    if (document.querySelector('script[data-analytics-loader="clarity"]')) return;

    window.clarity =
      window.clarity ||
      function (...args: unknown[]) {
        (window.clarity.q = window.clarity.q || []).push(args);
      };

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
    script.type = 'text/javascript';
    script.setAttribute('data-analytics-loader', 'clarity');

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);
  }

  function loadBaseAnalytics() {
    if (baseAnalyticsLoaded) return;
    baseAnalyticsLoaded = true;
    loadGoogleTagManager();
  }

  function loadOptionalAnalyticsIfConsented() {
    if (clarityLoaded || readConsent() !== 'accepted') return;
    clarityLoaded = true;
    loadClarity();
  }

  function updateBannerVisibility(state: ConsentState) {
    const banner = document.querySelector<HTMLElement>('[data-cookie-banner]');
    if (!banner) return;

    const shouldShow = state === 'unset';
    banner.hidden = !shouldShow;
    banner.setAttribute('aria-hidden', String(!shouldShow));
  }

  function updateStatusText(state: ConsentState) {
    document.querySelectorAll<HTMLElement>('[data-cookie-status]').forEach((element) => {
      const accepted = element.dataset.statusAccepted ?? '';
      const rejected = element.dataset.statusRejected ?? '';
      const unset = element.dataset.statusUnset ?? '';

      if (state === 'accepted') {
        element.textContent = accepted;
      } else if (state === 'rejected') {
        element.textContent = rejected;
      } else {
        element.textContent = unset;
      }
    });
  }

  function syncCheckboxState(state: ConsentState) {
    document.querySelectorAll<HTMLInputElement>('[data-cookie-clarity]').forEach((checkbox) => {
      checkbox.checked = state !== 'rejected';
    });
  }

  function syncUi() {
    const state = readConsent();
    updateBannerVisibility(state);
    updateStatusText(state);
    syncCheckboxState(state);
    loadBaseAnalytics();
    if (state === 'accepted') loadOptionalAnalyticsIfConsented();
  }

  function initBannerActions() {
    document.querySelectorAll<HTMLElement>('[data-cookie-save]').forEach((button) => {
      button.addEventListener('click', () => {
        const analyticsCheckbox = document.querySelector<HTMLInputElement>('[data-cookie-clarity]');
        const nextState: ConsentState = analyticsCheckbox?.checked === false ? 'rejected' : 'accepted';

        writeConsent(nextState);
        syncUi();
        dispatchConsent(nextState);
      });
    });

    document.querySelectorAll<HTMLElement>('[data-cookie-open-settings]').forEach((button) => {
      button.addEventListener('click', () => {
        clearConsentCookie();
        syncUi();
        dispatchConsent('unset');

        const banner = document.querySelector<HTMLElement>('[data-cookie-banner]');
        banner?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        window.setTimeout(() => {
          banner?.querySelector<HTMLElement>('[data-cookie-save]')?.focus();
        }, 350);
      });
    });
  }

  function init() {
    syncUi();
    initBannerActions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    clarity: ((...args: unknown[]) => void) & { q?: unknown[][] };
  }
}
