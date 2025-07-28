import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
const About = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground">
              About This
            </h1>
            
          </div>

          <Card className="p-8 shadow-elegant bg-card border border-border">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-medium text-foreground">What is this?</h2>
                <p className="text-foreground/90 leading-relaxed">Hi, I'm Abhijith. I have a bunch of random interests that I want to talk about in long form but I don't really want to blast on my socials.  </p>
                <p className="text-foreground/90 leading-relaxed">If you found this website you either: A. know me incredibly well and I told you about it, B. are a FBI level stalker or C. are really bored and found this by accident.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-serif font-medium text-foreground">
                  Who am I?
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  I'm just a tech/finance bro from Southwest Florida that has some interesting takes on where I think things are headed. </p>
                <p className="text-foreground/90 leading-relaxed">If you want a professional background, I went to Cal, worked at a couple finance firms and startups where I did basically all of the back office work of running a tech company (like sales, finance, etc.). I started a few companies myself and learned a lot even though nothing took off. I'm currently looking for some clarity on what I should do next.</p>
                <p className="text-foreground/90 leading-relaxed">Outside of work, I have a dash of a personality. I'm a major football/soccer fan; ¡Visca Barça!. I'm a house music fan (currently on jazz house as I'm writing this but it'll probably change by the end of the week). I started running not too long ago, I'm working on getting to 10k now. I started getting back into reading again; I'm reading this book on the history of philosophy. It's my second casual book of the year (2 more than the last 4 years combined). 
                It's slowed down now but I've watched a ton of film and shows in a number of languages. I play the piano and the viola, and grew up playing baseball and football (soccer). I have a bit of a fleeting personality when it comes to hobbies, I want to try as much as possible at least once. If you look at the hobbies and hyperfixations section, you'll see a lot of things that I've gotten up to in the past and what I think about it.</p>
               </div>


               <h2 className="text-xl font-serif font-medium text-foreground">
                What can you do about it?
               </h2>
               <p className="text-foreground/90 leading-relaxed">
                Well, that's up to you. I'd say take a read through the site. Start with the stuff that's interesting to you. When you've felt the labyrinth that is my brain consuming you too, move on to the stuff that you wouldn't think to read. 
                If you want, let me know what you think. No matter what, I stand by what I say, but if you found this site, I want to hear your thoughts. It's the least I could do given the trouble it took for you to find it.   
                </p>

              <div className="pt-6 border-t border-border">
                <div className="text-center space-y-4">
                  <p className="text-sm text-muted-foreground">If you wanna reach out, feel free to DM me on any of my socials</p>
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="https://instagram.com/abhijithneel" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://x.com/abhijithneel" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="X (Twitter)"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com/in/abhijithneel" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://tiktok.com/@abhijithneel" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="TikTok"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default About;