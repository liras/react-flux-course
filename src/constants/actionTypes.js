"use strict";

// keyMirror library copies the name of the key to the value of the key
// with a call to keyMirror() - just for simplicity and less typing
var keyMirror = require('react/lib/keyMirror');

module.exports = keyMirror({
    INITIALIZE: null,
    CREATE_AUTHOR: null,
    DELETE_AUTHOR: null,
    UPDATE_AUTHOR: null
});