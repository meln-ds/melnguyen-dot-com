import { useEffect, useState } from 'react';
import moment from 'moment';
import ReactTooltip from 'react-tooltip';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home(props) {
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    setShowTip(true);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Mel Nguyen</title>
        <meta
          name="description"
          content="My virtual humble abode, where I discuss tech, products, books, and more"
        />
        <link
          rel="avatar-icon"
          sizes="57x57"
          href="/melnguyen-squared.png"
        />
        <link
          rel="avatar-icon"
          sizes="60x60"
          href="/melnguyen-squared.png"
        />
        <link
          rel="avatar-icon"
          sizes="72x72"
          href="/melnguyen-squared.png"
        />
        <link
          rel="avatar-icon"
          sizes="76x76"
          href="/melnguyen-squared.png"
        />
        <link
          rel="avatar-icon"
          sizes="114x114"
          href="/melnguyen-squared.png"
        />
        <link
          rel="avatar-icon"
          sizes="120x120"
          href="/melnguyen-squared.png"
        />
        <link
          rel="avatar-icon"
          sizes="144x144"
          href="/melnguyen-squared.png"
        />
        <link
          rel="avatar-icon"
          sizes="152x152"
          href="/melnguyen-squared.png"
        />
        <link
          rel="avatar-icon"
          sizes="180x180"
          href="/melnguyen-squared.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/melnguyen-squared.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/melnguyen-squared.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/melnguyen-squared.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/melnguyen-squared.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/melnguyen-squared.png" />
        <meta name="theme-color" content="#ffffff" />
        <script
          defer
          type="text/javascript"
          src="https://api.pirsch.io/pirsch.js"
          id="pirschjs"
          data-code="p7MCehtvDgH00nzVwSQv2yqP5iB700Pt"
        ></script>
      </Head>

      <main className={styles.main}>
        <section className={styles.intro}>
          <img className={styles.avatar} src="/melnguyen-squared.png" />
          <h1 className={styles.title}>Mel Nguyen</h1>
          <p>Say hello to my virtual humble abode</p>
        </section>
        {/*
        <div style={{ marginBottom: 30 }}>
          {[
            {
              link: 'to be added',
              title: (
                <span>
                  <span style={{ marginRight: 10 }}>💌</span>
                  Monthly Newsletter
                </span>
              ),
            },
            {
              link: 'to be added',
              title: (
                <span>
                  <span style={{ marginRight: 10 }}>✏️</span> 
                  Book a Meeting With Me
                </span>
              ),
            },
          ].map((item) => (
            <a className={styles.bio_link} key={item.link} href={item.link}>
              {item.title}
            </a>
          ))}
        </div>
        */}
        <div className={styles.sections}>
          <section>
            <h2>⚡ Quick Facts</h2>
            <ul className={styles.list}>
              <li>
                <span style={{ marginRight: '10px' }}>🧑</span>
                she/her
              </li>
              <li>
                <span style={{ marginRight: '10px' }}>💻</span>
                Insights & Analytics
              </li>
              <li>
                <span style={{ marginRight: '10px' }}>🧑‍💻</span>
                Data Analyst/Janitor
              </li>
              <li>
                <span style={{ marginRight: '10px' }}>🔨</span>
                Aspiring Product Builder
              </li>
              <li>
                <span style={{ marginRight: '10px' }}>🇻🇳</span>
                Born in Saigon
              </li>
              <li>
                <span style={{ marginRight: '10px' }}>🇸🇬</span>
                Breathing in Singapore
              </li>
              <li>
                <span style={{ marginRight: '10px' }}>🐺</span>
                <a href="https://www.si.umich.edu/programs/master-applied-data-science">Wolverine '22</a>
              </li>
              <li>
                <span style={{ marginRight: '10px' }}>👍</span>
                Coffee, cats, exploring new 
                <br />
                lands/culture & meeting people
                <br /> 
                from all walks of life
              </li>
            </ul>
          </section>
          <section>
            <h2>🤝 Connect</h2>
            <ul className={styles.list}>
            <li>
                <div>
                  <span style={{ marginRight: '10px' }}>💼</span>
                  <a href="https://www.linkedin.com/in/melnguyen16/">LinkedIn</a>
                </div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>🐦</span>
                  <a href="https://twitter.com/harusunbear">Twitter</a>
                  <div className={styles.subtitle}>Mostly stalking other great minds</div>
                </div>
                <div className={styles.subtitle}>{props.tweets}</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>👾</span>
                  <a href="https://discord.com/">melnguyen#9896</a>
                  <div className={styles.subtitle}>Add me on Discord</div>
                </div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>💌</span>
                  <a href="mailto:mel.nguyen273@gmail.com">Email</a>
                </div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>🤖</span>
                  <a href="https://github.com/meln-ds">Github</a>
                </div>
              </li>
            </ul>
          </section>
          <section>
            <h2>🛠️ My Creation</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>👕</span>
                  <a href="https://www.notion.so/templates/wardrobe-and-cost-per-wear-tracker">Wardrobe Tracker Template</a>
                </div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>📚</span>
                  <a href="https://melnguyen.gumroad.com/">Gumroad</a>
                </div>
              </li>
              <li>
                Watch this space for 
                <br />
                more cool stuffs to come 🤓
              </li>
            </ul>
          </section>
          <section>
            <h2>👀 Others</h2>
            <ul className={styles.list}>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>🛠️</span>
                  Stack: GCP, Python, SQL, dbt, 
                  <br />
                  git, Data Studio, Tableau and more.
                </div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>📚</span>
                  <a href="https://www.goodreads.com/user/show/35550258-mel-nguyen">
                    Goodreads
                  </a>
                </div>
                <div className={styles.subtitle}>I read, believe it or not</div>
              </li>
              <li>
                <div>
                  <span style={{ marginRight: '10px' }}>☕</span>
                  <a href="https://www.paypal.com/paypalme/meln273">Buy me a coffee 🤗</a>
                </div>
              </li>
            </ul>
          </section>
        </div>
        
        {/*
        <div style={{ margin: '40px 0', textAlign: 'center' }}>
          <SubscribeForm />
        </div>
        */}

        <h2>🔽 Interested In More?</h2>
        <div>Stay tuned! 🤓</div>
        {/*
        <div className={styles['issue-container']}>
          {props.latest.map((issue, i) => (
            <a key={i} href={issue.link} className={styles['issue-line']}>
              <div className={styles['issue-header']}>
                <div
                  style={{ backgroundColor: issue.color }}
                  className={styles['issue-source']}
                >
                  {issue.source}
                </div>
                <div className={styles['issue-date']}>
                  {moment(issue.isoDate).fromNow()}
                </div>
              </div>
              <div className={styles['issue-title']}>{issue.title}</div>
              <div className={styles['issue-snippet']}>
                {(issue.contentSnippet || '').substring(0, 100)}
                {(issue.contentSnippet || '').length > 100 ? '...' : ''}
              </div>
            </a>
          ))}
        </div>
        */}
      </main>

      {showTip ? (
        <ReactTooltip
          multiline={true}
          overridePosition={({ left, top }, _e, _t, node) => {
            return {
              top,
              left: typeof node === 'string' ? left : Math.max(left, 0),
            };
          }}
        />
      ) : null}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        @media (prefers-color-scheme: dark) {
          html,
          body {
            color-scheme: dark;
            background: #141414;
            color: white;
          }
        }
      `}</style>
    </div>
  );
}