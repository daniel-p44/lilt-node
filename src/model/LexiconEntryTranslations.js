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
 * The LexiconEntryTranslations model module.
 * @module model/LexiconEntryTranslations
 * @version 0.6.2
 */
class LexiconEntryTranslations {
    /**
     * Constructs a new <code>LexiconEntryTranslations</code>.
     * @alias module:model/LexiconEntryTranslations
     */
    constructor() { 
        
        LexiconEntryTranslations.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LexiconEntryTranslations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LexiconEntryTranslations} obj Optional instance to populate.
     * @return {module:model/LexiconEntryTranslations} The populated <code>LexiconEntryTranslations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LexiconEntryTranslations();

            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = ApiClient.convertToType(data['frequency'], 'Number');
            }
            if (data.hasOwnProperty('memory_id')) {
                obj['memory_id'] = ApiClient.convertToType(data['memory_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The source string.
 * @member {String} source
 */
LexiconEntryTranslations.prototype['source'] = undefined;

/**
 * The target string.
 * @member {String} target
 */
LexiconEntryTranslations.prototype['target'] = undefined;

/**
 * The frequency of the term in the Lexicon.
 * @member {Number} frequency
 */
LexiconEntryTranslations.prototype['frequency'] = undefined;

/**
 * A unique Memory identifier. If this identifier is missing, then the term comes from the generic termbase. 
 * @member {Number} memory_id
 */
LexiconEntryTranslations.prototype['memory_id'] = undefined;






export default LexiconEntryTranslations;

