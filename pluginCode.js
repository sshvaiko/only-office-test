// Example insert text into editors (different implementations)
((window) => {
  const text = "Hello world!"
  window.Asc.plugin.init = () => {
    window.Asc.plugin.executeMethod("AddToolbarMenuItem", [{
          guid: window.Asc.plugin.guid,
          tabs: [
            
                   {
              id: "greenometer_button_esrs",
              type: "button",
              text: "Insert ESRS Data",
              hint: "Insert Greenometer message",
              icons: "resources/icon.png"
            }]
          }]
        }])

    window.Asc.plugin.attachToolbarMenuClickEvent("greenometer_button_esrs", (data) => {
      const message = {
        source: "onlyoffice-plugin",
        type: "greenometer_button_co2",
        payload: data
      };
      
      window.Asc.plugin.executeMethod("ShowError", ["Select data", 0]);
      const randomId = Math.floor(Math.random() * 1_0000_0000); // Up to 8 digits
      const text = `{{QUESTION_${randomId}}}`;
      window.Asc.plugin.executeMethod("InsertText", [text]);

      window.Asc.plugin.executeMethod("StartAction", ["Block", "Save to local storage..."], function () {
          setTimeout(function () {
              window.Asc.plugin.executeMethod("EndAction", ["Block", "Save to local storage..."]);
          }, 200);
      });
      
      console.log("greenometer_button_co2", data)
    })
  }

  window.Asc.plugin.button = (id) => {}
})(window)
