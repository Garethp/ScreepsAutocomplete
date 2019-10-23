#!/usr/bin/env node

const https = require("https");
const url = "https://raw.githubusercontent.com/screeps/common/master/lib/constants.js";

/**
 * Fetches the constants library file from the master branch of the Screeps git repository, parses it, then generates
 * and prints to stdout a file suitable for use as an autocomplete definition.
 *
 * USAGE:
 * To dump the file contents to stdout:
 * node generateConstantsFile.js
 *
 * @author jd0yle <https://github.com/jd0yle>,
 * @author CrystallDEV <https://github.com/CrystallDEV>
 */
https.get(url, function (res) {
    let body = "";

    res.setEncoding("utf8");

    res.on("data", data => {
        body += data;
    });

    res.on("end", function () {
        let fs = require("fs");
        let tmpFileName = "constants.tmp.js";

        fs.writeFile(tmpFileName, body, function (err) {
            let constants, autocompleteContent = "";

            if (err) {
                throw(err);
            }

            constants = require(`./${tmpFileName}`);

            Object.keys(constants).forEach(function (key) {
                autocompleteContent = `${autocompleteContent}\n\n/**\n * @constant\n * @type {${typeof constants[key]}}\n */`;
                autocompleteContent = `${autocompleteContent}\nconst ${key} = ${JSON.stringify(constants[key], null, 4)};`;
            });

            console.log(autocompleteContent);

            fs.unlink(`./${tmpFileName}`, function (err) {
                if (err) {
                    throw(err);
                }
            });
        });
    });
});