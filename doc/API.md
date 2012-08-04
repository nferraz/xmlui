XML User Interface API
======================


ELEMENTS
--------

The following elements are accepted:

* activityindicator
* alertdialog
* button
* buttonbar
* coverflowview
* dashboarditem
* dashboardview
* emaildialog
* imageview
* label
* optiondialog
* picker
* pickercolumn
* pickerrow
* progressbar
* scrollview
* scrollableview
* searchbar
* slider
* switch
* tab
* tabgroup
* tabbedbar
* tableview
* tableviewrow
* tableviewsection
* textarea
* textfield
* toolbar
* view
* webview
* window


ATTRIBUTES
----------

Each tag attribute will be translatedo an equivalent property, with
the exact same name, in the resulting object. For instance:

    <window backgroundColor="#fff" opacity="0.5" width="200" height="300" foo="bar" />

Will be translated to:

    Titanium.UI.createWindow({
        backgroundColor: '#fff',
        opacity: 0.5,
        width: 200,
        height: 300,
        foo: 'bar'
    });


CONSTANTS
---------

The following Titanium.UI constants are accepted:

* ANIMATION_CURVE_EASE_IN 
* ANIMATION_CURVE_EASE_IN_OUT 
* ANIMATION_CURVE_EASE_OUT 
* ANIMATION_CURVE_LINEAR 
* AUTODETECT_ADDRESS 
* AUTODETECT_ALL 
* AUTODETECT_CALENDAR 
* AUTODETECT_LINK 
* AUTODETECT_NONE 
* AUTODETECT_PHONE 
* BLEND_MODE_CLEAR 
* BLEND_MODE_COLOR 
* BLEND_MODE_COLOR_BURN 
* BLEND_MODE_COLOR_DODGE 
* BLEND_MODE_COPY 
* BLEND_MODE_DARKEN 
* BLEND_MODE_DESTINATION_ATOP 
* BLEND_MODE_DESTINATION_IN 
* BLEND_MODE_DESTINATION_OUT 
* BLEND_MODE_DESTINATION_OVER 
* BLEND_MODE_DIFFERENCE 
* BLEND_MODE_EXCLUSION 
* BLEND_MODE_HARD_LIGHT 
* BLEND_MODE_HUE 
* BLEND_MODE_LIGHTEN 
* BLEND_MODE_LUMINOSITY 
* BLEND_MODE_MULTIPLY 
* BLEND_MODE_NORMAL 
* BLEND_MODE_OVERLAY 
* BLEND_MODE_PLUS_DARKER 
* BLEND_MODE_PLUS_LIGHTER 
* BLEND_MODE_SATURATION 
* BLEND_MODE_SCREEN 
* BLEND_MODE_SOFT_LIGHT 
* BLEND_MODE_SOURCE_ATOP 
* BLEND_MODE_SOURCE_IN 
* BLEND_MODE_SOURCE_OUT 
* BLEND_MODE_XOR 
* FACE_DOWN 
* FACE_UP 
* INPUT_BORDERSTYLE_BEZEL 
* INPUT_BORDERSTYLE_LINE 
* INPUT_BORDERSTYLE_NONE 
* INPUT_BORDERSTYLE_ROUNDED 
* INPUT_BUTTONMODE_ALWAYS 
* INPUT_BUTTONMODE_NEVER 
* INPUT_BUTTONMODE_ONBLUR 
* INPUT_BUTTONMODE_ONFOCUS 
* KEYBOARD_APPEARANCE_ALERT 
* KEYBOARD_APPEARANCE_DEFAULT 
* KEYBOARD_ASCII 
* KEYBOARD_DEFAULT 
* KEYBOARD_EMAIL 
* KEYBOARD_NAMEPHONE_PAD 
* KEYBOARD_NUMBERS_PUNCTUATION 
* KEYBOARD_NUMBER_PAD 
* KEYBOARD_PHONE_PAD 
* KEYBOARD_URL 
* LANDSCAPE_LEFT 
* LANDSCAPE_RIGHT 
* NOTIFICATION_DURATION_LONG 
* NOTIFICATION_DURATION_SHORT 
* PICKER_TYPE_COUNT_DOWN_TIMER 
* PICKER_TYPE_DATE 
* PICKER_TYPE_DATE_AND_TIME 
* PICKER_TYPE_PLAIN 
* PICKER_TYPE_TIME 
* PORTRAIT 
* RETURNKEY_DEFAULT 
* RETURNKEY_DONE 
* RETURNKEY_EMERGENCY_CALL 
* RETURNKEY_GO 
* RETURNKEY_GOOGLE 
* RETURNKEY_JOIN 
* RETURNKEY_NEXT 
* RETURNKEY_ROUTE 
* RETURNKEY_SEARCH 
* RETURNKEY_SEND 
* RETURNKEY_YAHOO 
* TEXT_ALIGNMENT_CENTER 
* TEXT_ALIGNMENT_LEFT 
* TEXT_ALIGNMENT_RIGHT 
* TEXT_AUTOCAPITALIZATION_ALL 
* TEXT_AUTOCAPITALIZATION_NONE 
* TEXT_AUTOCAPITALIZATION_SENTENCES 
* TEXT_AUTOCAPITALIZATION_WORDS 
* TEXT_VERTICAL_ALIGNMENT_BOTTOM 
* TEXT_VERTICAL_ALIGNMENT_CENTER 
* TEXT_VERTICAL_ALIGNMENT_TOP 
* UNKNOWN 
* UPSIDE_PORTRAIT

The following Titanium.iPhone.UI constants are accepted:

* MODAL_PRESENTATION_CURRENT_CONTEXT 
* MODAL_PRESENTATION_FORMSHEET 
* MODAL_PRESENTATION_FULLSCREEN 
* MODAL_PRESENTATION_PAGESHEET 
* MODAL_TRANSITION_STYLE_COVER_VERTICAL 
* MODAL_TRANSITION_STYLE_CROSS_DISSOLVE 
* MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL 
* MODAL_TRANSITION_STYLE_PARTIAL_CURL 

Example:

    <window modal="true" modalStyle="MODAL_PRESENTATION_FORMSHEET" modalTransitionStyle="MODAL_TRANSITION_STYLE_PARTIAL_CURL" />

Will be translated to:

    Titanium.UI.createWindow({
        modal: true,
        modalStyle: 2,
        modalTransitionStyle: 3
    });


JSON VALUES
-----------

You may use JSON values inside of attributes. For instance:

    <table data='[{"title":"Row 1"},{"title":"Row 2"}]' />

This will be translated to:

    Titanium.UI.createTableView({
        data: [
            {"title": "Row 1"},
            {"title": "Row 2"}
        ]
    });

ATTENTION: the JSON specification *requires* strings to be enclosed
by double quotes (""), and not single quotes ('').

For this reason, the following will not work:

    <!-- broken example -->
    <table data="[{'title':'Row 1'},{'title':'Row 2'}]" />

ALWAYS use double quotes for keys and string values in JSON.
