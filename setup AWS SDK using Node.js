setup AWS SDK using Node.js

sudo su
apt-get update
apt-get upgrade -y
apt-get dist-upgrade -y
apt-get autoremove -y
apt-get install nodejs npm git -y
ln -s /usr/bin/nodejs /usr/bin/node
git clone https://github.com/andrewpuch/aws-sqs-node-js-examples.git
cd aws-sqs-node-js-examples
npm install
cp config-sample.json config.json

NOTE: Here you will want to edit config.json with your AWS keys.

node app.js
