_ = require('underscore');
var base_client = require('../base/client');
var client = require('../console-client');

var io = base_client(2223);
client(io);
