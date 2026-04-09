// import { Header } from '@/components/layout/header';
// import { Footer } from '@/components/layout/footer';
// import { WhatsAppButton } from '@/components/layout/whatsapp-button';

// export default function PublicLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       <Header />
//       <main className="min-h-screen">
//         {children}
//       </main>
//       <Footer />
//       <WhatsAppButton />
//     </>
//   );
// }




import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppButton } from '@/components/layout/whatsapp-button';
import { RegionProvider } from '@/lib/region-context';
import { RegionSelector } from '@/components/layout/region-selector';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RegionProvider>
      <RegionSelector />
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </RegionProvider>
  );
}
