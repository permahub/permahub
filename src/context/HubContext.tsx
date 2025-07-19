import { createContext, useContext, useState, ReactNode } from 'react';

interface HubContextType {
  hasEnteredHub: boolean;
  enterHub: () => void;
}

const HubContext = createContext<HubContextType | undefined>(undefined);

export function HubProvider({ children }: { children: ReactNode }) {
  const [hasEnteredHub, setHasEnteredHub] = useState(false);

  const enterHub = () => {
    setHasEnteredHub(true);
  };

  return (
    <HubContext.Provider value={{ hasEnteredHub, enterHub }}>
      {children}
    </HubContext.Provider>
  );
}

export function useHub() {
  const context = useContext(HubContext);
  if (context === undefined) {
    throw new Error('useHub must be used within a HubProvider');
  }
  return context;
} 