modules.define('spec', ['history', 'uri__dom'], function(provide, History, Uri) {

describe('history native API', function() {

    var history = new History();

    it('should have _onPopState method', function() {
        history._onPopState.should.be.a('function');
    });

});

provide();

});
