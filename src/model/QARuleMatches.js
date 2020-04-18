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
import QARuleMatchesMatches from './QARuleMatchesMatches';

/**
 * The QARuleMatches model module.
 * @module model/QARuleMatches
 * @version v2.0
 */
class QARuleMatches {
    /**
     * Constructs a new <code>QARuleMatches</code>.
     * QA rules describing the errors in the text.
     * @alias module:model/QARuleMatches
     */
    constructor() { 
        
        QARuleMatches.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QARuleMatches</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QARuleMatches} obj Optional instance to populate.
     * @return {module:model/QARuleMatches} The populated <code>QARuleMatches</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QARuleMatches();

            if (data.hasOwnProperty('matches')) {
                obj['matches'] = ApiClient.convertToType(data['matches'], [QARuleMatchesMatches]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/QARuleMatchesMatches>} matches
 */
QARuleMatches.prototype['matches'] = undefined;






export default QARuleMatches;

