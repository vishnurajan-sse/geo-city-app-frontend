import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import Table from "../../components/Table/Table";

import { type City, type Column, type SelectedCityProps } from "../../interfaces/common";
import { fetchData } from "../../services/ApiService";
import Button from "../../components/Button/Button";
import { appConfig } from "../../constants/config";
import { fetchGeoLocationData } from "../../services/GeoLocationService";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import useScreenWidth from "../../hooks/deviceWidth";

const LandingPage = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedRow, setSelectedRow] = useState<City | null>(null);
  const [selectedCity, setSelectedCityCities] = useState<SelectedCityProps | null>(null);
  const [limit, setLimit] = useState(10);
  const buttonContainerRef = useRef<HTMLDivElement | null>(null);
  const tableContainerRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth <= 768;


  const loadCities = useCallback(async () => {
    console.log('useCallback');
    setLoading(true);
    try {
      const data = await fetchData(`${appConfig.apiBaseUrl}/cities?limit=${limit}`);
      setCities(data);
      setTimeout(() => { scrollToBottom(); }, 100)
    } catch (err) {
      console.error(err || "Failed to fetch cities");
    }
    finally {
    setLoading(false); 
  }
  }, [limit]);

  useEffect(() => {
    console.log('loadCities')
    loadCities();
  }, [loadCities]);

  const columns: Column<City>[] = useMemo(
    () => [
      { header: "City Name", responseKey: "name" },
      { header: "Latitude", responseKey: "lat" },
      { header: "Longitude", responseKey: "lng" },
      { header: "Country Code", responseKey: "country" },
    ],
    []
  );

  

  const setSelectedCity = (row: City) => {
    setSelectedRow(row)
    fetchGeoLocationData(parseFloat(row.lat), parseFloat(row.lng), 'json').then((data) =>
      setSelectedCityCities({
        locationID : data.place_id,
        countryName : data.address.country
      })
    );
    setTimeout(() => { 
      if (isMobile) {
        scrollToBottom();
        return;
      }
      scrollToTop()
     }, 100)
  }

  const handleClick = () => {
    setLimit(limit + 10);
  };

  const scrollToBottom = () => {
    buttonContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    tableContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative" id="landing-page-wrapper">
      <div className="md:col-span-8 p-4 relative"  ref={tableContainerRef}>
        {loading && <Loader message="Fetching cities..."/>}
        <Table columns={columns} data={cities} onRowClick={(row: City) => { setSelectedCity(row) }} />
        {cities.length >0 && <div className="flex justify-center">
          <Button onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
            Load More
          </Button>
        </div>}
        <div ref={buttonContainerRef}></div>
      </div>
      <div className="md:col-span-4 p-4">
        {selectedRow && (
          <Card
          title={selectedRow.name}
          description={`The city of ${selectedRow.name} has GeoNameID ${selectedCity?.locationID} and is in Country ${selectedCity?.countryName}.`}/>
        )}
      </div>
    </div>
  )
}

export default LandingPage
