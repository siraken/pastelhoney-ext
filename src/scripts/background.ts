const topMenu = chrome.contextMenus.create({
  id: 'top',
  title: 'ぱすはに',
  contexts: ['all'],
});

const homeMenu = chrome.contextMenus.create({
  id: 'home',
  title: 'ホーム',
  parentId: topMenu,
  contexts: ['all'],
});

const SatoNozomiMenu = chrome.contextMenus.create({
  id: 'sato-nozomi',
  title: '佐藤希',
  parentId: topMenu,
  contexts: ['all'],
});

const OrocaMenu = chrome.contextMenus.create({
  id: 'oroca',
  title: 'oroca',
  parentId: topMenu,
  contexts: ['all'],
});

const MarinaruMenu = chrome.contextMenus.create({
  id: 'marinaru',
  title: 'まりなる',
  parentId: topMenu,
  contexts: ['all'],
});

const BabynicoMenu = chrome.contextMenus.create({
  id: 'babynico',
  title: 'Babynico',
  parentId: topMenu,
  contexts: ['all'],
});

const YukimuraChanMenu = chrome.contextMenus.create({
  id: 'yukimura',
  title: 'ﾕｷﾑﾗﾁｬﾝ！',
  parentId: topMenu,
  contexts: ['all'],
});

const ZepaMenu = chrome.contextMenus.create({
  id: 'zepa',
  title: 'ゼパ',
  parentId: topMenu,
  contexts: ['all'],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (!tab || !tab.id) return;
  switch (info.menuItemId) {
    case 'home':
      break;
    case 'sato-nozomi':
      break;
    case 'oroca':
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          console.log('bokudayo...');
          navigator.clipboard.writeText(':bokudayo');
        },
      });
      break;
    case 'marinaru':
      break;
    case 'babynico':
      break;
    case 'yukimura':
      break;
    case 'zepa':
      break;
    default:
      break;
  }
});
