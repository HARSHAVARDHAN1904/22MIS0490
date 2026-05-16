import { useEffect, useState } from "react";
import { fetchNotifications } from "./api/notificationApi";
import type { Notification } from "./types/notification";
import NotificationCard from "./components/NotificationCard";
import { getTopNotifications } from "./utils/priority";
import { Button, Stack } from "@mui/material";

function App() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filter, setFilter] = useState("All");

  const topNotifications = getTopNotifications(notifications);
  const filteredNotifications =
  filter === "All"
    ? notifications
    : notifications.filter(
        (item) => item.Type === filter
      );

  useEffect(() => {
    const getData = async () => {
      const data = await fetchNotifications();
      setNotifications(data);
    };

    getData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notifications App</h1>
      <Stack
  direction="row"
  spacing={2}
  sx={{ marginBottom: 3 }}
>
  <Button
    variant="contained"
    onClick={() => setFilter("All")}
  >
    All
  </Button>

  <Button
    variant="contained"
    color="success"
    onClick={() => setFilter("Placement")}
  >
    Placement
  </Button>

  <Button
    variant="contained"
    color="primary"
    onClick={() => setFilter("Result")}
  >
    Result
  </Button>

  <Button
    variant="contained"
    color="warning"
    onClick={() => setFilter("Event")}
  >
    Event
  </Button>
</Stack>

      <h2>Top Priority Notifications</h2>

      {topNotifications.map((item) => (
        <NotificationCard
          key={item.ID}
          notification={item}
        />
      ))}

      <h2>All Notifications</h2>

      {filteredNotifications.map((item) => (
  <NotificationCard
    key={item.ID}
    notification={item}
  />
))}
    </div>
  );
}

export default App;