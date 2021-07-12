module.exports = {
  apps: [
    {
      name: 'back test',
      exec_mode: 'cluster',
      instances: '1', // Or a number of instances
      script: './server.js',
      args: '',
      env: {
        'NODE_ENV': 'production'
      }
    }
  ]
}
