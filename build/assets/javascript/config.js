var Paris = window.Paris || {};

Paris.config = {
  algolia: {
    // The Algolia application ID
    id: "QGS0I5WCQR",

    // This API key should be created on Algolia, and have `search` permission on all the indexes below
    api_key: "219f93ef781ffa09cdb6803f702cf6f1",

    // You can add any Algolia index here, to be able to use it in the quick-access module and search-results template
    indexes: {
      global: "recette_ParisFront",
      persons: "dev_Elus"
    }
  }
};
