/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as nodeUrl from 'url';

export function fileURLToPath(url: string | nodeUrl.URL): string {
	console.log(`url.fileURLToPath called with url: ${url}`);
	return nodeUrl.fileURLToPath(url);
}