pragma solidity ^0.5.8;

// Set and get a number
contract ExampleContract {
    uint public someNumber;

    function setNumber(uint256 _number) public returns (bool) {
        someNumber = _number;
    }

    function addNumbers(uint256 _number) view public returns (uint256) {
        return someNumber + _number;
    }
}