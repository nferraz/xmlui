XML UI - XML User Interface for Appcelerator
============================================

SYNOPSYS
--------

    // Instantiate it
    var xmlui = require('xmlui');

    // Parse an external XML file...
    var ui = xmlui.parseFile('interface.xml');

    // ...or a XML string
    var ui = xmlui.parseString(xml);

    // Manipulate the user interface programatically
    ui.win1.open();
    ui.label1.text = "Hello, world!";


DESCRIPTION
-----------

XML UI was created to help the development of applications using
Appcelerator.

Instead of coding the interface using the Titanium.UI.create
methods, you can simply declare your interface in XML.

Most of the standard user interface elements will simply work
as expected:

    <window name="win1">
        <view>
            <label text="I am a label"/>
            <button name="button1"
                width="100" height="50" top="50" title="OK"/>
        </view>
    </window>


Please note that every element must have a name, so you can refer
to it in code.  If you ommit the name, a generic one will be created.

In the example, win1 and button1 were explicitly defined, so you
can access them programatically:

    ui.win1.open();

    ui.button1.addEventListender('click', function () {
        alert("Hello, world!");
    });


METHODS
-------

* parseFile(filename) // open and parse a XML file
* parseString(xml)    // parse a XML string


SAMPLE PROJECT
--------------

The sample application, in the "example/" directory, demonstrates
how to use this module to create some different user interfaces.
The code is separated according to the MVC pattern, so the "app.js"
file is simply:

    Ti.include("model.js");
    Ti.include("view.js");
    Ti.include("controller.js");


The relevant part is in "view.js":

    var ui = require('xmlui');

    ui.parseFile('interface.xml');

    ui.tabgroup1.open();


The user interface is defined in "interface.xml".


COPYRIGHT AND LICENSE
---------------------

Copyright (C) 2011, 2012 Nelson Ferraz

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met: 

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer. 
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
