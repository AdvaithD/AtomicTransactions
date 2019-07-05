pragma solidity ^0.5.8;

// The interface is a definition of the contract we want to interact with.
// We do not need the full contract here
// The ExampleUser contract only needs to know about the functions we are going to use
contract ExampleContractInterface {
    function addNumbers (uint256 _number) view public returns (uint256) {}
}


// The main contract 
// It uses the interface created above
contract ExampleUser {
    // @dev - exampleContract has type set to the interface
    ExampleContractInterface private exampleContract;
    uint256 public addedNumbers;

   // Setting the contract address
    constructor(address _exampleContractAddress) public {
        require(_exampleContractAddress != address(0));

        exampleContract = ExampleContractInterface(_exampleContractAddress);
    }

    function addNumbers(uint256 _number) public returns (bool) {
        // Call the function located in other contract
        addedNumbers = exampleContract.addNumbers(_number);
        return true;
    }
}