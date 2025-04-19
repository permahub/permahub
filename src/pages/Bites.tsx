import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { SaveButton } from "@/components/ui/save-button"
import "./bites.css";
const features = [
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    className: "col-span-1 row-span-1",
  },
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    className: "col-start-2 row-span-2",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    className: "col-span-1 row-start-2",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    className: "col-start-3 row-span-1",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    className: "col-start-3 row-start-2",
  },
];

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