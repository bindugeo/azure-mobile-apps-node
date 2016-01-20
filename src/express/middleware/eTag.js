// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation. All rights reserved.
// ----------------------------------------------------------------------------
var getEtagFromVersion = require('../../utilities/strings').getEtagFromVersion;

module.exports = function (req, res, next) {
    if (res.results && res.results.version) {
        res.set('ETag', getEtagFromVersion(res.results.version));
    }
    next();
};