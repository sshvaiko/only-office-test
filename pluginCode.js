// Example insert text into editors (different implementations)
((window) => {
  const text = "Hello world!"
  window.Asc.plugin.init = () => {
    window.Asc.plugin.executeMethod("AddToolbarMenuItem", [{
          guid: window.Asc.plugin.guid,
          tabs: [{
            id: "greenometer_tab",
            text: "Greenometer",
            items: [{
              id: "greenometer_button",
              type: "button",
              text: "Insert CO2 Data",
              hint: "Insert Greenometer message",
              icons: "resources/icon.png"
            }, 
                   {
              id: "greenometer_button",
              type: "button",
              text: "Insert ESRS Data",
              hint: "Insert Greenometer message",
              icons: "resources/icon.png"
            }]
          }]
        }])
  }

  window.Asc.plugin.button = (id) => {}
})(window)
