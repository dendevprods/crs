const path = require('path');
const os = require('os');

const HOME_DIR = os.homedir();
const BASE_DIR = path.join(HOME_DIR, 'crs');

module.exports = {
  apps: [
    {
      name: 'dashboard',
      script: 'node_modules/.bin/next',
      args: 'start -p 4200',
      cwd: path.join(BASE_DIR, 'dist/dashboard'), 
      instances: 2,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 4200
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_memory_restart: '500M',
      min_uptime: '10s',
      max_restarts: 10,
      autorestart: true,
      watch: false,
      wait_ready: true,
      listen_timeout: 10000,
      kill_timeout: 5000
    },
    {
      name: 'server',
      script: path.join(BASE_DIR, 'dist/server/main.js'),
      cwd: BASE_DIR,  
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_memory_restart: '300M',
      min_uptime: '10s',
      max_restarts: 10,
      autorestart: true,
      watch: false
    }
  ]
};