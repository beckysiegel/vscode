/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as nodeFiletype from 'file-type';

function nodeFiletypeExport() {
	console.log('file-type called');
	return nodeFiletype;
}

const fileType = nodeFiletypeExport();

export = fileType;
