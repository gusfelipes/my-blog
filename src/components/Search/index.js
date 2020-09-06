import React from "react"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"

const algolia = {
  appID: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexNam: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}
const searchClient = algoliasearch(
  "YourApplicationID",
  "bea51c7150462887ebdb0c8a17bf99ee"
)

const Search = () => <h1>Search</h1>

export default Search
