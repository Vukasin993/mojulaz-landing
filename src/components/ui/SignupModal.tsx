import { REGISTER_URL } from '../../constants/marketing'

/** Navigate to the live registration page. */
export function openSignup() {
  window.location.href = REGISTER_URL
}

/**
 * Legacy component kept so existing imports don't break.
 * The modal is no longer needed — all CTAs now go directly to the app.
 */
export default function SignupModal() {
  return null
}
