import { h } from "preact";
import { Home, Settings, Zap, Grid } from "lucide-preact";

export default function Dashboard() {
  return (
    <div
      style="display: flex; flex-direction: row; height: 100vh; font-family: Arial, sans-serif; background-color: #121212; color: white;"
    >
      {/* Sidebar */}
      <aside
        style="width: 250px; background-color: #1E1E2D; padding: 20px; border-top-right-radius: 20px; border-bottom-right-radius: 20px;"
      >
        <h2
          style="margin-bottom: 30px; font-size: 24px; text-align: center; font-weight: bold;"
        >
          Dashboard
        </h2>
        <nav>
          <a
            href="#"
            style="display: flex; align-items: center; margin: 10px 0; color: white; text-decoration: none; gap: 10px; padding: 8px; border-radius: 10px; transition: background 0.3s;"
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3B82F6")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <Home size={18} />
            Home
          </a>
          <a
            href="#"
            style="display: flex; align-items: center; margin: 10px 0; color: white; text-decoration: none; gap: 10px; padding: 8px; border-radius: 10px; transition: background 0.3s;"
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3B82F6")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <Zap size={18} />
            Automations
          </a>
          <a
            href="#"
            style="display: flex; align-items: center; margin: 10px 0; color: white; text-decoration: none; gap: 10px; padding: 8px; border-radius: 10px; transition: background 0.3s;"
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3B82F6")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <Grid size={18} />
            Integrations
          </a>
          <a
            href="#"
            style="display: flex; align-items: center; margin: 10px 0; color: white; text-decoration: none; gap: 10px; padding: 8px; border-radius: 10px; transition: background 0.3s;"
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3B82F6")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <Settings size={18} />
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main style="flex: 1; padding: 20px; overflow-y: auto;">
        <header
          style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;"
        >
          <h1 style="font-size: 20px;">Welcome back, User!</h1>
          <button
            style="padding: 8px 16px; background-color: #3B82F6; color: white; border: none; border-radius: 10px; cursor: pointer; transition: transform 0.2s;"
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Create an Automation
          </button>
        </header>

        <section style="display: flex; gap: 15px; margin-bottom: 20px;">
          <div
            style="flex: 1; background-color: #1F2937; padding: 15px; border-radius: 10px; transition: transform 0.2s, background 0.3s;"
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#374151";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#1F2937";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h3 style="font-size: 16px;">Set-up Auto Replies</h3>
            <p style="font-size: 14px;">Deliver a product lineup through Instagram DM.</p>
          </div>
          <div
            style="flex: 1; background-color: #1F2937; padding: 15px; border-radius: 10px; transition: transform 0.2s, background 0.3s;"
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#374151";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#1F2937";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h3 style="font-size: 16px;">Answer Questions with AI</h3>
            <p style="font-size: 14px;">Identify and respond to queries with AI.</p>
          </div>
        </section>

        <section
          style="background-color: #1F2937; padding: 15px; border-radius: 10px; transition: transform 0.2s, background 0.3s;"
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#374151";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#1F2937";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <h3 style="font-size: 16px;">Automated Activity</h3>
          <div
            style="margin-top: 15px; height: 180px; background: linear-gradient(180deg, #3B82F6 0%, transparent 100%); border-radius: 10px;"
          ></div>
        </section>
      </main>
    </div>
  );
}
