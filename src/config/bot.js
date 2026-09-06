import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // THE LOUNGE BRAND
  // =========================
  // Visual direction: midnight lounge + soft violet neon.
  brand: {
    name: "The Lounge",
    tagline: "Chill • Connect • Enjoy",
    accent: "#A970FF",
    accentSoft: "#C39BFF",
    background: "#0D0A12",
  },

  // =========================
  // BOT PRESENCE (what users see under the bot name)
  // =========================
  // `status` options:
  // - "online"    = green dot
  // - "idle"      = yellow moon
  // - "dnd"       = red do-not-disturb
  // - "invisible" = appears offline
  presence: {
    // Current online state shown on Discord.
    status: "online",

    // Activity lines shown under the bot name.
    // `type` number mapping from Discord:
    // 0 = Playing
    // 1 = Streaming
    // 2 = Listening
    // 3 = Watching
    // 4 = Custom
    // 5 = Competing
    activities: [
      {
        name: "Custom Status",
        state: "hanging out in The Lounge 🌙",
        type: 4,
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR
  // =========================
  commands: {
    // Bot owner user IDs (comma-separated in OWNER_IDS env var).
    owners: process.env.OWNER_IDS?.split(",").map((id) => id.trim()).filter(Boolean) || [],

    // Default wait time between command uses (in seconds).
    defaultCooldown: 3,

    // If true, old commands are removed before re-registering.
    deleteCommands: false,

    // Optional server ID retained for tutorial compatibility.
    testGuildId: process.env.TEST_GUILD_ID,

    // When true (or MAINTENANCE_MODE=true), only bot owners can run commands.
    maintenanceMode: process.env.MAINTENANCE_MODE === "true",

    // Command prefix for text-based commands.
    prefix: process.env.PREFIX || "!",
  },

  // =========================
  // APPLICATIONS SYSTEM
  // =========================
  applications: {
    // Default questions shown when someone fills out an application.
    defaultQuestions: [
      { question: "What should we call you?", required: true },
      { question: "What brings you to The Lounge?", required: true },
      { question: "What kind of community experience are you looking for?", required: true },
    ],

    // Embed colors by application status.
    statusColors: {
      pending: "#FFA500",
      approved: "#00FF00",
      denied: "#FF0000",
    },

    // How long users must wait before submitting another application (hours).
    applicationCooldown: 24,

    // Auto-delete denied applications after this many days.
    deleteDeniedAfter: 7,

    // Auto-delete approved applications after this many days.
    deleteApprovedAfter: 30,

    // Role IDs allowed to manage applications.
    managerRoles: [],
  },

  // =========================
  // EMBED COLORS & BRANDING
  // =========================
  // IMPORTANT: This is the SINGLE SOURCE OF TRUTH for all bot colors
  embeds: {
    colors: {
      // Main brand colors.
      primary: "#A970FF",
      secondary: "#211A2D",

      // Standard status colors.
      success: "#57F287",
      error: "#ED4245",
      warning: "#FEE75C",
      info: "#8B7CFF",

      // Neutral utility colors.
      light: "#FFFFFF",
      dark: "#0D0A12",
      gray: "#B8AEC7",

      // Discord-style palette shortcuts.
      blurple: "#8B7CFF",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#D47CFF",
      red: "#ED4245",
      black: "#000000",

      // Feature-specific colors.
      giveaway: {
        active: "#A970FF",
        ended: "#ED4245",
      },

      ticket: {
        open: "#57F287",
        claimed: "#C39BFF",
        closed: "#ED4245",
        pending: "#B8AEC7",
      },

      economy: "#C39BFF",
      birthday: "#E7A7FF",
      moderation: "#A970FF",

      // Ticket priority color mapping.
      priority: {
        none: "#6F667A",
        low: "#9D7BFF",
        medium: "#C39BFF",
        high: "#f1c40f",
        urgent: "#D47CFF",
      },
    },

    footer: {
      // Default footer text used in bot embeds.
      text: "The Lounge • Bot",

      // Footer icon URL (null = no icon).
      icon: null,
    },

    // Default thumbnail URL for embeds.
    thumbnail: null,

    author: {
      // Optional default embed author block.
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // ECONOMY SETTINGS
  // =========================
  economy: {
    currency: {
      // Currency display name.
      name: "lounge points",

      // Plural display name.
      namePlural: "lounge points",

      // Currency symbol shown in balances.
      symbol: "✦",
    },

    // Starting balance for new users.
    startingBalance: 0,

    // Maximum bank amount before upgrades.
    baseBankCapacity: 100000,

    // Daily reward amount.
    dailyAmount: 100,

    // Work command random payout range.
    workMin: 10,
    workMax: 100,

    // Beg command random payout range.
    begMin: 5,
    begMax: 50,

    // Command cooldowns.
    cooldowns: {
      daily: 24 * 60 * 60 * 1000,
      work: 60 * 60 * 1000,
      crime: 2 * 60 * 60 * 1000,
      rob: 4 * 60 * 60 * 1000,
    },

    // Chance to succeed when robbing.
    robSuccessRate: 0.4,

    // Jail time after failed rob.
    robFailJailTime: 3600000,
  },

  // =========================
  // SHOP SETTINGS
  // =========================
  shop: {

  },

  // =========================
  // TICKET SYSTEM
  // =========================
  tickets: {
    // Category ID where new tickets are created.
    defaultCategory: null,

    // Role IDs allowed to manage/support tickets.
    supportRoles: [],

    // Priority options users/staff can assign.
    priorities: {
      none: {
        emoji: "⚪",
        color: "#6F667A",
        label: "None",
      },

      low: {
        emoji: "🟢",
        color: "#9D7BFF",
        label: "Low",
      },

      medium: {
        emoji: "🟡",
        color: "#C39BFF",
        label: "Medium",
      },

      high: {
        emoji: "🔴",
        color: "#f1c40f",
        label: "High",
      },

      urgent: {
        emoji: "🚨",
        color: "#D47CFF",
        label: "Urgent",
      },
    },

    // Default priority for new tickets.
    defaultPriority: "none",

    // Category ID where closed tickets are archived.
    archiveCategory: null,

    // Channel ID where ticket logs are sent.
    logChannel: null,
  },

  // =========================
  // GIVEAWAY SETTINGS
  // =========================
  giveaways: {
    // Default giveaway duration.
    defaultDuration: 86400000,

    // Allowed winner count range.
    minimumWinners: 1,
    maximumWinners: 10,

    // Allowed giveaway duration range.
    minimumDuration: 300000,
    maximumDuration: 2592000000,

    // Role IDs allowed to host giveaways.
    allowedRoles: [],

    // Role IDs that bypass giveaway restrictions.
    bypassRoles: [],
  },

  // =========================
  // BIRTHDAY SETTINGS
  // =========================
  birthday: {
    // Role ID given to users on their birthday.
    defaultRole: null,

    // Channel ID where birthday announcements are posted.
    announcementChannel: null,

    // Timezone used to calculate birthday dates.
    timezone: "UTC",
  },

  // =========================
  // VERIFICATION SETTINGS
  // =========================
  verification: {
    // Message shown when posting the verification panel.
    defaultMessage:
      "🌙 Welcome to **The Lounge**. Click below to verify and settle into the community.",

    // Text on the verification button.
    defaultButtonText: "Enter The Lounge",

    // Automatic verification behavior.
    autoVerify: {
      defaultCriteria: "none",

      defaultAccountAgeDays: 7,

      serverSizeThreshold: 1000,

      minAccountAge: 1,
      maxAccountAge: 365,

      sendDMNotification: true,

      criteria: {
        account_age: "Account must be older than specified days",
        server_size: "All users if server has less than 1000 members",
        none: "All users immediately",
      },
    },

    // Minimum time between verification attempts.
    verificationCooldown: 5000,

    // Maximum failed attempts allowed inside the time window.
    maxVerificationAttempts: 3,

    // Time window for counting attempts.
    attemptWindow: 60000,

    // In-memory safety limits.
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,

    // Cleanup frequency.
    cooldownCleanupInterval: 300000,

    // Maximum metadata payload size for audit entries.
    maxAuditMetadataBytes: 4096,

    // Maximum number of audit entries kept in memory.
    maxInMemoryAuditEntries: 1000,

    // If true, log every verification action.
    logAllVerifications: true,

    // If true, preserve verification audit history.
    keepAuditTrail: true,
  },

  // =========================
  // WELCOME / GOODBYE MESSAGES
  // =========================
  welcome: {
    // Welcome template posted when a user joins.
    // Placeholders: {user}, {server}, {memberCount}
    defaultWelcomeMessage:
      "🌙 Welcome {user} to **{server}** — grab a seat and make yourself at home. We're now **{memberCount}** members strong.",

    // Goodbye template posted when a user leaves.
    // Placeholders: {user}, {memberCount}
    defaultGoodbyeMessage:
      "🌙 {user} quietly slipped out of **{server}**. We're now **{memberCount}** members.",

    // Channel ID for welcome messages.
    defaultWelcomeChannel: null,

    // Channel ID for goodbye messages.
    defaultGoodbyeChannel: null,
  },

  // =========================
  // COUNTER CHANNELS
  // =========================
  counters: {
    defaults: {
      // Default naming/description templates for counter entries.
      name: "{name} Counter",
      description: "Server {name} counter",

      // Channel type used for counters.
      type: "voice",

      // Channel name format.
      channelName: "{name}-{count}",
    },

    permissions: {
      deny: ["VIEW_CHANNEL"],
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },

    messages: {
      created: "🌙 Created the **{name}** lounge counter.",
      deleted: "🌙 Removed the **{name}** lounge counter.",
      updated: "✨ Updated the **{name}** lounge counter.",
    },

    types: {
      members: {
        name: "👥 Members",
        description: "Total members in the server",
        getCount: (guild) => guild.memberCount.toString(),
      },

      bots: {
        name: "🤖 Bots",
        description: "Total bot accounts in the server",
        getCount: (guild) =>
          guild.members.cache.filter((m) => m.user.bot).size.toString(),
      },

      members_only: {
        name: "👤 Humans",
        description: "Total human members (non-bots)",
        getCount: (guild) =>
          guild.members.cache.filter((m) => !m.user.bot).size.toString(),
      },
    },
  },

  // =========================
  // GENERIC BOT MESSAGES
  // =========================
  messages: {
    noPermission:
      "🌙 You don't have permission to use that here.",

    cooldownActive:
      "☕ Take a breather — try again in **{time}**.",

    errorOccurred:
      "🌙 Something went wrong behind the scenes. Please try again.",

    missingPermissions:
      "🌙 I'm missing a permission needed for that.",

    commandDisabled:
      "🌙 That feature is currently taking a break.",

    maintenanceMode:
      "🌙 The Lounge is currently getting a little maintenance. Please check back soon.",
  },

  // =========================
  // FEATURE TOGGLES
  // =========================
  features: {
    // Core systems.
    economy: true,
    leveling: true,
    moderation: true,
    logging: true,
    welcome: true,

    // Community engagement systems.
    tickets: true,
    giveaways: true,
    birthday: true,
    counter: true,

    // Security and self-service systems.
    verification: true,
    reactionRoles: true,
    joinToCreate: true,

    // Utility/quality-of-life modules.
    voice: true,
    search: true,
    tools: true,
    utility: true,
    community: true,
    fun: true,
    music: true,
  },
};

export function validateConfig(config) {
  const errors = [];

  if (process.env.NODE_ENV !== 'production') {
    logger.debug('Environment variables check:');
    logger.debug('DISCORD_TOKEN exists:', !!process.env.DISCORD_TOKEN);
    logger.debug('TOKEN exists:', !!process.env.TOKEN);
    logger.debug('CLIENT_ID exists:', !!process.env.CLIENT_ID);
    logger.debug('GUILD_ID exists:', !!process.env.GUILD_ID);
    logger.debug('POSTGRES_HOST exists:', !!process.env.POSTGRES_HOST);
    logger.debug('NODE_ENV:', process.env.NODE_ENV);
  }

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push(
      "Bot token is required (DISCORD_TOKEN or TOKEN environment variable)"
    );
  }

  if (!process.env.CLIENT_ID) {
    errors.push(
      "Client ID is required (CLIENT_ID environment variable)"
    );
  }

  if (process.env.NODE_ENV === 'production') {
    // A full connection URL satisfies all Postgres requirements.
    const hasConnectionUrl = Boolean(
      process.env.POSTGRES_URL || process.env.DATABASE_URL
    );

    if (!hasConnectionUrl) {
      if (!process.env.POSTGRES_HOST) {
        errors.push(
          "PostgreSQL connection is required in production (set DATABASE_URL/POSTGRES_URL, or POSTGRES_HOST)"
        );
      }

      if (!process.env.POSTGRES_USER) {
        errors.push(
          "PostgreSQL user is required in production (set DATABASE_URL/POSTGRES_URL, or POSTGRES_USER)"
        );
      }

      if (!process.env.POSTGRES_PASSWORD) {
        errors.push(
          "PostgreSQL password is required in production (set DATABASE_URL/POSTGRES_URL, or POSTGRES_PASSWORD)"
        );
      }
    }
  }

  return errors;
}

const configErrors = validateConfig(botConfig);

if (configErrors.length > 0) {
  logger.error(
    "Bot configuration errors:",
    configErrors.join("\n")
  );

  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}

export const BotConfig = botConfig;

const COMMAND_CATEGORY_FEATURE_MAP = {
  birthday: "birthday",
  community: "community",
  economy: "economy",
  fun: "fun",
  giveaway: "giveaways",
  jointocreate: "joinToCreate",
  leveling: "leveling",
  logging: "logging",
  moderation: "moderation",
  music: "music",
  reaction_roles: "reactionRoles",
  search: "search",
  serverstats: "counter",
  ticket: "tickets",
  tools: "tools",
  utility: "utility",
  verification: "verification",
  welcome: "welcome",
};

function normalizeCategoryKey(category) {
  return String(category || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
}

export function getCommandPrefix() {
  return botConfig.commands?.prefix ?? "!";
}

export function getBotOwners() {
  return (botConfig.commands?.owners ?? [])
    .map((id) => String(id).trim())
    .filter(Boolean);
}

export function isBotOwner(userId) {
  if (!userId) {
    return false;
  }

  return getBotOwners().includes(String(userId));
}

export function isMaintenanceMode() {
  return botConfig.commands?.maintenanceMode === true;
}

export function getBotMessage(key, replacements = {}) {
  let message = botConfig.messages?.[key] || key;

  for (const [placeholder, value] of Object.entries(replacements)) {
    message = message.replace(
      new RegExp(`\\{${placeholder}\\}`, "g"),
      String(value)
    );
  }

  return message;
}

export function isFeatureEnabled(featureKey) {
  if (!featureKey) {
    return true;
  }

  return botConfig.features?.[featureKey] !== false;
}

export function isCommandCategoryEnabled(category) {
  const normalized = normalizeCategoryKey(category);

  if (!normalized || normalized === "core") {
    return true;
  }

  const featureKey = COMMAND_CATEGORY_FEATURE_MAP[normalized];

  if (!featureKey) {
    return true;
  }

  return isFeatureEnabled(featureKey);
}

export function getApplicationStatusColor(status) {
  const colors = botConfig.applications?.statusColors || {};
  const hex = colors[status];

  return hex
    ? getColor(hex)
    : getColor(
        status === "approved"
          ? "success"
          : status === "denied"
            ? "error"
            : "warning"
      );
}

export function getDefaultApplicationQuestions() {
  return (botConfig.applications?.defaultQuestions || [])
    .map((entry) =>
      typeof entry === "string" ? entry : entry.question
    )
    .filter(Boolean);
}

export function getColor(path, fallback = "#99AAB5") {
  if (typeof path === "number") {
    return path;
  }

  if (
    typeof path === "string" &&
    path.startsWith("#")
  ) {
    return parseInt(path.replace("#", ""), 16);
  }

  const result = path
    .split(".")
    .reduce(
      (obj, key) =>
        obj && obj[key] !== undefined ? obj[key] : fallback,
      botConfig.embeds.colors
    );

  if (
    typeof result === "string" &&
    result.startsWith("#")
  ) {
    return parseInt(result.replace("#", ""), 16);
  }

  return result;
}

export function getRandomColor() {
  const colors = Object.values(botConfig.embeds.colors).flatMap(
    (color) =>
      typeof color === "string"
        ? color
        : Object.values(color)
  );

  return colors[
    Math.floor(Math.random() * colors.length)
  ];
}

export default botConfig;
