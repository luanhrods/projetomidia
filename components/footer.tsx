export function Footer() {
  return (
    <footer className="border-t-2 sm:border-t-4 border-accent bg-card py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-3xl sm:text-4xl font-black mb-3 sm:mb-4">PMD</h3>
            <p className="text-muted-foreground font-medium leading-relaxed text-sm sm:text-base">
              Creative digital agency crafting bold brand experiences.
            </p>
          </div>

          <div>
            <h4 className="font-black text-base sm:text-lg mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
              <li>
                <a href="/services/brand-strategy" className="hover:text-accent transition-colors font-medium">
                  Brand Strategy
                </a>
              </li>
              <li>
                <a href="/services/visual-identity" className="hover:text-accent transition-colors font-medium">
                  Visual Identity
                </a>
              </li>
              <li>
                <a href="/services/web-design" className="hover:text-accent transition-colors font-medium">
                  Web Design
                </a>
              </li>
              <li>
                <a href="/services/digital-marketing" className="hover:text-accent transition-colors font-medium">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="/services/content-creation" className="hover:text-accent transition-colors font-medium">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="/services/social-media" className="hover:text-accent transition-colors font-medium">
                  Social Media
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-base sm:text-lg mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
              <li>
                <a href="/studio" className="hover:text-accent transition-colors font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="/work" className="hover:text-accent transition-colors font-medium">
                  Work
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-base sm:text-lg mb-3 sm:mb-4">Connect</h4>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-accent transition-colors font-medium">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors font-medium">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors font-medium">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors font-medium">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t-2 border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-muted-foreground font-medium text-sm sm:text-base">
            © {new Date().getFullYear()} projetomidia. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 font-medium text-muted-foreground text-sm sm:text-base">
            <a href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}