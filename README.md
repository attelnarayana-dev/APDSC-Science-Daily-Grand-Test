# AP DSC S.A. Science Daily Grand Test — SaaS Starter

## Included
- Daily exam dashboard
- English + Telugu bilingual MCQ interface
- 160-question exam shell
- Timer/display-ready exam UI
- Question palette, previous/next, mark-for-review
- Result + test history
- localStorage persistence
- Unique question IDs
- Permanent used-question exclusion within the browser
- Safety behavior: if fewer than 160 unused questions exist, the app refuses to repeat questions instead of silently recycling them

## Run
Open `index.html` in a modern browser. No server is required for this starter.

## Important
The included `data/questions.js` contains only starter/demo questions. For the actual AP DSC preparation app, replace it with a sufficiently large question bank derived strictly from the user's official Mega DSC 2025 syllabus/PDF. The unique-question engine already prevents reuse by ID.

For a production SaaS, move questions, used-question records, authentication, test attempts, analytics, and admin controls to a backend database (e.g. Supabase/Firebase/PostgreSQL).
