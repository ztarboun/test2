import React, { Component } from "react";
import {
  ReactiveBase,
  DataSearch,
  ResultList,
  MultiList,
  ReactiveList,
  SelectedFilters
} from "@appbaseio/reactivesearch";

class App extends Component {
  render() {
    return (
      <ReactiveBase app="requirements" url="http://localhost:9200">
        <DataSearch componentId="SearchSensor" />

        <ReactiveList
          react={{
            and: ["SearchSensor"]
          }}
          onData={res => <div>{res.title}</div>}
        />
      </ReactiveBase>
    );
  }
}

export default App;
