import CounterPage from '@/components/CounterPage';
import UsersPage from '@/components/UsersPage';
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Next - Redux ToolKit</h1>
     <CounterPage/>
     <UsersPage/>
    </main>
  )
}
