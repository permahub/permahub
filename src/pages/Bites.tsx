import { SaveButton } from "@/components/ui/save-button"
import "./Bites.css";
import { Helmet } from 'react-helmet-async';

export default function Bites() {
  const handleSave = async () => {
    window.open('https://forms.gle/1PW9dvMD48fduKFq7', '_blank')
  }

  return (
    <>
      <Helmet>
        <title>Permabites | PermaHub</title>
        <meta name="description" content="Get a taste of the permaweb — pizza, prints, and early access. Apply to host a Permabite!" />
        <meta property="og:title" content="PermaBites | PermaHub" />
        <meta property="og:description" content="Get a taste of the permaweb — pizza, prints, and early access. Apply to host a Permabite!" />
        <meta property="og:image" content="https://permahub.vercel.app/permabites.png" />
        <meta property="og:url" content="https://permahub.vercel.app/bites" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="bites-background flex flex-col items-center justify-center p-4">
        <div className="bites-content w-full flex flex-col items-center">
          <div className="text-center mb-8">
            <h1 className="hero-title text-4xl font-bold text-white mb-4">
              PERMA-BITES
            </h1>
            <p className="hero-subtext ext-gray-400 max-w-md mx-auto">
              Get a taste of the permaweb — pizza, prints, and early access.
            </p>
          </div>
          <SaveButton 
            text={{
              idle: "Apply to Host",
              saving: "Processing...",
              saved: "Welcome Aboard! 🎉"
            }}
            className="hero-buttontx text-lg font-medium"
            onSave={handleSave}
          />
        </div>
      </div>
    </>
  )
} 