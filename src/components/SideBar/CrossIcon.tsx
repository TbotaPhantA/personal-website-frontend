import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export function CrossIcon() {
  return (
    <div>
      <FontAwesomeIcon icon={faTimes} size="3x" color="#DE004E" />
    </div>
  )
}
