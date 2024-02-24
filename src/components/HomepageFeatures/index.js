import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Manual para Script de Instalación',
    Svg: require('@site/static/img/imagenjs.svg').default,
    description: (
      <>
        Docker | GitLab | Opción SSL | Opción SSH
      </>
    ),
  },
  {
    title: 'Manual de Instalación',
    Svg: require('@site/static/img/manualdos.svg').default,
    description: (
      <>
        Docker + GitLab + SSL
      </>
    ),
  },
  {
    title: 'Manual de instalación ',
    Svg: require('@site/static/img/manualtres.svg').default,
    description: (
      <>
        Linux | Valet
      </>
    ),
  },
  {
    title: 'Instalación del Facturador ',
    Svg: require('@site/static/img/manualcuatro.svg').default,
    description: (
      <>
        Docker | Linux | SSL externo
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
