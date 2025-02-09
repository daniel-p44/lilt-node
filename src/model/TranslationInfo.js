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
 * The TranslationInfo model module.
 * @module model/TranslationInfo
 * @version 0.6.2
 */
class TranslationInfo {
    /**
     * Constructs a new <code>TranslationInfo</code>.
     * Information describing a batch translation process. 
     * @alias module:model/TranslationInfo
     */
    constructor() { 
        
        TranslationInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TranslationInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TranslationInfo} obj Optional instance to populate.
     * @return {module:model/TranslationInfo} The populated <code>TranslationInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TranslationInfo();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('fileId')) {
                obj['fileId'] = ApiClient.convertToType(data['fileId'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Number');
            }
            if (data.hasOwnProperty('errorMsg')) {
                obj['errorMsg'] = ApiClient.convertToType(data['errorMsg'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique identifier for this translation.
 * @member {Number} id
 */
TranslationInfo.prototype['id'] = undefined;

/**
 * id of the File that is being translated.
 * @member {Number} fileId
 */
TranslationInfo.prototype['fileId'] = undefined;

/**
 * Status of the translation - `InProgress`, `ReadyForDownload`, `Completed`, `Failed`.
 * @member {String} status
 */
TranslationInfo.prototype['status'] = undefined;

/**
 * Time when this translation was started, in seconds since the Unix epoch.
 * @member {Number} createdAt
 */
TranslationInfo.prototype['createdAt'] = undefined;

/**
 * Error message, present when status is `Failed`.
 * @member {String} errorMsg
 */
TranslationInfo.prototype['errorMsg'] = undefined;






export default TranslationInfo;

