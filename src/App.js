import React, { Component } from 'react';
import Layout from "./hoc/Layout/Layout";
import MPReport from "./components/MPReport/MPReport";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <MPReport />
        </Layout>
      </div>
    );
  }
}

export default App;
