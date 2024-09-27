import SearchNavBar from "../searchNavBar";

export default function SearchLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { searchTerm: string };
}) {
  return (
    <section>
      <SearchNavBar searchTerm={params.searchTerm} />
      {children}
    </section>
  );
}
