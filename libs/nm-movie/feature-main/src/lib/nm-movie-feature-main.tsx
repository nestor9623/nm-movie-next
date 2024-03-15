import styles from './nm-movie-feature-main.module.scss';

/* eslint-disable-next-line */
export interface NmMovieFeatureMainProps {}

export function NmMovieFeatureMain(props: NmMovieFeatureMainProps) {
  return (
    <div className={styles['container']}>
      <h1>BIENVENIDO DESDE LIBRERIAS</h1>
    </div>
  );
}

export default NmMovieFeatureMain;
