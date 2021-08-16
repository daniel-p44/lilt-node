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
 * The JobProject model module.
 * @module model/JobProject
 * @version 0.5.0
 */
class JobProject {
    /**
     * Constructs a new <code>JobProject</code>.
     * A job project contains project statistcal data that belongs to a specific job. 
     * @alias module:model/JobProject
     */
    constructor() { 
        
        JobProject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobProject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobProject} obj Optional instance to populate.
     * @return {module:model/JobProject} The populated <code>JobProject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobProject();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('srcLang')) {
                obj['srcLang'] = ApiClient.convertToType(data['srcLang'], 'String');
            }
            if (data.hasOwnProperty('srcLocale')) {
                obj['srcLocale'] = ApiClient.convertToType(data['srcLocale'], 'String');
            }
            if (data.hasOwnProperty('trgLang')) {
                obj['trgLang'] = ApiClient.convertToType(data['trgLang'], 'String');
            }
            if (data.hasOwnProperty('trgLocale')) {
                obj['trgLocale'] = ApiClient.convertToType(data['trgLocale'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('due')) {
                obj['due'] = ApiClient.convertToType(data['due'], 'String');
            }
            if (data.hasOwnProperty('isComplete')) {
                obj['isComplete'] = ApiClient.convertToType(data['isComplete'], 'Boolean');
            }
            if (data.hasOwnProperty('isArchived')) {
                obj['isArchived'] = ApiClient.convertToType(data['isArchived'], 'Boolean');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('numSourceTokens')) {
                obj['numSourceTokens'] = ApiClient.convertToType(data['numSourceTokens'], 'Number');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
            if (data.hasOwnProperty('isDeleted')) {
                obj['isDeleted'] = ApiClient.convertToType(data['isDeleted'], 'Boolean');
            }
            if (data.hasOwnProperty('memoryId')) {
                obj['memoryId'] = ApiClient.convertToType(data['memoryId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * An id for the project.
 * @member {Number} id
 */
JobProject.prototype['id'] = undefined;

/**
 * Source langauge, an ISO 639-1 language identifier.
 * @member {String} srcLang
 */
JobProject.prototype['srcLang'] = undefined;

/**
 * A locale identifier, supported for source langauge.
 * @member {String} srcLocale
 */
JobProject.prototype['srcLocale'] = undefined;

/**
 * Target langauge, an ISO 639-1 language identifier.
 * @member {String} trgLang
 */
JobProject.prototype['trgLang'] = undefined;

/**
 * A locale identifier, supported for target langauge.
 * @member {String} trgLocale
 */
JobProject.prototype['trgLocale'] = undefined;

/**
 * A name for the project.
 * @member {String} name
 */
JobProject.prototype['name'] = undefined;

/**
 * An ISO date.
 * @member {String} due
 */
JobProject.prototype['due'] = undefined;

/**
 * A state that checks project was completed.
 * @member {Boolean} isComplete
 */
JobProject.prototype['isComplete'] = undefined;

/**
 * The archived state of the project.
 * @member {Boolean} isArchived
 */
JobProject.prototype['isArchived'] = undefined;

/**
 * Current state of the project. Example, backlog, inProgress, inReview, done.
 * @member {String} state
 */
JobProject.prototype['state'] = undefined;

/**
 * Total number of source tokens.
 * @member {Number} numSourceTokens
 */
JobProject.prototype['numSourceTokens'] = undefined;

/**
 * Time at which the object was created.
 * @member {String} createdAt
 */
JobProject.prototype['createdAt'] = undefined;

/**
 * Time at which the object was updated.
 * @member {String} updatedAt
 */
JobProject.prototype['updatedAt'] = undefined;

/**
 * A state that checks project was deleted.
 * @member {Boolean} isDeleted
 */
JobProject.prototype['isDeleted'] = undefined;

/**
 * A unique number identifying the associated Memory.
 * @member {Number} memoryId
 */
JobProject.prototype['memoryId'] = undefined;






export default JobProject;

