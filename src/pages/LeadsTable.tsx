import React from 'react';
import { ListChecks } from 'lucide-react';
import LeadsDataTable from '../components/LeadsDataTable';
import { GoogleSheetsEmbed } from '../components/GoogleSheetsEmbed';

export default function LeadsTablePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-2 bg-purple-500/10 rounded-xl mb-4">
          <ListChecks className="h-6 w-6 text-purple-400" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Generated Leads
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Review and manage your AI-generated leads. Each lead is carefully selected
          based on your product specifications and target market.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-purple-900/30">
        <LeadsDataTable />
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Google Sheets View</h2>
        <GoogleSheetsEmbed 
          spreadsheetId="1vQyt40Ap6L-h1qdZHlI6ENU4JB94KFnsH97GAQHm5rfstsJo9oo8OBCXGpdf-4OKT1gvA"
        />
      </div>
    </div>
  );
}