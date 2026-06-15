import MusicProvider from "./components/MusicProvider";
import Cover from "./components/Cover";
import Venue from "./components/Venue";
import Timeline from "./components/Timeline";
import DressCode from "./components/DressCode";
import Wishes from "./components/Wishes";
import RsvpForm from "./components/RsvpForm";
import QrSection from "./components/QrSection";

export default function Home() {
  return (
    <MusicProvider>
      <main>
        <Cover />
        <Venue />
        <Timeline />
        <DressCode />
        <Wishes />
        <RsvpForm />
        <QrSection />
      </main>
    </MusicProvider>
  );
}
