import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = () => {
      setMatches(mediaQuery.matches);
    };

    mediaQuery.addListener(handleChange);

    handleChange();

    return () => mediaQuery.removeListener(handleChange);
  }, [query]);

  return matches;
};

export default useMediaQuery;
