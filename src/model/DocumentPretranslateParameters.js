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
 * The DocumentPretranslateParameters model module.
 * @module model/DocumentPretranslateParameters
 * @version 0.6.2
 */
class DocumentPretranslateParameters {
    /**
     * Constructs a new <code>DocumentPretranslateParameters</code>.
     * @alias module:model/DocumentPretranslateParameters
     * @param id {Array.<Number>} A list of unique Document identifiers.
     */
    constructor(id) { 
        
        DocumentPretranslateParameters.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>DocumentPretranslateParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentPretranslateParameters} obj Optional instance to populate.
     * @return {module:model/DocumentPretranslateParameters} The populated <code>DocumentPretranslateParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentPretranslateParameters();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], ['Number']);
            }
            if (data.hasOwnProperty('auto_accept')) {
                obj['auto_accept'] = ApiClient.convertToType(data['auto_accept'], 'Boolean');
            }
            if (data.hasOwnProperty('case_sensitive')) {
                obj['case_sensitive'] = ApiClient.convertToType(data['case_sensitive'], 'Boolean');
            }
            if (data.hasOwnProperty('attribute_to_creator')) {
                obj['attribute_to_creator'] = ApiClient.convertToType(data['attribute_to_creator'], 'Boolean');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A list of unique Document identifiers.
 * @member {Array.<Number>} id
 */
DocumentPretranslateParameters.prototype['id'] = undefined;

/**
 * Optional parameter for auto-accepting 100% TM hits.
 * @member {Boolean} auto_accept
 */
DocumentPretranslateParameters.prototype['auto_accept'] = undefined;

/**
 * Optional for using case matching against TM hits..
 * @member {Boolean} case_sensitive
 */
DocumentPretranslateParameters.prototype['case_sensitive'] = undefined;

/**
 * Optional parameter for attributing translation authorship of exact matches to document creator.
 * @member {Boolean} attribute_to_creator
 */
DocumentPretranslateParameters.prototype['attribute_to_creator'] = undefined;

/**
 * An optional parameter indicating how the document will be pretranslated.  The accepted values are `tm`, or `tm+mt`. Default is `tm`. 
 * @member {String} mode
 */
DocumentPretranslateParameters.prototype['mode'] = undefined;






export default DocumentPretranslateParameters;

