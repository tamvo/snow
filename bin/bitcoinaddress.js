var config = require('konfu')
, BitcoinAddress = require('../lib/bitcoinaddress')
, bitcoinEndPoint = {
    host: config.btc_host,
    port: config.btc_port,
    user: config.btc_user,
    pass: config.btc_pass
}
, dbClient = require('../lib/db')(config.pg_url, config.pg_native)
new BitcoinAddress(bitcoinEndPoint, dbClient)
