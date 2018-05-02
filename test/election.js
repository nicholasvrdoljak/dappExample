var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
    var electionInstance;

    it('initializes with two candidates', function() {
        return Election.deployed().then(function(i) {
            return i.candidatesCount();
        }).then(function(count) {
            assert.equal(count, 2);
        });
    });

    it('initialized with the correct values', function() {
        return Election.deployed().then(function(i) {
            electionInstance = i;
            return electionInstance.candidates(1);
        }).then(function(c) {
            assert.equal(c[0], 1, 'contains the correct id');
            assert.equal(c[1], 'Candidate 1', 'contains the correct name');
            assert.equal(c[2], 0, 'contains the correct vote count');
            return electionInstance.candidates(2);
        }).then(function(c) {
            assert.equal(c[0], 2, 'contains the correct id');
            assert.equal(c[1], 'Candidate 2', 'contains the correct name');
            assert.equal(c[2], 0, 'contains the correct vote count');
        });
    });
});