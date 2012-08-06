// View
//
// Create the user interface and perform all the necessary changes.
// This is also the place for UI-related methods.

Ti.include("xmlui.js");

var xmlui = new XMLUI();

var ui = xmlui.parseFile('interface.xml');

ui.tabGroup.open();

ui.text1.value = model.sampleCode;
