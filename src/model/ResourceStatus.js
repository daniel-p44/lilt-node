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
 * The ResourceStatus model module.
 * @module model/ResourceStatus
 * @version v2.0
 */
class ResourceStatus {
    /**
     * Constructs a new <code>ResourceStatus</code>.
     * The status of a resource working on a Project. 
     * @alias module:model/ResourceStatus
     */
    constructor() { 
        
        ResourceStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResourceStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResourceStatus} obj Optional instance to populate.
     * @return {module:model/ResourceStatus} The populated <code>ResourceStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResourceStatus();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('num_words_confirmed')) {
                obj['num_words_confirmed'] = ApiClient.convertToType(data['num_words_confirmed'], 'Number');
            }
            if (data.hasOwnProperty('num_words_new')) {
                obj['num_words_new'] = ApiClient.convertToType(data['num_words_new'], 'Number');
            }
            if (data.hasOwnProperty('num_words_fuzzy')) {
                obj['num_words_fuzzy'] = ApiClient.convertToType(data['num_words_fuzzy'], 'Number');
            }
            if (data.hasOwnProperty('num_words_exact')) {
                obj['num_words_exact'] = ApiClient.convertToType(data['num_words_exact'], 'Number');
            }
            if (data.hasOwnProperty('num_words_reviewed')) {
                obj['num_words_reviewed'] = ApiClient.convertToType(data['num_words_reviewed'], 'Number');
            }
            if (data.hasOwnProperty('time_elapsed')) {
                obj['time_elapsed'] = ApiClient.convertToType(data['time_elapsed'], 'Number');
            }
            if (data.hasOwnProperty('time_elapsed_translation')) {
                obj['time_elapsed_translation'] = ApiClient.convertToType(data['time_elapsed_translation'], 'Number');
            }
            if (data.hasOwnProperty('time_elapsed_research')) {
                obj['time_elapsed_research'] = ApiClient.convertToType(data['time_elapsed_research'], 'Number');
            }
            if (data.hasOwnProperty('time_elapsed_review')) {
                obj['time_elapsed_review'] = ApiClient.convertToType(data['time_elapsed_review'], 'Number');
            }
            if (data.hasOwnProperty('num_segments_confirmed')) {
                obj['num_segments_confirmed'] = ApiClient.convertToType(data['num_segments_confirmed'], 'Number');
            }
            if (data.hasOwnProperty('num_segments_reviewed')) {
                obj['num_segments_reviewed'] = ApiClient.convertToType(data['num_segments_reviewed'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * An email address.
 * @member {String} email
 */
ResourceStatus.prototype['email'] = undefined;

/**
 * The full name.
 * @member {String} name
 */
ResourceStatus.prototype['name'] = undefined;

/**
 * The number of source words confirmed.
 * @member {Number} num_words_confirmed
 */
ResourceStatus.prototype['num_words_confirmed'] = undefined;

/**
 * The number of new source words confirmed.
 * @member {Number} num_words_new
 */
ResourceStatus.prototype['num_words_new'] = undefined;

/**
 * The number of fuzzy match source words confirmed.
 * @member {Number} num_words_fuzzy
 */
ResourceStatus.prototype['num_words_fuzzy'] = undefined;

/**
 * The number of exact match source words confirmed.
 * @member {Number} num_words_exact
 */
ResourceStatus.prototype['num_words_exact'] = undefined;

/**
 * The number of source words reviewed.
 * @member {Number} num_words_reviewed
 */
ResourceStatus.prototype['num_words_reviewed'] = undefined;

/**
 * The total time spent on translation and research. Measured in milliseconds.
 * @member {Number} time_elapsed
 */
ResourceStatus.prototype['time_elapsed'] = undefined;

/**
 * The total time spent translating. Measured in milliseconds.
 * @member {Number} time_elapsed_translation
 */
ResourceStatus.prototype['time_elapsed_translation'] = undefined;

/**
 * The total time spent on research. Measured in milliseconds.
 * @member {Number} time_elapsed_research
 */
ResourceStatus.prototype['time_elapsed_research'] = undefined;

/**
 * The total time spent reviewing. Measured in milliseconds.
 * @member {Number} time_elapsed_review
 */
ResourceStatus.prototype['time_elapsed_review'] = undefined;

/**
 * The number of source segments confirmed.
 * @member {Number} num_segments_confirmed
 */
ResourceStatus.prototype['num_segments_confirmed'] = undefined;

/**
 * The number of source segments reviewed.
 * @member {Number} num_segments_reviewed
 */
ResourceStatus.prototype['num_segments_reviewed'] = undefined;






export default ResourceStatus;

