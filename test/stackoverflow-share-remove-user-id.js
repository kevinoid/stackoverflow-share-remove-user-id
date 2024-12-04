/**
 * @copyright Copyright 2018 Kevin Locke <kevin@kevinlocke.name>
 * @license MIT
 */

'use strict';

const fs = require('node:fs');
const jsdom = require('jsdom');
const path = require('node:path');
const vm = require('node:vm');

// Load the userscript using jsdom
const dom = new jsdom.JSDOM('', { runScripts: 'outside-only' });
const scriptPath =
  path.join(__dirname, '..', 'stackoverflow-share-remove-user-id.user.js');
const scriptCode = fs.readFileSync(scriptPath, { encoding: 'utf8' });
const script = new vm.Script(scriptCode, { filename: scriptPath });
script.runInContext(dom.getInternalVMContext());
// const removeUserId = dom.window;

describe('stackoverflow-share-remove-user-id', () => {
  // Figure out something useful to unit test.
  // it('does something', (done) => {
  //   removeUserId.removeUserIDOnClick();
  //   done();
  // });
});
