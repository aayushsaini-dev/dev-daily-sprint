# 📅 Day 21 – Advanced MongoDB `$regex` in Aggregation Pipeline

This demo shows how to **filter documents by phone number patterns** inside an aggregation pipeline using `$regex`.

For this example, we match all users whose `company.phone` starts with **`+1 (940)`**.

---

## 📜 Description

We didn’t spin up a new database — instead, this was implemented on our **existing `agree` database** connected to VS Code via the MongoDB extension.

**Flow today:**
1. Connected Atlas cluster in VS Code MongoDB extension.
2. Created a new collection inside `agree` DB (`users_special_numbers`).
3. Inserted sample data manually.
4. Ran the aggregation pipeline in the browser aggregation builder.

---

## 🛠 Steps to Reproduce

1. **Ensure your Atlas cluster is connected to VS Code**
   - Use the MongoDB VS Code extension.
   - Authenticate with your Atlas URI.

2. **Insert sample data** (via VS Code or Mongo Shell):
   ```js
   db.users_special_numbers.insertMany([
     { company: { phone: "+1 (940) 501-3963" } },
     { company: { phone: "+1 (940) 777-8888" } },
     { company: { phone: "+1 (941) 123-4567" } }
   ])
