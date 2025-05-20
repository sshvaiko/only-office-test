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

  window.Asc.plugin.event_onToolbarMenuClick = (id) => {
    let insertText = ""
    let eventType = ""
  
    if (id === "greenometer_button_co2") {
      insertText = "Greenometer CO2: 42g/km"
      eventType = "co2"
    } else if (id === "greenometer_button_esrs") {
      insertText = "ESRS E1 Disclosure: Scope 1, 2 included"
      eventType = "esrs"
    } else {
      return
    }
  
    // Alert (for testing)
    alert(`Button clicked: ${eventType}`)
  
    // Send event to React app (outside iFrame)
    const data = { type: eventType, text: insertText }
    const event = new CustomEvent("greenometerData", { detail: data })
    window.parent.document.dispatchEvent(event)
  
    // Insert into document
    Asc.scope.text = insertText
    window.Asc.plugin.callCommand(() => {
      const oDocument = Api.GetDocument()
      const oParagraph = Api.CreateParagraph()
      oParagraph.AddText(Asc.scope.text)
      oDocument.InsertContent([oParagraph])
    }, true)
  }

  window.Asc.plugin.button = (id) => {}
})(window)
