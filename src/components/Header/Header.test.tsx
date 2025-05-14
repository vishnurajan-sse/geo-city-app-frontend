import { render, screen } from '@testing-library/react'
import Header from './Header';

describe('Header Component', () => {
    it('renders the app name correctly', () => {
        const appName = 'Test App';
        render(<Header appName={appName} />);
        const headerElement = screen.getByText(appName);
        expect(headerElement).toBeInTheDocument();
    
      });
})