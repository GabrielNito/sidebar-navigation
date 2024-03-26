import { useEffect } from "react";
import { updateNavBar } from "../scripts/updateNavBar";

const ComponentsPages = () => {
  useEffect(() => {
    updateNavBar();
  }, []);

  return (
    <>
      <section id="section_1" className="section section_1" />
      <section id="section_2" className="section section_2" />
      <section id="section_3" className="section section_3" />
      <section id="section_4" className="section section_4" />
      <section id="section_5" className="section section_5" />
    </>
  );
};

export default ComponentsPages;
