#!/usr/bin/env node

/**
 * NeoPass Archive Builder
 * Creates distributable ZIP or TAR archives of the NeoPass extension
 * 
 * Usage:
 *   node build-archive.js        (creates ZIP by default)
 *   node build-archive.js zip    (creates ZIP archive)
 *   node build-archive.js tar    (creates TAR archive)
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const archiver = require('archiver');

// Configuration
const PROJECT_NAME = 'NeoPass';
const VERSION = '1.0.0';
const SOURCE_DIR = 'NeoPass-main';
const OUTPUT_DIR = './';
const TIMESTAMP = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// Files and folders to exclude from archive
const EXCLUDES = [
  'node_modules',
  '.git',
  '.gitignore',
  '.DS_Store',
  'Thumbs.db',
  '*.log',
  '.vscode',
  '.idea',
  'dist',
  'build'
];

/**
 * Check if archiver is installed
 */
function checkDependencies() {
  try {
    require('archiver');
    return true;
  } catch (e) {
    console.error('❌ Error: archiver package not found');
    console.log('\nInstall with:');
    console.log('  npm install archiver');
    console.log('\nOr install all dependencies:');
    console.log('  npm install');
    process.exit(1);
  }
}

/**
 * Create ZIP archive
 */
function createZipArchive() {
  return new Promise((resolve, reject) => {
    const timestamp = TIMESTAMP;
    const zipFileName = `${PROJECT_NAME}-${VERSION}-${timestamp}.zip`;
    const zipPath = path.join(OUTPUT_DIR, zipFileName);

    // Create write stream
    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression
    });

    output.on('close', () => {
      const sizeInMB = (archive.pointer() / (1024 * 1024)).toFixed(2);
      console.log(`✅ ZIP Archive created successfully!`);
      console.log(`   📦 File: ${zipFileName}`);
      console.log(`   📊 Size: ${sizeInMB} MB`);
      console.log(`   📍 Location: ${path.resolve(zipPath)}`);
      resolve(zipPath);
    });

    archive.on('error', reject);
    output.on('error', reject);

    archive.pipe(output);

    // Add extension folder
    if (fs.existsSync(SOURCE_DIR)) {
      archive.directory(SOURCE_DIR, SOURCE_DIR);
    } else {
      throw new Error(`Source directory not found: ${SOURCE_DIR}`);
    }

    // Finalize
    archive.finalize();
  });
}

/**
 * Create TAR archive (using tar command)
 */
function createTarArchive() {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(SOURCE_DIR)) {
      reject(new Error(`Source directory not found: ${SOURCE_DIR}`));
      return;
    }

    const timestamp = TIMESTAMP;
    const tarFileName = `${PROJECT_NAME}-${VERSION}-${timestamp}.tar.gz`;
    const tarPath = path.join(OUTPUT_DIR, tarFileName);

    // Check if tar command is available (Unix-like systems)
    const command = `tar -czf "${tarPath}" "${SOURCE_DIR}"`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error('❌ Error creating TAR archive:');
        console.error(stderr || error.message);
        reject(error);
        return;
      }

      const stats = fs.statSync(tarPath);
      const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
      
      console.log(`✅ TAR Archive created successfully!`);
      console.log(`   📦 File: ${tarFileName}`);
      console.log(`   📊 Size: ${sizeInMB} MB`);
      console.log(`   📍 Location: ${path.resolve(tarPath)}`);
      resolve(tarPath);
    });
  });
}

/**
 * Create a manifest file for the archive
 */
function createManifestFile(archivePath) {
  const manifestContent = `# ${PROJECT_NAME} Archive Manifest

**Created**: ${new Date().toISOString()}
**Version**: ${VERSION}
**Archive**: ${path.basename(archivePath)}

## Contents
- ${SOURCE_DIR}/: Main extension source code

## Installation Instructions

### Windows/Mac/Linux
1. Extract this archive to a permanent location
   - Windows: Right-click → Extract All
   - Mac: Double-click the archive
   - Linux: tar -xzf [archive-name]

2. Open Chrome and navigate to: chrome://extensions

3. Enable "Developer mode" (top right)

4. Click "Load unpacked"

5. Select the extracted "${SOURCE_DIR}" folder

6. The extension is now installed and active!

## Support
For issues and questions, visit:
https://github.com/Sarva-shakti-Singh/Neopass

## Documentation
- INSTALLATION.md: Complete setup guide
- FOLDER_STRUCTURE.md: Project organization
- README.md: Feature documentation

---
Happy using! 🚀
`;

  const manifestPath = path.join(OUTPUT_DIR, `${PROJECT_NAME}-${VERSION}-MANIFEST.txt`);
  fs.writeFileSync(manifestPath, manifestContent);
  console.log(`📋 Manifest file: ${path.basename(manifestPath)}`);
}

/**
 * Print summary
 */
function printSummary(archivePath, archiveType) {
  console.log('\n' + '='.repeat(60));
  console.log(`${PROJECT_NAME} Archive Builder - Complete`);
  console.log('='.repeat(60));
  console.log(`\n✨ Your ${archiveType.toUpperCase()} archive is ready to distribute!\n`);
  console.log('📦 Share Instructions:');
  console.log('   1. Upload the archive file');
  console.log('   2. Users extract it on their system');
  console.log('   3. Users load the extension in Chrome (chrome://extensions)');
  console.log('   4. Done! Extension is installed\n');
  console.log('='.repeat(60) + '\n');
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('\n' + '='.repeat(60));
    console.log(`${PROJECT_NAME} Archive Builder`);
    console.log('='.repeat(60));
    console.log(`Version: ${VERSION}`);
    console.log(`Source: ${SOURCE_DIR}`);
    console.log('='.repeat(60) + '\n');

    // Check dependencies
    checkDependencies();

    // Determine archive type
    let archiveType = process.argv[2] || 'zip';
    if (!['zip', 'tar'].includes(archiveType.toLowerCase())) {
      console.warn(`⚠️  Unknown archive type: ${archiveType}`);
      console.log('   Using default: ZIP\n');
      archiveType = 'zip';
    }

    // Create archive
    console.log(`📦 Creating ${archiveType.toUpperCase()} archive...\n`);
    
    let archivePath;
    if (archiveType.toLowerCase() === 'zip') {
      archivePath = await createZipArchive();
    } else {
      archivePath = await createTarArchive();
    }

    // Create manifest
    createManifestFile(archivePath);

    // Print summary
    printSummary(archivePath, archiveType);

  } catch (error) {
    console.error('\n❌ Error creating archive:');
    console.error(error.message || error);
    process.exit(1);
  }
}

// Run
if (require.main === module) {
  main();
}

module.exports = { createZipArchive, createTarArchive };
