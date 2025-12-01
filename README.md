# POD Mail Automation System — README

This README explains how to use the automated email sending system built in **n8n**. The workflow sends scheduled or templated emails to a list of recipients using Google Sheets + Gmail.

---

## 📌 **Overview**

This automation system allows you to:

* Store email templates in a Google Sheet (message + wait time).
* Store a list of recipients in another Google Sheet (name + email).
* Automatically combine templates and recipient data.
* Wait according to the template timing.
* Send emails to each recipient via Gmail.

The workflow is built using n8n nodes:

* **Manual Trigger**
* **Google Sheets (Templates)**
* **Google Sheets (Email List)**
* **Combine Node**
* **Wait Node**
* **Gmail Send Node**

---

## 🛠️ **Workflow Structure**

Below is the workflow layout used in n8n:

![Workflow Video](./assest/podcast_Ri3lIpDe.mp4)

```
Manual Trigger
   ├── Get Email List (Google Sheets)
   ├── Get Templates (Google Sheets)
        │
        └── Combine Templates + Emails
               │
               └── Wait (based on template timing)
                      │
                      └── Send Email (Gmail)
```

An example workflow screenshot:

*(image uploaded in chat)*

---

## 📄 **Google Sheets Structure**

### **1. Templates Sheet**

| messages           | time |
| ------------------ | ---- |
| Welcome to webinar | 5    |
| Here is reminder   | 10   |

* **messages** → email body
* **time** → number of minutes to wait before sending

### **2. Email List Sheet**

| name     | email                                       |
| -------- | ------------------------------------------- |
| John Doe | [john@example.com](mailto:john@example.com) |
| Arjun S  | [arjun@mail.com](mailto:arjun@mail.com)     |

Each row represents one recipient.

---

## ⚙️ **Node-by-Node Explanation**

### 1️⃣ **Manual Trigger Node**

You start the workflow by clicking **Execute Workflow**.

### 2️⃣ **Get Email List (Google Sheets Node)**

Configuration:

* Operation: **Read**
* Returns an array of recipients.

### 3️⃣ **Templates (Google Sheets Node)**

Configuration:

* Operation: **Read**
* Returns the list of templates.

### 4️⃣ **Combine Node**

Used to merge each template with each email.

Example combined output:

```
{
  "name": "John",
  "email": "john@example.com",
  "messages": "Welcome to webinar",
  "time": 5
}
```

### 5️⃣ **Wait Node**

Set to:

```
Wait for: {{$json.time}} minutes
```

This delays each message.

### 6️⃣ **Send Email (Gmail Node)**

Configuration:

* To: `{{$json.email}}`
* Subject: You can hardcode or pick from template
* Message Body: `{{$json.messages}}`

---

## ▶️ **Execution Flow**

1. Workflow starts.
2. Email list and templates are read.
3. Each template is paired with each email.
4. System waits according to template timing.
5. Gmail sends the email.

---

## 🎬 **Video Tutorial**

[Watch the workflow demonstration](./assest/podcast_Ri3lIpDe.mp4)

*Click the link above to view the n8n automation workflow setup demonstration*
---

## 📞 **Support**

If you want to add more features:

* PDF attachment sending
* Personalized messages (name merging)
* Schedule trigger (cron)
* Multi-step reminders

Feel free to ask and I'll update this README.

---

**Author:** Ashish Kumar

---