import Image from 'next/image'
import { AiFillRocket } from 'react-icons/ai';

import styles from './BoxUser.module.css'

import Teste from '../../../public/img/social_medias/gmail.svg'

interface BoxUserProps{
    photo?: string,
    name: string,
    area: string,
    description: string,
}

export function BoxUser(props: BoxUserProps) {
  return (
    <div className={styles.contentGeral}>
        <div className={styles.contentPhotoUser}>
            <Image src={props.photo || Teste} width={40} height={40} alt="Image user"/>
        </div>
        <div className={styles.contentUserInfo}>
            <div className={styles.contentInfo}>
                <p>{props.name}</p>
            </div>
            <div className={styles.contentInfo}>
                <p>{props.area}</p>
            </div>
            <div className={styles.contentInfo}>
                <p>{props.description}</p>
            </div>
        </div>
        <div className={styles.contentFollowUser}>
            <AiFillRocket/>
        </div>
    </div>
  )
}