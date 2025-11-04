import React, { useState } from 'react';
import Scanner from './components/Scanner';
import Generator from './components/Generator';
import { ScanLine, QrCodeGenerate, AppIcon } from './components/icons';

type Mode = 'scan' | 'generate';

const App: React.FC = () => {
  const [mode, setMode] = useState<Mode>('scan');

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col items-center p-4">
      <header className="w-full max-w-2xl mx-auto text-center my-8 flex flex-col items-center gap-4">
        <AppIcon className="w-16 h-16 text-primary" />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light via-secondary to-primary-light bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
          QR & Barcode Suite
        </h1>
        <p className="text-on-surface-secondary mt-2">
          Your one-stop solution for scanning and creating codes.
        </p>
      </header>

      <main className="w-full max-w-2xl mx-auto flex-grow flex flex-col">
        <div className="relative bg-surface/50 rounded-lg p-1 flex w-full max-w-xs mx-auto mb-8 shadow-md">
          <span
            className="absolute top-1 bottom-1 bg-primary rounded-md shadow-lg transition-transform duration-300 ease-in-out"
            style={{
              width: 'calc(50% - 4px)',
              transform: mode === 'scan' ? 'translateX(4px)' : 'translateX(calc(100% + 4px))',
            }}
          />
          <button
            onClick={() => setMode('scan')}
            className={`relative z-10 flex-1 px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2 rounded-md ${mode === 'scan' ? 'text-white' : 'text-on-surface-secondary hover:text-on-surface'}`}
          >
            <ScanLine className="w-5 h-5" />
            Scan Code
          </button>
          <button
            onClick={() => setMode('generate')}
            className={`relative z-10 flex-1 px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2 rounded-md ${mode === 'generate' ? 'text-white' : 'text-on-surface-secondary hover:text-on-surface'}`}
          >
            <QrCodeGenerate className="w-5 h-5" />
            Generate Code
          </button>
        </div>

        <div className="flex-grow animate-fade-in" key={mode}>
          {mode === 'scan' && <Scanner />}
          {mode === 'generate' && <Generator />}
        </div>
      </main>
    </div>
  );
};

export default App;
