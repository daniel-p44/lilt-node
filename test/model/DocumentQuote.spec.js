/**
 * Lilt REST API
 * The Lilt REST API enables programmatic access to the full-range of Lilt backend services including:   * Training of and translating with interactive, adaptive machine translation   * Large-scale translation memory   * The Lexicon (a large-scale termbase)   * Programmatic control of the Lilt CAT environment   * Translation memory synchronization  Requests and responses are in JSON format. The REST API only responds to HTTPS / SSL requests. ## Authentication Requests are authenticated via REST API key, which requires the Business plan.  Requests are authenticated using [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication). Add your REST API key as both the `username` and `password`.  For development, you may also pass the REST API key via the `key` query parameter. This is less secure than HTTP Basic Auth, and is not recommended for production use. 
 *
 * The version of the OpenAPI document: v2.0
 * Contact: support@lilt.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LiltNode);
  }
}(this, function(expect, LiltNode) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LiltNode.DocumentQuote();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DocumentQuote', function() {
    it('should create an instance of DocumentQuote', function() {
      // uncomment below and update the code to test DocumentQuote
      //var instane = new LiltNode.DocumentQuote();
      //expect(instance).to.be.a(LiltNode.DocumentQuote);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new LiltNode.DocumentQuote();
      //expect(instance).to.be();
    });

    it('should have the property numWordsNew (base name: "num_words_new")', function() {
      // uncomment below and update the code to test the property numWordsNew
      //var instane = new LiltNode.DocumentQuote();
      //expect(instance).to.be();
    });

    it('should have the property numSegmentsNew (base name: "num_segments_new")', function() {
      // uncomment below and update the code to test the property numSegmentsNew
      //var instane = new LiltNode.DocumentQuote();
      //expect(instance).to.be();
    });

    it('should have the property numWordsRepetition (base name: "num_words_repetition")', function() {
      // uncomment below and update the code to test the property numWordsRepetition
      //var instane = new LiltNode.DocumentQuote();
      //expect(instance).to.be();
    });

    it('should have the property numSegmentsRepetition (base name: "num_segments_repetition")', function() {
      // uncomment below and update the code to test the property numSegmentsRepetition
      //var instane = new LiltNode.DocumentQuote();
      //expect(instance).to.be();
    });

    it('should have the property bands (base name: "bands")', function() {
      // uncomment below and update the code to test the property bands
      //var instane = new LiltNode.DocumentQuote();
      //expect(instance).to.be();
    });

  });

}));
