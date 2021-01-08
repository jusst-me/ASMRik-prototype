import audioTypes from '../../data/audioTypes.json';
import styles from './index.module.scss';
import cN from 'classnames';

const AudioSelector = ({ selectedAudio, selectAudio }) => {
  return (
    <div className={styles.AudioSelector}>
      <h2 className={styles.header}>Select Audio</h2>
      <div className={styles.audioGrid}>
        {
          audioTypes.map((audio, i) => {
            return <button onClick={() => selectAudio(audio)} key={audio.id} className={cN(styles.gridItem, audio.id === selectedAudio.id && styles.active)}>{audio.label}</button>
          })
        }
      </div>
    </div>
  )
}

export default AudioSelector