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
import Memory from '../model/Memory';
import MemoryCreateParameters from '../model/MemoryCreateParameters';
import MemoryDeleteResponse from '../model/MemoryDeleteResponse';
import MemoryImportResponse from '../model/MemoryImportResponse';
import MemoryInsertResponse from '../model/MemoryInsertResponse';
import MemoryUpdateParameters from '../model/MemoryUpdateParameters';
import MemoryUpdateResponse from '../model/MemoryUpdateResponse';
import TranslationMemoryEntry from '../model/TranslationMemoryEntry';

/**
* Memories service.
* @module api/MemoriesApi
* @version 0.5.0
*/
export default class MemoriesApi {

    /**
    * Constructs a new MemoriesApi. 
    * @alias module:api/MemoriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a Memory
     * Create a new Memory. A Memory is a container that collects source/target sentences for a specific language pair (e.g., English>French). The data in the Memory is used to train the MT system, populate the TM, and update the lexicon. Memories are private to your account - the data is not shared across users - unless you explicitly share a Memory with your team (via web app only).  <a href=\"https://support.lilt.com/hc/en-us/sections/360012579193-Lilt-Translate-Engine\" target=_blank>Refer to our KB</a> for a more detailed description.  
     * @param {module:model/MemoryCreateParameters} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Memory} and HTTP response
     */
    createMemoryWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMemory");
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
      let returnType = Memory;
      return this.apiClient.callApi(
        '/memories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Memory
     * Create a new Memory. A Memory is a container that collects source/target sentences for a specific language pair (e.g., English>French). The data in the Memory is used to train the MT system, populate the TM, and update the lexicon. Memories are private to your account - the data is not shared across users - unless you explicitly share a Memory with your team (via web app only).  <a href=\"https://support.lilt.com/hc/en-us/sections/360012579193-Lilt-Translate-Engine\" target=_blank>Refer to our KB</a> for a more detailed description.  
     * @param {module:model/MemoryCreateParameters} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Memory}
     */
    createMemory(body) {
      return this.createMemoryWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Memory
     * Delete a Memory. 
     * @param {Number} id A unique Memory identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MemoryDeleteResponse} and HTTP response
     */
    deleteMemoryWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteMemory");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MemoryDeleteResponse;
      return this.apiClient.callApi(
        '/memories', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Memory
     * Delete a Memory. 
     * @param {Number} id A unique Memory identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MemoryDeleteResponse}
     */
    deleteMemory(id) {
      return this.deleteMemoryWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a Memory
     * Retrieve a Memory. If you cannot access the Memory (401 error) please check permissions (e.g. in case you created the Memory via the web app with a different account you may have to explicitly share that Memory).  
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id An optional Memory identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Memory>} and HTTP response
     */
    getMemoryWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': opts['id']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Memory];
      return this.apiClient.callApi(
        '/memories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a Memory
     * Retrieve a Memory. If you cannot access the Memory (401 error) please check permissions (e.g. in case you created the Memory via the web app with a different account you may have to explicitly share that Memory).  
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id An optional Memory identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Memory>}
     */
    getMemory(opts) {
      return this.getMemoryWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * File import for a Memory
     * Imports common translation memory or termbase file formats to a specific Lilt memory. Currently supported file formats are `*.tmx`, `*.sdltm` and `*.tmq` for TM data; `*.csv` and `*.tbx` for termbase data. Request parameters should be passed as JSON object with the header field `LILT-API`.  Example CURL command to upload a translation memory file named `my_memory.sdltm` in the current working directory: ```   curl -X POST https://lilt.com/2/memories/import?key=API_KEY \\     --header \"LILT-API: {\\\"name\\\": \\\"my_memory.sdltm\\\",\\\"memory_id\\\": 42}\" \\     --header \"Content-Type: application/octet-stream\" \\     --data-binary @my_memory.sdltm ```  
     * @param {Number} memoryId A unique Memory identifier.
     * @param {String} name Name of the TM or termbase file.
     * @param {File} body The file contents to be uploaded. The entire POST body will be treated as the file.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.hasHeaderRow A flag indicating whether an imported Termbase CSV has a header row or not (the default value is `false`).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MemoryImportResponse} and HTTP response
     */
    importMemoryFileWithHttpInfo(memoryId, name, body, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'memoryId' is set
      if (memoryId === undefined || memoryId === null) {
        throw new Error("Missing the required parameter 'memoryId' when calling importMemoryFile");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling importMemoryFile");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling importMemoryFile");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'memory_id': memoryId,
        'name': name,
        'has_header_row': opts['hasHeaderRow']
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = ['application/octet-stream'];
      let accepts = ['application/json'];
      let returnType = MemoryImportResponse;
      return this.apiClient.callApi(
        '/memories/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * File import for a Memory
     * Imports common translation memory or termbase file formats to a specific Lilt memory. Currently supported file formats are `*.tmx`, `*.sdltm` and `*.tmq` for TM data; `*.csv` and `*.tbx` for termbase data. Request parameters should be passed as JSON object with the header field `LILT-API`.  Example CURL command to upload a translation memory file named `my_memory.sdltm` in the current working directory: ```   curl -X POST https://lilt.com/2/memories/import?key=API_KEY \\     --header \"LILT-API: {\\\"name\\\": \\\"my_memory.sdltm\\\",\\\"memory_id\\\": 42}\" \\     --header \"Content-Type: application/octet-stream\" \\     --data-binary @my_memory.sdltm ```  
     * @param {Number} memoryId A unique Memory identifier.
     * @param {String} name Name of the TM or termbase file.
     * @param {File} body The file contents to be uploaded. The entire POST body will be treated as the file.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.hasHeaderRow A flag indicating whether an imported Termbase CSV has a header row or not (the default value is `false`).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MemoryImportResponse}
     */
    importMemoryFile(memoryId, name, body, opts) {
      return this.importMemoryFileWithHttpInfo(memoryId, name, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Query a Memory
     * Perform a translation memory query.  
     * @param {Number} id A unique Memory identifier.
     * @param {String} query A source query.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.n Maximum number of results to return. (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TranslationMemoryEntry>} and HTTP response
     */
    queryMemoryWithHttpInfo(id, query, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling queryMemory");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling queryMemory");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
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
      let returnType = [TranslationMemoryEntry];
      return this.apiClient.callApi(
        '/memories/query', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Query a Memory
     * Perform a translation memory query.  
     * @param {Number} id A unique Memory identifier.
     * @param {String} query A source query.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.n Maximum number of results to return. (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TranslationMemoryEntry>}
     */
    queryMemory(id, query, opts) {
      return this.queryMemoryWithHttpInfo(id, query, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete-sync for a Memory
     * Deletes segments in the Memory matching the `from_time`, `to_time` and `when` parameters.  Example CURL command: ```   curl -X DELETE https://lilt.com/2/memories/sync?key=API_KEY&id=42&from_time=1491048000&to_time=1491049800&when=created ```  
     * @param {Number} id A unique Memory identifier.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fromTime Unix time stamp (epoch, in seconds) of the start of the Memory section.
     * @param {Number} opts.toTime Unix time stamp (epoch, in seconds) of the end of the Memory section.
     * @param {String} opts.when The date field on which retrieved segments match from/to time stamps: `created`, `updated`, `deleted`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MemoryInsertResponse} and HTTP response
     */
    syncDeleteMemoryWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling syncDeleteMemory");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'from_time': opts['fromTime'],
        'to_time': opts['toTime'],
        'when': opts['when']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MemoryInsertResponse;
      return this.apiClient.callApi(
        '/memories/sync', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete-sync for a Memory
     * Deletes segments in the Memory matching the `from_time`, `to_time` and `when` parameters.  Example CURL command: ```   curl -X DELETE https://lilt.com/2/memories/sync?key=API_KEY&id=42&from_time=1491048000&to_time=1491049800&when=created ```  
     * @param {Number} id A unique Memory identifier.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fromTime Unix time stamp (epoch, in seconds) of the start of the Memory section.
     * @param {Number} opts.toTime Unix time stamp (epoch, in seconds) of the end of the Memory section.
     * @param {String} opts.when The date field on which retrieved segments match from/to time stamps: `created`, `updated`, `deleted`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MemoryInsertResponse}
     */
    syncDeleteMemory(id, opts) {
      return this.syncDeleteMemoryWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get-sync for a Memory
     * Get all or part of a memory in TMX 1.4b format. If the `from_time` and/or `to_time` are omitted, then all segments are returned. The parameter `when` specifies on which date field `from_time` and `to_time` are matched. Possible values are `created` (when the segment was originally created in the memory), `updated` (when the segment was lastly updated), and `deleted` (when the segment was deleted).  Example CURL command: ```   curl -X GET https://lilt.com/2/memories/sync?key=API_KEY&id=42 -o from_lilt.tmx ```  
     * @param {Number} id A unique Memory identifier.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fromTime Unix time stamp (epoch, in seconds) of the start of the Memory section.
     * @param {Number} opts.toTime Unix time stamp (epoch, in seconds) of the end of the Memory section.
     * @param {String} opts.when The date field on which retrieved segments match from/to time stamps: `created`, `updated`, `deleted`. If this parameter is omitted, then the whole Memory is returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Blob} and HTTP response
     */
    syncDownMemoryWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling syncDownMemory");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'from_time': opts['fromTime'],
        'to_time': opts['toTime'],
        'when': opts['when']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = [];
      let accepts = ['application/x-tmx'];
      let returnType = 'Blob';
      return this.apiClient.callApi(
        '/memories/sync', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get-sync for a Memory
     * Get all or part of a memory in TMX 1.4b format. If the `from_time` and/or `to_time` are omitted, then all segments are returned. The parameter `when` specifies on which date field `from_time` and `to_time` are matched. Possible values are `created` (when the segment was originally created in the memory), `updated` (when the segment was lastly updated), and `deleted` (when the segment was deleted).  Example CURL command: ```   curl -X GET https://lilt.com/2/memories/sync?key=API_KEY&id=42 -o from_lilt.tmx ```  
     * @param {Number} id A unique Memory identifier.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fromTime Unix time stamp (epoch, in seconds) of the start of the Memory section.
     * @param {Number} opts.toTime Unix time stamp (epoch, in seconds) of the end of the Memory section.
     * @param {String} opts.when The date field on which retrieved segments match from/to time stamps: `created`, `updated`, `deleted`. If this parameter is omitted, then the whole Memory is returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Blob}
     */
    syncDownMemory(id, opts) {
      return this.syncDownMemoryWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Insert-sync for a Memory
     * Inserts a TM in TMX 1.4b format into the Memory. Request parameters should be passed as JSON object with the header field `LILT-API`.  Example CURL command: ```   curl -X POST https://lilt.com/2/memories/sync?key=API_KEY \\     --header \"LILT-API: {\\\"name\\\": \\\"my_memory.tmx\\\",\\\"id\\\": 42}\" \\     --header \"Content-Type: application/octet-stream\" \\     --data-binary @my_memory.tmx ```  
     * @param {Number} id A unique Memory identifier.
     * @param {String} body The file contents to be uploaded. The entire POST body will be treated as the file.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name of the TMX file.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MemoryInsertResponse} and HTTP response
     */
    syncInsertMemoryWithHttpInfo(id, body, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling syncInsertMemory");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling syncInsertMemory");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'id': id,
        'name': opts['name']
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = ['application/octet-stream'];
      let accepts = ['application/json'];
      let returnType = MemoryInsertResponse;
      return this.apiClient.callApi(
        '/memories/sync', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Insert-sync for a Memory
     * Inserts a TM in TMX 1.4b format into the Memory. Request parameters should be passed as JSON object with the header field `LILT-API`.  Example CURL command: ```   curl -X POST https://lilt.com/2/memories/sync?key=API_KEY \\     --header \"LILT-API: {\\\"name\\\": \\\"my_memory.tmx\\\",\\\"id\\\": 42}\" \\     --header \"Content-Type: application/octet-stream\" \\     --data-binary @my_memory.tmx ```  
     * @param {Number} id A unique Memory identifier.
     * @param {String} body The file contents to be uploaded. The entire POST body will be treated as the file.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name of the TMX file.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MemoryInsertResponse}
     */
    syncInsertMemory(id, body, opts) {
      return this.syncInsertMemoryWithHttpInfo(id, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update-sync for a Memory
     * Updates the Memory with given TMX file. Request parameters should be passed as JSON object with the header field `LILT-API`. The number of segments returned by the `from_time`, `to_time`, `when` parameters and the number of segments in the TMX file need to be identical.  Example CURL command: ```   curl -X PUT https://lilt.com/2/memories/sync?key=API_KEY \\     --header \"LILT-API: {\\\"name\\\": \\\"my_memory.tmx\\\", \\\"id\\\": 42, \\\"from_time\\\": 1491048000, \\\"to_time\\\": 1491049800, \"when\": \"Updated\"}\" \\     --header \"Content-Type: application/octet-stream\" \\     --data-binary @my_memory.tmx ```  
     * @param {Number} id A unique Memory identifier.
     * @param {String} body The file contents to be uploaded. The entire PUT body will be treated as the file.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fromTime Unix time stamp (epoch, in seconds) of the start of the Memory section.
     * @param {Number} opts.toTime Unix time stamp (epoch, in seconds) of the end of the Memory section.
     * @param {String} opts.when The date field on which retrieved segments match from/to time stamps: `created`, `updated`, `deleted`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MemoryUpdateResponse} and HTTP response
     */
    syncUpdateMemoryWithHttpInfo(id, body, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling syncUpdateMemory");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling syncUpdateMemory");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'id': id,
        'from_time': opts['fromTime'],
        'to_time': opts['toTime'],
        'when': opts['when']
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MemoryUpdateResponse;
      return this.apiClient.callApi(
        '/memories/sync', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update-sync for a Memory
     * Updates the Memory with given TMX file. Request parameters should be passed as JSON object with the header field `LILT-API`. The number of segments returned by the `from_time`, `to_time`, `when` parameters and the number of segments in the TMX file need to be identical.  Example CURL command: ```   curl -X PUT https://lilt.com/2/memories/sync?key=API_KEY \\     --header \"LILT-API: {\\\"name\\\": \\\"my_memory.tmx\\\", \\\"id\\\": 42, \\\"from_time\\\": 1491048000, \\\"to_time\\\": 1491049800, \"when\": \"Updated\"}\" \\     --header \"Content-Type: application/octet-stream\" \\     --data-binary @my_memory.tmx ```  
     * @param {Number} id A unique Memory identifier.
     * @param {String} body The file contents to be uploaded. The entire PUT body will be treated as the file.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fromTime Unix time stamp (epoch, in seconds) of the start of the Memory section.
     * @param {Number} opts.toTime Unix time stamp (epoch, in seconds) of the end of the Memory section.
     * @param {String} opts.when The date field on which retrieved segments match from/to time stamps: `created`, `updated`, `deleted`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MemoryUpdateResponse}
     */
    syncUpdateMemory(id, body, opts) {
      return this.syncUpdateMemoryWithHttpInfo(id, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update the name of a Memory
     * Update a Memory. 
     * @param {module:model/MemoryUpdateParameters} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Memory} and HTTP response
     */
    updateMemoryWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMemory");
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
      let returnType = Memory;
      return this.apiClient.callApi(
        '/memories', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update the name of a Memory
     * Update a Memory. 
     * @param {module:model/MemoryUpdateParameters} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Memory}
     */
    updateMemory(body) {
      return this.updateMemoryWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
