// ============ Contracts ============

// Token
// deployed first
const Cash = artifacts.require('Cash')
const MockDai = artifacts.require('MockDai');

// ============ Main Migration ============

const migration = async (deployer, network, accounts) => {
  await Promise.all([deployToken(deployer, network, accounts)])
}

module.exports = migration

// ============ Deploy Functions ============

async function deployToken(deployer, network, accounts) {
  let uniswap, uniswapRouter;

  //await deployer.deploy(Cash);
  //uniswapRouter = await UniswapV2Router02.at("");
  //if (network !== 'rinkeby') {
  //  const dai = await deployer.deploy(MockDai);
  //  console.log(`MockDAI address: ${dai.address}`);
//	const taxi = await deployer.deploy(MockTaxi);
 //   console.log(`MockTaxi address: ${taxi.address}`);
 // }
}
