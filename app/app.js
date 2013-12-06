/*
* to run :
* node app.js
* */

/*
* dependencies
* */
var express = require('express'),
    http = require('http'),
    upload = require('../');

var swig = require('swig');


// configuration
var resizeConf = require('./config').resizeVersion;
var dirs = require('./config').directors;



// express setup
var app = express();


// set template engine
app.engine('html', swig.renderFile);
swig.setDefaults({
    cache: false   // default 'memory'
});


// jquery-file-upload helper
app.use('/upload/default', function (req, res, next) {
    upload.fileHandler({
        tmpDir: dirs.temp,
        uploadDir: __dirname + dirs.default,
        uploadUrl: dirs.default_url,
        imageVersions: resizeConf.default
    })(req, res, next);
});

app.use('/upload/default/list', function (req, res, next) {
    upload.fileManager({
        uploadDir: function () {
            return __dirname + dirs.default;
        },
        uploadUrl: function () {
            return dirs.default_url;
        }
    }).getFiles(function (files) {
        res.json(files);
    });
});

app.use('/upload/line', upload.fileHandler({
    tmpDir: dirs.temp,
    uploadDir: __dirname + dirs.line,
    uploadUrl: dirs.line_url,
    imageVersions: resizeConf.line
}));

app.use('/upload/line/list', function (req, res, next) {
    upload.fileManager({
        uploadDir: function () {
            return __dirname + dirs.line;
        },
        uploadUrl: function () {
            return dirs.line_url;
        }
    }).getFiles(function (files) {
        res.json(files);
    });
});

app.use('/upload/goods', upload.fileHandler({
    tmpDir: dirs.temp,
    uploadDir: __dirname + dirs.goods,
    uploadUrl: dirs.goods_url,
    imageVersions: resizeConf.goods
}));

app.use('/upload/goods/list', function (req, res, next) {
    upload.fileManager({
        uploadDir: function () {
            return __dirname + dirs.goods;
        },
        uploadUrl: function () {
            return dirs.goods_url;
        }
    }).getFiles(function (files) {
        res.json(files);
    });
});

app.use('/upload/vehicle', upload.fileHandler({
    tmpDir: dirs.temp,
    uploadDir: __dirname + dirs.vehicle,
    uploadUrl: dirs.vehicle_url,
    imageVersions: resizeConf.vehicle
}));

app.use('/upload/vehicle/list', function (req, res, next) {
    upload.fileManager({
        uploadDir: function () {
            return __dirname + dirs.vehicle;
        },
        uploadUrl: function () {
            return dirs.vehicle_url;
        }
    }).getFiles(function (files) {
            res.json(files);
        });
});

// bind event
upload.on('begin', function (fileInfo) {
    var ext = fileInfo.name.substr(fileInfo.name.lastIndexOf('.') + 1);
    var datetime=new Date().getTime();
    var shortid = (datetime+(Math.floor(Math.random() * 10) + datetime).toString(36)).toLowerCase();
    fileInfo.name = shortid + '.' + ext;
});

upload.on('end', function (fileInfo) {
    // insert file info
    console.log("文件上传成功");
    console.log(fileInfo);
});

upload.on('delete', function (fileName) {
    // remove file info
    console.log("文件删除成功");
    console.log(fileName);
});

upload.on('error', function (e) {
    console.log(e.message);
});



// Configuration
app.configure(function () {
    app.set('port', process.env.PORT || 3001);
    app.set('view engine', 'html');
    app.set('view options', { layout: false });
    app.set('views', __dirname + '/views');

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('token'));
    app.use(express.session({ secret: 'secret' }));
    app.use(express.favicon());
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.set('view cache', false);
});

app.configure('production', function () {
    app.use(express.errorHandler());
    app.set('view cache', true);
});



/*
* routes
* */
app.get('/', function (req, res) {
    var html = [
        '<p>Call this url in browser : http://localhost:3001/default/input <a href="/default/input">Go</a></p>',
        '<p>Call this url in browser : http://localhost:3001/upload/default/list <a href="/upload/default/list">Go</a></p>'
    ].join('');
    res.send(html);
});


app.get('/default/input', function (req, res) {
    var params = {
        title: "jquery file upload example"
    };

    res.render('form', params);
});

app.get('/location/input', function (req, res) {
    var params = {
        title: "jquery file upload example"
    };

    res.render('form', params);
});

app.post('/location/input', function (req, res) {
    console.log('\n===============================================\n');
    console.log(req.body);
    res.send(req.body);
});



/*
 * start server
 * */
http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
    console.log("access url /default/input");
    console.log("access url /upload/default/list");
});
