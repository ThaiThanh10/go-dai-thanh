const baseUrl = process.env.NEXT_PUBLIC_URL;

export default function Home() {
  return <div>Hello word: {baseUrl || ""}</div>;
}
