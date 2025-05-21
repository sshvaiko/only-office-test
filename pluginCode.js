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

      window.Asc.plugin.executeMethod("ShowError", ["Select data", 0]);


      const text = `{{QUESTION_${randomId}}}`;

      // window.Asc.plugin.executeMethod("PasteText", [text]);

      window.Asc.scope.text = text;
      
      window.Asc.plugin.callCommand(function () {
        const oDocument = Api.GetDocument();
        const oParagraph = Api.CreateParagraph();
        oParagraph.AddText(Asc.scope.text);
        oDocument.InsertContent([oParagraph]);
      }, false, false);



      

      // window.Asc.plugin.executeMethod("ShowError", ["Select data", 0]);

      //window.Asc.plugin.executeMethod("PasteText", [text]);


      console.log("Inserted:", text);
    });
  };

  window.Asc.plugin.button = (id) => {};
})(window);
