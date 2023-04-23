import contactStyles from '../styles/anchors/Contact.module.scss';
import { useRouter } from 'next/router';
import { chooseTranslation } from '@/shared/utils/chooseTranslation';

export function Contact() {
  const { locale } = useRouter();
  const t = chooseTranslation(locale);

  return (
    <div id={'contact'} className={contactStyles.ContactAnchor}>
      <div className={contactStyles.ContactAnchorTitle} data-aos="fade-right">{t.pages.main.contact.title}</div>
    </div>
  )
}
