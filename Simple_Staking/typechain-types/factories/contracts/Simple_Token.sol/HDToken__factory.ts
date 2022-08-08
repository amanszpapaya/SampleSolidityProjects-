/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  HDToken,
  HDTokenInterface,
} from "../../../contracts/Simple_Token.sol/HDToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200205838038062002058833981810160405281019062000037919062000492565b82828160039080519060200190620000519291906200020a565b5080600490805190602001906200006a9291906200020a565b5050506200007f33826200008860201b60201c565b505050620006cd565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620000fa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f1906200058d565b60405180910390fd5b6200010e600083836200020060201b60201c565b8060026000828254620001229190620005de565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001799190620005de565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001e091906200064c565b60405180910390a3620001fc600083836200020560201b60201c565b5050565b505050565b505050565b828054620002189062000698565b90600052602060002090601f0160209004810192826200023c576000855562000288565b82601f106200025757805160ff191683800117855562000288565b8280016001018555821562000288579182015b82811115620002875782518255916020019190600101906200026a565b5b5090506200029791906200029b565b5090565b5b80821115620002b65760008160009055506001016200029c565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200032382620002d8565b810181811067ffffffffffffffff82111715620003455762000344620002e9565b5b80604052505050565b60006200035a620002ba565b905062000368828262000318565b919050565b600067ffffffffffffffff8211156200038b576200038a620002e9565b5b6200039682620002d8565b9050602081019050919050565b60005b83811015620003c3578082015181840152602081019050620003a6565b83811115620003d3576000848401525b50505050565b6000620003f0620003ea846200036d565b6200034e565b9050828152602081018484840111156200040f576200040e620002d3565b5b6200041c848285620003a3565b509392505050565b600082601f8301126200043c576200043b620002ce565b5b81516200044e848260208601620003d9565b91505092915050565b6000819050919050565b6200046c8162000457565b81146200047857600080fd5b50565b6000815190506200048c8162000461565b92915050565b600080600060608486031215620004ae57620004ad620002c4565b5b600084015167ffffffffffffffff811115620004cf57620004ce620002c9565b5b620004dd8682870162000424565b935050602084015167ffffffffffffffff811115620005015762000500620002c9565b5b6200050f8682870162000424565b925050604062000522868287016200047b565b9150509250925092565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000575601f836200052c565b915062000582826200053d565b602082019050919050565b60006020820190508181036000830152620005a88162000566565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620005eb8262000457565b9150620005f88362000457565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000630576200062f620005af565b5b828201905092915050565b620006468162000457565b82525050565b60006020820190506200066360008301846200063b565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620006b157607f821691505b602082108103620006c757620006c662000669565b5b50919050565b61197b80620006dd6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c68116100975780639dc29fac116100665780639dc29fac14610286578063a457c2d7146102a2578063a9059cbb146102d2578063dd62ed3e14610302576100f5565b806342966c681461020057806370a082311461021c57806379cc67901461024c57806395d89b4114610268576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806340c10f19146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610332565b60405161010f9190611045565b60405180910390f35b610132600480360381019061012d9190611100565b6103c4565b60405161013f919061115b565b60405180910390f35b6101506103e7565b60405161015d9190611185565b60405180910390f35b610180600480360381019061017b91906111a0565b6103f1565b60405161018d919061115b565b60405180910390f35b61019e610420565b6040516101ab919061120f565b60405180910390f35b6101ce60048036038101906101c99190611100565b610429565b6040516101db919061115b565b60405180910390f35b6101fe60048036038101906101f99190611100565b6104d3565b005b61021a6004803603810190610215919061122a565b6104e1565b005b61023660048036038101906102319190611257565b6104f5565b6040516102439190611185565b60405180910390f35b61026660048036038101906102619190611100565b61053d565b005b61027061055d565b60405161027d9190611045565b60405180910390f35b6102a0600480360381019061029b9190611100565b6105ef565b005b6102bc60048036038101906102b79190611100565b6105fd565b6040516102c9919061115b565b60405180910390f35b6102ec60048036038101906102e79190611100565b6106e7565b6040516102f9919061115b565b60405180910390f35b61031c60048036038101906103179190611284565b61070a565b6040516103299190611185565b60405180910390f35b606060038054610341906112f3565b80601f016020809104026020016040519081016040528092919081815260200182805461036d906112f3565b80156103ba5780601f1061038f576101008083540402835291602001916103ba565b820191906000526020600020905b81548152906001019060200180831161039d57829003601f168201915b5050505050905090565b6000806103cf610791565b90506103dc818585610799565b600191505092915050565b6000600254905090565b6000806103fc610791565b9050610409858285610962565b6104148585856109ee565b60019150509392505050565b60006012905090565b600080610434610791565b90506104c8818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104c39190611353565b610799565b600191505092915050565b6104dd8282610c6d565b5050565b6104f26104ec610791565b82610dcc565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61054f82610549610791565b83610962565b6105598282610dcc565b5050565b60606004805461056c906112f3565b80601f0160208091040260200160405190810160405280929190818152602001828054610598906112f3565b80156105e55780601f106105ba576101008083540402835291602001916105e5565b820191906000526020600020905b8154815290600101906020018083116105c857829003601f168201915b5050505050905090565b6105f98282610dcc565b5050565b600080610608610791565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050838110156106ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c59061141b565b60405180910390fd5b6106db8286868403610799565b60019250505092915050565b6000806106f2610791565b90506106ff8185856109ee565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610808576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ff906114ad565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610877576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086e9061153f565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109559190611185565b60405180910390a3505050565b600061096e848461070a565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109e857818110156109da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d1906115ab565b60405180910390fd5b6109e78484848403610799565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a549061163d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610acc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac3906116cf565b60405180910390fd5b610ad7838383610fa2565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5490611761565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610bf09190611353565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c549190611185565b60405180910390a3610c67848484610fa7565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610cdc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd3906117cd565b60405180910390fd5b610ce860008383610fa2565b8060026000828254610cfa9190611353565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d4f9190611353565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610db49190611185565b60405180910390a3610dc860008383610fa7565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e329061185f565b60405180910390fd5b610e4782600083610fa2565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610ecd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec4906118f1565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610f249190611911565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f899190611185565b60405180910390a3610f9d83600084610fa7565b505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610fe6578082015181840152602081019050610fcb565b83811115610ff5576000848401525b50505050565b6000601f19601f8301169050919050565b600061101782610fac565b6110218185610fb7565b9350611031818560208601610fc8565b61103a81610ffb565b840191505092915050565b6000602082019050818103600083015261105f818461100c565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110978261106c565b9050919050565b6110a78161108c565b81146110b257600080fd5b50565b6000813590506110c48161109e565b92915050565b6000819050919050565b6110dd816110ca565b81146110e857600080fd5b50565b6000813590506110fa816110d4565b92915050565b6000806040838503121561111757611116611067565b5b6000611125858286016110b5565b9250506020611136858286016110eb565b9150509250929050565b60008115159050919050565b61115581611140565b82525050565b6000602082019050611170600083018461114c565b92915050565b61117f816110ca565b82525050565b600060208201905061119a6000830184611176565b92915050565b6000806000606084860312156111b9576111b8611067565b5b60006111c7868287016110b5565b93505060206111d8868287016110b5565b92505060406111e9868287016110eb565b9150509250925092565b600060ff82169050919050565b611209816111f3565b82525050565b60006020820190506112246000830184611200565b92915050565b6000602082840312156112405761123f611067565b5b600061124e848285016110eb565b91505092915050565b60006020828403121561126d5761126c611067565b5b600061127b848285016110b5565b91505092915050565b6000806040838503121561129b5761129a611067565b5b60006112a9858286016110b5565b92505060206112ba858286016110b5565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061130b57607f821691505b60208210810361131e5761131d6112c4565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061135e826110ca565b9150611369836110ca565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561139e5761139d611324565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611405602583610fb7565b9150611410826113a9565b604082019050919050565b60006020820190508181036000830152611434816113f8565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611497602483610fb7565b91506114a28261143b565b604082019050919050565b600060208201905081810360008301526114c68161148a565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611529602283610fb7565b9150611534826114cd565b604082019050919050565b600060208201905081810360008301526115588161151c565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611595601d83610fb7565b91506115a08261155f565b602082019050919050565b600060208201905081810360008301526115c481611588565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611627602583610fb7565b9150611632826115cb565b604082019050919050565b600060208201905081810360008301526116568161161a565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006116b9602383610fb7565b91506116c48261165d565b604082019050919050565b600060208201905081810360008301526116e8816116ac565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061174b602683610fb7565b9150611756826116ef565b604082019050919050565b6000602082019050818103600083015261177a8161173e565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006117b7601f83610fb7565b91506117c282611781565b602082019050919050565b600060208201905081810360008301526117e6816117aa565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611849602183610fb7565b9150611854826117ed565b604082019050919050565b600060208201905081810360008301526118788161183c565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b60006118db602283610fb7565b91506118e68261187f565b604082019050919050565b6000602082019050818103600083015261190a816118ce565b9050919050565b600061191c826110ca565b9150611927836110ca565b92508282101561193a57611939611324565b5b82820390509291505056fea2646970667358221220ce4dbcdb1b2a3fa62a1133c4cbb18e2247962cb2ec80ac21ddeb36bf9f06004d64736f6c634300080d0033";

type HDTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HDTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HDToken__factory extends ContractFactory {
  constructor(...args: HDTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HDToken> {
    return super.deploy(
      name,
      symbol,
      initialSupply,
      overrides || {}
    ) as Promise<HDToken>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialSupply,
      overrides || {}
    );
  }
  override attach(address: string): HDToken {
    return super.attach(address) as HDToken;
  }
  override connect(signer: Signer): HDToken__factory {
    return super.connect(signer) as HDToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HDTokenInterface {
    return new utils.Interface(_abi) as HDTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HDToken {
    return new Contract(address, _abi, signerOrProvider) as HDToken;
  }
}