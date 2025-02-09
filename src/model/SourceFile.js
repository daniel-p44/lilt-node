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
 * The SourceFile model module.
 * @module model/SourceFile
 * @version 0.6.2
 */
class SourceFile {
    /**
     * Constructs a new <code>SourceFile</code>.
     * A SourceFile is an unprocessed source file that can later be added to a project.
     * @alias module:model/SourceFile
     */
    constructor() { 
        
        SourceFile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SourceFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceFile} obj Optional instance to populate.
     * @return {module:model/SourceFile} The populated <code>SourceFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SourceFile();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('file_hash')) {
                obj['file_hash'] = ApiClient.convertToType(data['file_hash'], 'String');
            }
            if (data.hasOwnProperty('detected_lang')) {
                obj['detected_lang'] = ApiClient.convertToType(data['detected_lang'], 'String');
            }
            if (data.hasOwnProperty('detected_lang_confidence')) {
                obj['detected_lang_confidence'] = ApiClient.convertToType(data['detected_lang_confidence'], 'Number');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], ['String']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A unique number identifying the SourceFile.
 * @member {Number} id
 */
SourceFile.prototype['id'] = undefined;

/**
 * The file name.
 * @member {String} name
 */
SourceFile.prototype['name'] = undefined;

/**
 * A unique hash value associated with the file. An MD5 hash of the file content will be used by default.
 * @member {String} file_hash
 */
SourceFile.prototype['file_hash'] = undefined;

/**
 * Language associated with the file.
 * @member {String} detected_lang
 */
SourceFile.prototype['detected_lang'] = undefined;

/**
 * Confidence score for the language associated with the file.
 * @member {Number} detected_lang_confidence
 */
SourceFile.prototype['detected_lang_confidence'] = undefined;

/**
 * The category of the file. The options are `REFERENCE`, or `API`. The default is API. Files with the `REFERENCE` category will be displayed as reference material.
 * @member {String} category
 */
SourceFile.prototype['category'] = undefined;

/**
 * The list of labels associated with the file.
 * @member {Array.<String>} labels
 */
SourceFile.prototype['labels'] = undefined;

/**
 * Time at which the object was created. Measured in seconds since the Unix epoch.
 * @member {Number} created_at
 */
SourceFile.prototype['created_at'] = undefined;

/**
 * Time at which the object was created. Measured in seconds since the Unix epoch.
 * @member {Number} updated_at
 */
SourceFile.prototype['updated_at'] = undefined;






export default SourceFile;

