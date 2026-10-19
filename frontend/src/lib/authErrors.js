// Maps raw Supabase auth errors to short, user-facing copy. Falls back to the
// original message for cases we haven't seen so nothing is silently swallowed.
export function getAuthErrorMessage(error) {
  if (!error) return "";
  const msg = (error.message || "").toLowerCase();

  if (msg.includes("invalid login credentials")) {
    return "Incorrect email or password.";
  }
  if (msg.includes("email not confirmed")) {
    return "Please confirm your email address before signing in.";
  }
  if (msg.includes("user already registered") || msg.includes("already registered")) {
    return "An account with this email already exists.";
  }
  if (msg.includes("password should be at least")) {
    return error.message;
  }
  if (msg.includes("failed to fetch") || error.name === "TypeError") {
    return "Network error — check your connection and try again.";
  }
  return error.message || "Something went wrong. Please try again.";
}
