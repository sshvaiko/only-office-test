((window) => {
  window.Asc.plugin.init = () => {
    window.Asc.plugin.executeMethod("AddToolbarMenuItem", [{
      guid: window.Asc.plugin.guid,
      tabs: [{
        id: "greenometer_tab",
        text: "Greenometer",
        items: [{
          id: "greenometer_button_esrs",
          type: "button",
          text: "Insert ESRS Data",
          hint: "Insert Greenometer message",
          icons: "resources/icon.png"
        }]
      }]
    }]);

    window.Asc.plugin.attachToolbarMenuClickEvent("greenometer_button_esrs", (data) => {
      const randomId = Math.floor(Math.random() * 1_0000_0000);
      const text = `{{QUESTION_${randomId}}}`;

      window.Asc.plugin.executeMethod("PasteText", [text]);

      window.Asc.plugin.executeMethod("ShowError", ["Select data", 0]);

      window.Asc.plugin.executeMethod("StartAction", ["Block", "Insert ESRS Data..."], function () {
        setTimeout(function () {
          window.Asc.plugin.executeMethod("EndAction", ["Block", "Insert ESRS Data..."]);
        }, 200);
      });

      console.log("Inserted:", text);
    });
  };

  window.Asc.plugin.button = (id) => {};
})(window);
