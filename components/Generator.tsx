import React, { useState, useRef, useCallback } from 'react';
import { CodeType } from '../types';
import { QRCodeCanvas } from 'qrcode.react';
import Barcode from 'react-barcode';
import { Download, Type } from './icons';

const Generator: React.FC = () => {
  const [text, setText] = useState<string>('https://gemini.google.com');
  const [codeType, setCodeType] = useState<CodeType>(CodeType.QR);
  const codeRef = useRef<HTMLDivElement>(null);

  const handleDownload = useCallback(() => {
    const canvas = codeRef.current?.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = url;
      a.download = `${codeType}-code.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }, [codeType]);

  const CodeTypeButton = ({ type, label }: { type: CodeType; label: string; }) => (
    <button
      onClick={() => setCodeType(type)}
      className={`relative z-10 flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
        codeType === type ? 'text-secondary' : 'text-on-surface-secondary hover:text-on-surface'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-surface rounded-lg shadow-xl p-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4 text-on-surface">Generate a Code</h2>
      <p className="text-on-surface-secondary mb-6 text-center">
        Enter your content and choose a format to instantly create a new code.
      </p>

      <div className="w-full mb-6">
        <label htmlFor="content-input" className="block text-sm font-medium text-on-surface-secondary mb-2">
          Your Content (URL, text, etc.)
        </label>
        <textarea
          id="content-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter content here..."
          rows={3}
          className="w-full p-3 bg-background/50 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
          aria-label="Content to encode"
        />
      </div>

      <div className="w-full mb-8 bg-background/50 rounded-lg flex justify-around p-1 relative">
        <span
          className="absolute top-1 bottom-1 bg-surface rounded-md shadow-inner transition-transform duration-300 ease-in-out"
          style={{
            width: 'calc(50% - 4px)',
            transform: codeType === CodeType.QR ? 'translateX(4px)' : 'translateX(calc(100% + 4px))',
          }}
        />
        <CodeTypeButton type={CodeType.QR} label="QR Code" />
        <CodeTypeButton type={CodeType.BARCODE} label="Barcode" />
      </div>

      {text && (
        <div className="flex flex-col items-center w-full">
           <h3 className="text-lg font-medium mb-2 text-on-surface-secondary">Live Preview</h3>
          <div
            ref={codeRef}
            className="bg-white p-4 rounded-lg shadow-md mb-6 inline-block"
            aria-live="polite"
          >
            {codeType === CodeType.QR ? (
              <QRCodeCanvas
                value={text}
                size={220}
                level="H"
                bgColor="#ffffff"
                fgColor="#000000"
              />
            ) : (
              <Barcode
                value={text}
                width={2}
                height={80}
                renderer="canvas"
                background="#ffffff"
                lineColor="#000000"
              />
            )}
          </div>

          <button
            onClick={handleDownload}
            disabled={!text}
            className="bg-secondary hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 flex items-center gap-2 disabled:bg-slate-600 disabled:cursor-not-allowed"
          >
            <Download className="w-5 h-5" />
            Download PNG
          </button>
        </div>
      )}
       {!text && (
        <div className="text-center text-on-surface-secondary p-8 border-2 border-dashed border-slate-700 rounded-lg w-full">
          <Type className="w-10 h-10 mx-auto mb-2 text-slate-600"/>
          Enter some content to generate a code.
        </div>
      )}
    </div>
  );
};

export default Generator;