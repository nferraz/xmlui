// Controller
//
// Event listeners

ui.button1.addEventListener('click', function (e) {
    var ui2 = xmlui.parseString( ui.text1.value );
    ui2.win.open();
    ui2.btn.addEventListener('click', function (e) {
        ui2.win.close();
    });
});

ui.table1.addEventListener('click', function (e) {
    ui.webview1.url = e.rowData.title;
});

ui.webview1.addEventListener('load', function (e) {
    ui.textURL.value = e.url;
});

ui.button2.addEventListener('click', function (e) {
    ui.webview1.url = ui.textURL.value;
});

