const tabs = (option) => {
  const {
    selectorTabsButtons,
    activeClassButton,
    selectorTabsElement,
    activeClassTab,
    callback = () => {},
  } = option;

  const tabsBtn = document.querySelectorAll(selectorTabsButtons);
  const tabsElem = document.querySelectorAll(selectorTabsElement);

  tabsBtns.forEach((btn, i) => {
    console.log(btn, i);
  });
};

export default tabs;
