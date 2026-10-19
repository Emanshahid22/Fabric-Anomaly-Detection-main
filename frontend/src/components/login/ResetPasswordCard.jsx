import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff, ArrowRight, Loader2, CheckCircle2, KeyRound } from "lucide-react";
import { supabase } from "../../lib/supabase";
import { getAuthErrorMessage } from "../../lib/authErrors";
import { useAuth } from "../../context/AuthContext";

// Same visual language as LoginCard.jsx (see the note there).
const inputWrapClasses =
  "flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-[oklch(0.13_0.012_45_/_0.6)] px-4 py-3.5 transition-colors duration-200 focus-within:border-accentBright focus-within:shadow-[0_0_0_3px_oklch(0.68_0.19_40_/_0.18)]";

const MIN_PASSWORD_LENGTH = 8;

export default function ResetPasswordCard() {
  const navigate = useNavigate();
  const { session, loading } = useAuth();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [done, setDone] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    if (!password || !confirmPassword) {
      setErrorMsg("Fill in both fields.");
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
      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        setErrorMsg(getAuthErrorMessage(error));
        return;
      }
      setDone(true);
    } catch (err) {
      setErrorMsg(getAuthErrorMessage(err));
    } finally {
      setSubmitting(false);
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

        {loading ? (
          <p className="text-center text-[14.5px] text-muted py-10">Verifying reset link…</p>
        ) : done ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full border border-success/60 flex items-center justify-center mx-auto mb-5 text-success">
              <CheckCircle2 size={28} strokeWidth={1.7} />
            </div>
            <h2 className="font-display font-bold text-[26px] tracking-tight mb-2.5">
              Password Updated
            </h2>
            <p className="text-[14.5px] text-muted mb-8">
              Your password has been changed successfully.
            </p>
            <button
              type="button"
              onClick={() => navigate("/app/overview", { replace: true })}
              className="inline-flex items-center gap-2.5 bg-gradient-to-br from-accent to-accentBright px-6 py-3.5 rounded-xl font-mono font-semibold text-[13.5px] tracking-[1.5px] uppercase text-[oklch(0.1_0.012_45)]"
            >
              Continue to Dashboard
            </button>
          </div>
        ) : !session ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full border border-accent/50 flex items-center justify-center mx-auto mb-5 text-accentBright">
              <KeyRound size={26} strokeWidth={1.7} />
            </div>
            <h2 className="font-display font-bold text-[26px] tracking-tight mb-2.5">
              Link Invalid or Expired
            </h2>
            <p className="text-[14.5px] text-muted mb-8">
              This password reset link no longer works. Request a new one.
            </p>
            <Link
              to="/forgot-password"
              className="inline-flex items-center gap-2.5 bg-gradient-to-br from-accent to-accentBright px-6 py-3.5 rounded-xl font-mono font-semibold text-[13.5px] tracking-[1.5px] uppercase text-[oklch(0.1_0.012_45)]"
            >
              Request New Link
            </Link>
          </div>
        ) : (
          <>
            <h2 className="font-display font-bold text-[30px] tracking-tight text-center mb-2.5">
              Set New Password
            </h2>
            <p className="text-center text-[14.5px] text-muted mb-8">
              Choose a new password for your{" "}
              <span className="text-accentBright">ZSAD Inspector</span> account.
            </p>

            <form onSubmit={handleSubmit}>
              <label className="block font-mono text-[11px] tracking-[2.5px] text-mutedDark uppercase mb-2.5">
                New Password
              </label>
              <div className={`${inputWrapClasses} mb-[22px]`}>
                <Lock size={18} strokeWidth={1.7} className="text-mutedDark shrink-0" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={submitting}
                  className="flex-1 bg-transparent border-none outline-none text-text text-[14.5px] font-body placeholder:text-mutedDark disabled:opacity-60"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  disabled={submitting}
                  aria-label="Toggle password visibility"
                  className="p-0.5 text-mutedDark hover:text-muted transition-colors disabled:opacity-60"
                >
                  {showPassword ? <EyeOff size={18} strokeWidth={1.7} /> : <Eye size={18} strokeWidth={1.7} />}
                </button>
              </div>

              <label className="block font-mono text-[11px] tracking-[2.5px] text-mutedDark uppercase mb-2.5">
                Confirm New Password
              </label>
              <div className={`${inputWrapClasses} mb-3`}>
                <Lock size={18} strokeWidth={1.7} className="text-mutedDark shrink-0" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Re-enter your new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={submitting}
                  className="flex-1 bg-transparent border-none outline-none text-text text-[14.5px] font-body placeholder:text-mutedDark disabled:opacity-60"
                />
              </div>

              {errorMsg && (
                <p className="mt-3 mb-1 text-[13px] text-[oklch(0.72_0.19_25)] text-center">{errorMsg}</p>
              )}

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={submitting ? undefined : { y: -1, scale: 1.02 }}
                whileTap={submitting ? undefined : { scale: 0.99 }}
                transition={{ duration: 0.2 }}
                className="w-full mt-[22px] flex items-center justify-center gap-2.5 rounded-xl border-none bg-gradient-to-br from-accent to-accentBright px-4 py-4 font-mono font-semibold text-[13.5px] tracking-[1.5px] uppercase text-[oklch(0.1_0.012_45)] transition-shadow hover:shadow-[0_12px_28px_-8px_oklch(0.68_0.19_40_/_0.6)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    Updating
                    <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Update Password
                    <ArrowRight size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}
