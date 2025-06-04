import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'signin' | 'signup';
};

const AuthModal = ({ isOpen, onClose, defaultMode = 'signin' }: AuthModalProps) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(defaultMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, signUp } = useAuth();
  const { t } = useTranslation();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (mode === 'signin') {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-stone-800 rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brown-600 dark:text-amber-300 hover:text-brown-800 dark:hover:text-amber-100"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-brown-900 dark:text-amber-50 mb-6">
          {mode === 'signin' ? t('auth.signIn') : t('auth.signUp')}
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-200 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-brown-700 dark:text-amber-200 mb-1">
              {t('auth.email')}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-amber-200 dark:border-stone-600 rounded-md bg-white dark:bg-stone-900 text-brown-900 dark:text-amber-50"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-brown-700 dark:text-amber-200 mb-1">
              {t('auth.password')}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-amber-200 dark:border-stone-600 rounded-md bg-white dark:bg-stone-900 text-brown-900 dark:text-amber-50"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full transition-colors duration-300"
          >
            {mode === 'signin' ? t('auth.signIn') : t('auth.signUp')}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
            className="text-yellow-600 dark:text-yellow-500 hover:underline"
          >
            {mode === 'signin' ? t('auth.dontHaveAccount') : t('auth.alreadyHaveAccount')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;