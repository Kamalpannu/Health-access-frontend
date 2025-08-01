import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

// Correct import path with slash after ".."
import * as AuthContextModule from '../src/contexts/AuthContext';

vi.mock('../src/contexts/AuthContext', async () => {
  const actual = await vi.importActual('../src/contexts/AuthContext');
  return {
    ...actual,
    useAuth: () => ({ user: { name: 'Alice', role: 'PATIENT' }, isAuthenticated: true }),
    AuthProvider: ({ children }) => <>{children}</>,
  };
});

// Mock Apollo client
vi.mock('@apollo/client', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useQuery: () => ({ data: {} }),
  };
});

// Stub lucide-react icons
vi.mock('lucide-react', () => {
  const DummyIcon = () => React.createElement('span', null, 'icon');
  return {
    Activity: DummyIcon,
    Users: DummyIcon,
    FileText: DummyIcon,
    Shield: DummyIcon,
    Clock: DummyIcon,
    TrendingUp: DummyIcon,
  };
});

describe('DashboardPage simple patient header', () => {
  it('renders welcome and patient subtitle', async () => {
    const module = await import('../src/pages/DashboardPage.jsx');
    const DashboardPage = module.DashboardPage;

    render(<DashboardPage />);

    screen.getByText('Welcome back, Alice');
    screen.getByText('View your health records and manage access');
  });
});
