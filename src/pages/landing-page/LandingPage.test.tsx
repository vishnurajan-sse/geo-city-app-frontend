import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import LandingPage from './LandingPage'
import { vi } from 'vitest';
import type { City, LoaderProps } from '../../interfaces/common';
import * as ApiService from '../../services/ApiService';
import * as GeoLocationService from '../../services/GeoLocationService';


vi.mock('../../components/Loader/Loader', () => ({
  default: ({ message }: LoaderProps) => <div data-testid="loader">{message}</div>
}));

describe('LandingPage', () => {
  const mockCities: City[] = [
    { name: 'City1', lat: '1.1', lng: '2.2', country: 'C1', admin1: '', admin2: '' },
    { name: 'City2', lat: '3.3', lng: '4.4', country: 'C2', admin1: '', admin2: '' },
  ];

  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn();
    vi.spyOn(ApiService, 'fetchData').mockResolvedValue(mockCities);
    vi.spyOn(GeoLocationService, 'fetchGeoLocationData').mockResolvedValue({
      place_id: '123456',
      address: { country: 'TestCountry' }
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should renders the page correctly', () => {
    render(<LandingPage />)
    //screen.debug();
  })

  it('renders Loader while fetching cities and hides after load', async () => {
    render(<LandingPage />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });
  });

  it('renders Table with city data', async () => {
    render(<LandingPage />);
    await waitFor(() => {
      expect(screen.getByText('City1')).toBeInTheDocument();
      expect(screen.getByText('City2')).toBeInTheDocument();
    });
  });


  it('loads more cities when Load More button is clicked', async () => {
    render(<LandingPage />);
    await waitFor(() => screen.getByText('City1'));
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(ApiService.fetchData).toHaveBeenCalledTimes(2);
  });


})