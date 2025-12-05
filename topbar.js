function createNavigationMenu() {
  // Create the <nav> element
  const navElement = document.createElement('nav');

  // Create the main <ul> element
  const ulElement = document.createElement('ul');

  // Define menu items and their properties
  const menuItems = [{
    text: '■ Home',
    href: '/'
  }, {
    text: '■ About',
    href: '/about'
  }, {
    text: '■ Gallery',
    href: '/gallery'
  }, {
    text: '■ Blog',
    href: '/blog'
  }, {
    text: '■ Translations',
    href: '/translations'
  }, {
    text: '■ Credits',
    href: '/credits'
  }, {
    text: 'Submenu (hover)',
    isSubmenu: true,
    submenuItems: [{
      text: '■ Writing',
      href: '/writing'
    }, {
      text: '■ Ask Box',
      href: 'https://marshmallow-qa.com/6d379n294ez7eal',
      target: '_blank'
    }, {
      text: '■ Philosophy',
      href: '/philosophy'
    }, ],
  }, ];

  // Iterate over menu items to create list items
  menuItems.forEach(itemData => {
    const liElement = document.createElement('li');

    if (itemData.isSubmenu) {
      // Create strong tag for submenu title
      const strongElement = document.createElement('strong');
      strongElement.textContent = itemData.text;
      liElement.appendChild(strongElement);

      // Create submenu <ul>
      const subUlElement = document.createElement('ul');
      itemData.submenuItems.forEach(subItemData => {
        const subLiElement = document.createElement('li');
        const subAElement = document.createElement('a');
        subAElement.href = subItemData.href;
        subAElement.textContent = subItemData.text;
        if (subItemData.target) {
          subAElement.target = subItemData.target;
        }
        subLiElement.appendChild(subAElement);
        subUlElement.appendChild(subLiElement);
      });
      liElement.appendChild(subUlElement);
    } else {
      // Create anchor tag for regular menu item
      const aElement = document.createElement('a');
      aElement.href = itemData.href;
      aElement.textContent = itemData.text;
      liElement.appendChild(aElement);
    }
    ulElement.appendChild(liElement);
  });

  navElement.appendChild(ulElement);

  return navElement;
}
