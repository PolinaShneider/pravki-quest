require('../css/main.css');

var fairyQuest = (function (fairyQuest_) {

    fairyQuest_.settings = {};

    /**
     * Preparation method
     */
    fairyQuest_.init = function (settings) {

        /** Save settings or use defaults */
        for (var set in settings ) {

            this.settings[set] = settings[set] || this.settings[set] || null;

        }

    };

    return fairyQuest_;


})({});

/**
 * Document ready event listener
 * @usage fairyQuest.docReady(function(){ # code ... } );
 */
fairyQuest.docReady = function (f) {

    return /in/.test(document.readyState) ? setTimeout(fairyQuest.docReady, 9, f) : f();

};



fairyQuest.logger = require('./modules/logger');


module.exports = fairyQuest;

