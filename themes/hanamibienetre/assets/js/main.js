(function () {
  const banner = document.getElementById("alert-banner");
  const bannerCloseButton = banner.getElementsByClassName("banner-close");
  const bannerKey = "display_banner"
  const showBanner = () => {
    if (typeof sessionStorage == "undefined" || sessionStorage.getItem(bannerKey) == null) {
      banner.style.display = "flex";
    }
  };
  const closeBanner = () => {
    if (typeof sessionStorage != "undefined") {
      sessionStorage.setItem(bannerKey, false);
    }
    banner.style.display = "none";
  };
  if (bannerCloseButton) {
    bannerCloseButton[0].addEventListener("click", closeBanner);
  }
  showBanner();

  const mobileButtonOpener = document.getElementById("mobile-menu-opener");
  const menuHeader = document.getElementById("menuHeader");

  const switchMobileMenu = () => {
    menuHeader.style.top = menuHeader.style.top !== 0 ? 0 : "100%";
  }
  if (mobileButtonOpener) {
    mobileButtonOpener.addEventListener("click", switchMobileMenu);
  }
})()