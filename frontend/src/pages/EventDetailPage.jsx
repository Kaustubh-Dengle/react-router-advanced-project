import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>EventDetails</h1>
      <p>Event ID: {params.id}</p>
    </>
  );
}
