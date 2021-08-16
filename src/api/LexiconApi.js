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


import ApiClient from "../ApiClient";
import Error2 from '../model/Error2';
import LexiconEntry from '../model/LexiconEntry';
import LexiconUpdateParameters from '../model/LexiconUpdateParameters';
import LexiconUpdateResponse from '../model/LexiconUpdateResponse';

/**
* Lexicon service.
* @module api/LexiconApi
* @version 0.5.0
*/
export default class LexiconApi {

    /**
    * Constructs a new LexiconApi. 
    * @alias module:api/LexiconApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Query a Lexicon
     * Query the Lexicon. The Lexicon is an editable termbase / concordance that is integrated with the Memory.  
     * @param {Number} memoryId A unique Memory identifier.
     * @param {String} srclang An ISO 639-1 language code.
     * @param {String} trglang An ISO 639-1 language code.
     * @param {String} query The query term.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.n The maximum number of results to return. (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LexiconEntry>} and HTTP response
     */
    queryLexiconWithHttpInfo(memoryId, srclang, trglang, query, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'memoryId' is set
      if (memoryId === undefined || memoryId === null) {
        throw new Error("Missing the required parameter 'memoryId' when calling queryLexicon");
      }
      // verify the required parameter 'srclang' is set
      if (srclang === undefined || srclang === null) {
        throw new Error("Missing the required parameter 'srclang' when calling queryLexicon");
      }
      // verify the required parameter 'trglang' is set
      if (trglang === undefined || trglang === null) {
        throw new Error("Missing the required parameter 'trglang' when calling queryLexicon");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling queryLexicon");
      }

      let pathParams = {
      };
      let queryParams = {
        'memory_id': memoryId,
        'srclang': srclang,
        'trglang': trglang,
        'query': query,
        'n': opts['n']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [LexiconEntry];
      return this.apiClient.callApi(
        '/lexicon', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Query a Lexicon
     * Query the Lexicon. The Lexicon is an editable termbase / concordance that is integrated with the Memory.  
     * @param {Number} memoryId A unique Memory identifier.
     * @param {String} srclang An ISO 639-1 language code.
     * @param {String} trglang An ISO 639-1 language code.
     * @param {String} query The query term.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.n The maximum number of results to return. (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LexiconEntry>}
     */
    queryLexicon(memoryId, srclang, trglang, query, opts) {
      return this.queryLexiconWithHttpInfo(memoryId, srclang, trglang, query, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Lexicon
     * Update the Lexicon (Termbase as displayed in the ui) with a new term. The maximum source length is 250 characters.  
     * @param {module:model/LexiconUpdateParameters} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LexiconUpdateResponse} and HTTP response
     */
    updateLexiconWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateLexicon");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LexiconUpdateResponse;
      return this.apiClient.callApi(
        '/lexicon', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Lexicon
     * Update the Lexicon (Termbase as displayed in the ui) with a new term. The maximum source length is 250 characters.  
     * @param {module:model/LexiconUpdateParameters} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LexiconUpdateResponse}
     */
    updateLexicon(body) {
      return this.updateLexiconWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
