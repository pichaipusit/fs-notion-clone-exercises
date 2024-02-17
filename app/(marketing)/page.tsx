import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

export default function Home() {
  return (
    <div>
      <div>
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}
