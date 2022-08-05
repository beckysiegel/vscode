/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as nodeUtil from 'util';

function textDecoderExport() {
	console.log(`TextDecoder called`);
	return nodeUtil.TextDecoder;
}

export const TextDecoder = textDecoderExport();
