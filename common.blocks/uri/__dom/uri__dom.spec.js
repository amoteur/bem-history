modules.define('spec', ['uri__dom'], function(provide, Uri, sinon) {

describe('uri__dom', function() {
    var u;

    it('should be able to replace a missing parts from the browser environment', function() {
        u = Uri.parse('test.com');
        u.build().should.be.a('string');
    });
});

provide();

});
