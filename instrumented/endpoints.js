function cov_10uoprc3ey() {
  var path = "/Users/elise/turing/4mod/mi-voz-mi-voto/src/endpoints.js";
  var hash = "7ed42b6aa52223e29ae73435111fc4f1a0deb1bd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/elise/turing/4mod/mi-voz-mi-voto/src/endpoints.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 45,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7ed42b6aa52223e29ae73435111fc4f1a0deb1bd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_10uoprc3ey = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_10uoprc3ey();
const endpoints = (cov_10uoprc3ey().s[0]++, {
  users: 'http://localhost:3001/api/v1/users',

  /* POST to API:
    REQUEST OBJECT:
      {
        first_name: 'string',
        last_name: 'string',
        state_name: 'string', ** two letter state abbv **
        email: 'string',
        language: 'string' ** 'en' or 'es' **
      }
    RESPONSE OBJECT:
      SUCCESSFULLY CREATED:
      {
        success: "You are now registered to receive notifications about upcoming elections in your state. A confirmation email has been sent to #{user.email}.",
        status: 200
      }
      EMAIL DOES NOT INCLUDE '@':
      {
        error: "Error creating subscriber. A valid email must be provided.",
        status: 400
      }
      EMAIL ALREADY EXISTS:
      {
        error: "#{user.email} is already susbscribed to receive election notifications.",
        status: 400
      }
      GENERAL ERROR:
      {
        error: "Error creating subscriber. Please ensure all elements in the form are filled out correctly.",
        status: 400
      }
      SUCCESSFULLY REMOVED:
      {
        success: "You have successfully unsubscribed from Mi Voto, Mi Voz's email list. You will no longer receive email notifications at #{user.email}."},
        status: 200
      }
  */
  elections: 'http://localhost:3001/api/v1/elections',

  /*
    QUERY PARAMS? LOCATION? STATE?  I.E. CO?
  */
  referendums: 'http://localhost:3001/api/v1/referendums',
  state: 'http://localhost:3001/api/v1/state'
});
export default endpoints;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy5qcyJdLCJuYW1lcyI6WyJlbmRwb2ludHMiLCJ1c2VycyIsImVsZWN0aW9ucyIsInJlZmVyZW5kdW1zIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosTUFBTUEsU0FBUyw2QkFBRztBQUNoQkMsRUFBQUEsS0FBSyxFQUFFLG9DQURTOztBQUVoQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRUMsRUFBQUEsU0FBUyxFQUFFLHdDQXRDSzs7QUF1Q2hCO0FBQ0Y7QUFDQTtBQUNFQyxFQUFBQSxXQUFXLEVBQUUsMENBMUNHO0FBMkNoQkMsRUFBQUEsS0FBSyxFQUFFO0FBM0NTLENBQUgsQ0FBZjtBQThDQSxlQUFlSixTQUFmIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW5kcG9pbnRzID0ge1xuICB1c2VyczogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdXNlcnMnLFxuICAvKiBQT1NUIHRvIEFQSTpcbiAgICBSRVFVRVNUIE9CSkVDVDpcbiAgICAgIHtcbiAgICAgICAgZmlyc3RfbmFtZTogJ3N0cmluZycsXG4gICAgICAgIGxhc3RfbmFtZTogJ3N0cmluZycsXG4gICAgICAgIHN0YXRlX25hbWU6ICdzdHJpbmcnLCAqKiB0d28gbGV0dGVyIHN0YXRlIGFiYnYgKipcbiAgICAgICAgZW1haWw6ICdzdHJpbmcnLFxuICAgICAgICBsYW5ndWFnZTogJ3N0cmluZycgKiogJ2VuJyBvciAnZXMnICoqXG4gICAgICB9XG4gICAgUkVTUE9OU0UgT0JKRUNUOlxuICAgICAgU1VDQ0VTU0ZVTExZIENSRUFURUQ6XG4gICAgICB7XG4gICAgICAgIHN1Y2Nlc3M6IFwiWW91IGFyZSBub3cgcmVnaXN0ZXJlZCB0byByZWNlaXZlIG5vdGlmaWNhdGlvbnMgYWJvdXQgdXBjb21pbmcgZWxlY3Rpb25zIGluIHlvdXIgc3RhdGUuIEEgY29uZmlybWF0aW9uIGVtYWlsIGhhcyBiZWVuIHNlbnQgdG8gI3t1c2VyLmVtYWlsfS5cIixcbiAgICAgICAgc3RhdHVzOiAyMDBcbiAgICAgIH1cbiAgICAgIEVNQUlMIERPRVMgTk9UIElOQ0xVREUgJ0AnOlxuICAgICAge1xuICAgICAgICBlcnJvcjogXCJFcnJvciBjcmVhdGluZyBzdWJzY3JpYmVyLiBBIHZhbGlkIGVtYWlsIG11c3QgYmUgcHJvdmlkZWQuXCIsXG4gICAgICAgIHN0YXR1czogNDAwXG4gICAgICB9XG4gICAgICBFTUFJTCBBTFJFQURZIEVYSVNUUzpcbiAgICAgIHtcbiAgICAgICAgZXJyb3I6IFwiI3t1c2VyLmVtYWlsfSBpcyBhbHJlYWR5IHN1c2JzY3JpYmVkIHRvIHJlY2VpdmUgZWxlY3Rpb24gbm90aWZpY2F0aW9ucy5cIixcbiAgICAgICAgc3RhdHVzOiA0MDBcbiAgICAgIH1cbiAgICAgIEdFTkVSQUwgRVJST1I6XG4gICAgICB7XG4gICAgICAgIGVycm9yOiBcIkVycm9yIGNyZWF0aW5nIHN1YnNjcmliZXIuIFBsZWFzZSBlbnN1cmUgYWxsIGVsZW1lbnRzIGluIHRoZSBmb3JtIGFyZSBmaWxsZWQgb3V0IGNvcnJlY3RseS5cIixcbiAgICAgICAgc3RhdHVzOiA0MDBcbiAgICAgIH1cbiAgICAgIFNVQ0NFU1NGVUxMWSBSRU1PVkVEOlxuICAgICAge1xuICAgICAgICBzdWNjZXNzOiBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSB1bnN1YnNjcmliZWQgZnJvbSBNaSBWb3RvLCBNaSBWb3oncyBlbWFpbCBsaXN0LiBZb3Ugd2lsbCBubyBsb25nZXIgcmVjZWl2ZSBlbWFpbCBub3RpZmljYXRpb25zIGF0ICN7dXNlci5lbWFpbH0uXCJ9LFxuICAgICAgICBzdGF0dXM6IDIwMFxuICAgICAgfVxuICAqL1xuICBlbGVjdGlvbnM6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL2VsZWN0aW9ucycsXG4gIC8qXG4gICAgUVVFUlkgUEFSQU1TPyBMT0NBVElPTj8gU1RBVEU/ICBJLkUuIENPP1xuICAqL1xuICByZWZlcmVuZHVtczogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvcmVmZXJlbmR1bXMnLFxuICBzdGF0ZTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvc3RhdGUnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGVuZHBvaW50cztcbiJdfQ==