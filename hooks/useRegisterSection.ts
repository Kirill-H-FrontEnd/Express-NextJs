import { useRef, useEffect } from "react";
import { useSection } from "@/app/providers/SectionProvider";

const useRegisterSection = (sectionName: string) => {
  const ref = useRef<HTMLElement>(null);
  const { registerSection } = useSection();

  useEffect(() => {
    registerSection(sectionName, ref);
  }, [sectionName, registerSection]);

  return ref;
};

export default useRegisterSection;
