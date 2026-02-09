(function () {
  function hidePopup() {
    var popup = document.getElementById("notRemoverPopup");
    if (popup) {
      popup.style.visibility = "hidden";
      return true;
    }
    return false;
  }

  if (hidePopup()) {
    return;
  }

  // watching the DOM for the popup to hide it once it appears
  var observer = new MutationObserver(function () {
    if (hidePopup()) {
      observer.disconnect();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();