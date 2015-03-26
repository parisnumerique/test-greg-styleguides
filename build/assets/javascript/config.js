var Paris = window.Paris || {};

Paris.config = {
  algolia: {
    // The Algolia application ID
    id: "QGS0I5WCQR",

    // This API key should be created on Algolia, and have `search` permission on all the indexes below
    api_key: "c24c7ce417a1026d8fa2e160ca59edfb",

    // You can add any Algolia index here, to be able to use it in the quick-access module and search-results template
    indexes: {
      global: "ParisFront",
      persons: ""
    }
  }
};
