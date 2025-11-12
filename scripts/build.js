import { spawn } from 'child_process';

function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(command, args, { stdio: 'pipe', shell: true });
    
    let stdout = '';
    let stderr = '';
    
    proc.stdout.on('data', (data) => {
      const output = data.toString();
      stdout += output;
      process.stdout.write(output);
    });
    
    proc.stderr.on('data', (data) => {
      const output = data.toString();
      stderr += output;
      if (!output.includes('from option') && !output.includes('postcss.parse')) {
        process.stderr.write(output);
      }
    });
    
    proc.on('close', (code) => {
      if (code === 0) {
        resolve({ stdout, stderr });
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });
  });
}

async function build() {
  try {
    console.log('Building client...');
    await runCommand('vite', ['build']);
    
    console.log('\nBuilding server...');
    await runCommand('esbuild', [
      'server/index.ts',
      '--platform=node',
      '--packages=external',
      '--bundle',
      '--format=esm',
      '--outdir=dist'
    ]);
    
    console.log('\nBuild completed successfully!');
  } catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
  }
}

build();
