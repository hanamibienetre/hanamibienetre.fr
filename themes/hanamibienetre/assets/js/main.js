(function () {
  const banner = document.getElementById("alert-banner");
  const bannerCloseButton = banner.getElementsByClassName("banner-close");
  const closeBanner = () => {
    banner.style.display = "none";
  };
  console.log({ banner }, { bannerCloseButton });
  if (bannerCloseButton) {
    bannerCloseButton[0].addEventListener("click", closeBanner);
  }
})()