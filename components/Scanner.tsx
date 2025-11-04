import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Html5Qrcode, Html5QrcodeError, Html5QrcodeResult } from 'html5-qrcode';
import { Camera, Copy, Download, Zap, XCircle, CheckCircle } from './icons';

const readerId = 'qr-code-reader';

const Scanner: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const html5QrCodeRef = useRef<Html5Qrcode | null>(null);

  const startScanner = useCallback(async () => {
    setError(null);
    setScanResult(null);
    
    if (!html5QrCodeRef.current) {
      html5QrCodeRef.current = new Html5Qrcode(readerId, {
        verbose: false,
      });
    }

    try {
      await html5QrCodeRef.current.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText: string, result: Html5QrcodeResult) => {
          setScanResult(decodedText);
          stopScanner(); // Stop scanner on success
        },
        (errorMessage: string, error: Html5QrcodeError) => {
          // Ignore 'QR code not found' errors, they are expected.
        }
      );
      setIsScanning(true);
    } catch (err: any) {
      console.error('Unable to start scanning.', err);
      setError('Could not start camera. Please grant camera permission and refresh.');
      setIsScanning(false);
    }
  }, []);

  const stopScanner = useCallback(async () => {
    try {
      if (html5QrCodeRef.current && html5QrCodeRef.current.isScanning) {
        await html5QrCodeRef.current.stop();
      }
    } catch (err) {
      console.error('Failed to stop the scanner.', err);
    } finally {
        setIsScanning(false);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (html5QrCodeRef.current?.isScanning) {
        stopScanner();
      }
    };
  }, [stopScanner]);

  const handleCopy = () => {
    if (scanResult) {
      navigator.clipboard.writeText(scanResult);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (scanResult) {
      const blob = new Blob([scanResult], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'scanned-content.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };
  
  const handleScanAgain = () => {
    setScanResult(null);
    // Let's give a moment for the state to clear before starting again
    setTimeout(() => startScanner(), 100);
  }

  const ReaderPlaceholder = () => (
    <div className="w-full max-w-sm aspect-square rounded-lg bg-background/50 flex items-center justify-center">
      <div className="w-2/3 h-2/3 border-4 border-dashed border-on-surface/20 rounded-xl flex items-center justify-center">
        <Camera className="w-16 h-16 text-on-surface/20" />
      </div>
    </div>
  );

  return (
    <div className="bg-surface rounded-lg shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300 min-h-[450px] justify-center">
      {!isScanning && !scanResult && (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-on-surface">Scan a Code</h2>
          <p className="text-on-surface-secondary mb-6 max-w-sm">
            Click the button to activate your camera and scan a QR code or barcode.
          </p>
          <div id={readerId} className="w-full max-w-sm"><ReaderPlaceholder /></div>
          {error && <p className="text-red-400 my-4">{error}</p>}
          <button
            onClick={startScanner}
            className="mt-6 bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 flex items-center gap-2"
          >
            <Camera className="w-5 h-5" />
            Activate Camera to Scan
          </button>
        </>
      )}

      {isScanning && (
        <>
            <h2 className="text-2xl font-semibold mb-4 text-on-surface">Scanning...</h2>
            <p className="text-on-surface-secondary mb-6">Point your camera at a QR or Barcode.</p>
            <div id={readerId} className="w-full max-w-sm aspect-square rounded-lg overflow-hidden relative bg-black">
                <div className="absolute inset-0 z-10">
                    <div className="absolute top-2 left-2 w-10 h-10 border-t-4 border-l-4 border-secondary rounded-tl-lg"></div>
                    <div className="absolute top-2 right-2 w-10 h-10 border-t-4 border-r-4 border-secondary rounded-tr-lg"></div>
                    <div className="absolute bottom-2 left-2 w-10 h-10 border-b-4 border-l-4 border-secondary rounded-bl-lg"></div>
                    <div className="absolute bottom-2 right-2 w-10 h-10 border-b-4 border-r-4 border-secondary rounded-br-lg"></div>
                    <div className="absolute left-1 right-1 h-1 bg-secondary/80 rounded-full shadow-[0_0_15px_2px_rgba(16,185,129,0.7)] animate-scan"></div>
                </div>
            </div>
            <button
                onClick={stopScanner}
                className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 flex items-center gap-2"
            >
                <XCircle className="w-5 h-5" />
                Stop Scanning
            </button>
        </>
      )}
      
      {scanResult && (
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-4 text-secondary flex items-center justify-center gap-2"><CheckCircle /> Scan Successful</h2>
          <div className="bg-background/50 rounded-lg p-4 mb-6 text-left max-w-full">
            <p className="text-on-surface-secondary text-sm mb-1">Scanned Content:</p>
            <p className="text-on-surface break-words font-mono text-lg max-h-32 overflow-y-auto p-2 bg-black/20 rounded">{scanResult}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={handleCopy}
              className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors w-full sm:w-auto"
            >
              {isCopied ? <><CheckCircle className="w-5 h-5 text-green-400" /> Copied!</> : <><Copy className="w-5 h-5" /> Copy Text</>}
            </button>
            <button
              onClick={handleDownload}
              className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors w-full sm:w-auto"
            >
              <Download className="w-5 h-5" /> Download .txt
            </button>
          </div>
           <button
            onClick={handleScanAgain}
            className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 flex items-center gap-2"
          >
            <Zap className="w-5 h-5" />
            Scan Another Code
          </button>
        </div>
      )}
    </div>
  );
};

export default Scanner;