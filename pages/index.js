import Head from 'next/head';
import InstCalandarView from '../components/instructor-calandar-view/instructor-calandar-view';
import instructor from '../styles/instructor.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
            <title>Home Page</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={instructor.instContainer}>
        <InstCalandarView />
      </div>
    </div>
  )
}
