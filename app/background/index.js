chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true
      },
      function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          {
            url: details.url
          }
        );
      }
    );
  },
  {
    urls: [
      "https://*.storage.yandex.net/get-mp3/*",
      "https://*.strm.yandex.net/*",
    ],
  }
);
