import React, { useState, useEffect } from "react";
import { JSX, InterestingFactsProps } from "../../../types";
import { InterestingFactsData } from "../InterestingFactsData";

export const InterestingFacts = (props: InterestingFactsProps): JSX => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % props.data.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [currentIndex, props.data.length]);

  return <InterestingFactsData data={props.data} index={currentIndex} />;
};
