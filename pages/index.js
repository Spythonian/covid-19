import React from 'react';
import Head from 'next/head';
import Cards from '../components/Cards/Cards';
import Charts from '../components/Charts/Charts';
import CountryPicker from '../components/CountryPicker/CountryPicker';

import { fetchData } from '../api/index';

class Home extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
    // console.log(data);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return [
      <div>
        <Head>
          <title>Covid-19 Tracking App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className="container">
            <h1>This is the home interface</h1>
          </div>
          <img src="/vercel.svg" alt="Covid-19" className="covidimage" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Charts data={data} country={country} />
        </main>
        <style jsx>{`
          .container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          @media (max-width: 770px) {
            .container {
              margin: 0 10%;
            }
            .covidimage {
              width: 100%;
            }
          }
          /* .covidimage {
            width: 300px;
            margin-top: 50px;
          } */
        `}</style>
        <style jsx global>{`
          body {
            background-color: rgb(250, 250, 250);
          }
        `}</style>
      </div>,
    ];
  }
}

export default Home;
