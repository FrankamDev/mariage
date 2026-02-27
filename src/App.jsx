// src/App.jsx
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Calendar, MapPin, Clock } from 'lucide-react'
import Hero from './components/Hero'
import Programme from './components/Programme'
import Details from './components/Details'
import RSVP from './components/RSVP'
import CouplePhoto from './components/CouplePhoto'
import LocalisationSection from './components/LocalisationSection'
import Colors from './components/Colors'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <>
      {/* Tous les meta tags dynamiques ici */}
      <Helmet>
        <title>Clémence & Elias — Mariage 10.04.2026</title>
        <meta
          name="description"
          content="Rejoignez-nous pour célébrer notre union le 10 avril 2026 à Bafoussam. Découvrez le programme, les détails et confirmez votre présence."
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://welcome.getomiie.com/" />
        <meta property="og:title" content="Clémence & Elias — 10.04.2026" />
        <meta
          property="og:description"
          content="Une journée d’amour et de partage à Bafoussam. Programme, lieu, tenue et RSVP en ligne."
        />
        <meta property="og:image" content="https://welcome.getomiie.com/cool.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Clémence et Elias – Mariage 10 avril 2026" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clémence & Elias — Mariage 10.04.2026" />
        <meta
          name="twitter:description"
          content="Rejoignez-nous pour notre grand jour à Bafoussam. RSVP simple et rapide."
        />
        <meta name="twitter:image" content="https://welcome.getomiie.com/cool.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50 text-gray-800 font-lora overflow-x-hidden">
        <div className="fixed inset-0 pointer-events-none bg-[url('https://images.unsplash.com/photo-1519741497674-...')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="relative z-10"
        >
          <Hero />
          <LocalisationSection />
          <Programme />
          <Details />
          <Colors />
          <RSVP />
          <CouplePhoto />
        </motion.div>
      </div>
    </>
  )
}

export default App