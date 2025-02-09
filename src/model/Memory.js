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

import ApiClient from '../ApiClient';

/**
 * The Memory model module.
 * @module model/Memory
 * @version 0.6.2
 */
class Memory {
    /**
     * Constructs a new <code>Memory</code>.
     * A Memory is a collection of parallel (source/target) segments from which a MT/TM model is trained. When a translator confirms a segment in the Interface, a parallel segment is added to the Memory. Parallel segments from existing translation memories and bitexts can also be added to the Memory via the REST API. 
     * @alias module:model/Memory
     */
    constructor() { 
        
        Memory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Memory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Memory} obj Optional instance to populate.
     * @return {module:model/Memory} The populated <code>Memory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Memory();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('srclang')) {
                obj['srclang'] = ApiClient.convertToType(data['srclang'], 'String');
            }
            if (data.hasOwnProperty('trglang')) {
                obj['trglang'] = ApiClient.convertToType(data['trglang'], 'String');
            }
            if (data.hasOwnProperty('srclocale')) {
                obj['srclocale'] = ApiClient.convertToType(data['srclocale'], 'String');
            }
            if (data.hasOwnProperty('trglocale')) {
                obj['trglocale'] = ApiClient.convertToType(data['trglocale'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Number');
            }
            if (data.hasOwnProperty('num_segments')) {
                obj['num_segments'] = ApiClient.convertToType(data['num_segments'], 'Number');
            }
            if (data.hasOwnProperty('resources')) {
                obj['resources'] = ApiClient.convertToType(data['resources'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A unique number identifying the Memory.
 * @member {Number} id
 */
Memory.prototype['id'] = undefined;

/**
 * An ISO 639-1 language identifier.
 * @member {String} srclang
 */
Memory.prototype['srclang'] = undefined;

/**
 * An ISO 639-1 language identifier.
 * @member {String} trglang
 */
Memory.prototype['trglang'] = undefined;

/**
 * An ISO 639-1 language identifier.
 * @member {String} srclocale
 */
Memory.prototype['srclocale'] = undefined;

/**
 * An ISO 639-1 language identifier.
 * @member {String} trglocale
 */
Memory.prototype['trglocale'] = undefined;

/**
 * A name for the Memory.
 * @member {String} name
 */
Memory.prototype['name'] = undefined;

/**
 * The current version of the Memory, which is the number of updates since the memory was created.
 * @member {Number} version
 */
Memory.prototype['version'] = undefined;

/**
 * Time at which the object was created. Measured in seconds since the Unix epoch.
 * @member {Number} created_at
 */
Memory.prototype['created_at'] = undefined;

/**
 * Time at which the object was created. Measured in seconds since the Unix epoch.
 * @member {Number} updated_at
 */
Memory.prototype['updated_at'] = undefined;

/**
 * The number of confirmed Segments incorporated into this Memory.
 * @member {Number} num_segments
 */
Memory.prototype['num_segments'] = undefined;

/**
 * The resource files (translation memories and termbases) associated with this Memory.
 * @member {Array.<String>} resources
 */
Memory.prototype['resources'] = undefined;






export default Memory;

