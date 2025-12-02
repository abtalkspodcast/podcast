# WhatsApp AI Reminder System — README

This README explains how to build and use the **AI-powered Reminder System** using **WhatsApp + AI Agent + Memory** in n8n. This system allows users to set reminders naturally through WhatsApp, and the AI stores the reminder details and can trigger future actions.

---

## 📌 Overview
The WhatsApp AI Reminder System allows users to:
- Set reminders using natural language
- Ask the AI to create, update, or cancel reminders
- Store reminder details (time, date, purpose) with memory
- Receive confirmation and follow-up questions
- Expand into automatic reminder triggering (optional)

The system uses the following nodes:
- **WhatsApp Trigger** — receives user messages
- **AI Agent** — interprets user intent
- **LLM Model (Gemini/ChatGPT)** — generates responses
- **Simple Memory** — stores reminder details
- **WhatsApp Send & Wait** — sends replies

---

## 🧩 Workflow Structure

Workflow diagram structure:

```
WhatsApp Trigger
        │
        ▼
AI Agent
   ├── Chat Model
   ├── Memory
   └── Tools (future: add reminder to database)
        │
        ▼
WhatsApp Send Message & Wait for Response
```

---

## 🔥 Features
- Understands natural language like:
  - "Remind me tomorrow at 5 PM to drink water"
  - "Set a reminder for my doctor's appointment on Monday"
  - "Cancel my last reminder"
  - "What reminders do I have?"
- Stores reminders in memory
- Can be expanded to store reminders in Google Sheets or a database
- Supports ongoing smart conversation

---

## ⚙️ Node-by-Node Explanation

### 1️⃣ WhatsApp Trigger
Receives incoming WhatsApp messages and starts the workflow.

---

### 2️⃣ AI Agent Node
This node is the heart of the system.

Connected components:
- **Chat Model** → processes user intent
- **Memory** → stores reminder details
- **Tool (optional)** → execute future functions (saving reminders)

Example prompt instructions:
```
You are a smart reminder assistant.
Understand user messages and extract:
- Reminder title
- Date
- Time
Store these details in memory.
If details are missing, ask follow-up questions.
Confirm every reminder clearly.
```

---

### 3️⃣ Chat Model (Google Gemini / OpenAI)
Provides the intelligence to:
- Interpret date & time
- Understand natural language
- Generate confirmations

You may set personality:
```
Be friendly. Always confirm extracted reminder details.
```

---

### 4️⃣ Simple Memory Model
Stores data such as:
```
Reminder: Pay electricity bill
Date: 2025-02-12
Time: 09:00 AM
User preference: English
```
Memory allows the bot to remember previous reminders.

---

### 5️⃣ WhatsApp Send & Wait Node
Sends a response to the user and waits for the next input.

Examples:
- "Got it! I'll remind you tomorrow at 5 PM to drink water."
- "I see you want to set a reminder. What is the time?"

---

## 💬 Example Conversation Flow
**User:** Remind me to submit the report tomorrow.

**Bot:** Sure! What time tomorrow should I remind you?

**User:** 9 AM

**Bot:** Perfect! I’ll remind you tomorrow at 9 AM to submit the report.

---

## 🎬 Demo Video

![WhatsApp AI Reminder System Demo](assest/reminder.mp4)

---

## 🚀 Future Enhancements
You can extend this system with:
- Scheduled reminder triggers using Cron
- Google Calendar integration
- Multiple user support
- Admin dashboard
- Voice note understanding

If you'd like, I can help you expand any of these.

---

## 👨‍💻 Author
**Ashish Kumar**