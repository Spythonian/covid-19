import React from 'react';
import Head from 'next/head';
import Cards from '../components/Cards/Cards';
import Charts from '../components/Charts/Charts';
import CountryPicker from '../components/CountryPicker/CountryPicker';

import { fetchData } from '../api/index';

class Home extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
    // console.log(data);
  }

  render() {
    const { data } = this.state;

    return [
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div>
            <h1>This is the home interface</h1>
          </div>
          <Cards data={data} />
          <CountryPicker />
          <Charts />
        </main>
      </div>,
    ];
  }
}

export default Home;
