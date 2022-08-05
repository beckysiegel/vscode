/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as nodeByline from 'byline';

function LineStreamExport() {
	console.log('LineStream called');
	return nodeByline.LineStream;
}

function bylineExport() {
	console.log('byline called');
	return nodeByline;
}

const byline = bylineExport();
byline.LineStream = LineStreamExport();

export = byline;
