const formatFullname = require('../formatFullname.js');
const cutText = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {
    it('should return an error if "fullName" arg is not a string', () => {
        if(typeof fullName !== 'string') return 'Error';
        expect(formatFullname(0)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });

    it('should return an error if "fullName" arg length is 0', () => {
        expect(formatFullname('')).to.equal('Error');
    });

    it('should return an error if "fullName" arg length is different than 2', () => {
        expect(formatFullname('John Doe')).to.equal('John Doe');
        expect(formatFullname('John')).to.equal('Error');
        expect(formatFullname('John Joe Doe')).to.equal('Error');
        expect(formatFullname('')).to.equal('Error');
    });

    it('should return changed fullName irrespectively of the character size', () => {
        expect(formatFullname('jOhN dOe')).to.equal('John Doe');
        expect(formatFullname('John Doe')).to.equal('John Doe');
        expect(formatFullname('john doe')).to.equal('John Doe');
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    });
    
});