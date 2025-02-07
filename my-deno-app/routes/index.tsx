import { h } from "preact";
import { Home, Settings, Zap, Grid, User, HelpCircle } from "lucide-preact";

export default function Dashboard() {
  return (
    <div
      style="display: flex; flex-direction: row; height: 100vh; font-family: Inter, sans-serif; background-color: #121212; color: white; padding-left: 5px; padding-top: 10px; padding-bottom: 10px;"
    >
      {/* Sidebar */}
      <aside
        style="width: 250px; background-color: #1E1E2D; padding: 20px; border-radius: 20px; margin-left: 20px; border: 0.1px solid #d3e0e0;"
      >
        <img
          src="logoAI.png"
          alt="Logo"
          style="margin: 0 auto 30px auto; display: block; width: 70px; height: auto; border-radius: 10px;"
        />
        <nav>
          {[{ icon: Home, text: "Home" }, { icon: Zap, text: "Automations" }, { icon: Grid, text: "Integrations" }, { icon: Settings, text: "Settings" }].map((item) => (
            <a
              href="#"
              style="display: flex; align-items: center; margin: 10px 0; color: white; text-decoration: none; gap: 10px; padding: 8px; border-radius: 10px; transition: background 0.3s;"
            >
              <item.icon size={18} />
              {item.text}
            </a>
          ))}
        </nav>
        <div
          style="width: 140px; height: 1px; background-color: #374151; margin: 20px auto; border-radius: 2px;"
        ></div>
        <nav>
          {[{ icon: User, text: "Profile" }, { icon: HelpCircle, text: "Help" }].map((item) => (
            <a
              href="#"
              style="display: flex; align-items: center; margin: 10px 0; color: white; text-decoration: none; gap: 10px; padding: 8px; border-radius: 10px; transition: background 0.3s;"
            >
              <item.icon size={18} />
              {item.text}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main style="flex: 1; padding: 20px; overflow-y: auto;">
      <header
          style="justify-content: space-between; align-items: center; margin-bottom: 20px; text-align: center;"
        >
          <h1 style="font-size: 20px;">Welcome back, User!</h1>
        </header>

        <section style="display: flex; gap: 15px; margin-bottom: 20px;">
          {["Set-up Auto Replies", "Answer Questions with AI", "Manage Workflows"].map((title, index) => (
            <div
              key={index}
              style="flex: 1; background-color: #1F2937; padding: 15px; border-radius: 20px; transition: transform 0.2s, background 0.3s;"
            >
              <h3 style="font-size: 16px;">{title}</h3>
              <p style="font-size: 14px;">
                {index === 0
                  ? "Deliver a product lineup through Instagram DM."
                  : index === 1
                  ? "Identify and respond to queries with AI."
                  : "Streamline processes with automated workflows."}
              </p>
            </div>
          ))}
        </section>

        <section
          style="background-color: #1F2937; padding: 15px; border-radius: 20px; transition: transform 0.2s, background 0.3s;"
        >
          <h3 style="font-size: 16px;">Automated Activity</h3>
          <div
            style="margin-top: 15px; height: 180px; background: linear-gradient(180deg, #3B82F6 0%, transparent 100%); border-radius: 20px;"
          ></div>
        </section>
      </main>
    </div>
  );
}
