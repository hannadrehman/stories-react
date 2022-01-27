import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    url: require('../../static/img/1.jpg').default,
    description: (
      <>
        we designed it from the ground up to be easily usable in your website
        with clean and simple api.
      </>
    ),
  },
  {
    title: 'Light weight',
    url: require('../../static/img/3.jpg').default,
    description: <>its just 3Kb gzipped</>,
  },
  {
    title: 'Focus on What Matters',
    url: require('../../static/img/2.jpg').default,
    description: <>focus on your business logic, leave stories to us !</>,
  },
];

function Feature({ url, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.flexCenter}>
        <div className={styles.featureImgBlock}>
          <img
            src={url}
            alt="feature"
            className={styles.featureSvg}
            alt={title}
          />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
