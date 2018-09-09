/**
 * @copyright Copyright 2018 Kevin Locke <kevin@kevinlocke.name>
 * @license MIT
 */

'use strict';

const fs = require('fs');
const jsdom = require('jsdom');
const path = require('path');
const vm = require('vm');

// Load the userscript using jsdom
const dom = new jsdom.JSDOM('', {runScripts: 'outside-only'});
const scriptPath
  = path.join(__dirname, '..', 'stackoverflow-share-remove-user-id.user.js');
const scriptCode = fs.readFileSync(scriptPath, {encoding: 'utf8'});
const script = new vm.Script(scriptCode, {filename: scriptPath});
dom.runVMScript(script);
// const removeUserId = dom.window;

describe('stackoverflow-share-remove-user-id', () => {
  // Figure out something useful to unit test.
  // it('does something', (done) => {
  //   removeUserId.removeUserIDOnClick();
  //   done();
  // });
});
