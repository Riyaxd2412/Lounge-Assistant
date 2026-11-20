

**Lounge Assistant** is a feature-rich Discord bot designed to enhance your server experience with moderation tools, economy features, utility commands, community engagement systems, and more. Built with Discord.js v14 and PostgreSQL for reliable performance and data persistence.

[![Support Server](https://img.shields.io/badge/-Support%20Server-%235865F2?logo=discord&logoColor=white&style=flat-square&logoWidth=20)](https://discord.gg/8kJBYhTGW9)
[![Discord.js](https://img.shields.io/npm/v/discord.js?style=flat-square&labelColor=%23202225&color=%23202225&logo=npm&logoColor=white&logoWidth=20)](https://www.npmjs.com/package/discord.js)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-%23336791?logo=postgresql&logoColor=white&style=flat-square&logoWidth=20)

## Table of Contents

- [Features Overview](#features-overview)
- [Quick Setup](#quick-setup)
- [Manual Installation Steps](#manual-installation-steps)
- [Support Server](https://discord.gg/QnWNz2dKCE)
- [Required Bot Intents](#required-bot-intents)
- [Contributing](CONTRIBUTING.md)

## Features Overview

Lounge Assistant offers a suite of tools for Discord server management and community engagement:

<table>
<tr>
<td width="50%" valign="top">

### Moderation & Administration
- **Mass Actions** - Bulk ban/kick capabilities
- **User Notes** - Keep detailed moderation records
- **Case Management** - View and track moderation actions

### Economy System
- **Shop & Inventory** - Buy and manage items
- **Pay System** - Transfer money between users

### Fun & Entertainment
- **Random Facts** - Learn something new
- **Wanted Poster** - Create fun wanted images
- **Text Reversal** - Reverse any text

### Advanced Ticket System
- **Claim & Priority** - Staff ticket management
- **Ticket Limits** - Prevent spam
- **Transcript System** - Save ticket history

### Server Stats
- **Member Counter** - Live member count channels
- **Voice Counters** - Track voice stats
- **Dynamic Updates** - Real-time channel updates

### Reaction Roles
- **Role Assignment** - Self-assignable roles
- **Emoji Selection** - Reaction-based system
- **Multi-role Support** - Multiple role options

</td>
<td width="50%" valign="top">

### Leveling & XP System
- **XP Tracking** - Automatic message-based XP
- **Level Roles** - Auto-assign roles by level
- **Custom Configuration** - Personalize leveling

### Giveaways & Events
- **Multiple Winners** - Support multi-winner giveaways
- **Auto Picking** - Automatic winner selection
- **Reroll System** - Pick new winners if needed

### Birthday System
- **Birthday Tracking** - Never miss a birthday
- **Auto Announcements** - Celebrate automatically
- **Timezone Support** - Accurate worldwide tracking

### Utility Tools
- **Report System** - Report issues to staff
- **Todo Lists** - Personal task management
- **First Message** - Jump to a channel's first message

### Welcome System
- **Welcome Messages** - Greet new members
- **Auto Roles** - Assign roles on join
- **Custom Embeds** - Personalized messages

### Music
- **24/7 Mode** - Keep music running continuously
- **Interactive Button System** - Manage music through buttons
- **Multi-platform Support** - Play music from supported audio services

</td>
</tr>
</table>

## Quick Setup

### Docker Deployment

Lounge Assistant is containerized for convenient deployment.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DarkBoy24/Lounge-Assistant.git
   cd Lounge-Assistant
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   Set at minimum `DISCORD_TOKEN`, `CLIENT_ID`, and `GUILD_ID`. Docker Compose also reads `POSTGRES_USER`, `POSTGRES_PASSWORD`, and `POSTGRES_DB` from `.env` (defaults: `titanbot` / `password` / `titanbot`).

3. **Build and start the containers:**
   ```bash
   docker compose up -d --build
   ```

4. **Check status:**
   ```bash
   docker compose ps
   curl http://localhost:3000/health
   ```

This starts the bot and PostgreSQL. The Compose configuration sets `POSTGRES_SSL=false` and `AUTO_MIGRATE=true` for the bundled database. Music uses public Lavalink v4 nodes from `lavalink/nodes.json` by default.

### Music

Music uses [Lavalink v4](https://github.com/lavalink-devs/Lavalink) via [Riffy](https://github.com/riffy-rb/riffy).

1. By default, the bot loads public v4 SSL nodes from [`lavalink/nodes.json`](lavalink/nodes.json). Edit that file to add or remove nodes.
2. To self-host Lavalink, run `docker compose --profile local-lavalink up -d` and set the single-node environment variables in `.env`:
   ```env
   LAVALINK_HOST=lavalink
   LAVALINK_PORT=2333
   LAVALINK_PASSWORD=youshallnotpass
   LAVALINK_SECURE=false
   ```
   Remove or rename `lavalink/nodes.json` so the bot falls back to those environment variables.
3. Override nodes inline with `LAVALINK_NODES` (JSON array) or point to another file with `LAVALINK_NODES_FILE`.
4. Use `/play <song>` from a voice channel, or `/join` to connect without playing. Prefix shortcuts include `join`, `np`, `leave`, `pause`, `resume`, `skip`, `stop`, `volume <0-100>`, or `music <subcommand>`. Use `/nowplaying` and `/queue` for status; use `/music` for loop, shuffle, seek, and other controls.

### Using GitHub Container Registry

The bot image is published to GitHub Container Registry by the upstream project. Check the repository's available packages for the current image name and tags before pulling.

## Manual Installation Steps

### Prerequisites
- Node.js 20.10.0 or higher
- PostgreSQL server (recommended) or memory storage fallback
- Discord bot application with the required intents

1. **Clone the Repository**
   ```bash
   git clone https://github.com/DarkBoy24/Lounge-Assistant.git
   cd Lounge-Assistant
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration. At minimum, configure:
   ```env
   DISCORD_TOKEN=your_discord_bot_token_here
   CLIENT_ID=your_discord_client_id_here
   GUILD_ID=your_discord_guild_id_here
   POSTGRES_URL=postgresql://username:password@host:5432/database
   ```

   Production recommendations:
   - `NODE_ENV=production`
   - `LOG_LEVEL=warn`
   - `WEB_HOST=0.0.0.0`
   - `PORT=3000`
   - `PORT_RETRY_ATTEMPTS=5`

   If the selected port is already in use, the application can try the next available port(s), up to `PORT_RETRY_ATTEMPTS`.

### Multiple Servers

Slash commands are registered globally via `CLIENT_ID`, so the bot can work in every server where it is invited. `GUILD_ID` remains available for guild-specific setup.

Notes:
- Global slash commands may take up to about an hour to appear after the first deployment.
- Server data is isolated by guild.
- In the [Discord Developer Portal](https://discord.com/developers/applications), ensure the bot is not restricted to a single guild if you plan to invite it elsewhere.
- Generate an OAuth2 invite URL from the Discord Developer Portal (OAuth2 → URL Generator, scopes: `bot` and `applications.commands`).

4. **Set Up PostgreSQL**
   Create a PostgreSQL database and configure its connection URL in `POSTGRES_URL`. For hosted PostgreSQL providers, use the provider's connection string and follow its SSL requirements.

5. **Verify Database Setup**
   ```bash
   npm run migrate:check
   ```

6. **Start the Bot**
   ```bash
   npm start
   ```

> **Database migrations:** Schema tables and supported migrations run automatically on startup when `AUTO_MIGRATE=true`. To disable automatic migration, set `AUTO_MIGRATE=false`.

## Required Bot Intents

Lounge Assistant requires the following Discord intents:
- **Guilds**
- **Guild Messages**
- **Message Content**
- **Guild Members**
- **Guild Message Reactions**
- **Guild Voice States**
- **Direct Messages**

## Required Permissions

- **View Channels**
- **Send Messages**
- **Embed Links**
- **Attach Files**
- **Read Message History**
- **Manage Messages**
- **Manage Channels**
- **Manage Roles**
- **Kick Members**
- **Ban Members**
- **Moderate Members**
- **Connect**

## License

Lounge Assistant is released under the MIT License. See [LICENSE](LICENSE) for details.

## Thank You

Thank you for choosing Lounge Assistant for your Discord server. Contributions and feedback are welcome.
"""
p = Path("/mnt/data/README.md")
p.write_text(readme, encoding="utf-8")
print(f"Created {p} ({len(readme.splitlines())} lines)")
