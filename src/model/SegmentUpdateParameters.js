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
 * The SegmentUpdateParameters model module.
 * @module model/SegmentUpdateParameters
 * @version v2.0
 */
class SegmentUpdateParameters {
    /**
     * Constructs a new <code>SegmentUpdateParameters</code>.
     * @alias module:model/SegmentUpdateParameters
     * @param id {Number} A unique Segment identifier.
     * @param target {String} The target string.
     */
    constructor(id, target) { 
        
        SegmentUpdateParameters.initialize(this, id, target);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, target) { 
        obj['id'] = id;
        obj['target'] = target;
    }

    /**
     * Constructs a <code>SegmentUpdateParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SegmentUpdateParameters} obj Optional instance to populate.
     * @return {module:model/SegmentUpdateParameters} The populated <code>SegmentUpdateParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SegmentUpdateParameters();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique Segment identifier.
 * @member {Number} id
 */
SegmentUpdateParameters.prototype['id'] = undefined;

/**
 * The target string.
 * @member {String} target
 */
SegmentUpdateParameters.prototype['target'] = undefined;






export default SegmentUpdateParameters;

