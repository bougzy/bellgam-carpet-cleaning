/**
 * Simple authentication with hardcoded credentials
 * No NextAuth needed - just session storage
 */

// Hardcoded admin credentials
const ADMIN_CREDENTIALS = {
  email: 'admin@bellgam.com',
  password: 'admin123',
};

export interface AdminSession {
  email: string;
  isAuthenticated: boolean;
  loginTime: number;
}

/**
 * Verify admin credentials
 */
export function verifyCredentials(email: string, password: string): boolean {
  return (
    email === ADMIN_CREDENTIALS.email &&
    password === ADMIN_CREDENTIALS.password
  );
}

/**
 * Create session token (simple base64 encoding)
 */
export function createSessionToken(email: string): string {
  const session: AdminSession = {
    email,
    isAuthenticated: true,
    loginTime: Date.now(),
  };
  return Buffer.from(JSON.stringify(session)).toString('base64');
}

/**
 * Verify session token
 */
export function verifySessionToken(token: string): AdminSession | null {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const session: AdminSession = JSON.parse(decoded);

    // Check if session is valid (24 hour expiry)
    const expiryTime = 24 * 60 * 60 * 1000; // 24 hours
    const isExpired = Date.now() - session.loginTime > expiryTime;

    if (isExpired || !session.isAuthenticated) {
      return null;
    }

    return session;
  } catch (error) {
    return null;
  }
}

/**
 * Get session from cookies (for server-side)
 */
export function getSessionFromCookies(cookieHeader: string | null): AdminSession | null {
  if (!cookieHeader) return null;

  const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  const token = cookies['admin-session'];
  if (!token) return null;

  return verifySessionToken(token);
}

/**
 * Check if user is authenticated (client-side)
 */
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;

  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('admin-session='))
    ?.split('=')[1];

  if (!token) return false;

  const session = verifySessionToken(token);
  return session !== null && session.isAuthenticated;
}

/**
 * Set session cookie (client-side)
 */
export function setSessionCookie(token: string) {
  const maxAge = 24 * 60 * 60; // 24 hours
  document.cookie = `admin-session=${token}; path=/; max-age=${maxAge}; samesite=strict`;
}

/**
 * Clear session cookie (logout)
 */
export function clearSessionCookie() {
  document.cookie = 'admin-session=; path=/; max-age=0';
}
