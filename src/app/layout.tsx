import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from '@/redux/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Quickcart',
	description: 'E-commerce App',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<StoreProvider>
					<main className='min-h-screen'>{children}</main>
				</StoreProvider>
			</body>
		</html>
	);
}
