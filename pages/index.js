import Head from 'next/head';
import Cards from '../components/Cards/Cards';
import Charts from '../components/Charts/Charts';
import CountryPicker from '../components/CountryPicker/CountryPicker';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>This is the home interface</h1>
        </div>
      </main>
    </div>
  );
}
