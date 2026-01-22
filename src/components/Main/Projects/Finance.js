import React from 'react';
import CardHeader from '../Cards/CardHeader';
import CardImgGrid from '../Cards/CardImgGrid';
import CardText from '../Cards/CardText';
import icon from '/public/images/finance/icon.jpg';
import screenshot1 from '/public/images/finance/Screenshot 2026-01-21 191424.jpg';
import screenshot2 from '/public/images/finance/Screenshot 2026-01-21 191448.jpg';

const Finance = () => {
  return (
    <div id="projects-finance" className="card">
      <CardHeader
        data={{
          icon: icon,
          title: 'Personal Finance - 2026',
          deploy: 'https://finance.danielforkner.com',
        }}
      />
      <div className="card-body">
        <CardText
          description="An AI-powered personal finance dashboard for tracking income, expenses, and investments across all your accounts."
          overview="Built to consolidate financial data and provide actionable insights. Import bank statements with AI-powered parsing, track spending by category, and monitor your net worth over time."
          tech="Next.js and React frontend. PostgreSQL database with Drizzle ORM. Better-Auth for authentication. Containerized with Docker. Integrates with Claude via MCP for AI-powered transaction analysis."
          features={[
            'Dashboard with income, expenses, and net balance',
            'Expenses by category with visual charts',
            'Monthly income vs expenses comparison',
            'AI-powered bank statement import and categorization',
            'Investment contribution tracking',
            '26 pre-built spending categories',
          ]}
          techIcons={{
            project: 'finance',
            icons: ['nextjs', 'react', 'postgres', 'drizzle', 'betterauth', 'docker', 'mcp'],
          }}
        />

        <CardImgGrid
          overlays={[icon]}
          images={[screenshot1, screenshot2]}
        />
      </div>
    </div>
  );
};

export default Finance;
