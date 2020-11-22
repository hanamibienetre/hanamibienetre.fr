(function () {
  const banner = document.getElementById("alert-banner");
  const bannerCloseButton = banner.getElementsByClassName("banner-close");
  const closeBanner = () => {
    if(typeof sessionStorage != "undefined") {
      sessionStorage.setItem("banner", false);
    }
    banner.style.display = "none";
  };
  console.log({ banner }, { bannerCloseButton });
  if (bannerCloseButton) {
    bannerCloseButton[0].addEventListener("click", closeBanner);
  }
  if(typeof sessionStorage != "undefined") {
    if(sessionStorage.getItem("banner")){
      closeBanner()
    }
  }
})()