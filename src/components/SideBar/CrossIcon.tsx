import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import crossCustomIcon from '../../styles/components/SideBar.module.scss'

export function CrossIcon() {
  return (
    <div className={crossCustomIcon.BmCrossCustomIcon}>
      <FontAwesomeIcon icon={faTimes} size="3x" color="#DE004E" />
    </div>
  )
}
