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
    instance = new LiltNode.LanguagePair();
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

  describe('LanguagePair', function() {
    it('should create an instance of LanguagePair', function() {
      // uncomment below and update the code to test LanguagePair
      //var instane = new LiltNode.LanguagePair();
      //expect(instance).to.be.a(LiltNode.LanguagePair);
    });

    it('should have the property srcLang (base name: "srcLang")', function() {
      // uncomment below and update the code to test the property srcLang
      //var instane = new LiltNode.LanguagePair();
      //expect(instance).to.be();
    });

    it('should have the property srcLocale (base name: "srcLocale")', function() {
      // uncomment below and update the code to test the property srcLocale
      //var instane = new LiltNode.LanguagePair();
      //expect(instance).to.be();
    });

    it('should have the property trgLang (base name: "trgLang")', function() {
      // uncomment below and update the code to test the property trgLang
      //var instane = new LiltNode.LanguagePair();
      //expect(instance).to.be();
    });

    it('should have the property trgLocale (base name: "trgLocale")', function() {
      // uncomment below and update the code to test the property trgLocale
      //var instane = new LiltNode.LanguagePair();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "dueDate")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instane = new LiltNode.LanguagePair();
      //expect(instance).to.be();
    });

    it('should have the property memoryId (base name: "memoryId")', function() {
      // uncomment below and update the code to test the property memoryId
      //var instane = new LiltNode.LanguagePair();
      //expect(instance).to.be();
    });

    it('should have the property pretranslate (base name: "pretranslate")', function() {
      // uncomment below and update the code to test the property pretranslate
      //var instane = new LiltNode.LanguagePair();
      //expect(instance).to.be();
    });

    it('should have the property autoAccept (base name: "autoAccept")', function() {
      // uncomment below and update the code to test the property autoAccept
      //var instane = new LiltNode.LanguagePair();
      //expect(instance).to.be();
    });

    it('should have the property caseSensitive (base name: "caseSensitive")', function() {
      // uncomment below and update the code to test the property caseSensitive
      //var instane = new LiltNode.LanguagePair();
      //expect(instance).to.be();
    });

    it('should have the property takeMatchAttribution (base name: "takeMatchAttribution")', function() {
      // uncomment below and update the code to test the property takeMatchAttribution
      //var instane = new LiltNode.LanguagePair();
      //expect(instance).to.be();
    });

    it('should have the property configId (base name: "configId")', function() {
      // uncomment below and update the code to test the property configId
      //var instane = new LiltNode.LanguagePair();
      //expect(instance).to.be();
    });

  });

}));
