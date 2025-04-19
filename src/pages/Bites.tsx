import { SaveButton } from "@/components/ui/save-button"
import "./Bites.css";

export default function Bites() {
  const handleSave = async () => {
    window.open('https://form.typeform.com/to/your-form-id', '_blank')
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="hero-title text-4xl font-bold text-white mb-4">
          PERMA-BITES
        </h1>
        <p className="hero-subtext ext-gray-400 max-w-md mx-auto">
        Get a taste of the permaweb — pizza, prints, and early access. More details on Permabites coming soon 👀        </p>
      </div>
      
      <SaveButton 
        text={{
          idle: "Register",
          saving: "Processing...",
          saved: "Welcome Aboard! 🎉"
        }}
        className="hero-buttontx text-lg font-medium"
        onSave={handleSave}
      />
    </div>
  )
} 