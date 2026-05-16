import axios from "axios";
import { Log } from "../utils/logger";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJoYXJzaGEudmFyZGhhbjIwMjJAdml0c3R1ZGVudC5hYy5pbiIsImV4cCI6MTc3ODkzNDE5MiwiaWF0IjoxNzc4OTMzMjkyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZTRhNDIxYjItMDNlOC00M2E4LTk1MmItZmRiN2I0NjNiMDQzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiaGFyc2hhdmFyZGhhbiIsInN1YiI6IjkzNWM1M2M2LWFmYjgtNDhlYi04ZjE4LTM0NjQ2M2ZjZmNjYyJ9LCJlbWFpbCI6ImhhcnNoYS52YXJkaGFuMjAyMkB2aXRzdHVkZW50LmFjLmluIiwibmFtZSI6ImhhcnNoYXZhcmRoYW4iLCJyb2xsTm8iOiIyMm1pczQ5MCIsImFjY2Vzc0NvZGUiOiJTZkZ1V2ciLCJjbGllbnRJRCI6IjkzNWM1M2M2LWFmYjgtNDhlYi04ZjE4LTM0NjQ2M2ZjZmNjYyIsImNsaWVudFNlY3JldCI6ImtNa3BxcG1iSGhwTkhaZXQifQ.N1HrfQkFmHoearYa3xex-kUejQZvBVTr8CGfsxK20a4";

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

export const fetchNotifications = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    await Log(
      "frontend",
      "info",
      "api",
      "Fetched notifications successfully"
    );

    return response.data.notifications;
  } catch (error) {
    await Log(
      "frontend",
      "error",
      "api",
      "Failed to fetch notifications"
    );

    console.error(error);
    return [];
  }
};