class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
  
      this.shadowRoot.innerHTML = `
            <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/blog/">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3">
            <link href="assets/dist/css/bootstrap.min.css" rel="stylesheet">
            <link href="style.css" rel="stylesheet">
            <div class="container">
                <header class="border-bottom lh-1 py-3">
                    <div class="row flex-nowrap justify-content-between align-items-center">
                    <div class="col-4 pt-1">
                        <!-- <a class="link-secondary" href="#">Subscribe</a> -->
                    </div>
                    <div class="col-4 text-center">
                        <a class="blog-header-logo text-body-emphasis text-decoration-none" href="index.html">Coffee Web</a>
                    </div>
                    <div class="col-4 d-flex justify-content-end align-items-center">
                        <!-- <a class="link-secondary" href="#" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
                        </a> -->
                        <!-- <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a> -->
                    </div>
                    </div>
                </header>

                <div class="nav-scroller py-1 mb-3 border-bottom">
                    <nav class="nav nav-underline justify-content-between">
                    <a style="" class="nav-item nav-link link-body-emphasis" href="dumaguete.html" id="dumaguete_link">Dumaguete</a>
                    <!-- <a class="nav-item nav-link link-body-emphasis" href="#">Cebu</a>
                    <a class="nav-item nav-link link-body-emphasis" href="#">Mindanao</a>
                    <a class="nav-item nav-link link-body-emphasis" href="#">Visayas</a>
                    <a class="nav-item nav-link link-body-emphasis" href="#">Luzon</a>
                    <a class="nav-item nav-link link-body-emphasis" href="#">Bangkok</a> -->
                    <!-- <a class="nav-item nav-link link-body-emphasis" href="#">Politics</a>
                    <a class="nav-item nav-link link-body-emphasis" href="#">Opinion</a>
                    <a class="nav-item nav-link link-body-emphasis" href="#">Science</a>
                    <a class="nav-item nav-link link-body-emphasis" href="#">Health</a>
                    <a class="nav-item nav-link link-body-emphasis" href="#">Style</a>
                    <a class="nav-item nav-link link-body-emphasis" href="#">Travel</a> -->
                    </nav>
                </div>
                <script src="assets/dist/js/bootstrap.bundle.min.js"></script>
            </div>
      `;
    }
  }
  

  class FooterComponent extends HTMLElement {
    constructor() {

        super();
        this.attachShadow({mode: "open"});

        this.shadowRoot.innerHTML = `
            <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/blog/">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3">
            <link href="assets/dist/css/bootstrap.min.css" rel="stylesheet">
            <link href="style.css" rel="stylesheet">
            <footer class="py-5 text-center text-body-secondary bg-body-tertiary">
                <p class="mb-0">
                <a href="#">Back to top</a>
                </p>
            </footer>
            <script src="assets/dist/js/bootstrap.bundle.min.js"></script>
        `;
    }

  }

  customElements.define("header-component", HeaderComponent);

  customElements.define("footer-component", FooterComponent);
  