import { MapPin } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { LocaleContainer } from './styles';

export function LocaleMap() {
  const [city, setCity] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
            );

            if (!response.ok) {
              throw new Error('Erro ao obter dados de geolocalização');
            }

            const data = await response.json();
            const city = data.address.city;

            if (city) {
              setCity(city);
            } else {
              throw new Error(
                'Cidade não encontrada nos dados de geolocalização',
              );
            }
          } catch (error) {
            if (error instanceof Error) {
              setErrorMessage('Erro ao obter a cidade: ' + error.message);
            } else {
              setErrorMessage('Erro desconhecido ao obter a cidade');
            }
          }
        },
        function (error) {
          if (error instanceof Error) {
            setErrorMessage('Erro ao obter a localização: ' + error.message);
          } else {
            setErrorMessage('Erro desconhecido ao obter a localização');
          }
        },
      );
    } else {
      setErrorMessage('Geolocalização não é suportada pelo seu navegador.');
    }
  }, []);

  return (
    <LocaleContainer>
      <MapPin size={24} weight='fill' />
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <p>{city ? city : 'Obtendo localização...'}</p>
      )}
    </LocaleContainer>
  );
}
