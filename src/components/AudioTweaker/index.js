import { useEffect, useState } from 'react';
import styles from './index.module.scss';

const AudioTweaker = ({ selectedAudio }) => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    setFileList(require.context('../../../public/assets/').keys())
  }, [])

  return (
    <div className={styles.audioTweaker}>
      {
        selectedAudio.id ? (
          <div className={styles.controlPanel}>
            <h2>{selectedAudio.label}</h2>
            {
              fileList.filter(path => path.includes(selectedAudio.folder)).map(path => {
                return <audio controls src={path.replace('./', '../../assets/')} />
              })
            }
          </div>
        ) : (
          <div className={styles.noSelection}>
            No audio selected
          </div>
        )
      }
    </div>
  )
}

export default AudioTweaker;