# WhatsApp AI Meal Planner System — README

This README explains how to set up and use the **AI‑powered Meal Planner System** built in **n8n**, integrated with WhatsApp, Google Gemini Chat Model, and Simple Memory to provide personalized meal recommendations.

---

## 📌 **Overview**
The WhatsApp Meal Planner System allows users to chat naturally through WhatsApp and receive:
- Personalized meal suggestions
- Diet‑based recommendations (veg/non‑veg/vegan/etc.)
- Daily or weekly meal plans
- Smart follow‑up questions
- Memory‑based personalization (preferences stored)

The system uses:
- **WhatsApp Trigger** → receive messages
- **AI Agent Node** → conversation logic
- **Google Gemini Chat Model** → generates human‑like responses
- **Simple Memory Model** → remembers user preferences
- **WhatsApp Send** → send messages + wait for replies

---

## 🧩 **Workflow Structure**
Visual layout of the system:

```
WhatsApp Trigger
        │
        ▼
AI Agent
   ├── Chat Model → Google Gemini Chat Model
   ├── Memory → Simple Memory
   └── Tool (optional future expansion)
        │
        ▼
Send Message & Wait for Response (WhatsApp)
```

---

## 📱 **How the System Works**
1. A user sends a WhatsApp message like:
   - “I want a meal plan.”
   - “I am vegetarian.”
   - “Suggest dinner for today.”

2. WhatsApp Trigger passes the message to the **AI Agent**.

3. The AI Agent uses:
   - **Gemini Chat Model** for natural conversation
   - **Simple Memory** to remember:
     - diet type, allergies, disliked items
     - preferred cuisines
     - previous meal plan conversations

4. The response is sent back through the **WhatsApp Send + wait for reply** node.

5. The conversation continues naturally.

---

## ⚙️ **Node‑by‑Node Configuration**

### 1️⃣ **WhatsApp Trigger Node**
Receives incoming messages.
- Must be connected to your WhatsApp Business API provider (e.g., Gupshup, Twilio, UltraMsg).

---

### 2️⃣ **AI Agent Node**
Core intelligence of the workflow.

**Inputs:**
- Chat Model → **Google Gemini Chat Model**
- Memory → **Simple Memory**
- Tools → Optional actions (e.g., fetch meal data, check calories)

**AI Agent Purpose:**
- Process user queries
- Understand diet preferences
- Store profile details
- Generate meal suggestions
- Ask follow‑up questions automatically

Example tasks:
- User: “I am allergic to peanuts” → AI stores this in memory
- User: “Give me dinner idea” → AI gives safe, diet‑friendly options

---

### 3️⃣ **Google Gemini Chat Model Node**
Provides:
- Natural language conversation
- Personality & tone configuration
- Meal planning logic

You can set instructions such as:
```
You are a meal‑planner assistant.
Suggest meals based on user dietary preferences.
Always ask clarifying questions if needed.
Avoid repetitive suggestions.
```

---

### 4️⃣ **Simple Memory Node**
Stores user data automatically.
Memory is retrieved on the next message.
Helps the assistant become personalized.

Examples stored in memory:
```
Diet: vegetarian
Allergy: peanuts
Preferred cuisine: Indian
Goal: weight loss
```

---

### 5️⃣ **WhatsApp Send Message & Wait for Response Node**
Sends the AI‑generated message back to the user.
Then waits for the user’s next input to continue the loop.

---

## 💬 **User Experience Example**
**User:** Hi

**Bot:** Hello! Do you want a meal plan for today or the whole week?

**User:** Today. I am vegetarian.

**Bot:** Great! Here is a healthy vegetarian meal plan for today...

It will also remember this preference for future chats.

---

## 🎬 **Demo Videos**

### 📱 Mobile Chat Demo
![Mobile Chat Demo](assest/meal planner/WhatsApp Video 2025-11-22 at 18.06.43_a2d1d86a_compressed.mp4)

### 🖥️ Workflow Recording
![Workflow Recording](assest/meal planner/Recording 2025-11-22 192537_compressed.mp4)

---

## 🚀 **Future Enhancements**
You can expand this system with:
- Calorie calculator tool
- Custom recipe generator
- Shopping list generator
- Weekly plan PDF export
- Nutrition API integration

If you want, I can build these features too.

---

## 👨‍💻 Author
**Ashish Kumar**

