/*******************************************************************************
 * Copyright (c) 2012 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
/*eslint-env node */
var api = require('../api'), writeError = api.writeError;
var git = require('nodegit');
var path = require("path");
var Clone = git.Clone;
var fs = require('fs');
var url = require('url');

function getDiffBetweenWorkingTreeAndHead(workspaceDir, fileRoot, req, res, next, rest) {
	var repoPath = rest.replace("diff/Default/file/", "");
	
}

module.exports = {
	getDiffBetweenWorkingTreeAndHead: getDiffBetweenWorkingTreeAndHead
};