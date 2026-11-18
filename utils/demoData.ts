/**
 * Realistic demo data for the "Try Live Demo" mode.
 * Covers all screens: records, charts, coach, reports, goals, recurring.
 */

const today = new Date();
const fmt = (d: Date) => d.toISOString().split('T')[0];
const daysAgo = (n: number) => {
  const d = new Date(today);
  d.setDate(d.getDate() - n);
  return fmt(d);
};

export const DEMO_DATA = {
  profile: {
    user: { name: 'Demo User' },
    monthlyIncome: 55000,
    monthlyBudget: 40000,
    savingsGoal: 10000,
    financialGoal: 'Save for a MacBook Pro',
  },

  analytics: {
    data: {
      stats: {
        totalIncome: 55000,
        totalExpense: 24500,
        netSavings: 30500,
        disciplineScore: 73,
        savingsRate: 55.5,
      },
      monthlyTrend: [
        { month: 'Jul', income: 52000, expense: 28000 },
        { month: 'Aug', income: 54000, expense: 26500 },
        { month: 'Sep', income: 55000, expense: 29000 },
        { month: 'Oct', income: 55000, expense: 27800 },
        { month: 'Nov', income: 55000, expense: 24500 },
      ],
      topCategories: [
        { name: 'Food', total: 6800, percent: 28 },
        { name: 'Shopping', total: 5200, percent: 21 },
        { name: 'Transportation', total: 3900, percent: 16 },
        { name: 'Entertainment', total: 2800, percent: 11 },
        { name: 'Health', total: 2100, percent: 9 },
      ],
      behavior: {
        impulseBuyingScore: 32,
        emotionalSpendingScore: 28,
        disciplineScore: 73,
        consistencyScore: 68,
      },
    },
  },

  transactions: [
    {
      id: 't1', type: 'expense', amount: '320', categoryName: 'Food',
      categoryIcon: 'fast-food-outline', date: daysAgo(0), note: 'Dinner with friends', intent: 'want', paymentMode: 'upi',
    },
    {
      id: 't2', type: 'income', amount: '55000', categoryName: 'Salary',
      categoryIcon: 'briefcase-outline', date: daysAgo(1), note: 'Monthly salary', intent: 'need', paymentMode: 'bank_transfer',
    },
    {
      id: 't3', type: 'expense', amount: '1499', categoryName: 'Shopping',
      categoryIcon: 'cart-outline', date: daysAgo(2), note: 'Amazon purchase', intent: 'want', paymentMode: 'card',
    },
    {
      id: 't4', type: 'expense', amount: '250', categoryName: 'Transportation',
      categoryIcon: 'bus-outline', date: daysAgo(3), note: 'Uber rides', intent: 'need', paymentMode: 'upi',
    },
    {
      id: 't5', type: 'expense', amount: '800', categoryName: 'Food',
      categoryIcon: 'fast-food-outline', date: daysAgo(4), note: 'Weekly groceries', intent: 'need', paymentMode: 'upi',
    },
    {
      id: 't6', type: 'expense', amount: '599', categoryName: 'Entertainment',
      categoryIcon: 'musical-notes-outline', date: daysAgo(5), note: 'Spotify + Netflix', intent: 'want', paymentMode: 'card',
    },
    {
      id: 't7', type: 'expense', amount: '2200', categoryName: 'Health',
      categoryIcon: 'medkit-outline', date: daysAgo(6), note: 'Gym membership', intent: 'need', paymentMode: 'card',
    },
    {
      id: 't8', type: 'expense', amount: '450', categoryName: 'Food',
      categoryIcon: 'cafe-outline', date: daysAgo(7), note: 'Café + snacks', intent: 'want', paymentMode: 'cash',
    },
    {
      id: 't9', type: 'expense', amount: '3500', categoryName: 'Shopping',
      categoryIcon: 'shirt-outline', date: daysAgo(8), note: 'New clothes', intent: 'want', paymentMode: 'card',
    },
    {
      id: 't10', type: 'expense', amount: '180', categoryName: 'Transportation',
      categoryIcon: 'bus-outline', date: daysAgo(9), note: 'Metro card recharge', intent: 'need', paymentMode: 'upi',
    },
    {
      id: 't11', type: 'income', amount: '5000', categoryName: 'Freelance',
      categoryIcon: 'laptop-outline', date: daysAgo(10), note: 'Side project payment', intent: 'need', paymentMode: 'bank_transfer',
    },
    {
      id: 't12', type: 'expense', amount: '1200', categoryName: 'Education',
      categoryIcon: 'school-outline', date: daysAgo(11), note: 'Udemy course', intent: 'need', paymentMode: 'card',
    },
    {
      id: 't13', type: 'expense', amount: '650', categoryName: 'Food',
      categoryIcon: 'nutrition-outline', date: daysAgo(12), note: 'Fruits & vegetables', intent: 'need', paymentMode: 'cash',
    },
    {
      id: 't14', type: 'expense', amount: '990', categoryName: 'Entertainment',
      categoryIcon: 'ticket-outline', date: daysAgo(14), note: 'Movie tickets (2)', intent: 'want', paymentMode: 'upi',
    },
    {
      id: 't15', type: 'expense', amount: '4800', categoryName: 'Housing',
      categoryIcon: 'home-outline', date: daysAgo(15), note: 'Electricity + internet bill', intent: 'need', paymentMode: 'upi',
    },
    {
      id: 't16', type: 'expense', amount: '350', categoryName: 'Social',
      categoryIcon: 'people-outline', date: daysAgo(17), note: "Friend's birthday gift", intent: 'want', paymentMode: 'upi',
    },
    {
      id: 't17', type: 'expense', amount: '1100', categoryName: 'Health',
      categoryIcon: 'medkit-outline', date: daysAgo(19), note: 'Pharmacy', intent: 'need', paymentMode: 'cash',
    },
    {
      id: 't18', type: 'expense', amount: '2400', categoryName: 'Shopping',
      categoryIcon: 'tv-outline', date: daysAgo(21), note: 'Electronics accessories', intent: 'want', paymentMode: 'card',
    },
  ],

  recurring: [
    {
      id: 'r1', name: 'Netflix', amount: '649', type: 'expense',
      frequency: 'monthly', interval: 'monthly', nextDate: daysAgo(-5), isActive: true,
    },
    {
      id: 'r2', name: 'Gym Membership', amount: '2200', type: 'expense',
      frequency: 'monthly', interval: 'monthly', nextDate: daysAgo(-8), isActive: true,
    },
    {
      id: 'r3', name: 'Spotify Premium', amount: '119', type: 'expense',
      frequency: 'monthly', interval: 'monthly', nextDate: daysAgo(-3), isActive: true,
    },
    {
      id: 'r4', name: 'Salary Credit', amount: '55000', type: 'income',
      frequency: 'monthly', interval: 'monthly', nextDate: daysAgo(-28), isActive: true,
    },
  ],

  goals: [
    {
      id: 'g1', name: 'MacBook Pro', targetAmount: '150000', currentAmount: '42000',
      savedAmount: '42000', desiredDate: (() => { const d = new Date(today); d.setMonth(d.getMonth() + 8); return fmt(d); })(),
    },
    {
      id: 'g2', name: 'Goa Trip 🏖️', targetAmount: '25000', currentAmount: '18500',
      savedAmount: '18500', desiredDate: (() => { const d = new Date(today); d.setMonth(d.getMonth() + 2); return fmt(d); })(),
    },
    {
      id: 'g3', name: 'Emergency Fund', targetAmount: '100000', currentAmount: '100000',
      savedAmount: '100000', desiredDate: daysAgo(30),
    },
  ],

  notifications: [
    {
      id: 'n1', title: 'Budget Alert', message: 'You\'ve used 85% of your Food budget this month.',
      isRead: false, createdAt: new Date().toISOString(),
    },
    {
      id: 'n2', title: 'Goal Progress 🎉', message: 'MacBook Pro goal is 28% funded! Keep going.',
      isRead: false, createdAt: daysAgo(1),
    },
    {
      id: 'n3', title: 'Weekly Summary', message: 'You spent ₹5,840 this week — 12% less than last week!',
      isRead: true, createdAt: daysAgo(3),
    },
    {
      id: 'n4', title: 'Recurring Reminder', message: 'Netflix ₹649 is due in 5 days.',
      isRead: true, createdAt: daysAgo(5),
    },
  ],

  insights: {
    disciplineScore: 73,
    topWaste: 'Impulse shopping on weekends',
    weeklyTip: 'You spend 40% more on weekends. Try setting a weekend cash limit of ₹500.',
  },

  report: {
    month: 'November 2026',
    monthlyReport: {
      savingsRate: 55,
      topCategories: [
        { name: 'Food', total: 6800, percent: 28 },
        { name: 'Shopping', total: 5200, percent: 21 },
        { name: 'Transport', total: 3900, percent: 16 },
      ],
    },
    budgetReport: {
      overallUtilization: 61,
    },
  },
};
