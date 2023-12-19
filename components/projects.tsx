"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { TYPHOGRAPHY, projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useLanguageContext } from "@/context/language-context";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const {language} = useLanguageContext();

  return (
    <section ref={ref} id="projects" className="scroll-mt-24 mb-28">
      <SectionHeading>{TYPHOGRAPHY[language].MY_PROJECT}</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />            
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
