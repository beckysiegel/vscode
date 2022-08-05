/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as nodeCp from 'child_process';

export function spawn(command: string, args: ReadonlyArray<string>, options: nodeCp.SpawnOptions): nodeCp.ChildProcess;
export function spawn(command: string, args: ReadonlyArray<string>): nodeCp.ChildProcessWithoutNullStreams;
export function spawn(command: string, args: ReadonlyArray<string>, options?: nodeCp.SpawnOptions): nodeCp.ChildProcess {
	console.log(`cp.spawn called with command:${command} args:${args}`);
	if (options === null || options === undefined) {
		return nodeCp.spawn(command, args);
	}
	return nodeCp.spawn(command, args, options);
}

export function exec(command: string, cb?: (error: nodeCp.ExecException | null, stdout: string, stderr: string) => void): nodeCp.ChildProcess {
	console.log(`cp.exec called with: ${command}`);
	return nodeCp.exec(command, cb);
}

export { ChildProcess, SpawnOptions } from 'child_process';
