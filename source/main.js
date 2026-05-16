const pagesList = {
    home: "Home",
    featured: "Featured",
    about: "About",
    showcase: "Showcase",
    contact: "Contact",
    privacy: "Privacy"
};

const featuredProject = {
    heroImage: "source/images/sw-landscape-01.png",
    crowdFundUrl: "#",
    title: "Sirusian Wilds",
    role: "Trading Card Game",
    headline: "A survival-focused sci-fi ecosystem TCG built around battlefield pressure, resource pragmatism, and dangerous alien wildlife.",
    summary: "Sirusian Wilds is our current flagship project. Build tactical decks using Creatures, Resources, Equipment and Support cards in order to outmanoeuvre their opponents and dominate the battlefield. Victory is not achieved through survival alone, but through strategic control, resource management and carefully timed attacks.",
    details: [
        {
            label: "Interesting Gameplay",
            text: "Every match of Sirusian Wilds is built around tactical decision making, adaptive strategy and constantly shifting battlefield conditions.<br><br>Players must carefully balance Creature placement, Resource management and attack timing in order to outmanoeuvre their oppenents and survive the dangers of the battlefield."
        },
        {
            label: "Battlefield Tension",
            text: "Sirusian Wilds is designed around high-stakes battlefield pressure where every active Creature matters.<br><br>Unlike many traditional trading card games, victory is achieved through landing Direct Attacks against vulnerable opponents, creating tense and unpredictable matches where momentum can shift at any moment." 
        },
        {
            label: "Special Mechanics",
            text: "The game's Direct Attack system replaces traditional life-point mechanics with a more dynamic battlefield-focused victory condition.<br><br>This rewards players who can successfully and strategically break through enemy defences and keeping up offensive pressure, all whilst maintaining their own defences."
        }
    ]
};

const spotlightItems = [];

const hasShowcase = spotlightItems.length > 0;

document.addEventListener("DOMContentLoaded", () => {
    initializePages();
    setupMobileMenu();
    window.addEventListener("hashchange", route);
    route();
});

function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navBar = document.querySelector('.nav-bar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuToggle || !navBar) {
        return;
    }

    menuToggle.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navBar.classList.remove('active');
        });
    });
}

function initializePages() {
    updateShowcaseVisibility();

    Object.keys(pagesList).forEach((pageId) => {
        const pageElement = document.getElementById(`page-${pageId}`);
        if (!pageElement) {
            return;
        }

        switch (pageId) {
            case "home":
                pageElement.innerHTML = buildHomePage();
                break;
            case "featured":
                pageElement.innerHTML = buildFeaturedPage();
                break;
            case "about":
                pageElement.innerHTML = buildAboutPage();
                break;
            case "showcase":
                pageElement.innerHTML = buildShowcasePage();
                break;
            case "contact":
                pageElement.innerHTML = buildContactPage();
                break;
            case "privacy":
                pageElement.innerHTML = buildPrivacyPage();
                break;
            default:
                pageElement.innerHTML = `<p>Page not found.</p>`;
        }
    });
}

function updateShowcaseVisibility() {
    if (!hasShowcase) {
        const showcaseLink = document.querySelector('.nav-link[href="#showcase"]');
        if (showcaseLink) {
            const showcaseListItem = showcaseLink.closest('li');
            if (showcaseListItem) {
                showcaseListItem.remove();
            }
        }

        const showcasePage = document.getElementById('page-showcase');
        if (showcasePage) {
            showcasePage.remove();
        }

        delete pagesList.showcase;
    }
}

function route() {
    const requested = window.location.hash.slice(1).toLowerCase() || "home";
    const pageId = pagesList[requested] ? requested : "home";
    activatePage(pageId);
}

function activatePage(pageId) {
    Object.keys(pagesList).forEach((id) => {
        const pageElement = document.getElementById(`page-${id}`);
        if (pageElement) {
            pageElement.classList.toggle("active", id === pageId);
        }

        const linkElement = document.querySelector(`.nav-link[href="#${id}"]`);
        if (linkElement) {
            linkElement.classList.toggle("active", id === pageId);
        }
    });

    document.title = `Snowbolt Games | ${pagesList[pageId]}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function buildHomePage() {
    const showcaseLink = hasShowcase ? `<a class="button button-secondary" href="#showcase">Explore more projects</a>` : "";
    const heroExploreLink = hasShowcase ? `<a class="button button-secondary" href="#showcase">See all work</a>` : "";

    return `
        <section class="section-block featured-banner" style="background-image: url('${featuredProject.heroImage}');">
            <div class="featured-banner-content">
                <span class="eyebrow">Featured</span>
                <h1>${featuredProject.title}</h1>
                <p>${featuredProject.headline}</p>
                <div class="hero-actions">
                    <a class="button" href="#featured">Discover Sirusian Wilds</a>
                    ${showcaseLink}
                </div>
            </div>
        </section>
        <section class="section-block hero">
            <div>
                <span class="eyebrow">Studio launch</span>
                <h2>Building worlds with bold storytelling and strategic depth.</h2>
                <p>Snowbolt Games blends dramatic tabletop design, collectible strategies, and immersive play experiences. We are a small studio focused on ambitious systems, playable worlds, and strong community ties.</p>
                <div class="hero-actions">
                    <a class="button" href="#contact">Join Playtest</a>
                    ${heroExploreLink}
                </div>
            </div>
            <div class="hero-panel">
                <div class="stat-card">
                    <strong>Active Development</strong>
                    <p>Sirusian Wilds is our current development focus and the hero of our portfolio.</p>
                </div>
                <div class="stat-card">
                    <strong>Open Design</strong>
                    <p>We keep our roadmaps public and invite players to shape every update.</p>
                </div>
            </div>
        </section>
        <section class="section-block">
            <div class="section-heading">
                <span class="eyebrow">What we ship</span>
                <h2>Current Focus Areas</h2>
            </div>
            <div class="cards-grid">
                <div class="feature-card">
                    <h3>Trading Card Games</h3>
                    <p>Deep collectible systems, deck-building freedom, and competitive tabletop play with a strong narrative frame.</p>
                </div>
                <div class="feature-card">
                    <h3>Board Games</h3>
                    <p>Collaborative campaigns, modular storytelling, and tactile experiences built for friends, families, and niche fandoms.</p>
                </div>
                <div class="feature-card">
                    <h3>Video Games</h3>
                    <p>Prototype-driven concept work that connects our tabletop roots to future interactive worlds and digital communities.</p>
                </div>
            </div>
        </section>
        <section class="section-block">
            <div class="section-heading">
                <span class="eyebrow">Progress Updates</span>
                <h2>Sirusian Wilds Roadmap</h2>
            </div>
            <div class="details-panel">
                <details open>
                    <summary>Development (Current)</summary>
                    <p>During this stage an initial card list and first version of the official ruleset are being produced. Card designs and artwork aren't finalised at this point, the primary objective is gettint the game ready for official playtesting.</p>
                </details>
                <details>
                    <summary>Playtest #1 (Planned)</summary>
                    <p>This first round of playtesting helps to identify areas of the game that need adjusting and potentially changing.</p>
                </details>
                <details>
                    <summary>Refinement (Planned)</summary>
                    <p>Using feedback and notes, from the first round of playtesting, the development team then refine major aspects of the game.</p>
                </details>
                <details>
                    <summary>Playtest #2 (Planned)</summary>
                    <p>This second round of playtesting helps to identify remaining areas of the game that need fine tuning.</p>
                </details>
                <details>
                    <summary>Polishing (Planned)</summary>
                    <p>Using feedback and notes, from the second round of playtesting, the development team then perfect major aspects of the game.</p>
                </details>
                <details>
                    <summary>Release (Planned)</summary>
                    <p>Once the last changes and adjustments have been finalised, the game is then cleared to be scheduled for release official.</p>
                </details>
            </div>
        </section>
    `;
}

function buildAboutPage() {
    return `
        <section class="section-block">
            <span class="eyebrow">Studio story</span>
            <h2>We make games for imagination, tactics, and strong table moments.</h2>
            <p>Snowbolt Games began with a love for gaming and collaborative worldbuilding. Today we aim to design across formats with a simple goal: create memorable systems players want to return to again and again.</p>
        </section>
        <section class="section-block info-grid">
            <div class="card">
                <h3>Our Values</h3>
                <p>Design first, community second, and polish everywhere in between. Every project is guided by meaningful player choice, readable rules, and room for creativity.</p>
            </div>
            <div class="card">
                <h3>Our Team</h3>
                <p>A compact group of designers, artists, and rules thinkers. We move fast, validate ideas regularly, and center playtesting in every iteration cycle.</p>
            </div>
            <div class="card">
                <h3>Our Promise</h3>
                <p>Responsive updates, transparent progress, and player-tested decisions. You’ll always know what we’re building and why it matters.</p>
            </div>
        </section>
        <section class="section-block">
            <blockquote>“Every game we make is a chance to surprise players with something that feels familiar, but bold enough to stay in hand.”</blockquote>
        </section>
    `;
}

function buildShowcasePage() {
    const cardsHtml = spotlightItems.map((item) => {
        return `
            <div class="showcase-card">
                <h3>${item.title}</h3>
                <p>${item.summary}</p>
                <span class="tag">${item.role}</span>
                <div style="margin-top: 1rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
                </div>
                <details style="margin-top: 1rem; margin-bottom: 0;">
                    <summary>Project highlights</summary>
                    <p>${generateProjectDetail(item.title)}</p>
                </details>
            </div>
        `;
    }).join("");

    return `
        <section class="section-block">
            <span class="eyebrow">Showcase</span>
            <h2>Additional projects in development</h2>
            <p>These concepts are the next chapters in our portfolio, with room to grow as we finalize new game systems and production plans.</p>
        </section>
        <section class="section-block showcase-grid">
            ${cardsHtml}
        </section>
    `;
}

function buildFeaturedPage() {
    const detailSections = featuredProject.details.map((detail) => {
        return `
            <div class="card">
                <h3>${detail.label}</h3>
                <p>${detail.text}</p>
            </div>
        `;
    }).join("");

    const hasCF = featuredProject.crowdFundUrl === "#" || featuredProject.crowdFundUrl === null;
    const showcaseLink = hasShowcase ? `<a class="button button-secondary" href="#showcase">See other concepts</a>` : "";
    const crowdFundLink = !hasCF ? `<a class="button" href="${featuredProject.crowdFundUrl}" target="_blank">View CrowdFunding</a>` : "";

    return `
        <section class="section-block featured-banner featured-page-banner" style="background-image: url('${featuredProject.heroImage}');">
            <div class="featured-banner-content">
                <span class="eyebrow">Featured Studio Project</span>
                <h1>${featuredProject.title}</h1>
                <p>${featuredProject.summary}</p>
                <div class="hero-actions">
                    ${crowdFundLink}
                    <a class="button" href="#contact">Request Playtest Access</a>
                    ${showcaseLink}
                </div>
            </div>
        </section>
        <section class="section-block">
            <div class="section-heading">
                <span class="eyebrow">Project details</span>
                <h2>${featuredProject.title} Overview</h2>
            </div>
            <div class="cards-grid">
                ${detailSections}
            </div>
        </section>
        <section class="section-block">
            <div class="section-heading">
                <span class="eyebrow">What makes it stand out</span>
                <h2>Deep Deck Strategy</h2>
            </div>
            <p>Deckbuilding in Sirusian Wilds centres around balancing survival, resource efficiency and battlefield control. Players must carefully determine how to distribute Resources, Creatures, Equipment and Support cards within their decks in order to create reliable and effective strategies.<br><br>Different Resources naturally support different playstyles, allowing players to experiment with aggressive predator-focused builds, defensive endurance strategies, adaptive utility decks and other unique archetypes.</p>
        </section>
        <section class="section-block">
            <div class="section-heading">
                <h2>Immersive Worldbuilding</h2>
            </div>
            <p>Set on the dangerous and mysterious planets of Sirus, Sirusian Wilds blends science fiction, survival and xenobiologyinto a richly atmospheric trading card game universe.<br><br>Players encounter strange alien wildlife, valuable natural resources and evolving ecosystem threats as they build decks inspired by the hostile environments an Creatures inhabiting the planet. Every Creature is designed as part of a larger ecological system, complete with scientific classifications, themes and survival adaptations that help bring the world to life.</p>
        </section>
        <section class="section-block">
            <div class="section-heading">
                <h2>What's Next?</h2>
            </div>
            <p>As development continues, the universe of Sirusian Wilds is intended to expand across additional stories, game formats and interactive experiences brought to you by Snowbolt Games.</p>
        </section>
    `;
}

function generateProjectDetail(title) {
    switch (title) {
        case "Stormbound Arena":
            return "A fast-paced collectible card experience with faction synergies, board control, and an evolving rule set that supports both casual skirmishes and competitive play.";
        case "Frostforge Colony":
            return "A modular campaign with asymmetric clans, evolving resource goals, and a strong focus on cooperative decision-making through seasonal challenges.";
        case "Chrono Drift":
            return "A concept for a cinematic time-travel action game with emergent story beats, player-driven upgrades, and distinctive single-player pacing.";
        default:
            return "A new game concept built for engaging systems, memorable art, and replayable sessions.";
    }
}

function buildContactPage() {
    return `
        <section class="section-block">
            <span class="eyebrow">Get in touch</span>
            <h2>Contact the studio, share feedback, or request a playtest preview.</h2>
            <p>We love chatting with fellow players, fans, collaborators, and content creators. Use the form below to send us an idea or ask about our upcoming release plans.</p>
            <form class="contact-form" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="dad5e63f-5937-40c9-8be1-34e7938f5cd4" />
                <input type="text" name="name" placeholder="Your name" required />
                <input type="email" name="email" placeholder="Your email" required />
                <textarea name="message" placeholder="Tell us how we can help..." required></textarea>
                <button class="button" type="submit">Send Message</button>
            </form>
        </section>
        <section class="section-block">
            <div class="cards-grid">
                <div class="card">
                    <h3>Studio HQ</h3>
                    <p>Operating remotely with regular community events, live demos, and playtest nights for tabletop enthusiasts.</p>
                </div>
                <div class="card">
                    <h3>Playtest access</h3>
                    <p>Our earliest updates land through newsletters and preview sessions. Drop us a message to receive the next sample build.</p>
                </div>
                <div class="card">
                    <h3>Socials</h3>
                    <p>Follow our progress on social channels and demo streams to stay connected with new cards, game modes, and campaign reveals.</p>
                </div>
            </div>
        </section>
    `;
}

function buildPrivacyPage() {
    return `
        <section class="section-block">
            <span class="eyebrow">Privacy Policy</span>
            <h2>Your privacy is important to Snowbolt Games.</h2>
            <p>This Privacy Policy explains how Snowbolt Games collects, uses, discloses, and protects personal information when you visit our website and use our services.</p>
        </section>
        <section class="section-block">
            <h3>Information we collect</h3>
            <p>When you use our contact form or interact with the site, we may collect:</p>
            <ul>
                <li>Name and email address you provide in the contact form.</li>
                <li>Message content submitted through the contact form.</li>
                <li>Non-identifying usage data collected through analytics, such as page views, browser type, and device information.</li>
            </ul>
        </section>
        <section class="section-block">
            <h3>How we use information</h3>
            <p>We use the information we collect to:</p>
            <ul>
                <li>respond to your enquiries and playtest requests;</li>
                <li>improve the website experience;</li>
                <li>share updates about our studio and upcoming projects; and</li>
                <li>support analytics and site performance monitoring.</li>
            </ul>
        </section>
        <section class="section-block">
            <h3>Contact form data</h3>
            <p>Your message is submitted through a third-party form service and is used only to respond to your inquiry. We do not sell or rent your personal information.</p>
        </section>
        <section class="section-block">
            <h3>Google Analytics</h3>
            <p>We may use Google Analytics to collect anonymous usage data. This helps us understand website traffic and improve the site. Google Analytics does not collect your name or email address.</p>
            <p>You may opt out of analytics tracking using browser privacy settings or extensions designed to block tracking scripts.</p>
        </section>
        <section class="section-block">
            <h3>Data security</h3>
            <p>We take reasonable measures to protect information collected through the site, but no internet transmission is completely secure.</p>
        </section>
        <section class="section-block">
            <h3>Policy updates</h3>
            <p>We may update this Privacy Policy periodically. The latest version will always be available on this page.</p>
        </section>
        <section class="section-block">
            <h3>Contact us</h3>
            <p>If you have questions about this Privacy Policy, please use the <a class="site-link" href="#contact">Contact</a> page <b>or</b> send us an email directly to <a class="site-link" href="mailto:snowboltgameshq@gmail.com">snowboltgameshq@gmail.com</a>.</p>
        </section>
    `;
}
