import { GridMotion } from '../components/ui/grid-motion'
// Background images for the grid
const backgroundImages = [
  'https://arweave.net/hXNu4crmSMeSdartqgWvy4x8Di87JaGrFMKgm-hJXAE',
  'https://arweave.net/4wV6bgKAHiHZUAMuQYrDxSwzfssipQ3UURj24UOV5h8',
  'https://arweave.net/zKxZkXB09fpQ5ZcnUGmkS25gEoCyWQnlHA7xvzDkov0',
  'https://arweave.net/cnNp33EAu6SltjOrJY-uMYS2nTfnfshrRcvJqQX2XNc',
  'https://arweave.net/L2ooFQyx461HNMjK_yPoNeYt2sJe1KTVdSfA54zXYo8',
  'https://arweave.net/OXQv8iCSAX2XX8_KAivW1tpC38eV824fZyYs3MRjdik',
  'https://arweave.net/6B5QbFzEZcOUIhYFNnewvKyMo3LxfiE-2cOrM26IKnY',
  'https://arweave.net/1KT_O_HlUkdUgZEMcfv8e_M-DS5LFtLZQdHRucyAZBs',
  'https://arweave.net/2-6p7JOIzeXFwffUU6eise3J19vLoFaOAVXHECYuT08',
  'https://arweave.net/A5_um3dWJJ7xhprXuo5aZcwLO3nY9Grm_zaFgSX-gg4',
  'https://arweave.net/fp5tR6C7oiIe3cbbr7LjwY92yYeD03EZUXw3xFsx9I8',
  'https://arweave.net/vCOPLgzDdem095tLr3IsFZwBaFyorwsAh2minNPvgzA',
  'https://arweave.net/eOApBKABv5ffQszpFQxOfWQcZ2Jf5GoppoJuJi-vLiA',
  'https://arweave.net/QWBKXZ50bcOVQTEPRcTA0I9nyyFjvuQzBcj1s9uF318',
  'https://arweave.net/qTb2JqZytM-DvnAJkFTDUPj7pFtCbNbwHyDhBMDm3tU',
  'https://arweave.net/lvH4MLokEqR2nPzoS7t4-RE__qViw3vbSccdvfU614w',
  'https://arweave.net/Mu3myBZDuLtumDZteX7opaBgXs1IKnpdRaemoAU4rZU',
  'https://arweave.net/tTBVzjJr0cHh7sZ3VRolPC2p-5bTlXSMeOElnOUGEOk',
  'https://arweave.net/yeSC7szq0_jbyVXBR3rrCsCeqsho4uytDMkU7JWRpKk',
  'https://arweave.net/UaIcPWHjqGF2B3LNd5CO3MO6DSaCrQP-1l4Uq7wi_KE',
]

// Destination URLs for each grid item
const destinationUrls = [
  'https://permaverse.ar.io/',
  'https://github.com/elliotsayes/Reality/tree/main/docs',
  'https://stargrid.ar.io',
  'https://www.pixelgaming.us/',
  'https://joshburleson.itch.io/ao-war',
  'https://rimbox.vercel.app/',
  'https://aqualandia_reality-viewer.arweave.net/#/',
  'https://permaverse.ar.io/',
  'https://aqualandia_reality-viewer.arweave.net/#/',
  'https://dumverse-ao.vercel.app/',
  'https://cookbook_ao.arweave.net/tutorials/bots-and-games/ao-effect.html#what-s-the-game',
  'https://rimbox.vercel.app/',
  'https://runerealm_game.ar.io/#/',
  'https://stargrid.ar.io',
  'https://llamaland.ar.io/',
  'https://github.com/elliotsayes/Reality/tree/main/docs',
  'https://bazarmash.vercel.app/',
  'https://llamaland.ar.io/',
  'https://stargrid.ar.io',
  'https://beavers.warp.cc/',
]

export default function GridMotionDemo() {

  const handleItemClick = (index: number) => {
    const destinationUrl = destinationUrls[index]
    if (destinationUrl) {
      window.open(destinationUrl, '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-black/95 relative">
      {/* Video Background */}
      <div className="video-background-container absolute inset-0 w-full h-full overflow-hidden z-0">
        {/* <video 
          className="video-background w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/permahub.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
      
      <div className="h-screen w-full relative z-10">
        <GridMotion 
          items={backgroundImages}
          gradientColor="rgba(255,255,255,0.02)"
          className="relative z-10 backdrop-blur-[0.5px]"
          onItemClick={handleItemClick}
        />
      </div>
    </div>
  )
}
