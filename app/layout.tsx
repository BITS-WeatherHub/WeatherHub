import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import NavigationBar from '@/components/NavigationBar';
import WeatherProvider from './WeatherProvider';
import { fetchForecastData, fetchWeatherData } from './fetch';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lat = '10.823099';
  const lon = '106.629662';

  const weatherData = await fetchWeatherData(lat, lon);
  const forecastData = await fetchForecastData(lat, lon);
  await Promise.all([weatherData, forecastData]);

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased px-10',
            inter.className
          )}
        >
          <NavigationBar />
          <WeatherProvider
            weatherData={weatherData}
            forecastData={forecastData}
          >
            {children}
          </WeatherProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
