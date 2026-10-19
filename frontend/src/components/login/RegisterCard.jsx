import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import GoogleIcon from "./GoogleIcon";
import { supabase } from "../../lib/supabase";
import { getAuthErrorMessage } from "../../lib/authErrors";

// Same visual language as LoginCard.jsx (same wrapper, corner rule, input
// styling) — kept in sync by hand rather than shared, so editing one never
// risks silently changing the other's design.
const inputWrapClasses =
  "flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-[oklch(0.13_0.012_45_/_0.6)] px-4 py-3.5 transition-colors duration-200 focus-within:border-accentBright focus-within:shadow-[0_0_0_3px_oklch(0.68_0.19_40_/_0.18)]";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export default function RegisterCard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);

  const busy = submitting || googleLoading;

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password || !confirmPassword) {
      setErrorMsg("Fill in every field.");
      return;
    }
    if (!EMAIL_RE.test(trimmedEmail)) {
      setErrorMsg("Enter a valid email address.");
      return;
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      setErrorMsg(`Password must be at least ${MIN_PASSWORD_LENGTH} characters.`);
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg("Passwords don't match.");
      return;
    }

    setSubmitting(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: trimmedEmail,
        password,
      });
      if (error) {
        setErrorMsg(getAuthErrorMessage(error));
        return;
      }
      // Supabase avoids leaking which emails are already registered: a
      // sign-up for an existing *confirmed* user comes back with no error
      // but an empty identities array instead of a fresh one.
      if (data.user && data.user.identities && data.user.identities.length === 0) {
        setErrorMsg("An account with this email already exists. Try signing in instead.");
        return;
      }
      if (data.session) {
        // Email confirmation is off in the Supabase project — user is signed in already.
        navigate("/app/overview", { replace: true });
        return;
      }
      setCheckEmail(true);
    } catch (err) {
      setErrorMsg(getAuthErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  }

  async function handleGoogleSignIn() {
    setErrorMsg("");
    setGoogleLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: `${window.location.origin}/app/overview` },
      });
      if (error) {
        setErrorMsg(getAuthErrorMessage(error));
        setGoogleLoading(false);
      }
    } catch (err) {
      setErrorMsg(getAuthErrorMessage(err));
      setGoogleLoading(false);
    }
  }

  return (
    <div className="relative z-10 flex items-center justify-center px-6 py-12 split:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 0.8, 0.24, 1] }}
        className="relative w-full max-w-[520px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[oklch(0.16_0.014_45_/_0.75)] px-10 py-11 backdrop-blur-xl shadow-[0_30px_60px_-20px_oklch(0_0_0_/_0.6),0_0_40px_-12px_oklch(0.68_0.19_40_/_0.35)]"
      >
        <div className="absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-accentBright/70 to-transparent" />

        {checkEmail ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full border border-success/60 flex items-center justify-center mx-auto mb-5 text-success">
              <CheckCircle2 size={28} strokeWidth={1.7} />
            </div>
            <h2 className="font-display font-bold text-[26px] tracking-tight mb-2.5">
              Check Your Email
            </h2>
            <p className="text-[14.5px] text-muted mb-8">
              We sent a confirmation link to <span className="text-accentBright">{email.trim()}</span>.
              Click it, then sign in below.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center gap-2.5 bg-gradient-to-br from-accent to-accentBright px-6 py-3.5 rounded-xl font-mono font-semibold text-[13.5px] tracking-[1.5px] uppercase text-[oklch(0.1_0.012_45)]"
            >
              Back to Sign In
            </Link>
          </div>
        ) : (
          <>
            <h2 className="font-display font-bold text-[30px] tracking-tight text-center mb-2.5">
              Create Account
            </h2>
            <p className="text-center text-[14.5px] text-muted mb-8">
              Sign up to start using <span className="text-accentBright">ZSAD Inspector</span>
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <label className="block font-mono text-[11px] tracking-[2.5px] text-mutedDark uppercase mb-2.5">
                Email Address
              </label>
              <div className={`${inputWrapClasses} mb-[22px]`}>
                <Mail size={18} strokeWidth={1.7} className="text-mutedDark shrink-0" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={busy}
                  className="flex-1 bg-transparent border-none outline-none text-text text-[14.5px] font-body placeholder:text-mutedDark disabled:opacity-60"
                />
              </div>

              <label className="block font-mono text-[11px] tracking-[2.5px] text-mutedDark uppercase mb-2.5">
                Password
              </label>
              <div className={`${inputWrapClasses} mb-[22px]`}>
                <Lock size={18} strokeWidth={1.7} className="text-mutedDark shrink-0" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={busy}
                  className="flex-1 bg-transparent border-none outline-none text-text text-[14.5px] font-body placeholder:text-mutedDark disabled:opacity-60"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  disabled={busy}
                  aria-label="Toggle password visibility"
                  className="p-0.5 text-mutedDark hover:text-muted transition-colors disabled:opacity-60"
                >
                  {showPassword ? <EyeOff size={18} strokeWidth={1.7} /> : <Eye size={18} strokeWidth={1.7} />}
                </button>
              </div>

              <label className="block font-mono text-[11px] tracking-[2.5px] text-mutedDark uppercase mb-2.5">
                Confirm Password
              </label>
              <div className={`${inputWrapClasses} mb-3`}>
                <Lock size={18} strokeWidth={1.7} className="text-mutedDark shrink-0" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={busy}
                  className="flex-1 bg-transparent border-none outline-none text-text text-[14.5px] font-body placeholder:text-mutedDark disabled:opacity-60"
                />
              </div>

              {errorMsg && (
                <p className="mt-3 mb-1 text-[13px] text-[oklch(0.72_0.19_25)] text-center">{errorMsg}</p>
              )}

              <motion.button
                type="submit"
                disabled={busy}
                whileHover={busy ? undefined : { y: -1, scale: 1.02 }}
                whileTap={busy ? undefined : { scale: 0.99 }}
                transition={{ duration: 0.2 }}
                className="w-full mt-[22px] flex items-center justify-center gap-2.5 rounded-xl border-none bg-gradient-to-br from-accent to-accentBright px-4 py-4 font-mono font-semibold text-[13.5px] tracking-[1.5px] uppercase text-[oklch(0.1_0.012_45)] transition-shadow hover:shadow-[0_12px_28px_-8px_oklch(0.68_0.19_40_/_0.6)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    Creating Account
                    <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight size={16} />
                  </>
                )}
              </motion.button>
            </form>

            <div className="flex items-center gap-3.5 my-[26px]">
              <div className="flex-1 h-px bg-white/10" />
              <span className="font-mono text-[11px] tracking-[1.5px] text-mutedDark">OR</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={busy}
              className="w-full flex items-center justify-center gap-2.5 rounded-xl border border-white/[0.12] bg-transparent px-4 py-[15px] text-[14px] font-medium text-text transition-colors hover:border-accent/70 hover:bg-accent/[0.06] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {googleLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Redirecting…
                </>
              ) : (
                <>
                  <GoogleIcon />
                  Sign up with Google
                </>
              )}
            </button>

            <p className="text-center text-[13.5px] text-muted mt-[26px]">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-accentBright hover:underline">
                Sign In
              </Link>
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
}
