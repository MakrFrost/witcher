import burgerMenu from "./burger.js";
import tabs from "./tabs.js";
import renderTabs from "./renderTabs.js";
import "./videotube.js";

burgerMenu({
  selectorMenu: ".header-nav__list",
  openMenuSelector: ".header-nav__list_active",
});

tabs({
  selectorTabsButtons: ".present-tabs__btn",
  activeClassButton: "active",
  selectorTabsElement: ".tabs-item",
  activeClassTab: "tabs-item__active",
  callback: renderTabs,
});

renderTabs();
