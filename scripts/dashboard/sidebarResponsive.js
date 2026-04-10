// 📌 PATH ICONS
// ==============================
const srcImgClose = '../../img/sidebaricon/chevron-left-double-svgrepo-com.svg';
const srcImgOpen = '../../img/sidebaricon/chevron-right-double-svgrepo-com.svg';
const srcImgOpenAll = '../../img/sidebaricon//menu-svgrepo-com.svg';

// 📌 ELEMENTS
// ==============================
const icon_show = document.querySelector('.icon-show-sidebar');
const textNavigate = document.querySelectorAll('.text-navigate');

const logo = document.querySelector('.logo');
const img_logo = document.querySelector('.img-logo');
const img_admin = document.querySelector('.img-admin');
const admin_text = document.querySelector('.admin-text');
const admin_logo = document.querySelector('.admin-logo');
const iconSidebar = document.querySelector('.iconSidebar');
const contentPageMarginLift = document.getElementById('contentPageMarginLift');

const sidebar = document.querySelector('.sidebar');

// ==============================
// 📌 STATE (3 حالات)
// open  -> كامل
// semi  -> أيقونات فقط
// close -> مخفي
// ==============================
const widthSidebar = ['open', 'semi', 'close'];
let indexSidebar = 0;

// ==============================
// 📌 EVENT (click)
// كل ضغطة تغير الحالة
// ==============================
icon_show.addEventListener('click', () => {
  userControlled = true;
  controlHiddenSidebar();
  renderSidebar();
});

window.addEventListener('resize', setSidebarByScreen);
window.addEventListener('load', setSidebarByScreen);

// 📌 CHANGE STATE
// ==============================
function controlHiddenSidebar() {
  indexSidebar = (indexSidebar + 1) % widthSidebar.length;
}

// 📌 RENDER SIDEBAR (أهم جزء)
// ==============================
function renderSidebar() {
  const state = widthSidebar[indexSidebar];

  // 🔄 reset classes
  sidebar.classList.remove('sidebar-semi-close', 'sidebar-close');

  // 🔄 مهم جدًا: reset زرار الفتح
  icon_show.classList.remove('icon-show-sidebar-close');

  // ==============================
  // 🟢 OPEN
  // ==============================
  if (state === 'open') {
    textNavigate.forEach((el) => {
      el.style.display = 'block';
      contentPageMarginLift.style.marginLeft = '310px';
    });

    icon_show.src = srcImgClose;

    hiddenImgAndLogo(false);
  }

  // ==============================
  // 🟡 SEMI
  // ==============================
  if (state === 'semi') {
    sidebar.classList.add('sidebar-semi-close');
    contentPageMarginLift.style.marginLeft = '80px';
    textNavigate.forEach((el) => {
      el.style.display = 'none';
    });

    icon_show.src = srcImgClose;

    hiddenImgAndLogo(true);
  }

  // ==============================
  // 🔴 CLOSE
  // ==============================
  if (state === 'close') {
    sidebar.classList.add('sidebar-close');
contentPageMarginLift.style.marginLeft = '0';
    textNavigate.forEach((el) => {
      el.style.display = 'none';
    });

    icon_show.src = srcImgOpenAll;

    // ✅ إضافة الكلاس هنا فقط
    icon_show.classList.add('icon-show-sidebar-close');

    hiddenImgAndLogo(true);
  }
}
// 📌 CONTROL LOGO + IMAGES
// ==============================
function hiddenImgAndLogo(isOpen) {
  logo.classList.toggle('close-logo', isOpen);
  img_logo.classList.toggle('img-logo-close', isOpen);
  img_admin.classList.toggle('img-admin-close', isOpen);
  admin_text.classList.toggle('admin-text-close', isOpen);
  admin_logo.classList.toggle('admin-logo-close', isOpen);
  iconSidebar.classList.toggle('iconSidebar-close', isOpen);
}

let userControlled = false;

function setSidebarByScreen() {
  const width = window.innerWidth;

  // ✅ الموبايل: دايمًا مخفي
  if (width <= 600) {
    indexSidebar = 2; // close
    renderSidebar();
    return;
  }

  // ✅ باقي الشاشات: يحترم اختيار المستخدم
  if (userControlled) return;

  if (width > 992) {
    indexSidebar = 0; // open
  } else {
    indexSidebar = 1; // semi
  }

  renderSidebar();
}
setSidebarByScreen();

/*
// READ PATH ICONS SHOW AND HIDDEN IN SIDEBAR
const srcImgClose = '../../img/sidebaricon/chevron-left-double-svgrepo-com.svg';
const srcImgOpen = '../../img/sidebaricon/chevron-right-double-svgrepo-com.svg';

// read text link in sidebar and title and logo to hidden in mobil and tablet
const icon_show = document.querySelector('.icon-show-sidebar');
const textNavigate = document.querySelectorAll('.text-navigate');

// action function
icon_show.addEventListener('click', () => {
  // mark show and hidden in side bar
  const isOpen = icon_show.src.includes('chevron-left-double-svgrepo-com.svg');

  // render function
  changeMarkHiddenSidebar_andLinkNavigate(isOpen);
  hiddenImgAndLogo(isOpen);
  controlHiddenSidebar(isOpen);
});

function changeMarkHiddenSidebar_andLinkNavigate(isOpen) {
  icon_show.src = isOpen ? srcImgOpen : srcImgClose;
  textNavigate.forEach((el) => {
    el.style.display = isOpen ? 'none' : 'block';
  });
}

const logo = document.querySelector('.logo');
const img_logo = document.querySelector('.img-logo');
const img_admin = document.querySelector('.img-admin');
const admin_text = document.querySelector('.admin-text');
const admin_logo = document.querySelector('.admin-logo');
const iconSidebar = document.querySelector('.iconSidebar');

function hiddenImgAndLogo(isOpen) {
  logo.classList.toggle('close-logo', isOpen);
  img_logo.classList.toggle('img-logo-close', isOpen);
  img_admin.classList.toggle('img-admin-close', isOpen);
  admin_text.classList.toggle('admin-text-close', isOpen);
  admin_logo.classList.toggle('admin-logo-close', isOpen);
  iconSidebar.classList.toggle('iconSidebar-close', isOpen);
}

const sidebar = document.querySelector('.sidebar');

// state sidebar
const widthSidebar = ['open', 'semi', 'close'];
let indexSidebar = 0;

function controlHiddenSidebar() {
  sidebar.classList.remove('sidebar-semi-close', 'sidebar-close');
  if (widthSidebar[indexSidebar] == 'semi') {
    sidebar.classList.add('sidebar-semi-close');
  }
  if (widthSidebar[indexSidebar] == 'close') {
    sidebar.classList.add('sidebar-close');
  }
  indexSidebar = (indexSidebar + 1) % widthSidebar.length;
}
*/
