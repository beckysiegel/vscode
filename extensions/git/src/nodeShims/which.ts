/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as nodeWhich from 'which';

function whichExport() {
	console.log('which called');
	return nodeWhich;
}

const which = whichExport();

export = which;
