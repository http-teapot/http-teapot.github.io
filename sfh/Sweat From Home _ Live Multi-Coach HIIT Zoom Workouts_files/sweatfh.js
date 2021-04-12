"use strict";

(function () {
  var widgetId = "EwhYv4SOpiB6rg3BoAsa";

  function vudoirMapImageToProduct(image) {
    var dataset = JSON.parse(image.dataset.vudoir);
    var productInfo = {
      productId: dataset.productId,
      productName: dataset.productName,
      productLink: null,
      meta: {
        price: 0,
        images: [image.src]
      }
    };
    return productInfo;
  }

  function createVirtualProduct(imageUrl, data) {
    var imageElement = document.createElement("img");
    imageElement.className = "vudoir-product-image";
    imageElement.src = imageUrl;
    imageElement.style.height = 0;
    imageElement.style.width = 0;
    imageElement.style.display = "none";
    imageElement.dataset.vudoir = JSON.stringify(data);
    document.body.appendChild(imageElement);
  }

  function initializeWidget() {
    var products = [{
      imageUrl: "https://integrations.v2.vudoir.com/assets/sweatfh-pass-icon.png",
      data: {
        productId: "pass",
        productName: "Sweat From Home - Pass"
      }
    }, {
      imageUrl: "https://integrations.v2.vudoir.com/assets/sweatfh-workout-icon.png",
      data: {
        productId: "workout",
        productName: "Sweat From Home - Workout"
      }
    }];

    for (var _i = 0, _products = products; _i < _products.length; _i++) {
      var product = _products[_i];
      createVirtualProduct(product.imageUrl, product.data);
    }

    var whitelistedUrls = ["www.sweatfh.com", "www.sweatfh.com/reserve-your-sweat", "www.sweatfh.com/meet-the-team", "www.sweatfh.com/our-story", "www.sweatfh.com/faq", "www.sweatfh.com/contact", "www.sweatfh.com/sweat-store", "www.sweatfh.com/refer-a-friend"];
    var trackingOnly = !whitelistedUrls.find(function (url) {
      return window.location.href.includes(url);
    });
    var widgetOptions = {
      language: "en",
      trackingOnly: trackingOnly,
      mapImageToProduct: vudoirMapImageToProduct
    };
    var pageInformation = {
      pageType: null,
      featuredProduct: null
    };
    window.vudoirV2Widget.initialize(widgetId, widgetOptions, pageInformation);
  }

  function injectWidgetCode() {
    var widgetScript = document.createElement("script");
    widgetScript.type = "text/javascript";
    widgetScript.src = "https://v2.vudoir.com/widget.js";

    widgetScript.onload = function () {
      return initializeWidget();
    };

    document.body.appendChild(widgetScript);
  }

  if (document.readyState === "interactive" || document.readyState === "complete" || document.readyState === "loaded") {
    injectWidgetCode();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      return injectWidgetCode();
    });
  }
})();