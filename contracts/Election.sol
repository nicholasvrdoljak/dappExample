pragma solidity ^0.4.2;

contract Election {
    //store candidate
    //read candidate
    string public candidate;

    //Constructor
    constructor () public {
        candidate = "Candidate 1";
    }
}