(function () {
    var xmlui = {};

    var constants = {
        // Generic javascript constants that can be used inside of xml
        'true':  true,
        'false':  false,
    };

    var _mergeProperties = function () {
      var obj = {};
      for (var i=0; i<arguments.length;i++) {
        var src = arguments[i];
        for (k in src) {
          if (src.hasOwnProperty(k)) {
            obj[k] = src[k];
          }
        }
      }
      return obj;
    }

    try {
      var uiConstants = {
        // Titanium.UI
        'ANIMATION_CURVE_EASE_IN':      Ti.UI.iOS.ANIMATION_CURVE_EASE_IN, 
        'ANIMATION_CURVE_EASE_IN_OUT':  Ti.UI.iOS.ANIMATION_CURVE_EASE_IN_OUT, 
        'ANIMATION_CURVE_EASE_OUT':     Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT, 
        'ANIMATION_CURVE_LINEAR':       Ti.UI.iOS.ANIMATION_CURVE_LINEAR, 
        'AUTODETECT_ADDRESS':           Ti.UI.iOS.AUTODETECT_ADDRESS, 
        'AUTODETECT_ALL':               Ti.UI.iOS.AUTODETECT_ALL, 
        'AUTODETECT_CALENDAR':          Ti.UI.iOS.AUTODETECT_CALENDAR, 
        'AUTODETECT_LINK':              Ti.UI.iOS.AUTODETECT_LINK, 
        'AUTODETECT_NONE':              Ti.UI.iOS.AUTODETECT_NONE, 
        'AUTODETECT_PHONE':             Ti.UI.iOS.AUTODETECT_PHONE, 
        'BLEND_MODE_CLEAR':             Ti.UI.iOS.BLEND_MODE_CLEAR, 
        'BLEND_MODE_COLOR':             Ti.UI.iOS.BLEND_MODE_COLOR, 
        'BLEND_MODE_COLOR_BURN':        Ti.UI.iOS.BLEND_MODE_COLOR_BURN, 
        'BLEND_MODE_COLOR_DODGE':       Ti.UI.iOS.BLEND_MODE_COLOR_DODGE, 
        'BLEND_MODE_COPY':              Ti.UI.iOS.BLEND_MODE_COPY, 
        'BLEND_MODE_DARKEN':            Ti.UI.iOS.BLEND_MODE_DARKEN, 
        'BLEND_MODE_DESTINATION_ATOP':  Ti.UI.iOS.BLEND_MODE_DESTINATION_ATOP, 
        'BLEND_MODE_DESTINATION_IN':    Ti.UI.iOS.BLEND_MODE_DESTINATION_IN, 
        'BLEND_MODE_DESTINATION_OUT':   Ti.UI.iOS.BLEND_MODE_DESTINATION_OUT, 
        'BLEND_MODE_DESTINATION_OVER':  Ti.UI.iOS.BLEND_MODE_DESTINATION_OVER, 
        'BLEND_MODE_DIFFERENCE':        Ti.UI.iOS.BLEND_MODE_DIFFERENCE, 
        'BLEND_MODE_EXCLUSION':         Ti.UI.iOS.BLEND_MODE_EXCLUSION, 
        'BLEND_MODE_HARD_LIGHT':        Ti.UI.iOS.BLEND_MODE_HARD_LIGHT, 
        'BLEND_MODE_HUE':               Ti.UI.iOS.BLEND_MODE_HUE, 
        'BLEND_MODE_LIGHTEN':           Ti.UI.iOS.BLEND_MODE_LIGHTEN, 
        'BLEND_MODE_LUMINOSITY':        Ti.UI.iOS.BLEND_MODE_LUMINOSITY, 
        'BLEND_MODE_MULTIPLY':          Ti.UI.iOS.BLEND_MODE_MULTIPLY, 
        'BLEND_MODE_NORMAL':            Ti.UI.iOS.BLEND_MODE_NORMAL, 
        'BLEND_MODE_OVERLAY':           Ti.UI.iOS.BLEND_MODE_OVERLAY, 
        'BLEND_MODE_PLUS_DARKER':       Ti.UI.iOS.BLEND_MODE_PLUS_DARKER, 
        'BLEND_MODE_PLUS_LIGHTER':      Ti.UI.iOS.BLEND_MODE_PLUS_LIGHTER, 
        'BLEND_MODE_SATURATION':        Ti.UI.iOS.BLEND_MODE_SATURATION, 
        'BLEND_MODE_SCREEN':            Ti.UI.iOS.BLEND_MODE_SCREEN, 
        'BLEND_MODE_SOFT_LIGHT':        Ti.UI.iOS.BLEND_MODE_SOFT_LIGHT, 
        'BLEND_MODE_SOURCE_ATOP':       Ti.UI.iOS.BLEND_MODE_SOURCE_ATOP, 
        'BLEND_MODE_SOURCE_IN':         Ti.UI.iOS.BLEND_MODE_SOURCE_IN, 
        'BLEND_MODE_SOURCE_OUT':        Ti.UI.iOS.BLEND_MODE_SOURCE_OUT, 
        'BLEND_MODE_XOR':               Ti.UI.iOS.BLEND_MODE_XOR, 
        'FACE_DOWN':                    Ti.UI.FACE_DOWN, 
        'FACE_UP':                      Ti.UI.FACE_UP, 
        'INPUT_BORDERSTYLE_BEZEL':      Ti.UI.INPUT_BORDERSTYLE_BEZEL, 
        'INPUT_BORDERSTYLE_LINE':       Ti.UI.INPUT_BORDERSTYLE_LINE, 
        'INPUT_BORDERSTYLE_NONE':       Ti.UI.INPUT_BORDERSTYLE_NONE, 
        'INPUT_BORDERSTYLE_ROUNDED':    Ti.UI.INPUT_BORDERSTYLE_ROUNDED, 
        'INPUT_BUTTONMODE_ALWAYS':      Ti.UI.INPUT_BUTTONMODE_ALWAYS, 
        'INPUT_BUTTONMODE_NEVER':       Ti.UI.INPUT_BUTTONMODE_NEVER, 
        'INPUT_BUTTONMODE_ONBLUR':      Ti.UI.INPUT_BUTTONMODE_ONBLUR, 
        'INPUT_BUTTONMODE_ONFOCUS':     Ti.UI.INPUT_BUTTONMODE_ONFOCUS, 
        'KEYBOARD_APPEARANCE_ALERT':    Ti.UI.KEYBOARD_APPEARANCE_ALERT, 
        'KEYBOARD_APPEARANCE_DEFAULT':  Ti.UI.KEYBOARD_APPEARANCE_DEFAULT, 
        'KEYBOARD_ASCII':               Ti.UI.KEYBOARD_ASCII, 
        'KEYBOARD_DEFAULT':             Ti.UI.KEYBOARD_DEFAULT, 
        'KEYBOARD_EMAIL':               Ti.UI.KEYBOARD_EMAIL, 
        'KEYBOARD_NAMEPHONE_PAD':       Ti.UI.KEYBOARD_NAMEPHONE_PAD, 
        'KEYBOARD_NUMBERS_PUNCTUATION': Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION, 
        'KEYBOARD_NUMBER_PAD':          Ti.UI.KEYBOARD_NUMBER_PAD, 
        'KEYBOARD_PHONE_PAD':           Ti.UI.KEYBOARD_PHONE_PAD, 
        'KEYBOARD_URL':                 Ti.UI.KEYBOARD_URL, 
        'LANDSCAPE_LEFT':               Ti.UI.LANDSCAPE_LEFT, 
        'LANDSCAPE_RIGHT':              Ti.UI.LANDSCAPE_RIGHT, 
        'NOTIFICATION_DURATION_LONG':   Ti.UI.NOTIFICATION_DURATION_LONG, 
        'NOTIFICATION_DURATION_SHORT':  Ti.UI.NOTIFICATION_DURATION_SHORT, 
        'PICKER_TYPE_COUNT_DOWN_TIMER': Ti.UI.PICKER_TYPE_COUNT_DOWN_TIMER, 
        'PICKER_TYPE_DATE':             Ti.UI.PICKER_TYPE_DATE, 
        'PICKER_TYPE_DATE_AND_TIME':    Ti.UI.PICKER_TYPE_DATE_AND_TIME, 
        'PICKER_TYPE_PLAIN':            Ti.UI.PICKER_TYPE_PLAIN, 
        'PICKER_TYPE_TIME':             Ti.UI.PICKER_TYPE_TIME, 
        'PORTRAIT':                     Ti.UI.PORTRAIT, 
        'RETURNKEY_DEFAULT':            Ti.UI.RETURNKEY_DEFAULT, 
        'RETURNKEY_DONE':               Ti.UI.RETURNKEY_DONE, 
        'RETURNKEY_EMERGENCY_CALL':     Ti.UI.RETURNKEY_EMERGENCY_CALL, 
        'RETURNKEY_GO':                 Ti.UI.RETURNKEY_GO, 
        'RETURNKEY_GOOGLE':             Ti.UI.RETURNKEY_GOOGLE, 
        'RETURNKEY_JOIN':               Ti.UI.RETURNKEY_JOIN, 
        'RETURNKEY_NEXT':               Ti.UI.RETURNKEY_NEXT, 
        'RETURNKEY_ROUTE':              Ti.UI.RETURNKEY_ROUTE, 
        'RETURNKEY_SEARCH':             Ti.UI.RETURNKEY_SEARCH, 
        'RETURNKEY_SEND':               Ti.UI.RETURNKEY_SEND, 
        'RETURNKEY_YAHOO':              Ti.UI.RETURNKEY_YAHOO, 
        'TEXT_ALIGNMENT_CENTER':        Ti.UI.TEXT_ALIGNMENT_CENTER, 
        'TEXT_ALIGNMENT_LEFT':          Ti.UI.TEXT_ALIGNMENT_LEFT, 
        'TEXT_ALIGNMENT_RIGHT':         Ti.UI.TEXT_ALIGNMENT_RIGHT, 
        'TEXT_AUTOCAPITALIZATION_ALL':       Ti.UI.TEXT_AUTOCAPITALIZATION_ALL, 
        'TEXT_AUTOCAPITALIZATION_NONE':      Ti.UI.TEXT_AUTOCAPITALIZATION_NONE, 
        'TEXT_AUTOCAPITALIZATION_SENTENCES': Ti.UI.TEXT_AUTOCAPITALIZATION_SENTENCES, 
        'TEXT_AUTOCAPITALIZATION_WORDS':     Ti.UI.TEXT_AUTOCAPITALIZATION_WORDS, 
        'TEXT_VERTICAL_ALIGNMENT_BOTTOM': Ti.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM, 
        'TEXT_VERTICAL_ALIGNMENT_CENTER': Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER, 
        'TEXT_VERTICAL_ALIGNMENT_TOP':    Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP, 
        'UNKNOWN':                      Ti.UI.UNKNOWN, 
        'UPSIDE_PORTRAIT':              Ti.UI.UPSIDE_PORTRAIT,
      };

      constants = _mergeProperties(constants,uiConstants);

    } catch (e) {
      Ti.API.warn("Error reading Ti.UI constants: " + e);
    }

    try {
      var ipadConstants = {
        // iPad
        'POPOVER_ARROW_DIRECTION_ANY':      Ti.UI.iPad.POPOVER_ARROW_DIRECTION_ANY,
        'POPOVER_ARROW_DIRECTION_DOWN':     Ti.UI.iPad.POPOVER_ARROW_DIRECTION_DOWN,
        'POPOVER_ARROW_DIRECTION_LEFT':     Ti.UI.iPad.POPOVER_ARROW_DIRECTION_LEFT,
        'POPOVER_ARROW_DIRECTION_RIGHT':    Ti.UI.iPad.POPOVER_ARROW_DIRECTION_RIGHT,
        'POPOVER_ARROW_DIRECTION_UNKNOWN':  Ti.UI.iPad.POPOVER_ARROW_DIRECTION_UNKNOWN,
        'POPOVER_ARROW_DIRECTION_UP':       Ti.UI.iPad.POPOVER_ARROW_DIRECTION_UP,
      };

      constants = _mergeProperties(constants,ipadConstants);

    } catch (e) {
      Ti.API.warn("Error reading Ti.UI.iPad constants: " + e + " (probably safe if you are not compiling for iPad)");
    }

    try {
      var iphoneConstants = {
        'MODAL_PRESENTATION_CURRENT_CONTEXT':     Ti.UI.iPhone.MODAL_PRESENTATION_CURRENT_CONTEXT,
        'MODAL_PRESENTATION_FORMSHEET':           Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET,
        'MODAL_PRESENTATION_FULLSCREEN':          Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN,
        'MODAL_PRESENTATION_PAGESHEET':           Ti.UI.iPhone.MODAL_PRESENTATION_PAGESHEET,
        'MODAL_TRANSITION_STYLE_COVER_VERTICAL':  Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL,
        'MODAL_TRANSITION_STYLE_CROSS_DISSOLVE':  Ti.UI.iPhone.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE,
        'MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL': Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
        'MODAL_TRANSITION_STYLE_PARTIAL_CURL':    Ti.UI.iPhone.MODAL_TRANSITION_STYLE_PARTIAL_CURL,
      };

      constants = _mergeProperties(constants,iphoneConstants);

    } catch (e) {
      Ti.API.warn("Error reading Ti.UI.iPhone constants: " + e + " (probably safe if you are not compiling for iPhone)");
    }

    try {
      var androidConstants = {};
      constants = _mergeProperties(constants,androidConstants);
    } catch (e) {
      Ti.API.warn("Error reading Ti.UI.Android constants: " + e + " (probably safe if you are not compiling for Android)");
    }


    var attributes = function (el) {
        var skip = {
            'element'  : 1,
            'name'     : 1,
            'children' : 1,
        };
        var attributes = {};
        for (var attr in el) {
            if (el.hasOwnProperty(attr) && !skip[attr]) {
                var val = el[attr];
                if (val in constants) {
                    attributes[attr] = constants[val];
                } else if (val.match(/^\{.+\}$/) || val.match(/^\[.+\]$/)) {
                    Ti.API.info("Parsing JSON: " + val);
                    attributes[attr] = JSON.parse(val);
                } else if (xmlui.model && xmlui.model.hasOwnProperty(val)) {
                    attributes[attr] = xmlui.model[val];
                } else {
                    attributes[attr] = val;
                }
            }
        }
        return attributes;
    };
   
    var elements = {
        // Titanium.UI elements (tag to creation methods)
        'activityindicator' :   Ti.UI.createActivityIndicator,
        'alertdialog' :         Ti.UI.createAlertDialog,
        'button' :              Ti.UI.createButton,
        'buttonbar' :           Ti.UI.createButtonBar,
        'coverflowview' :       Ti.UI.createCoverFlowView,
        'dashboarditem' :       Ti.UI.createDashboardItem,
        'dashboardview' :       Ti.UI.createDashboardView,
        'emaildialog' :         Ti.UI.createEmailDialog,
        'imageview' :           Ti.UI.createImageView,
        'label' :               Ti.UI.createLabel,
        'optiondialog' :        Ti.UI.createOptionDialog,
        'picker' :              Ti.UI.createPicker,
        'pickercolumn' :        Ti.UI.createPickerColumn,
        'pickerrow' :           Ti.UI.createPickerRow,
        'progressbar' :         Ti.UI.createProgressBar,
        'scrollview' :          Ti.UI.createScrollView,
        'scrollableview' :      Ti.UI.createScrollableView,
        'searchbar' :           Ti.UI.createSearchBar,
        'slider' :              Ti.UI.createSlider,
        'switch' :              Ti.UI.createSwitch,
        'tab' :                 Ti.UI.createTab,
        'tabgroup' :            Ti.UI.createTabGroup,
        'tabbedbar' :           Ti.UI.createTabbedBar,
        'tableview' :           Ti.UI.createTableView,
        'tableviewrow' :        Ti.UI.createTableViewRow,
        'tableviewsection' :    Ti.UI.createTableViewSection,
        'textarea' :            Ti.UI.createTextArea,
        'textfield' :           Ti.UI.createTextField,
        'toolbar' :             Ti.UI.createToolbar,
        'view' :                Ti.UI.createView,
        'webview' :             Ti.UI.createWebView,
        'window' :              Ti.UI.createWindow,
    };

    try {
      var iOSElements = {
        'adview' : Ti.UI.iOS.createAdView,
      };

      _mergeProperties(elements,iOSElements);
    } catch (e) {
      Ti.API.warn("Error reading Ti.UI elements: " + e);
    }

    try {
      var ipadElements = {
        'popover' :     Ti.UI.iPad.createPopover,
        'splitwindow' : Ti.UI.iPad.createSplitWindow,
      };

      _mergeProperties(elements,ipadElements);
    } catch (e) {
      Ti.API.warn("Error reading Ti.UI.iPad elements: " + e + " (probably safe if you are not compiling for iPad)");
    }

    try {
      var iphoneElements = {
        'navigationgroup' : Ti.UI.iPhone.NavigationGroup,
      };

      _mergeProperties(elements,iphoneElements);
    } catch (e) {
      Ti.API.warn("Error reading Ti.UI.iPhone elements: " + e + " (probably safe if you are not compiling for iPhone)");
    }

    try {
      var fbElements = {
        'facebooklogin' : Ti.Facebook.createLoginButton,
      };

      _mergeProperties(elements,fbElements);
    } catch (e) {
      Ti.API.warn("Error reading Ti.Facebook elements: " + e);
    };

    var aliases = {
        'table'   : 'tableview',
        'row'     : 'tableviewrow',
        'section' : 'tableviewsection', 
    };

    var createElement = function (el) {
        var element = el.element,
            name    = el.name;

        if (elements[element]) {
            var attr = attributes(el);             // remove meta-info
            Ti.API.info("Creating " + element + " " + name + " with properties " + JSON.stringify(attr));
            xmlui[name] = elements[element](attr); // create it
        } else {
            if (element != '#text') {
              Ti.API.warn("Unknown element: " + element);
            }
            xmlui[name] = {};
            return;
        }
        
        // some elements may require additional setup
        // todo: add to the initialization as a function () {}
        if (el.element == 'dashboardview' || el.element == 'DashboardView') {
            var data = [];
            xmlui[name].appendItem = function (item) {
                data.push(item);
                xmlui[name].data = data;
            };
        }
    };

    // now we are going to check the way how we add the child to the parent
    // in most cases it is simply p.add(c), but we have some exceptions,
    // and, thus, this table
    var add_method = {
        'coverflowview' :   function (p,c) { p.add(c) },
        'buttonbar' :       function (p,c) { p.add(c) },
        'dashboardview' :   function (p,c) { p.appendItem(c) },
        'imageview' :       function (p,c) { p.add(c) },
        'picker' :          function (p,c) { p.add(c) }, // does it require an array of children?
        'pickercolumn' :    function (p,c) { p.add(c) },
        'pickerrow' :       function (p,c) { p.add(c) },
        'progressbar' :     function (p,c) { p.add(c) },
        'scrollview' :      function (p,c) { p.add(c) },
        'scrollableview' :  function (p,c) { p.add(c) },
        'searchbar' :       function (p,c) { p.add(c) },
        'slider' :          function (p,c) { p.add(c) },
        'switch' :          function (p,c) { p.add(c) },
        'tab' :             function (p,c) { p.window = c },
        'tabgroup' :        function (p,c) { p.addTab(c) },
        'tabbedbar' :       function (p,c) { p.add(c) },
        'tableview' :       function (p,c) { p.appendRow(c) },
        'tableviewrow' :    function (p,c) { p.add(c) },
        'tableviewsection' : function (p,c) { p.add(c) },
        'textfield' :       function (p,c) { p.add(c) },
        'textarea' :        function (p,c) { p.add(c) },
        'toolbar' :         function (p,c) { p.add(c) },
        'view' :            function (p,c) { p.add(c) },
        'webview' :         function (p,c) { p.add(c) },
        'window' :          function (p,c) { p.add(c) },
    };

    // some elements cannot be "added" to others; they simply "float"
    // above other elements
    var skip_children = {
        'activityindicator' : true,
        'alertdialog'       : true,
        'emaildialog'       : true,
        'optiondialog'      : true,
        '#text'             : true,
    };

    var addElement = function (paren,child) {
        var pt = paren.element, // paren type
            ct = child.element; // child type

        if (skip_children[ct]) {
            return;
        }

        Ti.API.info("Adding " + child.name + " " + child.element + " to " + paren.name + " " + paren.element);

        var f = add_method[pt];

        if (f) {
            // use the objects stored in xmlui
            f(xmlui[paren.name],xmlui[child.name]);
        } else {
            Ti.API.error("Can't add objects to " + child.element + " " + child.name);
            return;
        }
    };

    var parseNode = function (node) {
        // create return object
        var obj = {
            element : node.nodeName
        };
                
        // attributes
        if (node.hasAttributes()) {
          for (var j = 0; j < node.attributes.length; j++) {
            var attribute = node.attributes.item(j);
            obj[attribute.nodeName] = attribute.nodeValue;
          }
        }
        
        // children
        if (node.hasChildNodes()) {
          try {
              obj.children = [];
              for(var i = 0; i < node.childNodes.length; i++) {
                  var item = node.childNodes.item(i);
                  var nodeName = item.nodeName;
                  obj.children.push( parseNode(item) );
              }
          } catch (err) {
              Ti.API.warn("Error creating " + node.nodeName + " children: " + err.description);
          }
        }
            
        return obj;
    };

    var lastNameId = {};
    var pickNameForElement = function (el_type) {
        if (lastNameId[el_type]) {
            lastNameId[el_type]++;
        } else {
            lastNameId[el_type] = 1;
        }

        // ex: window1, view1, etc
        return '_' + el_type + lastNameId[el_type];
    }

    // var exports = {};

    exports.create = function (el) {
        if (!el.hasOwnProperty('element')) {
            throw("Element type not defined");
            return;
        }

        if (!el.name) {
            // generate a name automatically
            el.name = pickNameForElement(el.element);
        }

        // Accept aliases such as <table>, <row>, instead of <tableview>, <tableviewrow>
        if (aliases[el.element]) {
            el.element = aliases[el.element];
        }

        createElement(el);

        if (el.hasOwnProperty('children')) {
            for (var i=0; i< el.children.length; i++) {
                exports.create(el.children[i]);
                addElement(el,el.children[i]);
            }
        }
 
        return xmlui;
    };

    exports.parseString = function (xmlStr) {
        if (xmlStr) {
            var doc = Ti.XML.parseString(xmlStr);
            return exports.create( parseNode(doc.documentElement) );
        } else {
            throw("Expected a XML string");
        }
    };

    exports.parseFile = function (filename) {
        var file = Ti.Filesystem.getFile(filename);
        if (file.exists()) {
            var xml = file.read();
            return exports.parseString(xml.text);
        } else {
            throw("File '" + filename + "' not found");
        }
    };

    // return exports;
})();

