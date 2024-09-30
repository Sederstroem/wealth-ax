import {Inter, Lusitana} from 'next/font/google';
import {NextFont} from "next/dist/compiled/@next/font";
// Remember to import and add this element to the body element in layout.tsx
// like this: className={`${inter.className} antialiased`}
export const inter = Inter({ subsets: ['latin'] });

export const lusitana: NextFont = Lusitana({
    subsets: ['latin'],
    weight: "400"
})