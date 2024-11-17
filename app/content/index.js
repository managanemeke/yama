const messageHandler = function (message) {
  console.log(message.url);
};
chrome.runtime.onMessage.addListener(messageHandler);
