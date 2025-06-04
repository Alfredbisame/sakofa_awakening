import { createContext, useContext, useEffect, useState } from 'react';

type AuthContextType = {
  user: string | null; 
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial auth check
    setTimeout(() => {
      // Simulate checking for saved user in localStorage
      const savedUser = localStorage.getItem('mockUser');
      setUser(savedUser);
      setLoading(false);
    }, 1000);
  }, []);

  const signUp = async (email: string, password: string) => {
    // Simulate API call
    console.log('Signing up:', email);
    localStorage.setItem('mockUser', email);
    setUser(email);
  };

  const signIn = async (email: string, password: string) => {
    // Simulate login process
    console.log('Signing in:', email);
    localStorage.setItem('mockUser', email);
    setUser(email);
  };

  const signOut = async () => {
    // Simulate logout
    console.log('Signing out');
    localStorage.removeItem('mockUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};



// import { createContext, useContext, useEffect, useState } from 'react';
// import { createClient, User } from '@supabase/supabase-js';

// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
// );

// type AuthContextType = {
//   user: User | null;
//   signUp: (email: string, password: string) => Promise<void>;
//   signIn: (email: string, password: string) => Promise<void>;
//   signOut: () => Promise<void>;
//   loading: boolean;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check active sessions and sets the user
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setUser(session?.user ?? null);
//       setLoading(false);
//     });
    
//     // Listen for changes on auth state
//     const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user ?? null);
//       setLoading(false);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   const signUp = async (email: string, password: string) => {
//     const { error } = await supabase.auth.signUp({
//       email,
//       password,
//     });
//     if (error) throw error;
//   };

//   const signIn = async (email: string, password: string) => {
//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });
//     if (error) throw error;
//   };

//   const signOut = async () => {
//     const { error } = await supabase.auth.signOut();
//     if (error) throw error;
//   };

//   return (
//     <AuthContext.Provider value={{ user, signUp, signIn, signOut, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };