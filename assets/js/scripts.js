/**
 *
 * Author: Abu Md. Maruf Sarker
 * Author URI: https://marufsarker.github.io/
 * License: MIT License
 * License URI: https://opensource.org/licenses/mit-license.php
 *
 *
 * Title: Scripts for Social Share Buttons
 *
 */

function popupWindowManager(shareableLink) {
  var popup = {
    width: 500,
    height: 350
  };
  popup.top = (screen.height / 2) - (popup.height / 2);
  popup.left = (screen.width / 2)  - (popup.width / 2);

  var sharingWindowFeatures = {
    left: popup.left,
    top: popup.top,
    height: popup.height,
    width: popup.width,
    menubar: "no",
    toolbar: "no",
    location: "no",
    status: "no",
    resizable: "yes",
    scrollbars: "yes"
  };

  sharingWindowFeatures = Object.keys(sharingWindowFeatures).map(function(key) {
    return key + '=' + sharingWindowFeatures[key];
  }).join(',');

  window.open(
    shareableLink,
    'sharingWindow',
    sharingWindowFeatures
  );
  return false;
}

function shareableLinkGenerator(socilaMedia) {
  var pageTitle = encodeURIComponent(document.title);
  var pageLink = window.location.href || document.location.href;
  var twitterUsername = 'iMaruf';

  if (socilaMedia === 'twitter') {
    return "//twitter.com/intent/tweet?" + "text=" + pageTitle + "&url=" + pageLink + "&via=" + twitterUsername;
  } else if (socilaMedia === 'facebook') {
    return "//facebook.com/sharer/sharer.php?" + "u=" + pageLink;
  } else if (socilaMedia === 'google-plus') {
    return "//plus.google.com/share?" + "url=" + pageLink;
  } else if (socilaMedia === 'reddit') {
    return "//reddit.com/submit?" + "url=" + pageLink + "&title=" + pageTitle;
  } else if (socilaMedia === 'linkedin') {
    return "//linkedin.com/shareArticle?" + "mini=true" + "&url=" + pageLink;
  } else if (socilaMedia === 'email') {
    return "mailto:?" + "subject=" + pageTitle + "&body=" + pageLink;
  }
}

function socialShareManager(socilaMedia) {
  popupWindowManager(shareableLinkGenerator(socilaMedia));
  return false;
}
