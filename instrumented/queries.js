function cov_jctliyjmd() {
  var path = "/Users/hazelpablo/turing_work/4mod/fe-gotbaggage/src/queries.js";
  var hash = "2ceb716353405b9fd5b855f393ba959bd1b51c43";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/hazelpablo/turing_work/4mod/fe-gotbaggage/src/queries.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 23
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "1": {
        start: {
          line: 17,
          column: 23
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "2": {
        start: {
          line: 23,
          column: 20
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "3": {
        start: {
          line: 33,
          column: 31
        },
        end: {
          line: 41,
          column: 1
        }
      },
      "4": {
        start: {
          line: 43,
          column: 27
        },
        end: {
          line: 53,
          column: 2
        }
      },
      "5": {
        start: {
          line: 75,
          column: 26
        },
        end: {
          line: 88,
          column: 1
        }
      },
      "6": {
        start: {
          line: 91,
          column: 20
        },
        end: {
          line: 99,
          column: 1
        }
      },
      "7": {
        start: {
          line: 101,
          column: 29
        },
        end: {
          line: 111,
          column: 1
        }
      },
      "8": {
        start: {
          line: 114,
          column: 29
        },
        end: {
          line: 117,
          column: 1
        }
      },
      "9": {
        start: {
          line: 115,
          column: 35
        },
        end: {
          line: 115,
          column: 59
        }
      },
      "10": {
        start: {
          line: 116,
          column: 2
        },
        end: {
          line: 116,
          column: 34
        }
      },
      "11": {
        start: {
          line: 119,
          column: 29
        },
        end: {
          line: 122,
          column: 1
        }
      },
      "12": {
        start: {
          line: 120,
          column: 35
        },
        end: {
          line: 120,
          column: 59
        }
      },
      "13": {
        start: {
          line: 121,
          column: 2
        },
        end: {
          line: 121,
          column: 34
        }
      },
      "14": {
        start: {
          line: 124,
          column: 27
        },
        end: {
          line: 127,
          column: 1
        }
      },
      "15": {
        start: {
          line: 125,
          column: 44
        },
        end: {
          line: 125,
          column: 67
        }
      },
      "16": {
        start: {
          line: 126,
          column: 2
        },
        end: {
          line: 126,
          column: 42
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 114,
            column: 29
          },
          end: {
            line: 114,
            column: 30
          }
        },
        loc: {
          start: {
            line: 114,
            column: 35
          },
          end: {
            line: 117,
            column: 1
          }
        },
        line: 114
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 119,
            column: 29
          },
          end: {
            line: 119,
            column: 30
          }
        },
        loc: {
          start: {
            line: 119,
            column: 35
          },
          end: {
            line: 122,
            column: 1
          }
        },
        line: 119
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 124,
            column: 27
          },
          end: {
            line: 124,
            column: 28
          }
        },
        loc: {
          start: {
            line: 124,
            column: 33
          },
          end: {
            line: 127,
            column: 1
          }
        },
        line: 124
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2ceb716353405b9fd5b855f393ba959bd1b51c43"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_jctliyjmd = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_jctliyjmd();
// import React from 'react'
import { gql, useQuery } from '@apollo/client';
const GET_ESSENTIALS = (cov_jctliyjmd().s[0]++, gql`
  query {
    essentialItems {
      name
      id
    }
    itemsByCategory(category: 3) {
      name
      id
    }
  }
`);
const GET_CATEGORIES = (cov_jctliyjmd().s[1]++, gql`
  query {
    categoryNames
  }
`);
const DELETE_ITEM = (cov_jctliyjmd().s[2]++, gql`
  mutation TripItemDelete($tripId: Int! $itemId: Int!){
    tripItemDelete(input: { tripId: $tripId, itemId: $itemId }) {
      tripItem {
        id
      }
    }
  }
`);
export const GET_SINGLE_TRIP = (cov_jctliyjmd().s[3]++, gql`
  query ItemsByTrip($tripId: Int!) {
    itemsByTrip(tripId: $tripId) {            
      name
      id
      category      
    }
  }
`);
export const ITEM_CREATE = (cov_jctliyjmd().s[4]++, gql`
mutation ItemCreate($tripId: Int!, $itemName: String!) {
  itemCreate(input: { tripId: $tripId, category: "essentials", itemName: $itemName})
  {
    item{
      name
      id
      category
    }
  }
}`);

// mutation{
//   itemCreate(input: {tripId: 1, itemName: "boss item"})
//   {
//     item{
//       name
//       id
//     }
//   }
// }

// const GET_SINGLE_TRIP = gql`
//   {
//     itemsByTrip(tripId: 1813) {
//       name
//       id
//       category
//     }
//   }
// `;

const ADD_TRIP_MUTATION = (cov_jctliyjmd().s[5]++, gql`
  mutation TripCreate($name: String!, $category: String!, $traveler: String!) {
    tripCreate(
      input: { name: $name, category: $category, traveler: $traveler }
    ) {
      trip {
        name
        category
        image
        traveler
      }
    }
  }
`);
const DELETE_TRIP = (cov_jctliyjmd().s[6]++, gql`
  mutation TripDelete($id: ID!) {
    tripDelete(input: {id:$id}) {
      trip {
        id
      }
    }
  }
`);
export const GET_ALL_TRIPS = (cov_jctliyjmd().s[7]++, gql`
  query {
    allTrips {
      name
      category
      id
      traveler
      image
    }
  }
`);
cov_jctliyjmd().s[8]++;
export const GetEssentials = () => {
  cov_jctliyjmd().f[0]++;
  const {
    data,
    error,
    loading
  } = (cov_jctliyjmd().s[9]++, useQuery(GET_ESSENTIALS));
  cov_jctliyjmd().s[10]++;
  return {
    data,
    error,
    loading
  };
};
cov_jctliyjmd().s[11]++;
export const GetCategories = () => {
  cov_jctliyjmd().f[1]++;
  const {
    data,
    error,
    loading
  } = (cov_jctliyjmd().s[12]++, useQuery(GET_CATEGORIES));
  cov_jctliyjmd().s[13]++;
  return {
    data,
    error,
    loading
  };
};
cov_jctliyjmd().s[14]++;
export const GetAllTrips = () => {
  cov_jctliyjmd().f[2]++;
  const {
    data,
    error,
    loading,
    refetch
  } = (cov_jctliyjmd().s[15]++, useQuery(GET_ALL_TRIPS));
  cov_jctliyjmd().s[16]++;
  return {
    data,
    error,
    loading,
    refetch
  };
};

// export const ItemsByTrip = (id) => {
//   const { data, error, loading } = useQuery(GET_SINGLE_TRIP);
//   return { data, error, loading, id };
// }

export { DELETE_TRIP };
export { DELETE_ITEM };
export { ADD_TRIP_MUTATION };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJ1c2VRdWVyeSIsIkdFVF9FU1NFTlRJQUxTIiwiR0VUX0NBVEVHT1JJRVMiLCJERUxFVEVfSVRFTSIsIkdFVF9TSU5HTEVfVFJJUCIsIklURU1fQ1JFQVRFIiwiQUREX1RSSVBfTVVUQVRJT04iLCJERUxFVEVfVFJJUCIsIkdFVF9BTExfVFJJUFMiLCJHZXRFc3NlbnRpYWxzIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsIkdldENhdGVnb3JpZXMiLCJHZXRBbGxUcmlwcyIsInJlZmV0Y2giXSwic291cmNlcyI6WyJxdWVyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmNvbnN0IEdFVF9FU1NFTlRJQUxTID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgZXNzZW50aWFsSXRlbXMge1xuICAgICAgbmFtZVxuICAgICAgaWRcbiAgICB9XG4gICAgaXRlbXNCeUNhdGVnb3J5KGNhdGVnb3J5OiAzKSB7XG4gICAgICBuYW1lXG4gICAgICBpZFxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgR0VUX0NBVEVHT1JJRVMgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBjYXRlZ29yeU5hbWVzXG4gIH1cbmA7XG5cbmNvbnN0IERFTEVURV9JVEVNID0gZ3FsYFxuICBtdXRhdGlvbiBUcmlwSXRlbURlbGV0ZSgkdHJpcElkOiBJbnQhICRpdGVtSWQ6IEludCEpe1xuICAgIHRyaXBJdGVtRGVsZXRlKGlucHV0OiB7IHRyaXBJZDogJHRyaXBJZCwgaXRlbUlkOiAkaXRlbUlkIH0pIHtcbiAgICAgIHRyaXBJdGVtIHtcbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBHRVRfU0lOR0xFX1RSSVAgPSBncWxgXG4gIHF1ZXJ5IEl0ZW1zQnlUcmlwKCR0cmlwSWQ6IEludCEpIHtcbiAgICBpdGVtc0J5VHJpcCh0cmlwSWQ6ICR0cmlwSWQpIHsgICAgICAgICAgICBcbiAgICAgIG5hbWVcbiAgICAgIGlkXG4gICAgICBjYXRlZ29yeSAgICAgIFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IElURU1fQ1JFQVRFID0gZ3FsYFxubXV0YXRpb24gSXRlbUNyZWF0ZSgkdHJpcElkOiBJbnQhLCAkaXRlbU5hbWU6IFN0cmluZyEpIHtcbiAgaXRlbUNyZWF0ZShpbnB1dDogeyB0cmlwSWQ6ICR0cmlwSWQsIGNhdGVnb3J5OiBcImVzc2VudGlhbHNcIiwgaXRlbU5hbWU6ICRpdGVtTmFtZX0pXG4gIHtcbiAgICBpdGVte1xuICAgICAgbmFtZVxuICAgICAgaWRcbiAgICAgIGNhdGVnb3J5XG4gICAgfVxuICB9XG59YFxuXG4vLyBtdXRhdGlvbntcbi8vICAgaXRlbUNyZWF0ZShpbnB1dDoge3RyaXBJZDogMSwgaXRlbU5hbWU6IFwiYm9zcyBpdGVtXCJ9KVxuLy8gICB7XG4vLyAgICAgaXRlbXtcbi8vICAgICAgIG5hbWVcbi8vICAgICAgIGlkXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGNvbnN0IEdFVF9TSU5HTEVfVFJJUCA9IGdxbGBcbi8vICAge1xuLy8gICAgIGl0ZW1zQnlUcmlwKHRyaXBJZDogMTgxMykge1xuLy8gICAgICAgbmFtZVxuLy8gICAgICAgaWRcbi8vICAgICAgIGNhdGVnb3J5XG4vLyAgICAgfVxuLy8gICB9XG4vLyBgO1xuXG5jb25zdCBBRERfVFJJUF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gVHJpcENyZWF0ZSgkbmFtZTogU3RyaW5nISwgJGNhdGVnb3J5OiBTdHJpbmchLCAkdHJhdmVsZXI6IFN0cmluZyEpIHtcbiAgICB0cmlwQ3JlYXRlKFxuICAgICAgaW5wdXQ6IHsgbmFtZTogJG5hbWUsIGNhdGVnb3J5OiAkY2F0ZWdvcnksIHRyYXZlbGVyOiAkdHJhdmVsZXIgfVxuICAgICkge1xuICAgICAgdHJpcCB7XG4gICAgICAgIG5hbWVcbiAgICAgICAgY2F0ZWdvcnlcbiAgICAgICAgaW1hZ2VcbiAgICAgICAgdHJhdmVsZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cblxuY29uc3QgREVMRVRFX1RSSVAgPSBncWxgXG4gIG11dGF0aW9uIFRyaXBEZWxldGUoJGlkOiBJRCEpIHtcbiAgICB0cmlwRGVsZXRlKGlucHV0OiB7aWQ6JGlkfSkge1xuICAgICAgdHJpcCB7XG4gICAgICAgIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgR0VUX0FMTF9UUklQUyA9IGdxbGBcbiAgcXVlcnkge1xuICAgIGFsbFRyaXBzIHtcbiAgICAgIG5hbWVcbiAgICAgIGNhdGVnb3J5XG4gICAgICBpZFxuICAgICAgdHJhdmVsZXJcbiAgICAgIGltYWdlXG4gICAgfVxuICB9XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBHZXRFc3NlbnRpYWxzID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShHRVRfRVNTRU5USUFMUyk7XG4gIHJldHVybiB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH07XG59O1xuXG5leHBvcnQgY29uc3QgR2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoR0VUX0NBVEVHT1JJRVMpO1xuICByZXR1cm4geyBkYXRhLCBlcnJvciwgbG9hZGluZyB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEdldEFsbFRyaXBzID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nLCByZWZldGNoIH0gPSB1c2VRdWVyeShHRVRfQUxMX1RSSVBTKTtcbiAgcmV0dXJuIHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcsIHJlZmV0Y2h9O1xufTtcblxuLy8gZXhwb3J0IGNvbnN0IEl0ZW1zQnlUcmlwID0gKGlkKSA9PiB7XG4vLyAgIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEdFVF9TSU5HTEVfVFJJUCk7XG4vLyAgIHJldHVybiB7IGRhdGEsIGVycm9yLCBsb2FkaW5nLCBpZCB9O1xuLy8gfVxuXG5leHBvcnQgeyBERUxFVEVfVFJJUCB9O1xuZXhwb3J0IHtERUxFVEVfSVRFTX1cbmV4cG9ydCB7IEFERF9UUklQX01VVEFUSU9OIH07XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaO0FBQ0EsU0FBU0EsR0FBRyxFQUFFQyxRQUFRLFFBQVEsZ0JBQWdCO0FBRTlDLE1BQU1DLGNBQWMsNEJBQUdGLEdBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRUQsTUFBTUcsY0FBYyw0QkFBR0gsR0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRUQsTUFBTUksV0FBVyw0QkFBR0osR0FBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFFRCxPQUFPLE1BQU1LLGVBQWUsNEJBQUdMLEdBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRUQsT0FBTyxNQUFNTSxXQUFXLDRCQUFHTixHQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNTyxpQkFBaUIsNEJBQUdQLEdBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUdELE1BQU1RLFdBQVcsNEJBQUdSLEdBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBRUQsT0FBTyxNQUFNUyxhQUFhLDRCQUFHVCxHQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQztBQUdGLE9BQU8sTUFBTVUsYUFBYSxHQUFHLE1BQU07RUFBQTtFQUNqQyxNQUFNO0lBQUVDLElBQUk7SUFBRUMsS0FBSztJQUFFQztFQUFRLENBQUMsNEJBQUdaLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDO0VBQUM7RUFDMUQsT0FBTztJQUFFUyxJQUFJO0lBQUVDLEtBQUs7SUFBRUM7RUFBUSxDQUFDO0FBQ2pDLENBQUM7QUFBQztBQUVGLE9BQU8sTUFBTUMsYUFBYSxHQUFHLE1BQU07RUFBQTtFQUNqQyxNQUFNO0lBQUVILElBQUk7SUFBRUMsS0FBSztJQUFFQztFQUFRLENBQUMsNkJBQUdaLFFBQVEsQ0FBQ0UsY0FBYyxDQUFDO0VBQUM7RUFDMUQsT0FBTztJQUFFUSxJQUFJO0lBQUVDLEtBQUs7SUFBRUM7RUFBUSxDQUFDO0FBQ2pDLENBQUM7QUFBQztBQUVGLE9BQU8sTUFBTUUsV0FBVyxHQUFHLE1BQU07RUFBQTtFQUMvQixNQUFNO0lBQUVKLElBQUk7SUFBRUMsS0FBSztJQUFFQyxPQUFPO0lBQUVHO0VBQVEsQ0FBQyw2QkFBR2YsUUFBUSxDQUFDUSxhQUFhLENBQUM7RUFBQztFQUNsRSxPQUFPO0lBQUVFLElBQUk7SUFBRUMsS0FBSztJQUFFQyxPQUFPO0lBQUVHO0VBQU8sQ0FBQztBQUN6QyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNSLFdBQVc7QUFDcEIsU0FBUUosV0FBVztBQUNuQixTQUFTRyxpQkFBaUIifQ==