import axios from "axios";

const token = "YeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJoYXJzaGEudmFyZGhhbjIwMjJAdml0c3R1ZGVudC5hYy5pbiIsImV4cCI6MTc3ODkzNDE5MiwiaWF0IjoxNzc4OTMzMjkyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZTRhNDIxYjItMDNlOC00M2E4LTk1MmItZmRiN2I0NjNiMDQzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiaGFyc2hhdmFyZGhhbiIsInN1YiI6IjkzNWM1M2M2LWFmYjgtNDhlYi04ZjE4LTM0NjQ2M2ZjZmNjYyJ9LCJlbWFpbCI6ImhhcnNoYS52YXJkaGFuMjAyMkB2aXRzdHVkZW50LmFjLmluIiwibmFtZSI6ImhhcnNoYXZhcmRoYW4iLCJyb2xsTm8iOiIyMm1pczQ5MCIsImFjY2Vzc0NvZGUiOiJTZkZ1V2ciLCJjbGllbnRJRCI6IjkzNWM1M2M2LWFmYjgtNDhlYi04ZjE4LTM0NjQ2M2ZjZmNjYyIsImNsaWVudFNlY3JldCI6ImtNa3BxcG1iSGhwTkhaZXQifQ.N1HrfQkFmHoearYa3xex-kUejQZvBVTr8CGfsxK20a4";

const logApi =
  "http://4.224.186.213/evaluation-service/logs";

export const writeLog = async (
  level: "debug" | "info" | "warn" | "error" | "fatal",
  packageName:
    | "api"
    | "component"
    | "hook"
    | "page"
    | "state"
    | "style"
    | "auth"
    | "config"
    | "middleware"
    | "utils",
  message: string
) => {
  try {
    await axios.post(
      logApi,
      {
        stack: "frontend",
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (err) {
    console.error("Log error");
  }
};