import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Add Node.js and local node_modules/.bin to PATH programmatically
const env = { ...process.env };
const nodePaths = [
  'C:\\Program Files\\nodejs',
  path.join(projectRoot, 'node_modules', '.bin'),
];
env.PATH = nodePaths.join(path.delimiter) + path.delimiter + (env.PATH || '');

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

console.log('==================================================');
console.log('⚡ Launching Full-Stack Portfolio (Backend + Frontend)...');
console.log('==================================================');

// 1. Launch Backend Server (Port 5000)
const serverProcess = spawn(npmCmd, ['run', 'server'], {
  cwd: projectRoot,
  env,
  stdio: 'inherit',
  shell: true,
});

// 2. Launch Frontend Client (Port 3000)
const clientProcess = spawn(npmCmd, ['run', 'client'], {
  cwd: projectRoot,
  env,
  stdio: 'inherit',
  shell: true,
});

const handleExit = () => {
  console.log('\nStopping development servers...');
  serverProcess.kill();
  clientProcess.kill();
  process.exit(0);
};

process.on('SIGINT', handleExit);
process.on('SIGTERM', handleExit);
