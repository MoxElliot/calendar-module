import Head from 'next/head';
import InstCalandarView from '../components/instructor-calandar-view/instructor-calandar-view';

export default function Home() {
  return (
    <div>
      <Head>
            <title>Home Page</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
      </Head>
      <div className="">
        <InstCalandarView />
      </div>
    </div>
  )
}
