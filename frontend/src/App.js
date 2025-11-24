import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Key, Lock, Mail, User, Copy, LogOut, Zap, ShieldCheck, ChevronRight, ArrowLeft } from 'lucide-react';

// --- 1. KOMPONEN BACKGROUND ---
const Background = ({ children }) => (
  <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden flex flex-col items-center justify-center p-4">
    <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
    <div className="absolute top-[20%] right-[20%] w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
    <div className="relative z-10 w-full max-w-6xl flex justify-center">{children}</div>
  </div>
);

// --- 2. HALAMAN: PUBLIC KEY GENERATOR (Sesuai Screenshot 1) ---
const KeyGeneratorPage = ({ onNavigateToAdmin }) => {
  const [generatedKey, setGeneratedKey] = useState(null);

  const handleGenerate = (e) => {
    e.preventDefault();
    // Simulasi generate key
    setGeneratedKey("sk_live_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -50 }}
      className="w-full max-w-lg"
    >
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            API Key Generator v2.0
          </h1>
          <p className="text-gray-400 text-xs mt-2 tracking-widest uppercase">Secure Access Protocol Initiator</p>
        </div>

        <form onSubmit={handleGenerate} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">First Name</label>
              <input type="text" placeholder="John" className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Last Name</label>
              <input type="text" placeholder="Doe" className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-gray-500" size={18} />
              <input type="email" placeholder="user@domain.local" className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all" />
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/20 mt-2"
          >
            [ EXECUTE & GENERATE KEY ]
          </motion.button>
        </form>

        {/* Output Area */}
        <div className="mt-8 space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase">Output Key</label>
          <div className={`p-4 rounded-xl border border-white/10 flex items-center justify-between transition-all ${generatedKey ? 'bg-green-500/10 border-green-500/30' : 'bg-black/40'}`}>
            <code className={`font-mono text-sm ${generatedKey ? 'text-green-400' : 'text-gray-500 animate-pulse'}`}>
              {generatedKey || "> WAITING FOR INPUT..."}
            </code>
            {generatedKey && <Copy size={16} className="text-green-400 cursor-pointer hover:text-white" />}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 pt-6 border-t border-white/5 flex justify-center">
            <button onClick={onNavigateToAdmin} className="text-xs text-gray-500 hover:text-white flex items-center gap-2 transition-colors">
                ADMIN LOGIN <ChevronRight size={14} />
            </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- 3. HALAMAN: ADMIN LOGIN (Sesuai Screenshot 2) ---
const LoginPage = ({ onLogin, onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="w-full max-w-md"
    >
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
        <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 mb-4">
                <ShieldCheck size={24} />
            </div>
          <h1 className="text-2xl font-bold text-white">Access Portal</h1>
          <p className="text-gray-400 text-sm mt-1">Please authenticate admin identity</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Admin Email</label>
            <div className="relative">
              <User className="absolute left-4 top-3.5 text-gray-500" size={18} />
              <input type="email" placeholder="admin@system.local" className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Secret Key (Password)</label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 text-gray-500" size={18} />
              <input type="password" placeholder="••••••••" className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all" />
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-500/25 mt-2"
          >
            [ ENTER SYSTEM ]
          </motion.button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-white/5 flex justify-center">
            <button onClick={onBack} className="text-xs text-gray-500 hover:text-white flex items-center gap-2 transition-colors">
                <ArrowLeft size={14} /> BACK TO GENERATOR
            </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- 4. HALAMAN: DASHBOARD (Setelah Login) ---
const DashboardPage = ({ onLogout }) => {
  const users = [
    { id: 1, name: "Gyan Hendriansyah", email: "hendriansyahgyan@gmail.com", key: "APIKEY_S3CR3T_7b64...624d", status: "ONLINE", valid: "25 DES 2025" },
    { id: 2, name: "John Doe", email: "john@domain.local", key: "APIKEY_TEST_88a2...x99", status: "OFFLINE", valid: "10 JAN 2024" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-5xl"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">ADMIN_PANEL V2.0</h1>
          <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
            <Zap size={14} className="text-yellow-400" /> SYSTEM: User & API Key Management Module
          </p>
        </div>
        <button onClick={onLogout} className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all">
          <LogOut size={16} /> [X] LOGOUT
        </button>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-black/20 text-gray-400 text-xs uppercase font-bold tracking-wider">
            <tr>
              <th className="px-6 py-4">#ID</th>
              <th className="px-6 py-4">USER_NAME</th>
              <th className="px-6 py-4">EMAIL_ADDRESS</th>
              <th className="px-6 py-4">API_ACCESS_KEY</th>
              <th className="px-6 py-4">STATUS</th>
              <th className="px-6 py-4 text-right">VALID_UNTIL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                <td className="px-6 py-4 font-mono text-gray-500">{user.id}</td>
                <td className="px-6 py-4 font-bold text-white">{user.name}</td>
                <td className="px-6 py-4 text-gray-400">{user.email}</td>
                <td className="px-6 py-4">
                    <span className="bg-black/40 border border-white/10 px-2 py-1 rounded text-xs font-mono text-green-400">{user.key}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${user.status === 'ONLINE' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right font-mono text-gray-400">{user.valid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

// --- 5. LOGIKA UTAMA (NAVIGASI) ---
function App() {
  const [view, setView] = useState('generator'); // 'generator', 'login', 'dashboard'

  return (
    <Background>
      <AnimatePresence mode="wait">
        {view === 'generator' && (
          <KeyGeneratorPage key="gen" onNavigateToAdmin={() => setView('login')} />
        )}
        {view === 'login' && (
          <LoginPage key="login" onLogin={() => setView('dashboard')} onBack={() => setView('generator')} />
        )}
        {view === 'dashboard' && (
          <DashboardPage key="dash" onLogout={() => setView('login')} />
        )}
      </AnimatePresence>
    </Background>
  );
}

export default App;