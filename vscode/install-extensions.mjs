#!/usr/bin/env -S node --no-warnings

import assert from 'node:assert';
import { exec } from 'node:child_process';

import extensions from './extensions.json' assert { type: 'json' };
console.log('Detected following VSCode extensions in "extensions.json":', extensions);

/**
 * Promisified {@link exec}.
 *
 * @param {string} command
 * @returns {Promise<{ stdout: string, stderr: string }>}
 */
const pexec = (command) =>
  new Promise((res, rej) => exec(command, (error, stdout, stderr) => (error ? rej(error) : res({ stdout, stderr }))));

const installedExtensionsRes = await pexec('code --list-extensions');

assert(installedExtensionsRes.stderr === '', `Failed to check already installed extensions`);

const installedExtensions = installedExtensionsRes.stdout.split('\n').filter(Boolean);

const extensionsToInstall = extensions.filter((v) => !installedExtensions.includes(v));

console.log('Installing following extensions:', extensionsToInstall);

/** @type {PromiseSettledResult<string>[]} */
const installationResult = await Promise.allSettled(
  extensionsToInstall.map(async (extId) => {
    const res = await pexec(`code --install-extension ${extId}`);

    if (res.stderr !== '') {
      const message = `Failed to install extension "${extId}"\n${res.stderr}`;

      console.error(message);

      throw new Error(message);
    }

    return res.stdout;
  })
);

const installationFails = installationResult.filter((res) => res.status === 'rejected');

console.log(`
Successfully installed ${installationResult.length - installationFails.length} extensions, failed: ${installationFails.length}.
${extensions.length - extensionsToInstall.length} extensions have already been installed.
`);
