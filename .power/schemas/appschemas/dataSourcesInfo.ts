/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 * This file is auto-generated. Do not modify it manually.
 * Changes to this file may be overwritten.
 */

export const dataSourcesInfo = {
  "new_customercontacts": {
    "tableId": "",
    "version": "",
    "primaryKey": "new_customercontactid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "new_customerses": {
    "tableId": "",
    "version": "",
    "primaryKey": "new_customersid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "new_geographicalcountrieses": {
    "tableId": "",
    "version": "",
    "primaryKey": "new_geographicalcountriesid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "new_geographicalregions": {
    "tableId": "",
    "version": "",
    "primaryKey": "new_geographicalregionid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "new_geographicalstateses": {
    "tableId": "",
    "version": "",
    "primaryKey": "new_geographicalstatesid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "new_industries": {
    "tableId": "",
    "version": "",
    "primaryKey": "new_industryid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "new_leadsources": {
    "tableId": "",
    "version": "",
    "primaryKey": "new_leadsourceid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "new_lead_qualifications": {
    "tableId": "",
    "version": "",
    "primaryKey": "new_lead_qualificationid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "new_opportunitieses": {
    "tableId": "",
    "version": "",
    "primaryKey": "new_opportunitiesid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "new_opportunities_typeses": {
    "tableId": "",
    "version": "",
    "primaryKey": "new_opportunities_typesid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "new_opportunityassignedtos": {
    "tableId": "",
    "version": "",
    "primaryKey": "new_opportunityassignedtoid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "new_opportunity_trackers": {
    "tableId": "",
    "version": "",
    "primaryKey": "new_opportunity_trackerid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "new_presalesprivilegeses": {
    "tableId": "",
    "version": "",
    "primaryKey": "new_presalesprivilegesid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "cr7fd_regioncountrystatecityphonecodes": {
    "tableId": "",
    "version": "",
    "primaryKey": "cr7fd_regioncountrystatecityphonecodeid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "new_segmentations": {
    "tableId": "",
    "version": "",
    "primaryKey": "new_segmentationid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "new_serviceses": {
    "tableId": "",
    "version": "",
    "primaryKey": "new_servicesid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "new_services_subcategories": {
    "tableId": "",
    "version": "",
    "primaryKey": "new_services_subcategoryid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "systemusers": {
    "tableId": "",
    "version": "",
    "primaryKey": "systemuserid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "office365users": {
    "tableId": "",
    "version": "",
    "primaryKey": "",
    "dataSourceType": "Connector",
    "apis": {
      "UpdateMyProfile": {
        "path": "/{connectionId}/codeless/v1.0/me",
        "method": "PATCH",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "required": false,
            "type": "object"
          }
        ],
        "responseInfo": {
          "default": {
            "type": "void"
          }
        }
      },
      "MyProfile_V2": {
        "path": "/{connectionId}/codeless/v1.0/me",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "$select",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "object"
          }
        }
      },
      "UpdateMyPhoto": {
        "path": "/{connectionId}/codeless/v1.0/me/photo/$value",
        "method": "PUT",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "type": "object"
          },
          {
            "name": "Content-Type",
            "in": "header",
            "required": true,
            "type": "string"
          }
        ],
        "responseInfo": {
          "default": {
            "type": "void"
          }
        }
      },
      "MyTrendingDocuments": {
        "path": "/{connectionId}/codeless/beta/me/insights/trending",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "$filter",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "extractSensitivityLabel",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "fetchSensitivityLabelMetadata",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "object"
          }
        }
      },
      "RelevantPeople": {
        "path": "/{connectionId}/users/{userId}/relevantpeople",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "userId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "object"
          },
          "default": {
            "type": "void"
          }
        }
      },
      "MyProfile": {
        "path": "/{connectionId}/users/me",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "object"
          },
          "202": {
            "type": "void"
          },
          "400": {
            "type": "void"
          },
          "401": {
            "type": "void"
          },
          "403": {
            "type": "void"
          },
          "500": {
            "type": "void"
          },
          "default": {
            "type": "void"
          }
        }
      },
      "UserProfile": {
        "path": "/{connectionId}/users/{userId}",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "userId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "object"
          },
          "202": {
            "type": "void"
          },
          "400": {
            "type": "void"
          },
          "401": {
            "type": "void"
          },
          "403": {
            "type": "void"
          },
          "500": {
            "type": "void"
          },
          "default": {
            "type": "void"
          }
        }
      },
      "UserPhotoMetadata": {
        "path": "/{connectionId}/users/photo",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "userId",
            "in": "query",
            "required": true,
            "type": "string"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "object"
          },
          "default": {
            "type": "void"
          }
        }
      },
      "UserPhoto": {
        "path": "/{connectionId}/users/photo/value",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "userId",
            "in": "query",
            "required": true,
            "type": "string"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "string",
            "format": "binary"
          },
          "default": {
            "type": "void"
          }
        }
      },
      "Manager": {
        "path": "/{connectionId}/users/{userId}/manager",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "userId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "object"
          },
          "202": {
            "type": "void"
          },
          "400": {
            "type": "void"
          },
          "401": {
            "type": "void"
          },
          "403": {
            "type": "void"
          },
          "500": {
            "type": "void"
          },
          "default": {
            "type": "void"
          }
        }
      },
      "DirectReports": {
        "path": "/{connectionId}/users/{userId}/directReports",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "userId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "array"
          },
          "202": {
            "type": "void"
          },
          "400": {
            "type": "void"
          },
          "401": {
            "type": "void"
          },
          "403": {
            "type": "void"
          },
          "500": {
            "type": "void"
          },
          "default": {
            "type": "void"
          }
        }
      },
      "SearchUser": {
        "path": "/{connectionId}/users",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "searchTerm",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "top",
            "in": "query",
            "required": false,
            "type": "integer"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "array"
          },
          "202": {
            "type": "void"
          },
          "400": {
            "type": "void"
          },
          "401": {
            "type": "void"
          },
          "403": {
            "type": "void"
          },
          "500": {
            "type": "void"
          },
          "default": {
            "type": "void"
          }
        }
      },
      "SearchUserV2": {
        "path": "/{connectionId}/v2/users",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "searchTerm",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "top",
            "in": "query",
            "required": false,
            "type": "integer"
          },
          {
            "name": "isSearchTermRequired",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "skipToken",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "object"
          },
          "202": {
            "type": "void"
          },
          "400": {
            "type": "void"
          },
          "401": {
            "type": "void"
          },
          "403": {
            "type": "void"
          },
          "500": {
            "type": "void"
          },
          "default": {
            "type": "void"
          }
        }
      },
      "TestConnection": {
        "path": "/{connectionId}/testconnection",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "void"
          },
          "default": {
            "type": "void"
          }
        }
      },
      "UserProfile_V2": {
        "path": "/{connectionId}/codeless/v1.0/users/{id}",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "$select",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "object"
          }
        }
      },
      "Manager_V2": {
        "path": "/{connectionId}/codeless/v1.0/users/{id}/manager",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "$select",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "object"
          }
        }
      },
      "DirectReports_V2": {
        "path": "/{connectionId}/codeless/v1.0/users/{id}/directReports",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "$select",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "$top",
            "in": "query",
            "required": false,
            "type": "integer"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "object"
          }
        }
      },
      "UserPhoto_V2": {
        "path": "/{connectionId}/codeless/v1.0/users/{id}/photo/$value",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "string",
            "format": "binary"
          }
        }
      },
      "TrendingDocuments": {
        "path": "/{connectionId}/codeless/beta/users/{id}/insights/trending",
        "method": "GET",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "$filter",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "extractSensitivityLabel",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "fetchSensitivityLabelMetadata",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "object"
          }
        }
      },
      "HttpRequest": {
        "path": "/{connectionId}/codeless/httprequest",
        "method": "POST",
        "parameters": [
          {
            "name": "connectionId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "Uri",
            "in": "header",
            "required": true,
            "type": "string"
          },
          {
            "name": "Method",
            "in": "header",
            "required": true,
            "type": "string"
          },
          {
            "name": "Body",
            "in": "body",
            "required": false,
            "type": "object"
          },
          {
            "name": "ContentType",
            "in": "header",
            "required": false,
            "type": "string"
          },
          {
            "name": "CustomHeader1",
            "in": "header",
            "required": false,
            "type": "string"
          },
          {
            "name": "CustomHeader2",
            "in": "header",
            "required": false,
            "type": "string"
          },
          {
            "name": "CustomHeader3",
            "in": "header",
            "required": false,
            "type": "string"
          },
          {
            "name": "CustomHeader4",
            "in": "header",
            "required": false,
            "type": "string"
          },
          {
            "name": "CustomHeader5",
            "in": "header",
            "required": false,
            "type": "string"
          }
        ],
        "responseInfo": {
          "200": {
            "type": "object"
          },
          "default": {
            "type": "void"
          }
        }
      }
    }
  }
};
