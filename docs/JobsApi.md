# LiltNode.JobsApi

All URIs are relative to *https://lilt.com/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveJob**](JobsApi.md#archiveJob) | **POST** /jobs/{jobId}/archive | Archive a Job
[**createJob**](JobsApi.md#createJob) | **POST** /jobs | Create a Job
[**deleteJob**](JobsApi.md#deleteJob) | **DELETE** /jobs/{jobId} | Delete a Job
[**deliverJob**](JobsApi.md#deliverJob) | **POST** /jobs/{jobId}/deliver | Deliver a Job
[**downloadJob**](JobsApi.md#downloadJob) | **GET** /jobs/{jobId}/downlod | Download a Job
[**exportJob**](JobsApi.md#exportJob) | **GET** /jobs/{jobId}/export | Export a Job
[**getJob**](JobsApi.md#getJob) | **GET** /jobs/{jobId} | Retrieve a Job
[**getJobLeverageStats**](JobsApi.md#getJobLeverageStats) | **POST** /jobs/{jobId}/stats | Retrieve Job Leverage Stats
[**reactivateJob**](JobsApi.md#reactivateJob) | **POST** /jobs/{jobId}/reactivate | Reactivate a Job
[**retrieveAllJobs**](JobsApi.md#retrieveAllJobs) | **GET** /jobs | Retrieve all Jobs
[**unarchiveJob**](JobsApi.md#unarchiveJob) | **POST** /jobs/{jobId}/unarchive | Unarchive a Job
[**updateJob**](JobsApi.md#updateJob) | **PUT** /jobs/{jobId} | Update a Job



## archiveJob

> Job archiveJob(jobId)

Archive a Job

Set job to archived, unassign all linguists and archive all projects and documents inside the job.  It will return the archived job.  Example CURL command:  &#x60;&#x60;&#x60; curl -X POST &#39;https://lilt.com/2/jobs/{id}/archive?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;

### Example

```javascript
import LiltNode from 'lilt-node';
let defaultClient = LiltNode.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new LiltNode.JobsApi();
let jobId = 56; // Number | A job id.
apiInstance.archiveJob(jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **Number**| A job id. | 

### Return type

[**Job**](Job.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createJob

> Job createJob(body)

Create a Job

Create a Job. A Job is a collection of Projects. A Job will contain multiple projects, based on the language pair. A Project is associated with exactly one Memory.  Jobs appear in the Jobs dashboard of the web app.  Example CURL command:  &#x60;&#x60;&#x60; curl -X POST &#39;https://lilt.com/2/jobs?key&#x3D;API_KEY&#39; \\ --header &#39;Content-Type: application/json&#39; \\ --data-raw &#39;{   \&quot;name\&quot;: \&quot;test job\&quot;,   \&quot;fileIds\&quot;: [5009, 5010, 5011],   \&quot;due\&quot;: \&quot;2022-05-05T10:56:44.985Z\&quot;,   \&quot;srcLang\&quot;: \&quot;en\&quot;,   \&quot;srcLocale\&quot;: \&quot;US\&quot;,   \&quot;languagePairs\&quot;: [       { \&quot;memoryId\&quot;: 3121, \&quot;trgLang\&quot;: \&quot;de\&quot; },       { \&quot;memoryId\&quot;: 2508, \&quot;trgLang\&quot;: \&quot;fr\&quot; },       { \&quot;memoryId\&quot;: 3037, \&quot;trgLang\&quot;: \&quot;zh\&quot; }     ] }&#39; &#x60;&#x60;&#x60;  

### Example

```javascript
import LiltNode from 'lilt-node';
let defaultClient = LiltNode.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new LiltNode.JobsApi();
let body = new LiltNode.JobCreateParameters(); // JobCreateParameters | 
apiInstance.createJob(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobCreateParameters**](JobCreateParameters.md)|  | 

### Return type

[**Job**](Job.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteJob

> JobDeleteResponse deleteJob(id)

Delete a Job

Delete a job, deletes all projects and documents in the job, deletes all the segments from all the job&#39;s translation memories.  Example CURL command:  &#x60;&#x60;&#x60; curl -X DELETE &#39;https://lilt.com/2/jobs/{id}?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;

### Example

```javascript
import LiltNode from 'lilt-node';
let defaultClient = LiltNode.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new LiltNode.JobsApi();
let id = 56; // Number | A job id.
apiInstance.deleteJob(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A job id. | 

### Return type

[**JobDeleteResponse**](JobDeleteResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deliverJob

> Job deliverJob(jobId)

Deliver a Job

Set the job state to delivered and set all the projects in the job to done  It will return the delivered job.  Example CURL command:  &#x60;&#x60;&#x60; curl -X POST &#39;https://lilt.com/2/jobs/{id}/deliver?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;

### Example

```javascript
import LiltNode from 'lilt-node';
let defaultClient = LiltNode.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new LiltNode.JobsApi();
let jobId = 56; // Number | A job id.
apiInstance.deliverJob(jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **Number**| A job id. | 

### Return type

[**Job**](Job.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## downloadJob

> downloadJob(jobId)

Download a Job

Make sure you have exported a job with the same id before using this api.  Downloading files requires the exported job &#x60;id&#x60; in the param.  Example CURL command:  &#x60;&#x60;&#x60; curl -X GET &#39;https://lilt.com/2/jobs/{id}/download?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;

### Example

```javascript
import LiltNode from 'lilt-node';
let defaultClient = LiltNode.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new LiltNode.JobsApi();
let jobId = 56; // Number | A job id.
apiInstance.downloadJob(jobId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **Number**| A job id. | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportJob

> exportJob(jobId, type)

Export a Job

Prepare job files for download. To export translated documents from the job use the query parameter &#x60;type&#x3D;files&#x60;:  Example CURL command:  &#x60;&#x60;&#x60; curl -X GET &#39;https://lilt.com/2/jobs/{id}/export?key&#x3D;API_KEY&amp;type&#x3D;files&#39; &#x60;&#x60;&#x60;  To export job memories use the query parameter &#x60;type&#x3D;memory&#x60;.  The status of the export can be checked by requesting the job &#x60;GET /jobs/:jobId&#x60;, &#x60;job.isProcessing&#x60; will be &#x60;1&#x60; while in progress, &#x60;0&#x60; when idle and &#x60;-2&#x60; when the export failed.

### Example

```javascript
import LiltNode from 'lilt-node';
let defaultClient = LiltNode.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new LiltNode.JobsApi();
let jobId = 56; // Number | A job id.
let type = "type_example"; // String | category for files and memory.
apiInstance.exportJob(jobId, type).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **Number**| A job id. | 
 **type** | **String**| category for files and memory. | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJob

> Job getJob(jobId)

Retrieve a Job

Retrieves a job data along with stats. To retrieve a specific job, you will need the job &#x60;id&#x60; in the url path.  Example CURL command:  &#x60;&#x60;&#x60; curl -X GET &#39;https://lilt.com/2/jobs/{id}?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;

### Example

```javascript
import LiltNode from 'lilt-node';
let defaultClient = LiltNode.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new LiltNode.JobsApi();
let jobId = 56; // Number | A job id.
apiInstance.getJob(jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **Number**| A job id. | 

### Return type

[**Job**](Job.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJobLeverageStats

> JobLeverageStats getJobLeverageStats(jobId)

Retrieve Job Leverage Stats

Get the TM leverage stats for the job (new/exact/fuzzy matches).  Example CURL command:  &#x60;&#x60;&#x60; curl -X POST &#39;https://lilt.com/2/jobs/{id}/stats?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;

### Example

```javascript
import LiltNode from 'lilt-node';
let defaultClient = LiltNode.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new LiltNode.JobsApi();
let jobId = 56; // Number | A job id.
apiInstance.getJobLeverageStats(jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **Number**| A job id. | 

### Return type

[**JobLeverageStats**](JobLeverageStats.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reactivateJob

> Job reactivateJob(jobId)

Reactivate a Job

Set the job state to active. Does not change the state of projects associated with the given job.  It will return the reactivated job.  Example CURL command:  &#x60;&#x60;&#x60; curl -X POST &#39;https://lilt.com/2/jobs/{id}/reactivate?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;

### Example

```javascript
import LiltNode from 'lilt-node';
let defaultClient = LiltNode.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new LiltNode.JobsApi();
let jobId = 56; // Number | A job id.
apiInstance.reactivateJob(jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **Number**| A job id. | 

### Return type

[**Job**](Job.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveAllJobs

> [Job] retrieveAllJobs(opts)

Retrieve all Jobs

Get all Jobs. You can retrieve all jobs from your account using the above API.  Example CURL command:  &#x60;&#x60;&#x60; curl -X GET &#39;https://lilt.com/2/jobs?key&#x3D;API_KEY&amp;isArchived&#x3D;false&#39; &#x60;&#x60;&#x60;

### Example

```javascript
import LiltNode from 'lilt-node';
let defaultClient = LiltNode.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new LiltNode.JobsApi();
let opts = {
  'isArchived': true // Boolean | Retrieves all jobs that are archived.
};
apiInstance.retrieveAllJobs(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isArchived** | **Boolean**| Retrieves all jobs that are archived. | [optional] 

### Return type

[**[Job]**](Job.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unarchiveJob

> Job unarchiveJob(jobId)

Unarchive a Job

Set job to unarchived, the job will move to active status.  Example CURL command:  &#x60;&#x60;&#x60; curl -X POST &#39;https://lilt.com/2/jobs/{id}/unarchive?key&#x3D;API_KEY&#39; &#x60;&#x60;&#x60;

### Example

```javascript
import LiltNode from 'lilt-node';
let defaultClient = LiltNode.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new LiltNode.JobsApi();
let jobId = 56; // Number | A job id.
apiInstance.unarchiveJob(jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **Number**| A job id. | 

### Return type

[**Job**](Job.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateJob

> Job updateJob(id, opts)

Update a Job

Updates a job with the new job properties. To update a specific job, you will need the job &#x60;id&#x60; in the url path.  You can update job&#39;s name and due date by passing the property and new value in the body.  Example CURL command:  &#x60;&#x60;&#x60; curl -X PUT &#39;https://lilt.com/2/jobs/{id}?key&#x3D;API_KEY&#39; \\ --header &#39;Content-Type: application/json&#39; \\ --data-raw &#39;{   \&quot;name\&quot;: \&quot;test job\&quot;,   \&quot;due\&quot;: \&quot;2022-05-05T10:56:44.985Z\&quot; }&#39; &#x60;&#x60;&#x60;

### Example

```javascript
import LiltNode from 'lilt-node';
let defaultClient = LiltNode.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new LiltNode.JobsApi();
let id = 56; // Number | A job id.
let opts = {
  'body': new LiltNode.JobUpdateParameters() // JobUpdateParameters | 
};
apiInstance.updateJob(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A job id. | 
 **body** | [**JobUpdateParameters**](JobUpdateParameters.md)|  | [optional] 

### Return type

[**Job**](Job.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

