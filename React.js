import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign, Target, Zap, Eye, Award, Heart, Code, TrendingDown } from 'lucide-react';

export default function MarketplaceAnalytics() {
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedSegment, setSelectedSegment] = useState('all');

  // User segments data
  const segments = [
    { id: 'viewers', name: 'Viewers', icon: Eye, color: '#06b6d4', count: 45280 },
    { id: 'members', name: 'Members', icon: Users, color: '#8b5cf6', count: 12450 },
    { id: 'supporters', name: 'Supporters', icon: Heart, color: '#ec4899', count: 3210 },
    { id: 'sponsors', name: 'Ad Sponsors', icon: Award, color: '#f59e0b', count: 890 },
    { id: 'lifehackers', name: 'Life Hackers', icon: Code, color: '#10b981', count: 1560 },
    { id: 'subscribers', name: 'Subscribers', icon: Zap, color: '#6366f1', count: 5670 },
    { id: 'investors', name: 'Investors', icon: TrendingUp, color: '#ef4444', count: 145 }
  ];

  // Funnel data
  const funnelData = [
    { stage: 'Awareness', viewers: 100000, members: 0, supporters: 0, sponsors: 0, lifehackers: 0, subscribers: 0, investors: 0 },
    { stage: 'Interest', viewers: 45280, members: 25000, supporters: 0, sponsors: 2000, lifehackers: 5000, subscribers: 0, investors: 0 },
    { stage: 'Consideration', viewers: 0, members: 12450, supporters: 8000, sponsors: 1500, lifehackers: 3000, subscribers: 15000, investors: 500 },
    { stage: 'Conversion', viewers: 0, members: 0, supporters: 3210, sponsors: 890, lifehackers: 1560, subscribers: 5670, investors: 145 },
    { stage: 'Retention', viewers: 0, members: 0, supporters: 2890, sponsors: 780, lifehackers: 1450, subscribers: 5230, investors: 142 }
  ];

  // Cohort analysis data
  const cohortData = [
    { cohort: 'Jan', week1: 100, week2: 85, week3: 72, week4: 68, week5: 65 },
    { cohort: 'Feb', week1: 100, week2: 88, week3: 76, week4: 71, week5: 68 },
    { cohort: 'Mar', week1: 100, week2: 90, week3: 80, week4: 75, week5: 72 },
    { cohort: 'Apr', week1: 100, week2: 92, week3: 83, week4: 78, week5: 75 }
  ];

  // Revenue attribution data
  const revenueData = [
    { source: 'Organic Search', revenue: 45000, percentage: 35 },
    { source: 'Paid Social', revenue: 28000, percentage: 22 },
    { source: 'Email', revenue: 18000, percentage: 14 },
    { source: 'Referral', revenue: 22000, percentage: 17 },
    { source: 'Direct', revenue: 15000, percentage: 12 }
  ];

  // LTV data by segment
  const ltvData = [
    { segment: 'Viewers', ltv: 0, cac: 2, roi: -100 },
    { segment: 'Members', ltv: 45, cac: 15, roi: 200 },
    { segment: 'Supporters', ltv: 180, cac: 35, roi: 414 },
    { segment: 'Sponsors', ltv: 5400, cac: 850, roi: 535 },
    { segment: 'Life Hackers', ltv: 240, cac: 45, roi: 433 },
    { segment: 'Subscribers', ltv: 360, cac: 60, roi: 500 },
    { segment: 'Investors', ltv: 25000, cac: 3500, roi: 614 }
  ];

  // Keyword performance data
  const keywordData = [
    { keyword: 'rewards platform', impressions: 125000, clicks: 4800, conversions: 340, ctr: 3.84, cvr: 7.08 },
    { keyword: 'loyalty program', impressions: 98000, clicks: 3920, conversions: 280, ctr: 4.0, cvr: 7.14 },
    { keyword: 'marketplace rewards', impressions: 85000, clicks: 3400, conversions: 245, ctr: 4.0, cvr: 7.21 },
    { keyword: 'investment opportunities', impressions: 45000, clicks: 2250, conversions: 85, ctr: 5.0, cvr: 3.78 },
    { keyword: 'supporter network', impressions: 62000, clicks: 2480, conversions: 195, ctr: 4.0, cvr: 7.86 }
  ];

  // Weekly trend data
  const trendData = [
    { week: 'W1', users: 8500, revenue: 42000, conversions: 280 },
    { week: 'W2', users: 9200, revenue: 48000, conversions: 310 },
    { week: 'W3', users: 8900, revenue: 45000, conversions: 295 },
    { week: 'W4', users: 10100, revenue: 52000, conversions: 340 },
    { week: 'W5', users: 11200, revenue: 58000, conversions: 380 },
    { week: 'W6', users: 10800, revenue: 55000, conversions: 365 }
  ];

  const COLORS = ['#06b6d4', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#6366f1', '#ef4444'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        
        * {
          font-family: 'Outfit', sans-serif;
        }
        
        .metric-card {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          transition: all 0.3s ease;
        }
        
        .metric-card:hover {
          transform: translateY(-4px);
          border-color: rgba(148, 163, 184, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        
        .segment-pill {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .segment-pill:hover {
          transform: scale(1.05);
        }
        
        .data-table {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
        }
        
        .glow {
          box-shadow: 0 0 20px currentColor;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>

      {/* Header */}
      <div className="mb-12 animate-in">
        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Marketplace Analytics Hub
        </h1>
        <p className="text-slate-400 text-lg">Multi-sided funnel tracking, cohort analysis, and revenue attribution</p>
        
        <div className="flex gap-3 mt-6">
          {['7d', '30d', '90d', '1y'].map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-5 py-2 rounded-lg font-semibold transition-all ${
                timeRange === range 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-4 gap-6 mb-12" style={{ animationDelay: '0.1s' }}>
        <div className="metric-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Users className="text-cyan-400" size={32} />
            <span className="text-green-400 text-sm font-semibold flex items-center gap-1">
              <TrendingUp size={16} /> +23%
            </span>
          </div>
          <p className="text-slate-400 text-sm mb-1">Total Users</p>
          <p className="text-4xl font-bold">69,205</p>
        </div>

        <div className="metric-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="text-purple-400" size={32} />
            <span className="text-green-400 text-sm font-semibold flex items-center gap-1">
              <TrendingUp size={16} /> +18%
            </span>
          </div>
          <p className="text-slate-400 text-sm mb-1">Monthly Revenue</p>
          <p className="text-4xl font-bold">$128K</p>
        </div>

        <div className="metric-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Target className="text-pink-400" size={32} />
            <span className="text-green-400 text-sm font-semibold flex items-center gap-1">
              <TrendingUp size={16} /> +12%
            </span>
          </div>
          <p className="text-slate-400 text-sm mb-1">Conversion Rate</p>
          <p className="text-4xl font-bold">6.8%</p>
        </div>

        <div className="metric-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Zap className="text-amber-400" size={32} />
            <span className="text-red-400 text-sm font-semibold flex items-center gap-1">
              <TrendingDown size={16} /> -5%
            </span>
          </div>
          <p className="text-slate-400 text-sm mb-1">Avg LTV</p>
          <p className="text-4xl font-bold">$892</p>
        </div>
      </div>

      {/* User Segments */}
      <div className="metric-card rounded-2xl p-8 mb-12" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-2xl font-bold mb-6">User Segments</h2>
        <div className="grid grid-cols-7 gap-4">
          {segments.map((segment) => (
            <div
              key={segment.id}
              className="segment-pill text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700"
              style={{ borderColor: segment.color + '40' }}
            >
              <segment.icon className="mx-auto mb-2" size={28} style={{ color: segment.color }} />
              <p className="text-xs text-slate-400 mb-1">{segment.name}</p>
              <p className="text-xl font-bold">{segment.count.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Funnel Visualization */}
      <div className="metric-card rounded-2xl p-8 mb-12" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-2xl font-bold mb-6">Multi-Stage Conversion Funnel</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={funnelData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="stage" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              labelStyle={{ color: '#f1f5f9' }}
            />
            <Legend />
            <Bar dataKey="viewers" stackId="a" fill="#06b6d4" />
            <Bar dataKey="members" stackId="a" fill="#8b5cf6" />
            <Bar dataKey="supporters" stackId="a" fill="#ec4899" />
            <Bar dataKey="sponsors" stackId="a" fill="#f59e0b" />
            <Bar dataKey="lifehackers" stackId="a" fill="#10b981" />
            <Bar dataKey="subscribers" stackId="a" fill="#6366f1" />
            <Bar dataKey="investors" stackId="a" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-12">
        {/* Cohort Analysis */}
        <div className="metric-card rounded-2xl p-8" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-bold mb-6">Cohort Retention Analysis</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={cohortData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="cohort" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                labelStyle={{ color: '#f1f5f9' }}
              />
              <Legend />
              <Line type="monotone" dataKey="week1" stroke="#06b6d4" strokeWidth={2} />
              <Line type="monotone" dataKey="week2" stroke="#8b5cf6" strokeWidth={2} />
              <Line type="monotone" dataKey="week3" stroke="#ec4899" strokeWidth={2} />
              <Line type="monotone" dataKey="week4" stroke="#f59e0b" strokeWidth={2} />
              <Line type="monotone" dataKey="week5" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Attribution */}
        <div className="metric-card rounded-2xl p-8" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-bold mb-6">Revenue Attribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={revenueData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ source, percentage }) => `${source}: ${percentage}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="revenue"
              >
                {revenueData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* LTV & ROI Analysis */}
      <div className="metric-card rounded-2xl p-8 mb-12" style={{ animationDelay: '0.6s' }}>
        <h2 className="text-2xl font-bold mb-6">Lifetime Value & ROI by Segment</h2>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={ltvData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="segment" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              labelStyle={{ color: '#f1f5f9' }}
            />
            <Legend />
            <Area type="monotone" dataKey="ltv" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} />
            <Area type="monotone" dataKey="cac" stroke="#ec4899" fill="#ec4899" fillOpacity={0.3} />
            <Area type="monotone" dataKey="roi" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Keyword Performance Table */}
      <div className="metric-card rounded-2xl p-8 mb-12" style={{ animationDelay: '0.7s' }}>
        <h2 className="text-2xl font-bold mb-6">Keyword & Campaign Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full data-table">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Keyword</th>
                <th className="text-right py-3 px-4 text-slate-400 font-semibold">Impressions</th>
                <th className="text-right py-3 px-4 text-slate-400 font-semibold">Clicks</th>
                <th className="text-right py-3 px-4 text-slate-400 font-semibold">Conversions</th>
                <th className="text-right py-3 px-4 text-slate-400 font-semibold">CTR</th>
                <th className="text-right py-3 px-4 text-slate-400 font-semibold">CVR</th>
              </tr>
            </thead>
            <tbody>
              {keywordData.map((item, index) => (
                <tr key={index} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <td className="py-3 px-4 text-cyan-400">{item.keyword}</td>
                  <td className="text-right py-3 px-4">{item.impressions.toLocaleString()}</td>
                  <td className="text-right py-3 px-4">{item.clicks.toLocaleString()}</td>
                  <td className="text-right py-3 px-4 text-purple-400 font-semibold">{item.conversions}</td>
                  <td className="text-right py-3 px-4">{item.ctr}%</td>
                  <td className="text-right py-3 px-4 text-green-400 font-semibold">{item.cvr}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Weekly Trends */}
      <div className="metric-card rounded-2xl p-8" style={{ animationDelay: '0.8s' }}>
        <h2 className="text-2xl font-bold mb-6">Weekly Performance Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="week" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              labelStyle={{ color: '#f1f5f9' }}
            />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#06b6d4" strokeWidth={3} />
            <Line type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={3} />
            <Line type="monotone" dataKey="conversions" stroke="#ec4899" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

