import Event from "../components/Event";
import PageHeader from "../components/PageHeader";

function Events() {
  return (
    <div>
      <PageHeader />
      <header className="page-header-container">
        <h1 className="page-title">Events</h1>
        <p className="event-page-description">
          Below are the upcoming events where you can find the Lukewarm booth!
        </p>
      </header>

      <Event />
      <Event />
      <Event />
    </div>
  );
}
export default Events;
