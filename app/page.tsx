// app/page.tsx
export default function Home() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "Lab 8 App";
  const studentName = process.env.NEXT_PUBLIC_STUDENT_NAME || "Muhammad Jibran";

  return (
    <main style={{ textAlign: "center", marginTop: "10%" }}>
      <h1>Lab 8 — Vercel Deployment</h1>
      <p>Name: Muhammad Jibran</p>
      <p>Roll: 01-131232-062</p>
      <p>App: {appName} | Student: {studentName}</p>

      <ul style={{ listStyle: "none", marginTop: "20px" }}>
        <li>✅ Lab 5 — Docker</li>
        <li>✅ Lab 6 — LocalStack</li>
        <li>✅ Lab 7 — Terraform</li>
        <li>✅ Lab 8 — Vercel</li>
      </ul>
    </main>
  );
}