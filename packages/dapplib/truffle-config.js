require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan recipe place arrow hockey praise army giggle'; 
let testAccounts = [
"0x2eaa4404df06d06d545b8826b5eae2618e27419524c782eefb224a5cf68b9bb9",
"0xb8b87d7d07bbc21b454053f216aa47dfdc723c610efe3e315e43584d0faef0c2",
"0x1d7c781f55badbb7746d7da495a0473634462f99bd30a66e014b9fe152567591",
"0x0fb7518170a6a17bd76827e41475e2a99f43fb92f331564cef07ed4ab6991951",
"0xcddc25f3f77b0ba891785d3ab48fb671a9f00a4e80f452cdeae69189c7664d93",
"0xdb6b8160374b324a76fb91fce3cb1488ca09cb889fa540badf153ca4781656e2",
"0x6435b4127a85b8507f4463e7cad4730e12253e8fa39edbf55d416a556320ce2a",
"0x08c793a480c12fa3f759ff0789552100ac662e7ff82fc7b1b2495214c0667667",
"0xd8209f495da17bce445c93c7d8034c54f43fad6664c6527e9a0903a837f2a9e4",
"0xa360824b50fe0205d150d75c7d57dca41c3c0b212b412067567a477c062cfc9f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

