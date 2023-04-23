import contactStyles from '../styles/anchors/Contact.module.scss';

export function Contact() {
  return (
    <div id={'contact'} className={contactStyles.ContactAnchor}>
      <div className={contactStyles.ContactAnchorTitle} data-aos="fade-right">Contact Me</div>
    </div>
  )
}
