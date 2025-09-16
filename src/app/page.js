const baseUrl = process.env.VITE_SERVER_URL;

export default function Home() {
  return <div>Hello word: {baseUrl || ""}</div>;
}
