/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as nodeOs from 'os';

export function type(): string {
	console.log(`os.type called`);
	return nodeOs.type();
}
export function release(): string {
	console.log(`os.release called`);
	return nodeOs.release();
}
export function platform(): string {
	console.log(`os.platform called`);
	return nodeOs.platform();
}
export function arch(): string {
	console.log(`os.arch called`);
	return nodeOs.arch();
}
export function version(): string {
	console.log(`os.version called`);
	return nodeOs.version();
}
export function tmpdir(): string {
	console.log(`os.tmpdir called`);
	return nodeOs.tmpdir();
}

function homeDirExport() {
	console.log('homedir called');
	return nodeOs.homedir;
}

const homedir = homeDirExport();

export { homedir };
