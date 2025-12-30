import React, { useState } from 'react';
import {
    LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, ComposedChart
} from 'recharts';
import { useTheme } from '../contexts/ThemeContext';

interface InvestPageProps {
    onShowDetails?: (id: string) => void;
}

const PORTFOLIO_DATA = {
    totalValue: 125430,
    investedCapital: 100000,
    currentReturns: 25430,
    growthPercentage: 12.5,
    riskScore: 2.5,
    stability: 'High',
};

const HISTORICAL_DATA = [
    { name: 'Jan', value: 100000, projected: 100000 },
    { name: 'Feb', value: 102500, projected: 102500 },
    { name: 'Mar', value: 105000, projected: 105000 },
    { name: 'Apr', value: 104000, projected: 104000 },
    { name: 'May', value: 108000, projected: 108000 },
    { name: 'Jun', value: 112000, projected: 112000 },
    { name: 'Jul', value: 118000, projected: 118000 },
    { name: 'Aug', value: 125430, projected: 125430 },
];

const PROJECTED_DATA = [
    ...HISTORICAL_DATA,
    { name: 'Sep', value: null, projected: 128000 },
    { name: 'Oct', value: null, projected: 132000 },
    { name: 'Nov', value: null, projected: 135500 },
    { name: 'Dec', value: null, projected: 140000 },
    { name: 'Jan', value: null, projected: 145000 },
];

const ALLOCATION_DATA = [
    { name: 'Land', value: 40 },
    { name: 'Residential', value: 35 },
    { name: 'Commercial', value: 25 },
];

const ROI_DATA = [
    { name: 'Land', roi: 15 },
    { name: 'Residential', roi: 8 },
    { name: 'Commercial', roi: 12 },
];

const RECENT_TRANSACTIONS = [
    { id: 1, type: 'Dividend', title: 'Q3 Dividend Payout', amount: '+ USD 450,000', date: '2 days ago', icon: '💰', positive: true },
    { id: 2, type: 'Purchase', title: 'Investment in "Legacy Farms"', amount: '- USD 5,000,000', date: '5 days ago', icon: '🛒', positive: false },
    { id: 3, type: 'Maintenance', title: 'Fencing Fee - Mukono', amount: '- USD 150,000', date: '1 week ago', icon: '🔧', positive: false },
    { id: 4, type: 'Appreciation', title: 'Portfolio Value Update', amount: '+ USD 1,200,000', date: '2 weeks ago', icon: '📈', positive: true },
];

const TOP_PROPERTIES = [
    { id: 1, name: 'Lake-Side Villa', type: 'Residential', roi: '14.5%', appreciation: '+12%', status: 'Excellent' },
    { id: 2, name: 'Legacy Farms', type: 'Agricultural', roi: '11.2%', appreciation: '+8%', status: 'Stable' },
    { id: 3, name: 'Urban Commercial', type: 'Commercial', roi: '9.8%', appreciation: '+15%', status: 'Growing' },
];

const ALERTS = [
    { id: 1, type: 'warning', text: 'Lease expiring for Unit 4B in 45 days.' },
    { id: 2, type: 'info', text: 'Annual property tax statement available.' },
];

const COLORS = ['#6a904d', '#c47d34', '#3a2e25']; 

const Icons = {
    Dashboard: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
    Properties: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M17 21v-8H7v8" /></svg>,
    Land: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21l9-14 9 14" /></svg>,
    Residential: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
    Commercial: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="2" x2="9" y2="22" /><line x1="15" y1="2" x2="15" y2="22" /><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>,
    Transactions: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 5.68 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-7.32-.42-8.42z" /><path d="M12 5.36l-1.4 1.4" /></svg>,
    Analytics: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
    Settings: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
    TrendUp: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
    TrendDown: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" /></svg>,
    Bell: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
    Plus: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>,
    Moon: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>,
    Sun: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>,
    Download: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>,
    Alert: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>,
};

const SidebarItem = ({ icon: Icon, label, active, collapsed }: { icon: any, label: string, active?: boolean, collapsed?: boolean }) => (
    <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-start'} px-4 py-3 mb-1 rounded-lg cursor-pointer transition-colors ${active ? 'bg-cta-brown/10 text-cta-brown font-medium dark:bg-cta-brown/20 dark:text-cta-brown' : 'text-slate-gray hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'}`}>
        <Icon />
        {!collapsed && <span className="ml-3">{label}</span>}
    </div>
);

const SidebarContent = ({ collapsed }: { collapsed: boolean }) => (
    <div className="space-y-1">
        <SidebarItem icon={Icons.Dashboard} label="Dashboard" active collapsed={collapsed} />
        <SidebarItem icon={Icons.Properties} label="My Properties" collapsed={collapsed} />

        <div className={`pt-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider ${collapsed ? 'text-center' : 'px-4'}`}>
            {!collapsed && 'Portfolios'}
        </div>

        <SidebarItem icon={Icons.Land} label="Land Investments" collapsed={collapsed} />
        <SidebarItem icon={Icons.Residential} label="Residential Units" collapsed={collapsed} />
        <SidebarItem icon={Icons.Commercial} label="Commercial" collapsed={collapsed} />

        <div className={`pt-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider ${collapsed ? 'text-center' : 'px-4'}`}>
            {!collapsed && 'Finance'}
        </div>

        <SidebarItem icon={Icons.Transactions} label="Transactions" collapsed={collapsed} />
        <SidebarItem icon={Icons.Analytics} label="Analytics" collapsed={collapsed} />
        <SidebarItem icon={Icons.Settings} label="Settings" collapsed={collapsed} />
    </div>
);

const InvestPage: React.FC<InvestPageProps> = ({ onShowDetails }) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [chartView, setChartView] = useState<'historical' | 'projected'>('historical');
    const [timeFilter, setTimeFilter] = useState('1Y');
    
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <div className="flex min-h-screen bg-light-bg dark:bg-gray-900 transition-colors duration-300 pt-16">

            <aside
                className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 fixed lg:sticky top-16 h-[calc(100vh-4rem)] z-30 transition-all duration-300 ${sidebarCollapsed ? 'w-20' : 'w-64'} hidden md:flex flex-col`}
            >
                <div className="p-4 flex-grow overflow-y-auto custom-scrollbar">
                    <SidebarContent collapsed={sidebarCollapsed} />
                </div>

                <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex justify-center">
                    <button
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-slate-gray dark:text-gray-400"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points={sidebarCollapsed ? "13 17 18 12 13 7" : "11 17 6 12 11 7"} /><polyline points={sidebarCollapsed ? "6 17 11 12 6 7" : "18 17 13 12 18 7"} /></svg>
                    </button>
                </div>
            </aside>

            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden flex">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
                    <div className="relative bg-white dark:bg-gray-800 w-64 h-full shadow-2xl overflow-y-auto p-4 flex flex-col animate-slideRight">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-xl font-bold text-text-dark dark:text-white">Dashboard</span>
                            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-gray dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>
                        <SidebarContent collapsed={false} />
                    </div>
                </div>
            )}

            <main className="flex-1 overflow-x-hidden relative w-full">
                
                <div className="md:hidden px-4 pt-4">
                    <button 
                        onClick={() => setMobileMenuOpen(true)}
                        className="flex items-center space-x-2 text-text-dark dark:text-white bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        <span className="font-medium text-sm">Menu</span>
                    </button>
                </div>

                <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 sm:space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                        
                        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                            
                            <div className="bg-primary-navy rounded-2xl shadow-xl overflow-hidden text-white relative">
                                <div className="absolute top-0 right-0 p-12 opacity-5">
                                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                                        <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="20" />
                                        <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="20" />
                                    </svg>
                                </div>

                                <div className="p-6 sm:p-8 md:p-10 relative z-10">
                                    <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                                        <div>
                                            <div className="flex flex-wrap items-center gap-3 mb-1">
                                                <p className="text-gray-400 font-medium uppercase tracking-wider text-xs sm:text-sm">Total Portfolio Value</p>
                                                <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] sm:text-xs text-gray-300 border border-white/10 whitespace-nowrap">Risk Score: {PORTFOLIO_DATA.riskScore}/10 (Low)</span>
                                            </div>
                                            <div className="flex flex-wrap items-baseline gap-2 sm:gap-4">
                                                <h3 className="text-3xl sm:text-5xl font-bold tracking-tight">{formatCurrency(PORTFOLIO_DATA.totalValue)}</h3>
                                                <div className="flex items-center px-2.5 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs sm:text-sm font-bold">
                                                    <Icons.TrendUp />
                                                    <span className="ml-1">+{PORTFOLIO_DATA.growthPercentage}%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 md:mt-0 w-full md:w-auto">
                                            <div className="flex gap-1 justify-end md:justify-start">
                                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((step) => (
                                                    <div key={step} className={`h-1.5 sm:h-2 w-3 sm:w-4 rounded-sm ${step <= 3 ? 'bg-green-500' : step <= 7 ? 'bg-gray-600' : 'bg-gray-700'}`} style={{ opacity: step <= (10 - PORTFOLIO_DATA.riskScore) ? 1 : 0.3 }}></div>
                                                ))}
                                            </div>
                                            <p className="text-right text-xs text-gray-400 mt-1">Portfolio Stability: {PORTFOLIO_DATA.stability}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-white/10">
                                        <div className="flex justify-between sm:block">
                                            <p className="text-gray-400 text-sm font-medium mb-1">Total Invested</p>
                                            <p className="text-xl sm:text-2xl font-semibold">{formatCurrency(PORTFOLIO_DATA.investedCapital)}</p>
                                        </div>
                                        <div className="flex justify-between sm:block">
                                            <p className="text-gray-400 text-sm font-medium mb-1">Current Value</p>
                                            <p className="text-xl sm:text-2xl font-semibold">{formatCurrency(PORTFOLIO_DATA.totalValue)}</p>
                                        </div>
                                        <div className="flex justify-between sm:block">
                                            <p className="text-gray-400 text-sm font-medium mb-1">Returns</p>
                                            <p className={`text-xl sm:text-2xl font-semibold ${PORTFOLIO_DATA.currentReturns >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                                +{formatCurrency(PORTFOLIO_DATA.currentReturns)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                                    <div>
                                        <h4 className="font-bold text-text-dark dark:text-white text-lg">Portfolio Performance</h4>
                                        <p className="text-xs text-slate-gray dark:text-gray-400">Track value over time and future estimates.</p>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                                        <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900 p-1 rounded-lg">
                                            <button 
                                                onClick={() => setChartView('historical')}
                                                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${chartView === 'historical' ? 'bg-white dark:bg-gray-700 text-text-dark dark:text-white shadow-sm' : 'text-slate-gray dark:text-gray-400 hover:text-text-dark'}`}
                                            >
                                                History
                                            </button>
                                            <button 
                                                onClick={() => setChartView('projected')}
                                                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${chartView === 'projected' ? 'bg-white dark:bg-gray-700 text-text-dark dark:text-white shadow-sm' : 'text-slate-gray dark:text-gray-400 hover:text-text-dark'}`}
                                            >
                                                AI Projected
                                            </button>
                                        </div>
                                        <select 
                                            value={timeFilter}
                                            onChange={(e) => setTimeFilter(e.target.value)}
                                            className="ml-auto sm:ml-0 text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg px-3 py-2 text-slate-gray dark:text-gray-300 focus:ring-1 focus:ring-cta-brown outline-none"
                                        >
                                            <option value="6M">6M</option>
                                            <option value="1Y">1Y</option>
                                            <option value="5Y">5Y</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="h-64 sm:h-80">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={chartView === 'historical' ? HISTORICAL_DATA : PROJECTED_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                            <defs>
                                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#c47d34" stopOpacity={0.2} />
                                                    <stop offset="95%" stopColor="#c47d34" stopOpacity={0} />
                                                </linearGradient>
                                                <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#6a904d" stopOpacity={0.2} />
                                                    <stop offset="95%" stopColor="#6a904d" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#374151' : '#f3f4f6'} />
                                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: isDarkMode ? '#9ca3af' : '#6b7280' }} dy={10} />
                                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: isDarkMode ? '#9ca3af' : '#6b7280' }} tickFormatter={(value) => `${value / 1000}k`} />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: isDarkMode ? '#1f2937' : '#fff', borderRadius: '8px', border: isDarkMode ? '1px solid #374151' : 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', color: isDarkMode ? '#fff' : '#000' }}
                                                formatter={(value: number) => [formatCurrency(value), 'Value']}
                                            />
                                            <Area type="monotone" dataKey="value" stroke="#c47d34" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" name="Actual Value" />
                                            {chartView === 'projected' && (
                                                    <Area type="monotone" dataKey="projected" stroke="#6a904d" strokeDasharray="5 5" strokeWidth={2} fillOpacity={1} fill="url(#colorProjected)" name="Projected Value" />
                                            )}
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                                    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/50">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-700 dark:text-green-400"><Icons.Land /></div>
                                            <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-transparent px-2 py-1 rounded">+15% ROI</span>
                                        </div>
                                        <div className="text-sm font-semibold text-slate-gray dark:text-gray-400">Land</div>
                                        <div className="text-xl font-bold text-text-dark dark:text-white">$50,172</div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/50">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-700 dark:text-orange-400"><Icons.Residential /></div>
                                            <span className="text-xs font-bold text-orange-600 bg-orange-50 dark:bg-transparent px-2 py-1 rounded">+8% ROI</span>
                                        </div>
                                        <div className="text-sm font-semibold text-slate-gray dark:text-gray-400">Residential</div>
                                        <div className="text-xl font-bold text-text-dark dark:text-white">$43,900</div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/50">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-700 dark:text-blue-400"><Icons.Commercial /></div>
                                            <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-transparent px-2 py-1 rounded">+12% ROI</span>
                                        </div>
                                        <div className="text-sm font-semibold text-slate-gray dark:text-gray-400">Commercial</div>
                                        <div className="text-xl font-bold text-text-dark dark:text-white">$31,358</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
                                <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                                    <h4 className="font-bold text-text-dark dark:text-white text-lg">Top Performing Assets</h4>
                                    <button className="text-cta-brown text-sm font-semibold hover:underline">View All</button>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left min-w-[600px] sm:min-w-full">
                                        <thead className="bg-gray-50 dark:bg-gray-900">
                                            <tr>
                                                <th className="px-4 sm:px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase tracking-wider">Property</th>
                                                <th className="px-4 sm:px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase tracking-wider">Type</th>
                                                <th className="px-4 sm:px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase tracking-wider">ROI (YTD)</th>
                                                <th className="px-4 sm:px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase tracking-wider">Status</th>
                                                <th className="px-4 sm:px-6 py-3 text-xs font-medium text-slate-gray dark:text-gray-400 uppercase tracking-wider">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                            {TOP_PROPERTIES.map((property) => (
                                                <tr key={property.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                                                        <div className="font-medium text-text-dark dark:text-white text-sm sm:text-base">{property.name}</div>
                                                        <div className="text-xs text-green-600 dark:text-green-400">{property.appreciation} Appreciation</div>
                                                    </td>
                                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-slate-gray dark:text-gray-300">{property.type}</td>
                                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-bold text-text-dark dark:text-white">{property.roi}</td>
                                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                            {property.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                                                        <button 
                                                            onClick={() => onShowDetails && onShowDetails(String(property.id))}
                                                            className="text-cta-brown hover:text-cta-brown-dark font-medium"
                                                        >
                                                            View
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1 space-y-6 sm:space-y-8">
                            
                            {ALERTS.length > 0 && (
                                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
                                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border-b border-orange-100 dark:border-orange-900/30 flex items-center justify-between">
                                        <h4 className="font-bold text-orange-800 dark:text-orange-300 flex items-center gap-2 text-sm sm:text-base">
                                            <Icons.Alert />
                                            Action Required
                                        </h4>
                                        <span className="bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-xs font-bold px-2 py-0.5 rounded-full">{ALERTS.length}</span>
                                    </div>
                                    <div className="divide-y divide-gray-100 dark:divide-gray-700">
                                        {ALERTS.map(alert => (
                                            <div key={alert.id} className="p-4 flex gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                                                <div className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${alert.type === 'warning' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                                                <p className="text-sm text-slate-gray dark:text-gray-300 leading-snug">{alert.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                <h4 className="font-bold text-text-dark dark:text-white mb-6 text-lg">Asset Allocation</h4>
                                <div className="h-64 relative">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={ALLOCATION_DATA}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={80}
                                                paddingAngle={5}
                                                dataKey="value"
                                                stroke="none"
                                            >
                                                {ALLOCATION_DATA.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip 
                                                contentStyle={{ backgroundColor: isDarkMode ? '#1f2937' : '#fff', borderRadius: '8px', border: isDarkMode ? '1px solid #374151' : 'none', color: isDarkMode ? '#fff' : '#000' }}
                                            />
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="text-center">
                                            <p className="text-xs text-slate-gray dark:text-gray-400 uppercase">Total</p>
                                            <p className="text-xl font-bold text-text-dark dark:text-white">3 Types</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 space-y-3">
                                    {ALLOCATION_DATA.map((entry, index) => (
                                        <div key={entry.name} className="flex justify-between items-center text-sm">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index] }}></div>
                                                <span className="text-slate-gray dark:text-gray-300">{entry.name}</span>
                                            </div>
                                            <span className="font-bold text-text-dark dark:text-white">{entry.value}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="font-bold text-text-dark dark:text-white text-lg">Recent Activity</h4>
                                    <button className="text-xs text-slate-gray dark:text-gray-400 hover:text-cta-brown">View All</button>
                                </div>
                                <div className="space-y-6 relative">
                                    <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-100 dark:bg-gray-700"></div>
                                    
                                    {RECENT_TRANSACTIONS.map((item) => (
                                        <div key={item.id} className="relative pl-10 flex flex-col group">
                                            <div className="absolute left-0 top-0 h-8 w-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full flex items-center justify-center z-10 text-lg shadow-sm">
                                                {item.icon}
                                            </div>
                                            <p className="text-sm font-semibold text-text-dark dark:text-white group-hover:text-cta-brown transition-colors">{item.title}</p>
                                            <div className="flex justify-between items-center mt-1">
                                                <span className={`text-xs font-bold ${item.positive ? 'text-green-600 dark:text-green-400' : 'text-text-dark dark:text-gray-300'}`}>{item.amount}</span>
                                                <span className="text-xs text-slate-gray dark:text-gray-500">{item.date}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full mt-6 py-2 text-sm text-center text-slate-gray dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                    Load More Activity
                                </button>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                    <h4 className="font-bold text-text-dark dark:text-white mb-4 text-lg">ROI Summary</h4>
                                    <div className="h-48">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={ROI_DATA} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={isDarkMode ? '#374151' : '#f3f4f6'} />
                                            <XAxis type="number" hide />
                                            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={70} tick={{ fontSize: 11, fill: isDarkMode ? '#9ca3af' : '#6b7280', fontWeight: 500 }} />
                                            <Tooltip
                                                cursor={{ fill: isDarkMode ? '#374151' : '#f9fafb' }}
                                                contentStyle={{ backgroundColor: isDarkMode ? '#1f2937' : '#fff', borderRadius: '8px', border: isDarkMode ? '1px solid #374151' : 'none', color: isDarkMode ? '#fff' : '#000' }}
                                            />
                                            <Bar dataKey="roi" fill="#6a904d" radius={[0, 4, 4, 0]} barSize={20}>
                                                {ROI_DATA.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default InvestPage;