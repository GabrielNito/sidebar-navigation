export function updateNavBar() {
  const sections = document.querySelectorAll(".section");
  let sections_positions: number[] = [];

  sections.forEach((section) => {
    var rect = section.getBoundingClientRect();
    sections_positions.push(Math.round(rect.top));
  });

  function changeSection(index: number) {
    const sections = document.querySelectorAll(".navbar_link");
    sections.forEach((section) => {
      section.classList.remove("show");
    });
    sections[index].classList.add("show");
    setTimeout(() => {
      sections[index].classList.remove("show");
    }, 1200);
  }

  function checkIfRepeated(lastIndex: number, currentIndex: number) {
    if (lastIndex !== currentIndex) {
      changeSection(currentIndex);
      return;
    }
  }

  let last_section_active: number;

  function checksSection() {
    if (Math.round(window.scrollY) < sections_positions[1] * 0.9) {
      checkIfRepeated(last_section_active, 0);
      last_section_active = 0;
    } else if (Math.round(window.scrollY) < sections_positions[2] * 0.9) {
      checkIfRepeated(last_section_active, 1);
      last_section_active = 1;
    } else if (Math.round(window.scrollY) < sections_positions[3] * 0.9) {
      checkIfRepeated(last_section_active, 2);
      last_section_active = 2;
    } else if (Math.round(window.scrollY) < sections_positions[4] * 0.9) {
      checkIfRepeated(last_section_active, 3);
      last_section_active = 3;
    } else {
      checkIfRepeated(last_section_active, 4);
      last_section_active = 4;
    }
  }
  changeSection(0);

  onscroll = () => {
    checksSection();
  };
}
