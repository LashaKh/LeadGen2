import React, { useState } from 'react';

interface GoogleSheetsEmbedProps {
  spreadsheetId: string;
  sheetId?: string;
}

export function GoogleSheetsEmbed({ spreadsheetId, sheetId }: GoogleSheetsEmbedProps) {
  const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/pubhtml?widget=true&headers=false&chrome=false${sheetId ? `&gid=${sheetId}` : ''}`;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="w-full h-[600px] bg-white/5 rounded-lg overflow-hidden border border-purple-900/30 relative" style={{ isolation: 'isolate' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/5">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-400 border-r-transparent"></div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/5">
          <div className="text-red-500 text-center p-4">
            <p className="font-medium mb-2">Failed to load spreadsheet</p>
            <p className="text-sm">Please verify:</p>
            <ul className="text-sm list-disc list-inside mt-2">
              <li>The spreadsheet is published to the web</li>
              <li>The sharing settings allow anyone with the link to view</li>
              <li>You're using the correct spreadsheet ID</li>
            </ul>
          </div>
        </div>
      )}
      <iframe
        src={url}
        className="w-full h-full"
        style={{ border: 0, backgroundColor: 'transparent' }}
        frameBorder="0"
        sandbox="allow-scripts allow-same-origin allow-popups"
        title="Google Sheets"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError('Failed to load spreadsheet');
        }}
      />
    </div>
  );
}