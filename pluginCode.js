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
              id: "greenometer_button_co2",
              type: "button",
              text: "Insert CO2 Data",
              hint: "Insert Greenometer message",
              icons: "resources/icon.png"
            }, 
                   {
              id: "greenometer_button_esrs",
              type: "button",
              text: "Insert ESRS Data",
              hint: "Insert Greenometer message",
              icons: "resources/icon.png"
            }]
          }]
        }])

    window.Asc.plugin.attachToolbarMenuClickEvent("greenometer_button_co2", (data) => {
      window.parent.postMessage("greenometer_button_co2", "*");
      console.log("greenometer_button_co2", data)
    })

    window.Asc.plugin.attachToolbarMenuClickEvent("greenometer_button_esrs", (data) => {
      window.parent.postMessage("greenometer_button_esrs", "*");
      console.log("greenometer_button_esrs", data)
    })
  }

  window.Asc.plugin.button = (id) => {}
})(window)
