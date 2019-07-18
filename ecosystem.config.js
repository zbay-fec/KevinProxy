module.exports = {
  apps: [{
    name: 'proxy',
    script: './server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-15-148-19.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/Zbay.pem',
      ref: 'origin/master',
      repo: 'https://github.com/zbay-fec/KevinProxy.git',
      path: '/home/ubuntu/proxy',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
