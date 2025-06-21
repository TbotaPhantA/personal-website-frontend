import mainStyles from '@/styles/Main.module.scss';
import notFoundStyles from '@/styles/pages/notFound.module.scss';

export default function NotFound() {
  return (
    <div className={mainStyles.MainPage}>
      <div className={notFoundStyles.container}>
        <div className={notFoundStyles.overlay} />
        <h1 className={notFoundStyles.title}>Page not found =(</h1>
      </div>
    </div>
  )
}
