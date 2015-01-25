modules.define('uri__dom', ['uri'], function(provide, Uri) {

/**
 * Serializes the internal state of the Uri object
 * and replaces empty parts from current page state.
 * @returns {String}
 */
Uri.prototype.build = function() {
    var s = '';

    // No protocol/host – set current
    s += this.getProtocol() ? this.getProtocol() : window.location.protocol;
    s += s[s.length - 1] !== ':' ? '://' : '//';

    s += this.getHost() ? this.getHost() : window.location.hostname;

    if(this.getPort()) {
        s += ':' + this.getPort();
    } else if(!this.getHost() && window.location.hostname) {
        s += ':' + window.location.port;
    }

    if(this.getPath()) {
        s += this.getPath();
    } else if(!this.getHost()) {
        s += window.location.pathname;
    } else {
        s += '/';
    }

    if(this.getQuery()) {
        if(this.getQuery().indexOf('?') !== 0) {
            s += '?';
        }
        s += this.getQuery();
    }

    if(this.getAnchor()) {
        if(this.getAnchor().indexOf('#') !== 0) {
            s += '#';
        }
        s += this.getAnchor();
    }

    return s;
};

provide(Uri);

});
