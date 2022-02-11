function cov_1q30igxfoy() {
  var path = "/Users/elise/turing/4mod/mi-voz-mi-voto/src/apiCalls.js";
  var hash = "d1cab44b1f698f1a4312cb946f7233da385fb29b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/elise/turing/4mod/mi-voz-mi-voto/src/apiCalls.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 38
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 12,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 38
          },
          end: {
            line: 3,
            column: 39
          }
        },
        loc: {
          start: {
            line: 3,
            column: 62
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d1cab44b1f698f1a4312cb946f7233da385fb29b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1q30igxfoy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1q30igxfoy();
import endpoints from './endpoints.js';
cov_1q30igxfoy().s[0]++;
export const postNewEmailSubscriber = newEmailSubscriber => {
  cov_1q30igxfoy().f[0]++;
  cov_1q30igxfoy().s[1]++;
  return fetch(endpoints.users, {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newEmailSubscriber)
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaUNhbGxzLmpzIl0sIm5hbWVzIjpbImVuZHBvaW50cyIsInBvc3ROZXdFbWFpbFN1YnNjcmliZXIiLCJuZXdFbWFpbFN1YnNjcmliZXIiLCJmZXRjaCIsInVzZXJzIiwibW9kZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLFNBQVAsTUFBc0IsZ0JBQXRCOztBQUVBLE9BQU8sTUFBTUMsc0JBQXNCLEdBQUlDLGtCQUFELElBQXdCO0FBQUE7QUFBQTtBQUM1RCxTQUFPQyxLQUFLLENBQUNILFNBQVMsQ0FBQ0ksS0FBWCxFQUFrQjtBQUM1QkMsSUFBQUEsSUFBSSxFQUFFLE1BRHNCO0FBRTVCQyxJQUFBQSxNQUFNLEVBQUUsTUFGb0I7QUFHNUJDLElBQUFBLE9BQU8sRUFBRTtBQUNQLHNCQUFnQixrQkFEVDtBQUVQLGdCQUFVO0FBRkgsS0FIbUI7QUFPNUJDLElBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVSLGtCQUFmO0FBUHNCLEdBQWxCLENBQVo7QUFTRCxDQVZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVuZHBvaW50cyBmcm9tICcuL2VuZHBvaW50cy5qcyc7XG5cbmV4cG9ydCBjb25zdCBwb3N0TmV3RW1haWxTdWJzY3JpYmVyID0gKG5ld0VtYWlsU3Vic2NyaWJlcikgPT4ge1xuICByZXR1cm4gZmV0Y2goZW5kcG9pbnRzLnVzZXJzLCB7XG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdFbWFpbFN1YnNjcmliZXIpXG4gIH0pXG59XG4iXX0=