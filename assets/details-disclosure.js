class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector('details');
    this.content = this.mainDetailsToggle.querySelector('summary').nextElementSibling;

    this.mainDetailsToggle.addEventListener('focusout', this.onFocusOut.bind(this));
    this.mainDetailsToggle.addEventListener('toggle', this.onToggle.bind(this));
  }

  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    });
  }

  onToggle() {
    if (!this.animations) this.animations = this.content.getAnimations();

    if (this.mainDetailsToggle.hasAttribute('open')) {
      this.animations.forEach((animation) => animation.play());
    } else {
      this.animations.forEach((animation) => animation.cancel());
    }
  }

  close() {
    this.mainDetailsToggle.removeAttribute('open');
    this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
  }
}

customElements.define('details-disclosure', DetailsDisclosure);

class HeaderMenu extends DetailsDisclosure {
  constructor() {
    super();
    this.header = document.querySelector('.header-wrapper');
    this.initHoverAndInteractions();
  }

  initHoverAndInteractions() {
    // Enable hover interactions on desktop devices with hover support
    if (window.matchMedia('(hover: hover) and (min-width: 990px)').matches) {
      let hoverTimer;

      this.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimer);

        // Close other open disclosures so menus don't overlap
        document.querySelectorAll('header-menu details[open]').forEach((detail) => {
          if (detail !== this.mainDetailsToggle) {
            detail.removeAttribute('open');
            const summary = detail.querySelector('summary');
            if (summary) summary.setAttribute('aria-expanded', 'false');
          }
        });

        this.open();
      });

      this.addEventListener('mouseleave', () => {
        hoverTimer = setTimeout(() => {
          if (!this.contains(document.activeElement)) {
            this.close();
          }
        }, 180);
      });
    }

    // Close when clicking any sub-link
    this.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        this.close();
      });
    });
  }

  open() {
    if (!this.mainDetailsToggle.hasAttribute('open')) {
      this.mainDetailsToggle.setAttribute('open', '');
      const summary = this.mainDetailsToggle.querySelector('summary');
      if (summary) summary.setAttribute('aria-expanded', 'true');
      this.onToggle();
    }
  }

  onToggle() {
    if (!this.header) return;
    this.header.preventHide = this.mainDetailsToggle.open;

    if (document.documentElement.style.getPropertyValue('--header-bottom-position-desktop') !== '') return;
    document.documentElement.style.setProperty(
      '--header-bottom-position-desktop',
      `${Math.floor(this.header.getBoundingClientRect().bottom)}px`
    );
  }
}

// Global outside click & Escape listener for header menus
if (!window._headerMenuDocEventsAttached) {
  window._headerMenuDocEventsAttached = true;
  document.addEventListener('click', (event) => {
    if (!event.target.closest('header-menu')) {
      document.querySelectorAll('header-menu details[open]').forEach((detail) => {
        detail.removeAttribute('open');
        const summary = detail.querySelector('summary');
        if (summary) summary.setAttribute('aria-expanded', 'false');
      });
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      document.querySelectorAll('header-menu details[open]').forEach((detail) => {
        detail.removeAttribute('open');
        const summary = detail.querySelector('summary');
        if (summary) {
          summary.setAttribute('aria-expanded', 'false');
          summary.focus();
        }
      });
    }
  });
}

customElements.define('header-menu', HeaderMenu);
