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
 * The LanguagesResponse model module.
 * @module model/LanguagesResponse
 * @version v2.0
 */
class LanguagesResponse {
    /**
     * Constructs a new <code>LanguagesResponse</code>.
     * @alias module:model/LanguagesResponse
     */
    constructor() { 
        
        LanguagesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LanguagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LanguagesResponse} obj Optional instance to populate.
     * @return {module:model/LanguagesResponse} The populated <code>LanguagesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LanguagesResponse();

            if (data.hasOwnProperty('source_to_target')) {
                obj['source_to_target'] = ApiClient.convertToType(data['source_to_target'], Object);
            }
            if (data.hasOwnProperty('code_to_name')) {
                obj['code_to_name'] = ApiClient.convertToType(data['code_to_name'], Object);
            }
        }
        return obj;
    }


}

/**
 * A two-dimensional object in which the first key is an ISO 639-1 language code indicating the source, and the second key is an ISO 639-1 language code indicating the target.
 * @member {Object} source_to_target
 */
LanguagesResponse.prototype['source_to_target'] = undefined;

/**
 * An object in which the key is an ISO 639-1 language code, and the value is the language name.
 * @member {Object} code_to_name
 */
LanguagesResponse.prototype['code_to_name'] = undefined;






export default LanguagesResponse;

