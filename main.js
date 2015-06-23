/*global define, brackets */

define(function (require) {
    'use strict';
    var PreferencesManager = brackets.getModule("preferences/PreferencesManager");
    
    PreferencesManager.set('sortDirectoriesFirst', true);
    PreferencesManager.save();
});