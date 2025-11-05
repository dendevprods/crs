module.exports = {
  apps: [
    {
      name: 'dashboard',
      script: 'node_modules/.bin/next',
      args: 'start dist/dashboard -p 4200',
      cwd: process.cwd(),
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
      script: 'dist/server/main.js',
      cwd: process.cwd(),
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