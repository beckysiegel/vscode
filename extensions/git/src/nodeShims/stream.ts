/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as nodeStream from 'stream';


function readableExport() {
	console.log('Readable called');
	return nodeStream.Readable;
}

const Readable = readableExport();

export = Readable;
