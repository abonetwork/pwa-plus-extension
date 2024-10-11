// handle message sent from PWA
chrome.runtime.onMessageExternal.addListener(async function (
  request,
  sender,
  sendResponse
) {
  if ((request.methodName = "captureScreenshot")) {
    try {
      const captureData = await chrome.tabs.captureVisibleTab();
      console.log(`capturedata: ${captureData}`);
      sendResponse({ capturedData: captureData });
    } catch (error) {
      sendResponse(null);
    }
  }
});
