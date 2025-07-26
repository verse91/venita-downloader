export default defineBackground({
  main() {
    browser.runtime.onInstalled.addListener(() => {
      browser.contextMenus.create({
        id: "download-full-video",
        title: "Download full video",
        contexts: ["video"],
      });
    }),
      browser.runtime.onInstalled.addListener(() => {
        browser.contextMenus.create({
          id: "download-by-time-range",
          title: "Download by time range",
          contexts: ["video"],
        });
      })
  },
});
