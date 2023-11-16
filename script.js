//header logic
const menuButton = document.getElementsByClassName('mobile-menu-button')[0];
const navbarLinks = document.getElementsByClassName('menu')[0];

menuButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

//tabs logic
const tabs = document.querySelectorAll('#tab_btn');
const content = document.querySelectorAll('#tab_content');

const handleClick = (index) => {
  tabs.forEach((tab, tabIndex) => {
    if (tab.classList.contains('active')) {
      tab.classList.remove('active');
    }
    if (index === tabIndex) {
      tab.classList.add('active');
    }
  });

  content.forEach((element, elementIndex) => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
    if (index === elementIndex) {
      element.classList.add('active');
    }
  });
};

for (let index = 0; index < tabs.length; index++) {
  const btn = tabs[index];
  btn.addEventListener('click', () => {
    handleClick(index);
  });
}
