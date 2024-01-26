const {series, parallel, src, dest} = require('gulp');
const gulpIf = require('gulp-if');
const beautify = require('gulp-beautify');
const del = require('delete');
const { rollup } = require('rollup');
function build(cb) {
    cb()
}
function test(cb) {
    cb()
}

// use exports to create tasks 
function isJS(file) {
    return file.extension === '.js';
}
exports.build = function (params) {
    return src('*.js').pipe(dest('output/'))
}

exports.clear = function(cb){
    return del(['output', 'output2'], cb)
}

exports.rollup = async function (cb) {
    let file = await rollup({
        input: 'script.js'
    })
    return file.write({
        file: 'output2/test.js',
        format: 'system'
    })
}

exports.last = function (cb) {
    return src(['*.js', '*.css', '*.html'])
    .pipe(gulpIf(isJS, beautify.js({indent_size: 7})))
    .pipe(beautify.html({indent_size: 0}))
    .pipe(dest('output'))
}