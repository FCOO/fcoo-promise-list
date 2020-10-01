/****************************************************************************
    fcoo-promise-list.js,

    (c) 2020, FCOO

    https://github.com/FCOO/fcoo-promise-list
    https://github.com/FCOO

****************************************************************************/

(function (window/*, document, undefined*/) {
    "use strict";

    //Create fcoo-namespace
    var ns = window.fcoo = window.fcoo || {};

    //Overwrite intervals.isFileName and window.intervals.getFileName to use FCOO filename conventions
    window.intervals.isFileName = function(fileNameOrData){
        return (($.type(fileNameOrData) == 'string') || (fileNameOrData.subDir && fileNameOrData.fileName));
    };

    window.intervals.getFileName = function(fileName){
        return ns.dataFilePath(fileName);
    };

    //Create common FCOO PromiseList
    ns.promiseList = new window.PromiseList({

    });

}(this, document));