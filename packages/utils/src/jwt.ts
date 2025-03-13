/**
 * Extracts the user ID from a JWT token
 * @param token JWT token string (with or without Bearer prefix)
 * @returns The extracted user ID or null if invalid/not found
 */
export const extractUserIdFromToken = (
  token: string | null | undefined
): number | null => {
  if (!token) return null;

  try {
    // Remove Bearer prefix if present
    const cleanToken = token.startsWith('Bearer ') ? token.substring(7) : token;

    // JWT structure: header.payload.signature
    // Split the token and get the payload (second part)
    const parts = cleanToken.split('.');
    if (parts.length !== 3) return null;

    // Base64 decode the payload
    const payload = parts[1];
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );

    // Parse the payload
    const parsedPayload = JSON.parse(jsonPayload);

    // Look for common user ID fields
    const userId =
      parsedPayload.userId ||
      parsedPayload.user_id ||
      parsedPayload.sub ||
      parsedPayload.id;

    // Convert to number if it's a string but contains only digits
    if (typeof userId === 'string' && /^\d+$/.test(userId)) {
      return parseInt(userId, 10);
    }

    return typeof userId === 'number' ? userId : null;
  } catch (error) {
    console.error('Error extracting user ID from token:', error);
    return null;
  }
};

/**
 * Simple function to decode a JWT token and return the full payload
 * @param token JWT token string (with or without Bearer prefix)
 * @returns The decoded payload object or null if invalid
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const decodeJwtToken = <T = any>(
  token: string | null | undefined
): T | null => {
  if (!token) return null;

  try {
    // Remove Bearer prefix if present
    const cleanToken = token.startsWith('JWT ') ? token.substring(7) : token;

    // JWT structure: header.payload.signature
    const parts = cleanToken.split('.');
    if (parts.length !== 3) return null;

    // Base64 decode the payload
    const payload = parts[1];
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );

    // Parse and return the payload
    return JSON.parse(jsonPayload) as T;
  } catch (error) {
    console.error('Error decoding JWT token:', error);
    return null;
  }
};
