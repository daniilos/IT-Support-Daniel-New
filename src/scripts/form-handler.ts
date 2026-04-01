(function () {
  function initForms() {
    document.querySelectorAll<HTMLInputElement>('input[name="_page_url"]').forEach((el) => {
      el.value = window.location.href;
    });

    const forms = document.querySelectorAll<HTMLFormElement>('form:has(input[name="_form_name"])');

    forms.forEach((form) => {
      let status = form.querySelector<HTMLElement>('[data-form-status]');
      if (!status) {
        status = document.createElement('p');
        status.setAttribute('data-form-status', '');
        status.setAttribute('aria-live', 'polite');
        status.className = 'mt-3 text-sm text-center min-h-[1.4em]';
        form.appendChild(status);
      }

      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = form.querySelector<HTMLButtonElement>('[type="submit"]');
        const originalText = btn?.textContent || '';

        if (btn) {
          btn.disabled = true;
          btn.textContent = 'Verzenden...';
        }
        status!.textContent = '';
        status!.style.color = '';

        const data = Object.fromEntries(new FormData(form));

        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          const json: Record<string, unknown> = await res.json().catch(() => ({}));

          if (res.ok && json.success) {
            status!.textContent = '✅ Bedankt! We nemen zo snel mogelijk contact met je op.';
            status!.style.color = 'var(--color-success)';
            form.reset();
            form.querySelectorAll<HTMLInputElement>('input[name="_page_url"]').forEach((el) => {
              el.value = window.location.href;
            });
          } else {
            status!.textContent =
              (json.error as string) || '❌ Er is iets misgegaan. Probeer het opnieuw.';
            status!.style.color = 'var(--color-danger)';
          }
        } catch {
          status!.textContent = '❌ Verbindingsfout. Controleer je internetverbinding en probeer opnieuw.';
          status!.style.color = 'var(--color-danger)';
        } finally {
          if (btn) {
            btn.disabled = false;
            btn.textContent = originalText;
          }
        }
      });
    });

    document.querySelectorAll<HTMLAnchorElement>('a[href="#contact"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById('contact-form') || document.querySelector('form');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => {
            const firstInput = target.querySelector<HTMLElement>(
              'input:not([type="hidden"]):not([style*="display:none"]), textarea'
            );
            firstInput?.focus();
          }, 600);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForms);
  } else {
    initForms();
  }
})();
