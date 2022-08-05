/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as nodeJschardet from 'jschardet';

export function detect(buffer: Buffer): nodeJschardet.IDetectedMap {
	console.log(`nodeJschardet.detect called`);
	return nodeJschardet.detect(buffer);
}