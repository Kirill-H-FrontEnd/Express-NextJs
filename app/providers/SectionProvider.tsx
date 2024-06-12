"use client";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

type SectionRefs = {
  [key: string]: React.RefObject<HTMLElement>;
};

type SectionContextType = {
  registerSection: (section: string, ref: React.RefObject<HTMLElement>) => void;
  scrollToSection: (section: string) => void;
};

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [sectionRefs, setSectionRefs] = useState<SectionRefs>({});

  const registerSection = useCallback(
    (section: string, ref: React.RefObject<HTMLElement>) => {
      setSectionRefs((prev) => ({ ...prev, [section]: ref }));
    },
    []
  );

  const scrollToSection = (section: string) => {
    if (sectionRefs[section]?.current) {
      sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionContext.Provider value={{ registerSection, scrollToSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSection must be used within a SectionProvider");
  }
  return context;
};
