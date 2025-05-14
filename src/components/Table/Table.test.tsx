import { render, screen, fireEvent } from '@testing-library/react'
import Table from './Table';
import type { City, Column } from '../../interfaces/common';
import { vi } from 'vitest';

describe('Table Component', () => {
  it('renders the table header with data correctly', () => {
    const columns = [
      { header: 'testHeader', responseKey: 'name' },
    ];
    render(<Table columns={columns} data={[]} />);
    const tableHeaderElement = screen.getByText('testHeader');
    screen.debug();
    expect(tableHeaderElement).toBeInTheDocument();

  });

  it('renders the table body with data correctly', () => {
    const columns: Column<City>[] = [
      { header: 'Name', responseKey: 'name' },
      { header: 'Latitude', responseKey: 'lat' },
      { header: 'Longitude', responseKey: 'lng' },
      { header: 'Country', responseKey: 'country' },
      { header: 'Admin1', responseKey: 'admin1' },
      { header: 'Admin2', responseKey: 'admin2' },
    ];
    const tableData = [{
      "name": "El Tarter",
      "lat": "42.57952",
      "lng": "1.65362",
      "country": "AD",
      "admin1": "02",
      "admin2": ""
    },
    {
      "name": "Sant Julià de Lòria",
      "lat": "42.46372",
      "lng": "1.49129",
      "country": "AD",
      "admin1": "06",
      "admin2": ""
    },
    {
      "name": "Pas de la Casa",
      "lat": "42.54277",
      "lng": "1.73361",
      "country": "AD",
      "admin1": "03",
      "admin2": ""
    }]

    render(<Table columns={columns} data={tableData} />);
    const tableHeaderElement = screen.getByText('Sant Julià de Lòria');
    screen.debug();
    expect(tableHeaderElement).toBeInTheDocument();

  });

  it('should calls onRowClick method when a row clicked', () => {
    const columns: Column<City>[] = [
      { header: 'Name', responseKey: 'name' },
      { header: 'Latitude', responseKey: 'lat' },
    ];

    const tableData: City[] = [
      {
        name: 'El Tarter',
        lat: '42.57952',
        lng: '1.65362',
        country: 'AD',
        admin1: '02',
        admin2: '',
      },
    ];

    const handleRowClick = vi.fn();
    render(<Table columns={columns} data={tableData} onRowClick={handleRowClick} />);
    const rowElement = screen.getByText('El Tarter');
    fireEvent.click(rowElement);
    expect(handleRowClick).toHaveBeenCalledTimes(1);
  });
})